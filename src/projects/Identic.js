import React from 'react';

class Project extends React.Component{
    constructor(){
        super();

    }

    render(){

        return <div className="instanceBackground">
            <div className='instance'>
                <div className='instanceHeader'>
                    <b>VKN Number Field Extraction from Expenses</b>
                </div>
                <div className='instanceDescription'>
                    This project is awesome
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202249069-8c51869f-7bf2-4ee0-8965-f6bb29e9aa8c.png' alt='project image'></img>
                    <div className='instanceImageDescription'>This image refers to project itself</div>
                </div>
                <div className='instanceDescription'>
                    This project again is awesome
                </div>
            </div>
        </div>
    }
}

export default Project