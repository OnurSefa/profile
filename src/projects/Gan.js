import React from 'react';

class Project extends React.Component{
    constructor(){
        super();

    }

    render(){

        return <div className="instanceBackground">
            <div className='instance'>
                <div className='instanceHeader'>
                    <b>Generating Art using Generative Adversarial Networks</b>
                </div>
                <div className='instanceDescription'>
                &emsp;This project was my graduation project which lasted for two semesters. I have worked with my colleague.
                </div>
                <div className='instanceDescription'>
                &emsp;<b>Introduction:</b>Our purpose was to find the best possible way to generate art images with multiple 
                prompts. We were aware of the current methods following the same goal. Also, we presented state-of-the-art papers 
                and their work mechanisms. Pros and cons of the described methods were stated to give some intuition about the outcomes 
                of the models. We inspected the needs of the field and prepared suitable solutions. This blog explains our system which 
                enables users to select some regions within the frame of the image to assign different text prompts as front images. To 
                achieve this goal, we manipulated the VQGAN+CLIP model. Firstly, we created several separate images with related text 
                prompts. Then, we fused them into one image and iterated it. Originally, the VQGAN+CLIP model randomly cutouts some 
                regions and applies the loss function to them. We assigned each cutout a related text prompt regarding its coordinates. 
                This strategy enabled us to produce art images with multiple prompts
                </div>
                <div className='instanceDescription'>
                &emsp; GANs are capable of getting more realistic results than traditional methods. The main building blocks of a GAN 
                are the generator and discriminator models. The generator model is used to generate images that can fool previously 
                trained discriminator models and it consists of one convolutional and deconvolutional networks. Basically, the generator 
                model produces outputs, and the discriminator model checks if the data is real or fake.
                </div>
                <div className='instanceDescription'>
                &emsp; In general, GAN encodes the given image to a manifold and tries to construct a relationship on the manifold to 
                manipulate the output image. One of the most essential parts of manifold learning is the concept of latent space. The 
                latent space also can be constructed with word embeddings. Word embeddings are vectors that represent the meaning of the 
                words. The meaning of an image also can be represented in the same latent space with correct deep learning techniques. 
                Word embeddings may construct more detailed meanings with the self-attention mechanism. In this strategy, every vector 
                tries to learn a relationship with every each other.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202874259-aa43cbe7-cb2b-4ab4-9193-3cf98092ac70.png' alt='project image'></img>
                    <div className='instanceImageDescription'> TediGAN</div>
                </div>
                <div className='instanceDescription'>
                &emsp;<b>TediGAN:</b> TediGAN stands for Text-guided diverse image generation and manipulation via GAN. The aim of the 
                TediGAN is to manipulate the W latent space to configure modifications to the outputting images. To do so, they use 
                StyleGAN to embody the real images into the mentioned latent space. After that, the embodied image will be manipulated 
                through word vectors in the latent space. Newly generated w vector in the latent space will be processed with StyleGAN to 
                reflect the manipulations onto the output image.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://raw.githubusercontent.com/openai/CLIP/main/CLIP.png' alt='project image'></img>
                    <div className='instanceImageDescription'>CLIP</div>
                </div>
                <div className='instanceDescription'>
                &emsp;<b>CLIP:</b> Contrastive Image-Language Pretraining (CLIP) is produced by OpenAI. Their purpose was to get the 
                semantic properties of images as words. To achieve this, they used supervised learning techniques. The training dataset 
                consisted of 400 million image-text pairs collected from the internet. The most powerful part of the model is not needing 
                to modify the model for different tasks. One base model correctly finds the attributes of an image as word sequences.
                </div>
                <div className='instanceDescription'>
                &emsp;Also, CLIP can be used to measure the correctness of the results of GANs. Scientists can evaluate the distances 
                between the input sentence and the CLIP’s sentence according to the output image by embodying them into the same learned 
                latent spaces. Programmers compare the input/output meanings via the resulting vectors.
                </div>
                <div className='instanceDescription'>
                &emsp;Furthermore, CLIP is open source and they provide documentation about their APIs. Being easy to use, and the great 
                performance of the model with zero-shot predictions enables programmers to integrate CLIP into their model very quickly 
                and efficiently. There is no need to optimize any part of the CLIP when it is needed to be used. It can be used as a 
                discriminator model directly. Also, CLIP automatically measures the distances between images and texts without any need 
                for previously described latent space learning steps. Advantageous parts of the CLIP encouraged us to use it in our 
                graduation project.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://compvis.github.io/taming-transformers/paper/teaser.png' alt='project image'></img>
                    <div className='instanceImageDescription'>VQGAN</div>
                </div>
                <div className='instanceDescription'>
                &emsp;<b>VQGAN:</b> Vector Quantized Generative Adversarial Network is a GAN model that is used to generate images. 
                It was released with the paper named "Taming Transformers" which was written by Björn Ommer, Patrick Esser, and Robin 
                Rombach. Firstly, it takes an image as input data and passes it to the encoder. In this way, the data becomes vector 
                quantized which is a type of clustered data form. After, this data is saved as a codebook. In this model, images are not 
                modeled in pixels. Instead, the authors used the codebook concept. The codebook knowledge is used in the transformer 
                mechanism that works autoregressively: It makes assumptions on the next data by previous data, which reduces the processing 
                time.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202874528-c1a76d6d-b1d8-4d97-95c7-7e6e256b355f.png' alt='project image'></img>
                    <div className='instanceImageDescription'>VQGAN+CLIP</div>
                </div>
                <div className='instanceDescription'>
                &emsp;<b>VQGAN+CLIP:</b>This mechanism uses VQGAN to generate images and CLIP to capture the meaning of them. After every 
                iteration, CLIP creates a loss value and VQGAN tries to achieve better results. After several hundreds of iterations, 
                the output image tends to represent the requested meanings. On the other hand, because of the broad range spectrum of 
                the domains, outputs are not much realistic. But, realism is not an obligatory condition for our case.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://www.artemisdataset.org/img/speaker_productions_teaser.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Artemis Dataset</div>
                </div>
                <div className='instanceDescription'>
                &emsp;<b>Artemis:</b> It presents a novel large-scale dataset and models that are used to evaluate emotions. The dataset 
                is created by human annotators who assign the main intense emotion for each prompting art image. The annotators also 
                give some explanatory statements for these images not assigning any main class for them. The dataset includes 455K 
                emotional comments made for 80K images which are taken from Wikiart Dataset. Artemis focuses on 8 common emotions in 
                addition to the “something else” category. These emotions are "amusement", "awe", "contentment", "excitement", "anger", 
                "disgust", "fear" and "sadness". Artemis dataset’s final results show the proportions of emotions that arose among the 
                annotators. 
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202875490-d290dea3-e4c9-49e5-b51b-e313145e4d71.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Our Framework</div>
                </div>
                <div className='instanceDescription'>
                &emsp;<b>Our Methodology:</b> We have developed a system in which a user specifies the background text prompt and 
                foreground regions with related text prompts. We separately create art images related to the back and front. After a 
                certain iteration, we compound these parallelly produced images into one image and then we, again, iterate it to the 
                final image with some certain iteration.
                </div>
                <div className='instanceDescription'>
                &emsp;The system starts with the generation step of the initial images using the VQGAN model. After every iteration, 
                it updates the initial images in the direction specified by the loss value. The CLIP model calculates the loss value 
                comparing the image and the related text prompt using the cosine similarity function. The VQGAN model is pre-trained 
                and we observed that the best suitable VQGAN model is ’ViT-B/32’ in our scenario. The VQGAN-CLIP applies previously 
                mentioned steps separately for each text prompt to allow multiple image generation.
                </div>
                <div className='instanceDescription'>
                &emsp;CLIP model is used as a discriminator. CLIP takes the input text prompts and generated images to create a loss value. For each text prompt, we randomly cut out the specified regions. The cutting-out operation count is a hyper-parameter which is 32 in our case. Firstly, it selects the cut image and embeds it into a latent space. After that, it embeds the text prompts into the same latent space. Loss value is calculated from the differences between the vector representations of texts and images. The calculated loss will be used in the VQGAN model to change the parameters of it to update the initial image in the direction of our goals. The iteration mechanism continues in a loop until a predefined maximum iteration count is reached.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202875571-e1caa0e7-79bb-4e8e-be61-e9d8c1b9eef5.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Candidate images that are produced with "bird" text prompt with sizes of (644x144)</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202875584-6daa47fd-bc7a-4881-bb3c-71e69197e17c.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Selected image by Artemis Model</div>
                </div>
                <div className='instanceDescription'>
                &emsp;In our final version, to produce more artistic and emotional images, we create multiple candidate images for each 
                text prompt. We use the Artemis model which gives us an emotion vector with a length of 9. We normalize the emotion 
                vectors according to our standard deviation and mean values that are extracted from our previous art results. We find the 
                standard deviation value of the emotion vector for each generated candidate image and we select the image which has the 
                highest std value. Our experiments showed that the most artistic ones have the highest std values in general. After using 
                the Artemis model, we would have one intermediate image for each text prompt regarding background and foreground areas. 
                And, we need to synthesize them to compound the initial version of the desired output. To handle the composition smoothly, 
                we applied a synthesis method that appends the front images over to background images such that while placing the correct 
                pixels to the correct coordinates, it assigns a weight value for the back and front images in according to the position of 
                the pixels.
                </div>
                <div className='instanceDescription'>
                &emsp;To acquire a smooth synthesized version of the initial output image, we have tried several methods. Firstly, we 
                tried to replace the front pixels with the back pixels directly, without using any weights. And, we iterated the synthesized 
                image using only the background text prompt hoping for a nice smooth version of it. Unfortunately, this process destroys 
                the front images because of the lack of such information in the context. In our second strategy, we tried to freeze the 
                background text prompt in the last few iterations of the generation of the background image before synthesizing the 
                foreground images. This method also did not work well because the background images almost disappeared.
                </div>
                <div className='instanceDescription'>
                &emsp;To preserve our main goal of creating images with multiple text prompts regarding different locations of the image 
                frame, we have constructed a new loss function that assigns text prompts to the related parts of the synthesized image. 
                After creating text-image pairs, we apply the CLIP loss calculation method for each pair. We iterate the intermediate 
                image until the iteration count reaches the previously decided threshold. In the end, the resulting image shows multiple 
                text prompts appropriate to their assigned locations. 
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202875654-b780c59a-898f-4c33-8fa0-9c509c19a440.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Final Result for the text prompts: "Sky Palace", "black sun", "birds"</div>
                </div>
                <div className='instanceDescription'>
                &emsp;<b>Our Web Application:</b>We have designed a system that enables users to define the input text prompts and 
                coordinates from an interactive user interface. The web application includes a “home” page and a “create” page. The 
                “home” page shows randomly chosen 20 image pairs formed of a text prompt that defines the background, left, and right 
                sides of the image, the result of our method, and finally the result of the VQGAN-CLIP method. When a user clicks on 
                an image, the related image pairs pop up showing the intermediate results of the back and front images. The “create” 
                page shows the intractable canvas. The sizes of the canvas can be defined by the user. Also, the user can add 3 front 
                text prompts with their custom locations.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202875691-379a377e-ed1f-41c1-b69b-4a2cc572f2c6.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Front End Create Page that shows an output for the chosen settings</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202875701-1ba0b4ed-5125-4e0a-ad7a-3a277df2d789.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Front End Main Page</div>
                </div>
                <div className='instanceDescription'>
                &emsp;The Front-End sends an API call to our Back-End service. Our Back-End service reads json input and converts it to a 
                “request.txt” file to be sent to our server. Then, the server starts to create intermediate results for each text prompt. 
                For each text prompt, there will be 4 intermediate results which will be evaluated by the Artemis model which runs as a 
                flask application on the server. When images are chosen, our method synthesizes them and starts to iterate the synthesized 
                intermediate image. The model creates a loss value between each randomly selected image cut and related text prompt. CLIP 
                embeds each text and image cut into the same latent space for each iteration to prepare regarding loss values. Basically, 
                the loss values will be produced from the cosine similarities of the embedded vectors. After the predefined iteration count 
                is reached, the server sends a message to our Back-End service. Back-End service takes the final image and sends it to our 
                UI that will be viewed by the end user.
                </div>
                <div className='instanceDescription'>
                &emsp;<b>Final Results</b>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202875786-a8b3fbc9-fac2-49c1-a684-18995237b39e.png' alt='project image'></img>
                    <div className='instanceImageDescription'>background: Sky Palace, left: Energized Water, right: Birds</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202875787-3e7d7a39-b3bc-4026-b25b-917807ca0d0c.png' alt='project image'></img>
                    <div className='instanceImageDescription'>background: Sky Palace, left: Painter, right: The Little Prince</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202875788-7dc2159d-a0fc-43b2-8536-954e889778c5.png' alt='project image'></img>
                    <div className='instanceImageDescription'>background: Wheat Field, left: Painter, right: Painter</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202875789-71e1559c-2f34-4f25-9c1c-9751d835ee71.png' alt='project image'></img>
                    <div className='instanceImageDescription'>background: Wheat Field, left: The Little Prince, right: Birds</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202875790-2864ccfe-3836-4dfa-b5b6-7bbd17005f4a.png' alt='project image'></img>
                    <div className='instanceImageDescription'>background: Stormy Ocean, left: Shiny Rose, right: Gemstone</div>
                </div>
                <div className='instanceDescription'>
                &emsp;<b>References</b>
                </div>
                <div className='instanceDescription'>
                &emsp;I. Aizenberg, N. N. Aizenberg, and J. P. Vandewalle, Multi-valued and universal binary neurons:
Theory, learning and applications. Springer Science & Business Media, 2000
                </div>
                <div className='instanceDescription'>
                &emsp;F. J. Gomez and J. Schmidhuber, “Co-evolving recurrent neurons learn deep memory pomdps,”
in Proceedings of the 7th annual conference on Genetic and evolutionary computation, pp. 491–
498, 2005
                </div>
                <div className='instanceDescription'>
                &emsp;I. Goodfellow, J. Pouget-Abadie, M. Mirza, B. Xu, D. Warde-Farley, S. Ozair, A. Courville, and
Y. Bengio, “Generative adversarial nets,” Advances in neural information processing systems,
vol. 27, 2014
                </div>
                <div className='instanceDescription'>
                &emsp; P. nad Jizerou, “Doktorandsky den’04,” 2004
                </div>
                <div className='instanceDescription'>
                &emsp; P. Esser, R. Rombach, and B. Ommer, “Taming transformers for high-resolution image synthesis,”
2020
                </div>
                <div className='instanceDescription'>
                &emsp;A. Radford, J. W. Kim, C. Hallacy, A. Ramesh, G. Goh, S. Agarwal, G. Sastry, A. Askell,
P. Mishkin, J. Clark, G. Krueger, and I. Sutskever, “Learning transferable visual models from
natural language supervision,” 2021
                </div>
                <div className='instanceDescription'>
                &emsp; A. Biswas and A. P. Chandrakasan, “Conv-ram: An energy-efficient sram with embedded
convolution computation for low-power cnn-based machine learning applications,” in 2018
IEEE International Solid-State Circuits Conference-(ISSCC), pp. 488–490, IEEE, 2018
                </div>
                <div className='instanceDescription'>
                &emsp;W. Xia, Y. Yang, J.-H. Xue, and B. Wu, “Tedigan: Text-guided diverse face image generation
and manipulation,” in Proceedings of the IEEE/CVF Conference on Computer Vision and
Pattern Recognition, pp. 2256–2265, 2021
                </div>
                <div className='instanceDescription'>
                &emsp; O. Patashnik, Z. Wu, E. Shechtman, D. Cohen-Or, and D. Lischinski, “Styleclip: Text-driven
manipulation of stylegan imagery,” in Proceedings of the IEEE/CVF International Conference
on Computer Vision, pp. 2085–2094, 2021
                </div>
                <div className='instanceDescription'>
                &emsp; P. Achlioptas, M. Ovsjanikov, K. Haydarov, M. Elhoseiny, and L. J. Guibas, “Artemis: Affective
language for visual art,” in Proceedings of the IEEE/CVF Conference on Computer Vision and
Pattern Recognition, pp. 11569–11579, 2021
                </div>
                <div className='instanceDescription'>
                &emsp; Karras, Tero, Samuli Laine, and Timo Aila. "A style-based generator architecture for generative 
                adversarial networks." Proceedings of the IEEE/CVF conference on computer vision and pattern recognition. 2019.
                </div>
                <div className='instanceDescription'>
                &emsp;https://arxiv.org/abs/2012.03308
                </div>
                <div className='instanceDescription'>
                &emsp;https://github.com/openai/CLIP
                </div>
                <div className='instanceDescription'>
                &emsp;https://ljvmiranda921.github.io/notebook/2021/08/08/clip-vqgan/
                </div>
                <div className='instanceDescription'>
                &emsp;https://github.com/CompVis/taming-transformers
                </div>
            </div>
        </div>
    }
}

export default Project