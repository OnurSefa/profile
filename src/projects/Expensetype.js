import React from 'react';

class Project extends React.Component{
    constructor(){
        super();

    }

    render(){

        return <div className="instanceBackground">
            <div className='instance'>
                <div className='instanceHeader'>
                    <b>Invoice Type Detector</b>
                </div>
                <div className='instanceDescription'>
                &emsp;I have developed this project in my company. I can not specify some details because of privacy issues. Examples are scrapped from web and their purpose only to demenstate the project, not to show the exact data or the methodology.
                </div>
                <div className='instanceDescription'>
                &emsp;There are several invoice types but in this page I will show only two types: A and B as can be seen from the example invoices.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202871487-90a00df6-0dd0-49b4-a8d0-a436955a43ee.png' alt='project image'></img>
                    <div className='instanceImageDescription'>This image refers to project itself</div>
                </div>
                <div className='instanceDescription'>
                &emsp;Detecting the invoice type affects several pipeline operations. For example, if invoice is in type A, payment type should be extracted, which is not required for the invoice type B.
                </div>
                <div className='instanceDescription'>
                &emsp;After word embeddings are created, document embedding is created and Attention mechanism creates contextual representation of the document. After document embedding fully constructed,
                fully connected neural network outputs an output vector in shape (2, 1) for this example. 
                </div>
            </div>
        </div>
    }
}

export default Project