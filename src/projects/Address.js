import React from 'react';

class Project extends React.Component{
    constructor(){
        super();

    }

    render(){

        return <div className="instanceBackground">
            <div className='instance'>
                <div className='instanceHeader'>
                    <b>Address Line Detection</b>
                </div>
                <div className='instanceDescription'>
                &emsp;I have developed this project in my company. I can not specify some details because of privacy issues. I opinionated from the <a href="https://arxiv.org/abs/1812.11941">DenseDepth</a> paper. 
                </div>
                <div className='instanceDescription'>
                &emsp;The projects aim was to extract address lines from expense documents. I have implemented a deep learning model which is very similar to depth estimation methodologies. Autoencoder structure provides heatmap of the image to point out where the correct text should lie. Autoencoder composes of encoder structure that uses DenseNet201 from Pytorch library and upsampling decoder structure.
                Upsampling algorithm uses outputs of the encoder to create more meaningful outputs. 
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202281280-902bd6b6-d1ed-4d98-b547-dbbcb78c68a3.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Autoencoder structrue described by the DenseDepth paper</div>
                </div>
                <div className='instanceDescription'>
                &emsp;I have proposed a method in which the input document images are embedded with additional information that we have gained from previous OCR and model results. I have increased the inputt image channel to 10 with these information layers.
                I have adapted DenseNet201 and Upsampling algorithms to our case. This deep learning part was the first step of the two staged pipeline.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202869148-94095d80-d352-4438-9d58-411f09751142.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Pipeline of the Address Line Detection Project</div>
                </div>
                <div className='instanceDescription'>
                &emsp;When heatmap of the image is extracted, we directed the related parts of the image to the Azure Read Analyze API to get words. Then Google Places Api helped us to find the correct address definition.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202283772-992c1678-4634-4625-b96d-de34f0652119.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Left: preprocessed input image, middle: ground truth, right: model's prediction</div>
                </div>
                <div className='instanceDescription'>
                &emsp;As it appears from the example, results were sufficient to discriminate which words are related to the address line.
                </div>
            </div>
        </div>
    }
}

export default Project