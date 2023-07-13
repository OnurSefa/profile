import React from 'react';

class Project extends React.Component{
    constructor(){
        super();

    }

    render(){

        return <div className="instanceBackground">
            <div className='instance'>
                <div className='instanceHeader'>
                    <b>Payment Type Detection of Expenses</b>
                </div>
                <div className='instanceDescription'>
                &emsp;I have developed this project in my company. I can not specify some details because of privacy issues.
                </div>
                <div className='instanceDescription'>
                &emsp;Companies provide credit cards for some employees and detection of payment type as cash or credit card deeply effects the repayment procedures.
                To successfully extract this information, I detected words or number patterns that point out this information. Detected words are embedded into a matrix.
                FNN followed by attention mechanism assigns the probability of being payed by credit card.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202319123-2f6f8db5-5b41-4517-ae3f-d140d28668d7.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Attention mechanism, <a href='https://arxiv.org/pdf/1706.03762.pdf'>related paper</a></div>
                </div>
                <div className='instanceDescription'>
                &emsp;Attention enables the model to construct relations between selected words and identifies if the input instance includes credit card related information. 
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202870359-1f672a85-319f-4103-ba5e-82c7875592c5.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Example input and output</div>
                </div>
                <div className='instanceDescription'>
                &emsp;If the model decides on credit card, <a href='/projects/creditcard'>Credit Card Field Extraction from Expenses</a> project starts to run.
                </div>
            </div>
        </div>
    }
}

export default Project