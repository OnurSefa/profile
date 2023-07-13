import React from 'react';

class Project extends React.Component{
    constructor(){
        super();

    }

    render(){

        return <div className="instanceBackground">
            <div className='instance'>
                <div className='instanceHeader'>
                    <b>Tax Office Detection from Invoices</b>
                </div>
                <div className='instanceDescription'>
                &emsp;I have developed this project in my company. I can not specify some details because of privacy issues. Examples are scrapped from web and their purpose only to demenstate the project, not to show the exact data or the methodology.
                </div>
                <div className='instanceDescription'>
                &emsp;Tax Office name defines the related office and this name is very crucial for accounting department. Office names and input words are represented as vectors and several string similarities of them are
                calculated with parallel processing and vectorization techniques to speed up the candidate selection process. After candidates are selected based on string similarities, selected candidates are embedded with their neighbors and
                model trained to classify each word as tax office name or not using Attention, LSTM, cosine similarity.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202870783-1e5bb1d3-35af-4efe-91de-ebc39e5bb66b.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Example output</div>
                </div>
                <div className='instanceDescription'>
                &emsp;As can be seen from the example, KILDARE selected as candidate and then autoencoder mechanism classified it as the tax office name.
                </div>
            </div>
        </div>
    }
}

export default Project