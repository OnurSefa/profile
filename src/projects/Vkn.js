import React from 'react';

class Project extends React.Component{
    constructor(){
        super();

    }

    render(){
        return <div className="instanceBackground">
            <div className='instance'>
                <div className='instanceHeader'>
                    <b>Tax Office Id Field Extraction from Receipts and Invoices</b>
                </div>
                <div className='instanceDescription'>
                &emsp;I have developed this project in my company. I can not specify some details because of the privacy issues. 
                Examples are scrapped from the web, and their purpose is not to show the exact data or the methodology but to 
                demonstrate the project from some perspective.
                </div>
                <div className='instanceDescription'>
                &emsp;The project aims to extract Tax Office Ids from the expense documents. The Ids specify the related tax 
                departments used for further bureaucratic steps. After the OCR API extracts texts from an input image, the 
                candidate detection algorithm sends selected candidate texts to the deep learning phase. The Model uses the 
                Self-Attention and RNN methods in its autoencoder structure to assign possibility scores to each candidate.  
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://www.researchgate.net/profile/Chitralekha-Bhat/publication/317559243/figure/fig2/AS:531269123805186@1503675837486/Deep-Autoencoder-DAE.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Example autoencoder structure  <a href="https://www.researchgate.net/publication/317559243_Deep_Autoencoder_Based_Speech_Features_for_Improved_Dysarthric_Speech_Recognition">Researchgate Website</a></div>
                </div>
                <div className='instanceDescription'>
                &emsp;In a nutshell, after getting the Z matrix from the X matrix, we use cosine similarity between these matrices
                to find the similarity score. The autoencoder mechanism enables the model to learn to encode and decode only the 
                positive instances. When a new candidate embedding is introduced to the model, the model uses the similarity score 
                to assign the class input belongs to.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202869526-f48e8411-f27b-4a93-b72a-44508d19133c.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Example output (placeholder)</div>
                </div>
            </div>
        </div>
    }
}

export default Project