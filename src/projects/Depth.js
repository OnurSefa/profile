import React from 'react';

class Project extends React.Component{
    constructor(){
        super();

    }

    render(){

        return <div className="instanceBackground">
            <div className='instance'>
                <div className='instanceHeader'>
                    <b>U-Net Monocular Relative Depth Estimation</b>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' style={{width: "50em", maxWidth: "50em"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOvnGe4gAFH1r3A_v0mN4K0-NQDCUCAWVuYg&s' alt='project image'></img>
                    <div className='instanceImageDescription'><a href="https://cs.nyu.edu/~fergus/datasets/nyu_depth_v2.html#raw_parts">NYU V2 Depth Dataset</a></div>
                </div>
                <div className='instanceDescription'>
                &emsp;As an AI enthusiast, I recently embarked on an exciting project to gain hands-on experience with monocular relative depth estimation. Inspired by the DenseDepth paper, I set out to implement their methodology using PyTorch. This blog post chronicles my journey, the challenges I faced, and the results I achieved. More detailed descriptions are logged into my <a href="https://github.com/OnurSefa/U-Net_Depth_Estimation">GitHub repository</a>.
                It is publicly available.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' style={{width: "50em", maxWidth: "50em"}} src='https://onur-sefa-bucket.s3.eu-west-1.amazonaws.com/milestone.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Final Results - Left: Original Image, Middle: Ground Truth, Right: Prediction</div>
                </div>
                <div className='instanceDescription'>
                &emsp;<b>Project Goals and Achievements</b> The primary goal of this project was to understand the significant factors affecting depth estimation from the ground up. I'm pleased to say that this objective was met successfully. While I didn't aim to compete with state-of-the-art results, my model managed to capture monocular relative depth values and object structures within scenes to a satisfactory degree.
                </div>
                <div className='instanceDescription'>
                &emsp;The latest iteration of my model shows promising results. While not perfect, it captures generic monocular relative depth values and preserves object structures within scenes to a reasonable degree.
                </div>
                <div className='instanceDescription'>
                &emsp;<b>The Journey</b> I began by implementing a U-Net model structure, referencing <a href='https://github.com/milesial/Pytorch-UNet/blob/master/unet/unet_model.py'>this GitHub repository</a>. For my dataset, I chose the <a href='https://www.kaggle.com/datasets/soumikrakshit/nyu-depth-v2'>NYU Depth V2 from Kaggle</a>. However, I quickly ran into issues:
                <ul className='instanceList'>
                    <li>Training wasn't converging</li>
                    <li>Evaluated outputs were often all gray or noisy</li>
                    <li>The most promising results only learned to extract edges or identify color hues</li>
                </ul>
                </div>
                <div className='instanceDescription'>
                &emsp;Realizing I needed to change tack, I decided to follow the "High Quality Monocular Depth Estimation via Transfer Learning" paper more closely. This led to several improvements:
                <ul className='instanceList'>
                    <li>Switched the encoder from scratch to a pre-trained DenseNet169</li>
                    <li>Adjusted the size of depth prediction images to half of the input images</li>
                    <li>Froze the encoder and only trained the decoder part</li>
                </ul>
                </div>
                
                <div className='instanceDescription'>
                &emsp; 
                As the project progressed, I implemented further encahncements. After using augmentation
                (mirroring, channel shuffling)
                methodologies described in the paper and trained the model in the official NYU Depth V2 large dataset, the model started to produce blurry and foggy
                results.
                </div>

                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://onur-sefa-bucket.s3.eu-west-1.amazonaws.com/evaluate.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Initial Results - Left: Original Image, Middle: Ground Trurth, Right: Prediction</div>
                </div>
                <div className='instanceDescription'>
                &emsp;The table shows how the raw dataset has missing points in some regions. Especially further space is represented with all blacks which is not parallel with the definition (closer pixels should be darker). The trained model captures blurry version of the goal.
                </div>
                <div className='instanceDescription'>
                &emsp;To achieve more accurate results, I fine-tuned the model with the labeled and finegrained sample of the dataset. I experimented with different hyper parameters and saved all the values into the github repository. Below table shows the fine-tune results at different checkpoints. 
                </div>

                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://onur-sefa-bucket.s3.eu-west-1.amazonaws.com/finetune.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Original Image - Ground Truth - Checkpoint 37 - Checkpoint 49</div>
                </div>




                <div className='instanceDescription'>
                &emsp;Throughout this project, I faced several challenges which provided valuable lessons in working with real-world constraints and the importance of iterative improvement.
                <ul className='instanceList'>
                    <li>Dataset quality and compatibility issues</li>
                    <li>Hardware and time constraints limiting the scope of training</li>
                    <li>Balancing the trade-off between model complexity and training time</li>
                </ul>
                </div>

                <div className='instanceDescription'>
                &emsp;<b>Conclusion</b> This project has been an invaluable learning experience in the field of depth estimation. While there's always room for improvement, I'm satisfied with the progress made and the insights gained. The journey from a non-converging model to one that can reasonably estimate depth has been both challenging and rewarding. For those interested in diving deeper, you can find the full project details and code on my GitHub repository.
                <br></br>
                &emsp;Remember, in the world of AI and computer vision, every step forward, no matter how small, is a step towards greater understanding and capability. Happy coding!
                </div>

                <div className='instanceDescription'>
                &emsp;<b>References</b>
                </div>
                <div className='instanceDescription'>
                &emsp;Alhashim I. High quality monocular depth estimation via transfer learning. arXiv preprint arXiv:1812.11941. 2018
                </div>
                <div className='instanceDescription'>
                &emsp;https://github.com/ialhashim/DenseDepth
                </div>
                <div className='instanceDescription'>
                &emsp;https://cs.nyu.edu/~fergus/datasets/nyu_depth_v2.html#raw_parts
                </div>
                <div className='instanceDescription'>
                &emsp;https://github.com/milesial/Pytorch-UNet/blob/master/unet/unet_model.py
                </div>
                <div className='instanceDescription'>
                &emsp;https://www.kaggle.com/datasets/soumikrakshit/nyu-depth-v2
                </div>
            </div>
        </div>
    }
}

export default Project