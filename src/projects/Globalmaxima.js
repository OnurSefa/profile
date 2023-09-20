import React from 'react';

class Project extends React.Component{
    constructor(){
        super();

    }

    render(){

        return <div className="instanceBackground">
            <div className='instance'>
                <div className='instanceHeader'>
                    <b>Global Maxima Point Detector</b>
                </div>
                <div className='instanceDescription'>
                &emsp;The project aims to make an algorithm that detects the x value that maximizes the arbitrary function f(x). 
                In general, the function has one local maxima point other than the global maxima. The algorithm does not know 
                the exact function f(x), but it obtains the y values by making a request with individual x values. 
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202873216-b8e50a33-3fac-489e-8f36-dcee3d5d4a6f.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Example created function</div>
                </div>
                <div className='instanceDescription'>
                &emsp;For this project, I tried both the Gradient and Evolutionary methods. After the experiments, I concluded 
                that the Gradient method is useless for this scenario. Because, after we select a random x value and take the 
                derivative of itself, we would end up getting 0s. It causes the selected point not to move which may lead the 
                algorithm to select the local minima. So, I decided to use the second method to come up with a reasonable solution.
                </div>
                <div className='instanceDescription'>
                &emsp;Firstly, the program selects sample points using the normal distribution idiom. After each iteration, the 
                algorithm updates the mean and variance values of the used distribution with the knowledge of the sampled x values 
                and their regarding y values in the function f(x). So, the algorithm samples the x values from a smaller range with 
                each step until the range is smaller than the predefined limit. I implemented this algorithm such that, the initial 
                steps restrict the sampled space less than the subsequent steps. This methodology enabled the algorithm not to be 
                bound by the randomness of the first steps.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202873413-464488e2-21ba-47eb-a286-3390764b015c.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Example output 1</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202873522-8c32c62a-bd61-4268-b4c2-7cd50f70f5d4.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Example ouput 2</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202873622-d7b051aa-aedb-4fff-a10e-8118b89152c7.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Example output 3</div>
                </div>
            </div>
        </div>
    }
}

export default Project