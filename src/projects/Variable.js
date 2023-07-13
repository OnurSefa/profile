import React from 'react';

class Project extends React.Component{
    constructor(){
        super();

    }

    render(){

        return <div className="instanceBackground">
            <div className='instance'>
                <div className='instanceHeader'>
                    <b>Variable Minimization using Bisection Method and Steepest Descent Method</b>
                </div>
                <div className='instanceDescription'>
                &emsp;<b>Bisection Method:</b> Bisection method is described in <a href='https://en.wikipedia.org/wiki/Bisection_method'>the wikipedia page</a>.
                Aim of the project was to find the minimum point given the function f(x) = 10 + 0.001x - 0.1x^2 + 0.8cos(3x), where x in the interval [-4, 4]. In the given
                interval, the function is locally convex. epsilon value was chosen as 0.0001 to declare the stopping condition.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202872372-a525dc53-7129-49d2-84e8-3bcf368a8ed7.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Plot of the first function using <a href='https://www.desmos.com/'>desmos webpage</a>.</div>
                </div>
                <div className='instanceDescription'>
                &emsp;<b>Steepest Descent Method:</b> The method is described in <a href='https://en.wikipedia.org/wiki/Method_of_steepest_descent'>the wikipedia page</a>.
                The function given as f(x1, x2) = (5x1 - x2)^2 + (x1 - 2)^2 + x1 - 2x2 + 12. To determine the stopping condition epsilon value used as 0.0001. 
                </div>
                <div className='instanceDescription'>
                &emsp;Because this project was only implementation of previous findings, I do not want to give deteails about it. But, the related code pages can be found in <a href='https://github.com/Gepsmin/ie310pr4'>my github project page</a>.
                </div>
            </div>
        </div>
    }
}

export default Project