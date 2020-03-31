import React, {Component} from 'react';
import axios from 'axios'
import ApexChart from "./ApexChart";
import {withRouter} from 'react-router-dom'



class VisionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            imageBase64: '',
            show: false,
        };
    }

    render() {
        return (
            <div className="container">
                <h1>Vision API</h1>
                <h3 className="mt-3">Wähle ein Bild aus</h3>
                <div className="input">
                <input id="imageUpload" type="file" onChange={this.handleImageChange}
                       accept="image/png, image/jpeg" className="uploadImage h-25"/>
                </div>
                <div className="column justify-content-center mt-3">
                    <div className="col">
                        <img src={this.state.image} alt="" className="img-responsive imagePreview"/>
                    </div>
                </div>
                <div className="row justify-content-center mt-5" >
                    <div className="col">
                        {this.state.show && <ApexChart values={this.state.imageInfo} labels={this.state.imageLabels}/>}
                    </div>
                </div>
                <div className="mt-5">

                </div>
            </div>
        );
    }

    uploadImage = () => {
        document.getElementById('imageUpload').click();
    };

    handleImageChange = (h) => {
        let reader = new FileReader();
        let self = this;
        this.setState({show: false});
        let file = h.target.files[0];
        try {
            this.setState({image: URL.createObjectURL(file)});
        } catch {
            this.setState({show: false});
        }

        reader.onload = function (r) {
            self.setState({imageBase64: r.target.result.split(',')[1]});
            self.sendToGoogle();
        };

        try {
            reader.readAsDataURL(file);
        } catch {
            self.sendToGoogle();
        }
    };

    sendToGoogle = () => {
        const API_KEY = '' // Bitte eigenen key verwenden
        let apireq =
            {
                "requests":
                    [
                        {
                            "image": {
                                "content": this.state.imageBase64
                            },
                            "features": [
                                {
                                    "type": "LABEL_DETECTION",
                                    "maxResults": 10
                                }
                            ]
                        }
                    ]
            };

        axios.post('https://vision.googleapis.com/v1/images:annotate?key=' + API_KEY, apireq)
            .then(res => {
                console.log(res.data.responses[0].labelAnnotations);

                let imageValues = [];
                let imageLabels = [];

                res.data.responses[0].labelAnnotations.forEach(e => {
                    imageValues.push(Math.round(((e.score * 100) + Number.EPSILON) * 100) / 100);
                    imageLabels.push(e.description);
                });

                this.setState({imageInfo: imageValues, imageLabels: imageLabels, show: true});
            })
    }

}

export default withRouter(VisionComponent);