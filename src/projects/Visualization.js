import React from 'react';

class Project extends React.Component{
    constructor(){
        super();

    }

    render(){

        return <div className="instanceBackground">
            <div className='instance'>
                <div className='instanceHeader'>
                    <b>Data Visualization using PCA</b>
                </div>
                <div className='instanceDescription'>
                &emsp;10 example images for every class is extracted from the MNIST train dataset. The Figure 1
shows the sampled images.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328951-3d541ae9-0c29-4f73-a46d-118a90790bf1.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 1</div>
                </div>
                <div className='instanceDescription'>
                &emsp;The mean image calculation run over the training dataset of the MNIST. The program
sums all the images and divides the resulting value to the count of the image. Resulting image
can be viewed in the Figure 2.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328914-c23f70dc-ad75-47e8-a53e-e2ec02c90d32.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 2</div>
                </div>
                <div className='instanceDescription'>
                &emsp;The eigenvectors are calculated using the covariance matrix of the training dataset.
Figure 3 shows the eigenvectors regarding to their eigenvalues. Listing is handled in a
descending order.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328919-5b604aa0-dfed-4e79-bb2f-6138b17a1e65.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 3</div>
                </div>
                <div className='instanceDescription'>
                &emsp;The Figure 4 sows the eigenvalues in the ascending order. The higher values mean the
significance level of the regarding eigenvalues.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328920-65469f7d-7a98-45de-aca2-6ef6a2029332.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 4</div>
                </div>
                <div className='instanceDescription'>
                &emsp;All test dataset examples are processed and the resulting datapoints can be seen in the
Figure 5. Figure 6 shows the labels of the datapoints. We can observe some clustering
properties from the Figure 5, but this property is not sharp and is not enough for calculations
over the processed dimensions. On the other hand one can observe the population of the
orange datapoints in the left side and blue points in the left bottom side while the red and
green datapoints are in the upperside.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328922-a2a38ee8-6cee-476b-ac38-a86b3a6f6dc0.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 5</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328923-0ccbda4a-fdac-49d4-aa66-a2b7ded4a480.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 6</div>
                </div>
                <div className='instanceDescription'>
                &emsp;The t-SNE algorithm also used to reduce the dimensions of the datapoints to 2. The Figure 7
shows the resulting datapoints in 2D. The resulting clusters are significantly clear. The t-SNE
algorithm gives better performance than the PCA algorithm for this dataset as we observed
from the figures. The labeling system is same with the PCA graph and can be viewed from the
Figure 6
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328925-ab059ef5-b035-4e13-8c79-7587516c3573.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 7</div>
                </div>
                <div className='instanceDescription'>
                &emsp;The technology evolves and the collected data becomes more and more complex in the
dimensionality manner. To store a view within a photograph, one encodes the 3D world data
into millions of pixel dimensions. The representation of data includes more dimensions because
of the high accurately representation of the real data. If one holds more pixel information
about a view, the real-world representation will be embodied more clearly. This process
reduces the interpretability of the data. One is not able to conclude results just looking at the
pixel arrays. On the other hand, data analyze and visualize operations should run under human
supervision because of our base intuitions. This trade off between the accuracy and
interpretability obligate us to find solutions to represent enormous dimensionality data within
low dimensions.
                </div>
                <div className='instanceDescription'>
                &emsp;PCA which we also used in this assignment makes fast calculations and reduces the
dimensionality powerfully. On the other hand, the PCA method tries to achieve this operation
via retaining the linear variance of the datapoints. This procedure does not achieve to sustain
the non-linear variances between the datapoints. This problem disables this method to
successfully achieve dimensionality reduction in great amounts.
                </div>
                <div className='instanceDescription'>
                &emsp;However, t-SNE methodology creates a similarity matrix between the datapoints to
transfer the local variance information to the reduced dimensions. The t-SNE name comes from
t-distributed Stochastic Neighbor Embedding. This naming convention explains the
probabilistic, local variance conserving, dimensionality reduction aspects of the t-SNE. The
similarity matrix constructed using gaussian distribution. If the data is labeled, the gaussian
distribution concludes the how should the datapoints be near to or far from each other. If the
datapoints originally close to each other, but the values are different, the similarity function
assigns low possibilities to indicate this relation and vice versa for the opposite case.
                </div>
                <div className='instanceDescription'>
                &emsp;The scikit-learn library uses the Kullback-Leibler divergence method to calculate joint
probabilities. The Kullback-Leibler calculates the statistical distance between the datapoints.
The distance values are asymmetric. So that, the algorithm calculates the distance from ith
datapoint to jth datapoint and the opposite distance and averages them to find the actual
distance. Distances play a probability role in this method.
                </div>
                <div className='instanceDescription'>
                &emsp;The t-SNE algorithm is an iterative process. Firstly, it calculates the similarity
distributions and generates datapoints within lower dimension. The created datapoints
conserve the information of the similarities. Then, algorithm makes one more step to reduce
the dimensionality again. After some iterations, goal is reached. But the calculation time of this
iterations are much higher than the PCA procedure. So that, if the data is not forced to be in
lowest dimensions, using the PCA method is wise. However, t-SNE produces more relation
based and compact version of the datapoints in greatly reduced dimensions.
                </div>
                <div className='instanceDescription'>
                &emsp;An example image taken from the test dataset of the MNIST. The Figure 8 shows the
original example image. The image dimension is embedded into 2, 12, 22, … , 772, 782, 784
dimensions using the PCA methodology. The choosing mechanism for eigenvectors related to
the eigenvalues. The original dimension was 784. Reconstructed images can be viewed in the
Figure 9. The recovery percentages are listed in the ‘/misc/eigenvalue_percentages.json’ file.
The file automatically created in the run time. To get the 95% recovery we should at least use
153 eigenvalues and the recovery from the 152 eigenvectors are showed in the Figure 9 with
the red square. The pointed image almost same with the original one and this representation
can be used.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328928-783fe02f-fe97-4523-897e-440538c71961.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 8</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328929-f848b621-0ad6-4b53-96c0-07879ba64a2d.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 9</div>
                </div>
                <div className='instanceDescription'>
                &emsp;Calculated eigenvectors are used for an image outside of the test dataset. The image
produced from the image given in the Figure 10. gray_scale.py makes the image gray scale and
reduced the image size to (28, 28) to enable calculations with the learned eigenvalues. The
resulting image is in Figure 11. Figure 12 shows the reconstruction of the images with the
calculated eigenvectors. Again, the 95% reconstruction rated image encapsulated with the red
square. Because of the different nature and structure of the given image, the PCA fails to
reconstruct the given image with the given 152 most significant eigenvectors. It shows the
importance level of the training dataset. It should be parallel with the run time datapoints for
successful operations.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328931-857b3d2e-9d64-4820-8880-d17e3642b92e.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 10</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328932-3ac7567c-3865-4cf5-8c3e-2aa6a43c2401.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 11</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328933-b8a612b0-76d6-4f1b-b5c7-6956cb4a4c23.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 12</div>
                </div>
                <div className='instanceDescription'>
                &emsp;The Olivetti Faces dataset contains 400 images within 40 classes. The Figure 13 shows 10
images for chosen classes. Different classes are subject to different properties like having
glasses, smiling or camera aspect.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328934-cd9a140c-8ff8-42a2-ad3b-1344265eb5f6.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 13</div>
                </div>
                <div className='instanceDescription'>
                &emsp;Mean image calculation same with the first phase. The resulting image can be viewed in
the Figure 14
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328936-6bd0560f-42c9-4bbc-aa40-4530e05221b5.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 14</div>
                </div>
                <div className='instanceDescription'>
                &emsp;The eigenvector calculation also same with the firt phase. The resulting eigenvectors can
be viewed from the Figure 15.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328937-ea7a0734-7692-40d3-9172-940f0626db16.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 15</div>
                </div>
                <div className='instanceDescription'>
                &emsp;First 50 eigenvalues showed in the Figure 16 in ascending order. The starting value is
very lowe regarding to the eigenvalues showed in the Figure 4. On the other hand, the resulting
graph shape is very similar with the previous one. The small values may point the unsuccessful
representation with the PCA for this dataset.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328938-e1bdbbc7-064a-44a6-a5ed-72e0f34f138d.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 16</div>
                </div>
                <div className='instanceDescription'>
                &emsp;The images with the shape (64, 64) projected to space with the dimension 2. Because of the
significant reduction in the dimensionality, most information is lost and the resulting datapoints
are shown in the Figure 17. The behaviour of the datapoints is not observable and the
clustering could not establish. The labels are shown between the datapoints.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328939-d941cdb5-0d97-45d2-b495-da2a5003bddf.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 17</div>
                </div>
                <div className='instanceDescription'>
                &emsp;The t-SNE result create more powerful result than the PCA again. The Figure 18 shows how
the different classes separated.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328940-ff50d049-7716-4e61-a0b0-401b36ed4ab8.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 18</div>
                </div>
                <div className='instanceDescription'>
                &emsp;An example image taken from the dataset. The image can be seen in the Figure 19.
Reconstruction process is same with the phase one. The reconstructed images in the Figure 20.
The reconstruction with 95% can be achieved at least 123 eigenvectors and the 122nd
eigenvector representation encapsulated in the Figure 20. The produced image at that point
nearly same with the original image.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328943-9f5f4f85-69c2-4a7d-93ba-0c8ecddb729e.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 19</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328946-a62f9457-9650-4d73-9e5a-fd944ecd6392.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 20</div>
                </div>
                <div className='instanceDescription'>
                &emsp;Example image preparation is parallel with the first phase but the produced image is
(64, 64). The resulting image can be viewed in the Figure 21. Figure 22 shows the reconstruction
of the image with the calculated eigenvectors with the face dataset. As we observe from the
figure, the reconstruction of the image fails no matter how many eigenvectors are used. Also,
the first image in the Figure 22 shows the reconstruction with the 2 most significant
eigenvectors. The image is very similar with a face image. This behaviour comes from the
encapsulation operation of the structures of the image by the PCA method.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328947-fe4c8d30-471a-4084-b49f-0aa36c5f61f4.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 21</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328948-c39f9428-724d-4b51-9789-94daf82cab33.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 22</div>
                </div>
            </div>
        </div>
    }
}

export default Project