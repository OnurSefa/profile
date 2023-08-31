import React from 'react';

class Project extends React.Component{
    constructor(){
        super();

    }

    render(){

        return <div className="instanceBackground">
            <div className='instance'>
                <div className='instanceHeader'>
                    <b>Data Visualization using PCA and t-SNE</b>
                </div>
                <div className='instanceDescription'>
                &emsp;The fundamental purpose of this project is to compare the results of the PCA and t-SNE methods, 
                not to explain them. I listed several sources explaining the methodologies in depth at the end of this 
                page, and many more can be found on the Internet. 
                </div>
                <div className='instanceDescription'>
                &emsp;The technology evolves and the collected data becomes more and more complex in the dimensionality manner. 
                To store a view within a photograph, one encodes the 3D world data into millions of pixel dimensions. 
                The representation of data includes so many dimensions to achieve real-world representation more accurately in the 
                digital world. On the other hand, this process reduces the interpretability of the data by human observers. 
                One would not be able to conclude results just by looking at the pixel arrays. On the other hand, data analysis and 
                visualization operations should run under human supervision to enable observers to infer from the raw data. This 
                trade-off between accuracy and interpretability obligates us to find solutions to represent enormous dimensionality 
                data within low dimensions.
                </div>
                <div className='instanceDescription'>
                &emsp;The MNIST database contains thousands of handwritten digit images. I sampled ten instances for each 
                digit shown in Figure 1.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328951-3d541ae9-0c29-4f73-a46d-118a90790bf1.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 1</div>
                </div>
                <div className='instanceDescription'>
                &emsp;The mean image calculation runs over the training dataset of the MNIST. The algorithm sums all the RGB values 
                for each pixel coordinate and divides the resulting value by the image count. Averaged image can be viewed in Figure 2.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328914-c23f70dc-ad75-47e8-a53e-e2ec02c90d32.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 2</div>
                </div>
                <div className='instanceDescription'>
                &emsp;The eigenvectors are calculated using the covariance matrix of the training dataset. Figure 3 shows the eigenvectors 
                regarding their eigenvalues. Listing is handled in descending order.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328919-5b604aa0-dfed-4e79-bb2f-6138b17a1e65.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 3</div>
                </div>
                <div className='instanceDescription'>
                &emsp; Figure 4 shows the eigenvalue-eigenvector pairs again in descending order. The Y-axis indicates the numerical 
                representation of the eigenvalues and the X-axis shows the regarding eigenvector instances. Eigenvalues signify their 
                importance level.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328920-65469f7d-7a98-45de-aca2-6ef6a2029332.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 4</div>
                </div>
                <div className='instanceDescription'>
                &emsp;All test dataset examples are processed and the resulting data points can be seen in Figure 5. Figure 6 shows the 
                labels of the data points. We can observe some clustering results of this algorithm from Figure 5, but this solely does 
                not picture sharp boundaries and is not enough for interpretations over the processed dimensions. On the other hand, one 
                can observe the populations of data points follow some vague trends. For instance, the orange points are on the left side, 
                and the blue points are on the left bottom side while the red and green points are on the upper side.
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
                &emsp;The t-SNE algorithm is also used to reduce the dimensions of the image inputs to 2. Figure 7 shows the resulting data 
                points in 2D. The resulting clustering behavior is significantly more clear than the PCA results. The labeling system is 
                identical to the PCA graph and can be viewed in Figure 6.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328925-ab059ef5-b035-4e13-8c79-7587516c3573.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 7</div>
                </div>
                <div className='instanceDescription'>
                &emsp;PCA makes fast calculations and reduces dimensionality powerfully. On the other hand, the PCA method tries to 
                achieve this operation by retaining the linear variance of the data points. This procedure does not sustain the 
                non-linear variances between the data points. This problem disables this method to successfully achieve dimensionality 
                reduction in great amounts.
                </div>
                <div className='instanceDescription'>
                &emsp;However, the t-SNE methodology creates a similarity matrix between the data points to transfer the local variance 
                information into the reduced dimensions. The t-SNE name comes from t-distributed Stochastic Neighbor Embedding. This 
                naming convention explains the probabilistic, local variance conserving, and dimensionality reduction aspects of the t-SNE. 
                The similarity matrix is constructed using Gaussian distribution. If the data is labeled, Gaussian distribution makes 
                conclusions about data point relations by the manner of distance. If the data points are originally close to each other, 
                but the label values are different, the similarity function assigns low possibilities indicating the relation between this 
                pair, and vice versa for the opposite case.
                </div>
                <div className='instanceDescription'>
                &emsp;The scikit-learn library uses the Kullback-Leibler divergence method to calculate joint probabilities. The 
                Kullback-Leibler calculates the statistical distance between the data points. The distance values are asymmetric. 
                So, the algorithm calculates both the distance from the ith datapoint to the jth datapoint and the opposite. After 
                that, it averages found distances to find the actual distance. Distances play a probability role in this method.
                </div>
                <div className='instanceDescription'>
                &emsp; The t-SNE algorithm is an iterative process. Firstly, it calculates the similarity distributions and generates 
                data points within the lower dimension. The created data points conserve the information of the data point similarities. 
                Then, the algorithm applies the same process to reduce the dimensionality of the intermediate result to carry out the 
                dimensionality reduction process one step further. After the predefined iteration count is reached, the algorithm stops. 
                The main negative aspect of this process is the calculation time which is rather high than the PCA procedure. Also, 
                because of the non-linear behavior of the t-SNE algorithm, one can not reconstruct the input image. If the user wants 
                high throughput or regeneration of the input data, s/he should use the PCA method for sure. On the other hand, usage 
                of the t-SNE would be nice for those who want to reduce the dimensionality conserving the relations between the data pairs.
                </div>
                <div className='instanceDescription'>
                &emsp; An example image is taken from the test dataset of the MNIST. Figure 8 shows the original example image. The 
                image dimension is embedded into 2, 12, 22, … , 772, 782, and 784 dimensions using the PCA methodology. The eigenvector 
                that has higher eigenvalues is selected previously. The original dimension was 784. Reconstructed images can be viewed 
                in Figure 9. To get the 95% recovery we should at least use 153 eigenvectors and the recovery from the 152 eigenvectors 
                is shown in Figure 9 with the red square. The pointed image is almost the same as the original one.
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
                &emsp;I wanted to see the reconstruction performance of the PCA algorithm for the image that is not included in the train 
                or test dataset, out of context. So, previously calculated eigenvectors are used for the image shown in Figure 10. Indeed, 
                the image in Figure 11 is used which is the processed version of Figure 10 because the eigenvectors are pre-learned and 
                we should introduce (28, 28) grayscale images to be able to use them. Figure 12 shows the reconstruction process. Again, 
                the 95% reconstruction-rated image is encapsulated with the red square. Because of the different nature and structure of 
                the given image, the PCA fails to reconstruct the given image with the 152 most significant eigenvectors. It shows the 
                importance level of the training dataset.
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
                &emsp; The Olivetti Faces dataset contains 400 images within 40 classes. Figure 13 shows 10 images for the chosen 10 
                classes. Different classes are subject to different properties like having glasses, smiling, or camera aspect.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328934-cd9a140c-8ff8-42a2-ad3b-1344265eb5f6.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 13</div>
                </div>
                <div className='instanceDescription'>
                &emsp; The mean image calculation process is the same as the first phase. The resulting image can be viewed in Figure 14.

                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328936-6bd0560f-42c9-4bbc-aa40-4530e05221b5.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 14</div>
                </div>
                <div className='instanceDescription'>
                &emsp;The eigenvector calculation is also the same as the first phase. The resulting eigenvectors can be viewed from 
                Figure 15.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328937-ea7a0734-7692-40d3-9172-940f0626db16.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 15</div>
                </div>
                <div className='instanceDescription'>
                &emsp;The first 50 eigenvector-eigenvalue pairs are shown in Figure 16 in descending order. The starting value is very 
                low regarding the eigenvalues shown in Figure 4. On the other hand, the shape of the resulting graph is very similar to 
                the previous one. The small values may point to the unsuccessful representation with the PCA for this dataset.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328938-e1bdbbc7-064a-44a6-a5ed-72e0f34f138d.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 16</div>
                </div>
                <div className='instanceDescription'>
                &emsp;The images with the shape (64, 64) projected to space with the dimension of 2. Because of the significant reduction 
                in the dimensionality, most information is lost and the resulting data points do not bear any cluster information which can 
                be observed in Figure 17. The class labels of the images are written on top of the data points on the graph.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328939-d941cdb5-0d97-45d2-b495-da2a5003bddf.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 17</div>
                </div>
                <div className='instanceDescription'>
                &emsp;The t-SNE algorithm reduced the dimensions more powerfully in the means of the relations of the data points. 
                Figure 18 shows the class separation for the same dataset.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328940-ff50d049-7716-4e61-a0b0-401b36ed4ab8.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 18</div>
                </div>
                <div className='instanceDescription'>
                &emsp; An example image is taken from the dataset for the reconstruction process. The image can be seen in Figure 19. 
                The reconstructed images are in Figure 20. The reconstruction with a 95% score can be achieved with at least 123 
                eigenvectors and the 122nd eigenvector representation encapsulated in Figure 20. The produced image at that point is 
                nearly the same as the original image.
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
                &emsp;Again, I wanted to reconstruct an image that is out of context with the pre-learned eigenvectors. I used the 
                same plane image, but the preprocess operations reduced the image size to (64, 64) as can be seen form Figure 21. 
                Figure 22 shows the reconstruction steps with the eigenvectors prepared for the face dataset. As we observe from the 
                figure, the reconstruction of the image fails no matter how many eigenvectors are used. Also, the first image in Figure 
                22 shows the reconstruction process with only the 2 most significant eigenvectors. The image is very similar to a face 
                image. This behavior comes from the image structure encapsulation of the PCA method which is very powerful. 
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328947-fe4c8d30-471a-4084-b49f-0aa36c5f61f4.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 21</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202328948-c39f9428-724d-4b51-9789-94daf82cab33.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Figure 22</div>
                </div>


                <div className='instanceDescription'>
                &emsp;<a href="https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html">Scikit Learn, PCA</a>
                </div>
                <div className='instanceDescription'>
                &emsp;<a href="https://scikit-learn.org/stable/modules/generated/sklearn.manifold.TSNE.html">Scikit Learn, t-SNE</a>
                </div>
                <div className='instanceDescription'>
                &emsp;<a href="https://en.wikipedia.org/wiki/Principal_component_analysis">Wikipedia, PCA</a>
                </div>
                <div className='instanceDescription'>
                &emsp;<a href="https://en.wikipedia.org/wiki/T-distributed_stochastic_neighbor_embedding">Wikipedia, t-SNE</a>
                </div>
                <div className='instanceDescription'>
                &emsp;<a href="https://towardsdatascience.com/principal-component-analysis-pca-explained-visually-with-zero-math-1cbf392b9e7d">Towards Data Science, PCA</a>
                </div>
                <div className='instanceDescription'>
                &emsp;<a href="https://towardsdatascience.com/t-sne-clearly-explained-d84c537f53a">Towards Data Science, t-SNE</a>
                </div>
                <div className='instanceDescription'>
                &emsp;<a href="http://yann.lecun.com/exdb/mnist/">The MNIST database</a>
                </div>
                <div className='instanceDescription'>
                &emsp;<a href="https://scikit-learn.org/0.19/datasets/olivetti_faces.html">The Olivetti Faces Dataset (Scikit-Learn)</a>
                </div>
                <div className='instanceDescription'>
                &emsp;<a href=""></a>
                </div>
                <div className='instanceDescription'>
                &emsp;<a href=""></a>
                </div>
                <div className='instanceDescription'>
                &emsp;<a href=""></a>
                </div>
                <div className='instanceDescription'>
                &emsp;<a href=""></a>
                </div>
                <div className='instanceDescription'>
                &emsp;<a href=""></a>
                </div>
            </div>
        </div>
    }
}

export default Project