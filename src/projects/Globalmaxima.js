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
                &emsp;For this project, I tried Gradient method and Evolutionary method. 
                But, after the experiments, I faced with a problem. When I was trying to pull a chosen point towards the mean point, the point 
                was trying to act according to the derivative of itself. In some cases, the points were stuck in same coordinate with the forces 
                from two opposite directions. So, I decided to use second method to at least be able to generate a reasonable solution.
                </div>
                <div className='instanceDescription'>
                &emsp;Firstly, the program creates the reward function and the parameters of it. Addition to the given function, we need to define helper functions. 
                They are find_sample which chooses sample points from normal distribution function according to the given mean and variance and sample_range which finds the range 
                of a sample via calculating the difference between the maximum and the minimum points. After defining and plotting our base graph, we randomly choose our sample 
                space and the values of them from the graph. We iterate the program until the range of the sample space is less then 0.01 which means the points are approximately 
                in the same coordinate. But the maximum iteration number is 6 because of the technique I used to choose the best m points from sample space. 
                The m refers to the equation: 12 – iteration * 2. With this recipe, first iterations are less strict, and the subsequent iterations are stricter. 
                In first steps, we need to avoid making strict assumptions about the best possible coordinates because of the wide variety of the range against to the small number
                of points we have. But in the preceding steps, we have more information in our range. So, we can make strict assumptions. After calculating the mean and 
                variance of the chosen points, we continue to iterate. Related repository is in <a href='https://github.com/Gepsmin/Global-Maxima-Point-Detector'>here</a>.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202873216-b8e50a33-3fac-489e-8f36-dcee3d5d4a6f.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Example created function</div>
                </div>
                <div className='instanceDescription'>
                &emsp;I run 1000 times the algorithm to see the average performance of it and the correct answer number it gave. If we say that the correctness boundary of the program is 
                when the maximum point it gave is close to the absolute maxima up to 0.01, we can reach the results given below.
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