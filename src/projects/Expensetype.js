import React from 'react';

class Project extends React.Component{
    constructor(){
        super();

    }

    render(){

        return <div className="instanceBackground">
            <div className='instance'>
                <div className='instanceHeader'>
                    <b>Expense Document Classification</b>
                </div>
                <div className='instanceDescription'>
                &emsp;I have developed this project in my company. I can not specify some details because of the privacy issues. 
                Examples are scrapped from the web, and their purpose is not to show the exact data or the methodology but to 
                demonstrate the project from some perspective.
                </div>
                <div className='instanceDescription'>
                &emsp;There are several expense document types, but I will only show two example classes named “A” and “B” here. 
                The below image shows related class instances.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202871487-90a00df6-0dd0-49b4-a8d0-a436955a43ee.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Example Classes (placeholder)</div>
                </div>
                <div className='instanceDescription'>
                &emsp;Detecting the invoice type affects several pipeline operations of the company’s product. For example, if the 
                expense document is in type A, the payment type should be extracted, which is not required for type B. Also, even if 
                the extracted information is identical for both document types, there are separate trained models for each type to 
                increase the success rates of the results. Because the document structures differ, the approach to handling and 
                manipulating the data itself also differs. 
                </div>
                <div className='instanceDescription'>
                &emsp;After OCR Api extracts the text information from the document images, text embeddings are created. In addition 
                to a fully connected neural network structure, the attention mechanism creates a contextual representation of the 
                document using text information. Outputting vector gives the probabilities for each class.
                </div>
            </div>
        </div>
    }
}

export default Project