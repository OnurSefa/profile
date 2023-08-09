import React from 'react';

class Project extends React.Component{
    constructor(){
        super();

    }

    render(){

        return <div className="instanceBackground">
            <div className='instance'>
                <div className='instanceHeader'>
                    <b>Detection of Expense Documents' Payment Type</b>
                </div>
                <div className='instanceDescription'>
                &emsp;I have developed this project in my company. I can not specify some details because of the privacy issues. 
                Examples are scrapped from the web, and their purpose is not to show the exact data or the methodology but to demonstrate 
                the project from some perspective.
                </div>
                <div className='instanceDescription'>
                &emsp;Companies provide credit cards to some employees. Because of that, the payment type of the expense document deeply 
                affects the repayment procedures. To successfully extract this information as “cash” or “credit card”, the model selects 
                texts that include significant word and number patterns from the OCR results. Selected texts are embedded into matrices. 
                A fully connected neural network followed by an attention mechanism assigns the probability scores of being paid by a 
                credit card to the documents. 
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202319123-2f6f8db5-5b41-4517-ae3f-d140d28668d7.png' alt='project image'></img>
                    <div className='instanceImageDescription'>The attention mechanism, <a href='https://arxiv.org/pdf/1706.03762.pdf'>related paper</a></div>
                </div>
                <div className='instanceDescription'>
                &emsp;The attention mechanism enables the model to construct relations between selected texts. This relation can be 
                represented by a vector which is used in the fully connected neural network. The output vector shows the probabilities 
                of the two payment types. 
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202870359-1f672a85-319f-4103-ba5e-82c7875592c5.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Example input and output (placeholder)</div>
                </div>
                <div className='instanceDescription'>
                &emsp;If the model detects credit card usage, 
                the <a href='/projects/creditcard'>Credit Card Number Extraction from Expense Documents</a> model is used to extract the credit 
                card number to obtain further information about the document.
                </div>
            </div>
        </div>
    }
}

export default Project