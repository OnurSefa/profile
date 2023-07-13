import React from 'react';

class Project extends React.Component{
    constructor(){
        super();

    }

    render(){

        return <div className="instanceBackground">
            <div className='instance'>
                <div className='instanceHeader'>
                    <b>Credit Card Field Extraction from Expenses</b>
                </div>
                <div className='instanceDescription'>
                &emsp;I have developed this project in my company. I can not specify some details because of privacy issues.
                </div>
                <div className='instanceDescription'>
                &emsp;This project decides whether the credit card related to the expense is provided by the company or not. If last 4 number of the credit card is included in the expense image, the model detects it.
                After getting word information from Azure Read Analyz OCR API, algorithm detects the candidate numbers. I wrote an algorithm to detect the neighbors and candidates are embedded with their neighbors. Word embedding is established by Fasttext model.
                Autoencoder method tries to learn the similarity pattern of the credit card numbers. 
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://www.researchgate.net/profile/Chitralekha-Bhat/publication/317559243/figure/fig2/AS:531269123805186@1503675837486/Deep-Autoencoder-DAE.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Example autoencoder structure</div>
                </div>
                <div className='instanceDescription'>
                &emsp;If the reconstruction of the embedding is quite similar with the embedding itself, decided by cosine similarity, model assigns this instance as a credit card number.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202870647-3893771d-c014-4692-b72a-935cdda328a4.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Example input and output</div>
                </div>
                
            </div>
        </div>
    }
}

export default Project