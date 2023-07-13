import React from 'react';

class Project extends React.Component{
    constructor(){
        super();

    }

    render(){

        return <div className="instanceBackground">
            <div className='instance'>
                <div className='instanceHeader'>
                    <b>Inspectation of Outlier Detection Methodologies</b>
                </div>
                <div className='instanceDescription'>
                &emsp;<b>Isolation Forest Method:</b> The algorithm generates an anomaly score for ever datapoint. Firstly
the algorithm creates forest with decision trees. The tree constructed
with randomly chosen dimension and value. The need of the
randomness caused from the unsupervised aspect. Every datapoint
has its own path length inside every tree and the every of these values
for specified datapoint in the forest generates normality score. In
general, the random tree assigns lower path lengths to the anomalies
because of the not representative features of them. They diverges with
small number of comperisons from the inlier datapoints.
                </div>
                <div className='instanceDescription'>
                &emsp;<b>Local Outlier Factor Method:</b> This method uses the neighbourhood relations between the datapoints
regarding to their distances in the represented space. The method
calculates the anomaly score via inspecting how the datapoint isolated
from others. N neighbour is used to calculate the density of
the datapoints regarding to the specific datapoint. After every
datapoints are assigned with the density score, the method marks the
datapoints with substantially lower density than the neighbouring
datapoints as an outlier. This means that, if a datapoint is isolated
more than the datapoints, it lies outside of the correct area.
                </div>
                <div className='instanceDescription'>
                &emsp;<b>Created Datasets:</b> I have generated a 2D dataset to inspect the behaviours of the
models easily. My algorithm creates 3 distinc cluster centers and generates datapoints.
Datapoint generation operation is random with gaussian distribution and assign
operation to a cluster is random with normal distribution. Figure 1 shows the
datapoints with the cluster labels. Figure 2 shows the datapoints as they used in the
models, with no labels.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202323490-bbf098c8-8c5c-4599-87ca-763d3ae1b156.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Created Datasets</div>
                </div>
                <div className='instanceDescription'>
                &emsp;<b>Outlier Creation:</b> The dataset creation algorithm creates the outliers
with the gaussian distribution but with the 2 factorized standard
daviation of the original clusters. Figure 1 already includes the
outliers but Figure 3 shows them more clearly.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202323707-58a63fa2-4b30-4db9-b20d-fc6920f8bb3f.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Outliers</div>
                </div>
                <div className='instanceDescription'>
                &emsp;Figure 4 shows the result of the result of this model. As we can see, the
assigned outliers stricts the boundaries of the datapoints greatly. The
model assignes more outlier than it should be. It fails to detect the
outliers inside the gray area. It successfully finds the outliers that
ly outside of the boundaries.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202323930-bed69923-81db-43ee-809b-c2ff165e7996.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Isolation Forest Result</div>
                </div>
                <div className='instanceDescription'>
                &emsp;The result can be seen in the Figure 5. The model achieves to find
outliers inside of the gray area as well as the outside of the gray area.
We can see that, more outlier assignments can be done in the left down
corner. Furthermore, the count of the outlier datapoints are pretty
same with the original case which was in the Figure 3.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202324172-d2cfa892-154f-4237-aa40-50c75f1dde17.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Local Outlier Factor Result</div>
                </div>
                <div className='instanceDescription'>
                &emsp;Related model accuracy, recall, and precision values can be seen from
the Figure 6 and 7. Overall accuracy value is higher in the LOF model.
Because it does not overestimates the outliers and finds outliers inside
the gray area. On the other hand, recall level is higher in the Isolation
Forest model. Because it makes further assignments outside of the
gray region and this approache works for this dataset. Because the
outlier generaly lie outside of the gray region. Both have low precision
values because they miss another aspects of the characteristics of the
outliers overall.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202324429-1771e9b7-1897-4d43-8675-6146b4dba346.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Comparison of the Models</div>
                </div>
                <div className='instanceDescription'>
                &emsp;As we defined the outlier detection problem,
the solutions should reduce the deviation of
the clusters in general. As we can observe
from the Figure 8, Isolation Forest model
reduces the std greately. But this reduction
causes the datapoints to have less std than
the correct version of the dataset. LOF model
also reduces the std. The generated
datapoints has less std than the original
dataset and close to the correct dataset. On
the other hand, it is not an absolutely reliable
solution for the original dataset. Because we
can observe variations of the std values
between the corrected version and the
produced version for each cluster.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202324658-e7dca00a-be22-45d9-aa89-2c2d16691c79.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 8: Model Std Results for each Clusters</div>
                </div>
            </div>
        </div>
    }
}

export default Project