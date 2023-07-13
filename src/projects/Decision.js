import React from 'react';

class Project extends React.Component{
    constructor(){
        super();

    }

    render(){

        return <div className="instanceBackground">
            <div className='instance'>
                <div className='instanceHeader'>
                    <b>Decision Tree</b>
                </div>
                <div className='instanceDescription'>
                &emsp;I have implemented recursion manner tree algorithm. I have constructed a class
that automatically handles when the necessary fields are given. It creates
entropy based decision tree. It shows the
result of the decision tree on the training dataset. It is based on the 2 feature
manner which represents the 2D coordinate system. Any wanted max depth can
be calculated and category count of the given dataset can be any value. The
structure of the class is very similar with the scikit-learn library. It finds the
regarding nodes and creates connections between these nodes in dept first search
manner. So that, resulting values very similar with the scikit-learn library results.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202326463-162262c0-3abe-48e9-b008-c9d67ac09e42.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 1</div>
                </div>
                <div className='instanceDescription'>
                &emsp;Decision boundaries regarding to the created nodes and the values related them
can be seen in the figure 1. The tree structure and the created nodes can be seen
in the figure 2. This figure also shows the related entropy values for the regarding
nodes. I showed the node directions as follows: Left directions shows the given
condition holds and right direction is for false case. This structure holds for other
tree representations too.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202326465-373dd33b-2d5d-48a2-bd3d-b9ec4b14c62f.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 2</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202326468-9361fc6c-0911-44b5-9a5d-0dd52ce1e7c3.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 3</div>
                </div>
                <div className='instanceDescription'>
                &emsp;As we can see from the figure 1 and 3, my result and the scikit-learn values very
similar. We can see from figure 2 and 4 that the tree structures also hold.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202326469-5cc3a072-46f2-492b-bf41-c2c0ab1cc2fc.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 4</div>
                </div>
                <div className='instanceDescription'>
                &emsp;I have tried constructing a new tree with higher max depth value on the same data.
And the results can be seen from figure 5 to 8. First two are my results and others
gathered from the scikit-learn library. The new max depth value is 5.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202326472-80faf7ff-22c0-4069-b2af-db452f628c9b.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 5</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202326475-8c3829f5-53d9-49c0-9f19-f0adffdd4fe8.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 6</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202326476-963ebf26-1113-447e-9e2e-d200ec2518e0.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 7</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202326477-f86f225d-ddc4-45b4-99cc-db3d502d5a04.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 8</div>
                </div>
                <div className='instanceDescription'>
                &emsp;Third example shows two half circles leaned to the left and right edges of the map.
Purple datapoints are from category 1, green datapoints are from category 2, and
yellow datapoints are from category 3. The chosen max depth value is 3. Figure 9
to 12 shows the results and first two are my tree results. The dataset generation
handled from create_data.py from under the code directory. One can create similar
map using the create_circle_data() function with different parameters. On theother hand, output_file directory should not be changed to be compatible with the
main code.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202326478-884d0635-b84c-4479-a785-02f6adde79d0.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 9</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202326479-4e04eecc-e96f-408f-8df1-bbd54e01c215.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 10</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202326448-2e656411-3a7e-423a-8c2f-63c7e0e384fb.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 11</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202326453-275c3409-faa9-4922-92d9-23f1aedb7891.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 12</div>
                </div>
                <div className='instanceDescription'>
                &emsp;To test the performance of the decision tree algorithm I have designed another
dataset which includes probabilities. These probabilities represent the noise which
can be seen the real-world examples. Up right part is for yellow class but with 0.05
probability purple can be included and middle down part is for green category but
purple can be included again with 0.05 probability and so on. The results are
showed in figures 13 to 16. Again, first two figure are from my code and others
from scikit-learn library.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202326457-8c9b2d46-7096-4646-a0d6-b89ae000a478.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 13</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202326458-3166163b-bd5e-4d2b-89aa-ba09cd6fb275.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 14</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202326459-a2f691d3-6af6-44e2-b26d-2e6bf34d7430.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 15</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202326461-dae3e7dd-c052-4888-b468-419ad1f5d03d.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 16</div>
                </div>
                <div className='instanceDescription'>
                &emsp;As we can see from the last example, even though the tree grown fully, some
datapoints are misclassified. On the other hand, this misclassification enables tree
to hold the base information about the given dataset. This dataset also created by
me.
                </div>
            </div>
        </div>
    }
}

export default Project