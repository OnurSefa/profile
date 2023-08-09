import React from 'react';

class Project extends React.Component{
    constructor(){
        super();

    }

    render(){

        return <div className="instanceBackground">
            <div className='instance'>
                <div className='instanceHeader'>
                    <b>Credit Card Number Extraction from Expense Documents</b>
                </div>
                <div className='instanceDescription'>
                &emsp;I have developed this project in my company. I can not specify some details because of the privacy issues. 
                Examples are scrapped from the web, and their purpose is not to show the exact data or the methodology but to demonstrate 
                the project from some perspective.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://www.researchgate.net/profile/Chitralekha-Bhat/publication/317559243/figure/fig2/AS:531269123805186@1503675837486/Deep-Autoencoder-DAE.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Example autoencoder structure  <a href="https://www.researchgate.net/publication/317559243_Deep_Autoencoder_Based_Speech_Features_for_Improved_Dysarthric_Speech_Recognition">Researchgate Website</a></div>
                </div>
                <div className='instanceDescription'>
                &emsp;The outcome of this project is being able to detect if the expense is paid using a company credit card. If the 
                <a href='/projects/payment'> Detection of Expense Document Payment Types</a> model classifies the document as 
                "credit card", this model is used to extract the credit card number from the expense document. The model finds 
                candidates using simple regex operations which can be assigned as a credit card number without any context. 
                The model gets word information from OCR API and creates candidate embeddings. Then, each candidate is assigned a 
                score that shows the probability of being a credit card number. The model uses an autoencoder structure to achieve this. 
                Candidate embedding is encoded and then decoded. If the cosine similarity score between the input vector and decoded 
                vector is quite similar, we understand that the candidate’s possibility of being the wanted credit card number is 
                greater than the candidates that have lower similarity scores.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202870647-3893771d-c014-4692-b72a-935cdda328a4.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Example input and output (placeholder)</div>
                </div>
                
            </div>
        </div>
    }
}

export default Project