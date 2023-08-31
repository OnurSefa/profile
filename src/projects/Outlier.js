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
                &emsp;<b>Isolation Forest Method:</b> Firstly, the algorithm creates a decision tree forest. The trees are constructed 
                with randomly chosen decision dimensions and values. The unsupervised aspect of the project causes the technique to be 
                random at the first step. Every tree assigns a path length to every data point, which can also be called as the normality 
                score. If the normality score is low, or, in other words, if the path length is small the algorithm assigns regarding data 
                point as an outlier. 
                </div>
                <div className='instanceDescription'>
                &emsp;<b>Local Outlier Factor Method:</b> This method uses the neighborhood relations between the data points regarding 
                their distances in the represented space. The method calculates the anomaly score by inspecting how the data point is 
                isolated from others. The method uses N numbers of neighbors to calculate the density value for each data point. After 
                every data point is assigned with the density score, the method marks the data point with the lowest density score as 
                an outlier. This process continues until the predefined limit condition is reached. 
                </div>
                <div className='instanceDescription'>
                &emsp;<b>Created Dataset:</b> I have generated a 2D dataset to inspect the behaviors of the models easily. My algorithm 
                creates 3 distinct cluster centers and generates data points for them. In the first step, the algorithm uses Normal 
                distribution to select the cluster. Next, it generates a data point for the selected cluster center information using 
                Gaussian distribution. These two steps enable the randomness of the dataset. Figure 1 shows the data points with the 
                cluster labels. Figure 2 shows the data points as they are used in the models, with no labels.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202323490-bbf098c8-8c5c-4599-87ca-763d3ae1b156.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Created Datasets</div>
                </div>
                <div className='instanceDescription'>
                &emsp;<b>Outlier Creation:</b> The outliers are also created following the same steps as the data point creation operation. 
                The difference is that the standard deviation value of the Gaussian distribution is multiplied by 2. Figure 1 already 
                includes the outliers, but Figure 3 shows them more clearly.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202323707-58a63fa2-4b30-4db9-b20d-fc6920f8bb3f.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Outliers</div>
                </div>
                <div className='instanceDescription'>
                &emsp;Figure 4 shows the result of the isolation forest method. As we can see, the assigned outliers make boundaries 
                around the data points. This restriction is harsher than it should be and there are more outlier assignments than the 
                expected amount. This method fails to detect the outliers that lie inside the gray area though it successfully finds 
                the outliers that lie outside of the boundaries. 
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202323930-bed69923-81db-43ee-809b-c2ff165e7996.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Isolation Forest Result</div>
                </div>
                <div className='instanceDescription'>
                &emsp;  The result of the local outlier factor method can be seen in Figure 5. The algorithm finds outliers inside of 
                the gray area as well as the outside of the gray area. We can see that, more outlier assignments can be done in the 
                left-down corner of the image. Furthermore, the count of the outlier data points is pretty much the same as the original 
                case which was shown in Figure 3. It means that it successfully stoped even though the outlier number was unknown in the 
                starting. 
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202324172-d2cfa892-154f-4237-aa40-50c75f1dde17.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Local Outlier Factor Result</div>
                </div>
                <div className='instanceDescription'>
                &emsp;Related model accuracy, recall, and precision values can be seen in Figures 6 and 7. The overall accuracy value 
                is higher in the LOF model. Because it does not overestimate the outliers and finds outliers inside of the gray area too. 
                On the other hand, the recall value is higher in the Isolation Forest model because it makes further assignments outside 
                of the gray region. This approach increases the recall value even though it also causes the downfall of the precision value. 
                Because I wanted to create a dataset that would suit real-world scenarios, I prepared the dataset without obvious outlier 
                data points. It also caused the dataset to be harder to be classified by these algorithms. So, the output values may seem 
                low even though in my opinion they worked up to some level. For this specific dataset, we can say that the LOF method 
                suits more.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202324429-1771e9b7-1897-4d43-8675-6146b4dba346.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Comparison of the Models</div>
                </div>
                <div className='instanceDescription'>
                &emsp;As we defined the outlier detection methodologies, the solutions should reduce the deviation of the clusters in 
                general. As we can observe from Figure 8, the Isolation Forest method reduced the std greatly. But this reduction causes 
                the data points to have even less std than the correct version of the dataset. LOF model also reduced the std values. 
                The generated data points, in general, have less std than the original dataset and are similar to the correct dataset. 
                On the other hand, we should not forget that this method is not an absolute reliable solution for the original dataset as 
                we can observe this from the overall results. 
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