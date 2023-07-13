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
                &emsp;This project was mine graduation project which lasted for two semesters. I have worked with my colleague.
                </div>
                <div className='instanceDescription'>
                &emsp;<b>Introduction:</b> Our purpose was to find the best possible way to generate art images with multiple
prompts. We were aware of the current methods following the same goal. Also,
we presented state-of-the-art papers and their work mechanisms. Pros and cons of
the described methods were stated to give some intuition about the outcomes of the
models. We inspected the needs of the field and prepared suitable solutions. This
report explains our system which enables users to select some regions within the
background to assign another text prompts as front images.
                </div>
                <div className='instanceDescription'>
                &emsp;We wanteded to create art images in which the users can assign regions with different text
prompts. To achieve this goal we manipulated the VQGAN+CLIP model. Firstly we created different
regions of the images with related text prompts. Then, we fused them into one image and iterated it.
Originally, VQGAN+CLIP model randomly cutouts some regions and applies loss function to them.
We assigned each cutout a related text prompt regarding to its coordinates. This strategy enabled us
to produce art images with multiple prompts
                </div>
                <div className='instanceDescription'>
                &emsp;GANs are used to
generate images which can fool previously trained models. They are capable to get more realistic results
than the traditional methods. They consist of one convolutional and deconvolutional networks which
are generator and discriminator. Generator produces outputs and discriminator checks if the data is
real or fake. 
                </div>
                <div className='instanceDescription'>
                &emsp;In general, GAN encodes the given image to a manifold and it tries to construct a relationship on
the manifold to do manipulations on output image. One of the most important parts of the manifold
learning is latent space. The latent space also can be constructed with word embeddings. Word embeddings are vectors
to represent meaning of the vectors. With this representation meaning of an image also can be
represented in the latent space. Furthermore, word embeddings construct more detailed meaning with
self attention mechanism. In this strategy, every vector tries to learn a relationship with every other
vector.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202874259-aa43cbe7-cb2b-4ab4-9193-3cf98092ac70.png' alt='project image'></img>
                    <div className='instanceImageDescription'> TediGAN</div>
                </div>
                <div className='instanceDescription'>
                &emsp;<b>TediGAN:</b> TediGAN stands for Text-guided diverse image generation and manipulation via GAN. Aim
of the TediGAN is manipulating the W latent space to configure modifications onto the outputting
images. To do so, they use StyleGAN to embody the real images to the mentioned latent space. After
that, embodied image will be manipulated through word vectors in the latent space. Newly generated
w vector in the latent space will be processed with StyleGAN to reflect the manipulations on the
output image.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://raw.githubusercontent.com/openai/CLIP/main/CLIP.png' alt='project image'></img>
                    <div className='instanceImageDescription'>CLIP</div>
                </div>
                <div className='instanceDescription'>
                &emsp;<b>CLIP:</b> Contrastive Image-Language Pretraining (CLIP) produced by OpenAI. Their purpose was to get the
semantic properties as words from images. To achieve this, they used supervised learning techniques.
Training data was 400 million image-text pairs collected from the internet. Most powerful part of the
model is that there is no need to modify the model for different tasks. One base model correctly finds
the attributes of an image as a word sequences.
                </div>
                <div className='instanceDescription'>
                &emsp;Nowadays, CLIP is used to measure the results of GANs. Users evaluate the distances between the
purpose sentence and the output image via embodying them into the learned latent space. Programmers compare the input/output meanings via the resulting vectors.
                </div>
                <div className='instanceDescription'>
                &emsp;Furthermore, CLIP is open source and they provide documentation about their APIs. Great
performance of the model with zero-shot correct predictions and easy to use property enables
programmers to integrate CLIP into their model very quickly and efficiently. There is no need to
optimize any part of the CLIP when it is needed to be used. Also, CLIP automatically measures the
differences of images and texts without any intervention. Advantageous parts of the CLIP encoureged
us to is it in our method.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://compvis.github.io/taming-transformers/paper/teaser.png' alt='project image'></img>
                    <div className='instanceImageDescription'>VQGAN</div>
                </div>
                <div className='instanceDescription'>
                &emsp;<b>VQGAN:</b> Vector Quantized Generative Adversarial Network is a GAN model that is used to
generate images. It was released as a paper named "Taming Transformers"
that was written by Björn Ommer, Patrick Esser and Robin Rombach. Firstly, it takes the input
data as images and passes them through an encoder. In this way, the data becomes vector quantized
which is a type of clustered form. After, this data is saved as a codebook. In this model, images are
not modelled in pixels. Instead, the authors used the codebook concept. The codebook knoweledge is used in transformer mechanism that works autoregressively: 
It makes assumptions on the next data by previous data, which reduces the process time.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202874528-c1a76d6d-b1d8-4d97-95c7-7e6e256b355f.png' alt='project image'></img>
                    <div className='instanceImageDescription'>VQGAN+CLIP</div>
                </div>
                <div className='instanceDescription'>
                &emsp;<b>VQGAN+CLIP:</b>This mechanism uses CLIP to capture the meaning of the produced image and VQGAN to generate images. After every iteration, CLIP creates a
                loss value and VQGAN tries to achieve better results. After several hundreds of iterations, output image tends to represent the requested meanings. On the other hand, because of
                the broad range spectrum of the domains, outputs are not much realistic. But, realism is not an obligatory condition for our case.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://www.artemisdataset.org/img/speaker_productions_teaser.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Artemis Dataset</div>
                </div>
                <div className='instanceDescription'>
                &emsp;<b>Artemis:</b> It presents a novel large-scale dataset and models that are used to eliminate emotions and emotions. Their dataset is created by asking attendees what is the
intense emotion on each of these images. These attendees also give some explanations related with
these images. The dataset includes 80K images taking from Wikiart and 455K emotion comments.
                </div>
                <div className='instanceDescription'>
                &emsp;Artemis commonly focuses on 8 emotions and has one other category named as "something else".
These emotions are "amusement", "awe", "contentment", "excitement", "anger", "disgust", "fear" and
"sadness". Artemis gives the result looking by percentage of these emotions.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202875490-d290dea3-e4c9-49e5-b51b-e313145e4d71.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Our Framework</div>
                </div>
                <div className='instanceDescription'>
                &emsp;<b>Our Methodology:</b> We have developed a system in which a user specifies the background text prompt and regions with
related text prompts. We separately create art images related to back and front.
After certain iteration, we compound these parallel produced images into one image and then we
iterate the final image with some certain iteration.
                </div>
                <div className='instanceDescription'>
                &emsp;The system starts with generation of the initial images using VQGAN. VQGAN generates an initial
image in the first step. After every iteration, it updates the initial image in the direction specified by
the loss value. The CLIP model calculates the loss value comparing the image and the related text
prompt using the cosine similarity function. The VQGAN model is pre-trained and we observed that best suitable VQGAN model is ’ViT-B/32’. VQGAN CLIP applies mentioned steps separately for
each text prompt to allow multiple image generation process.
                </div>
                <div className='instanceDescription'>
                &emsp;CLIP model is used as a discriminator. CLIP takes the input text prompts and generated image to
create a loss value. For each text prompt, we cutout randomly the specified regions. The cutout count
is a hyper-parameter which is 32 in our case. Firstly, it selects the cut image and embeds it to a latent
space. After that, it embeds the text prompt to the same latent space. Loss value is calculated from
the differences between the vector representations of texts and images. Calculated loss will be used in
the VQGAN model to change the parameters to update the initial image in the direction of our inputs.
The iteration mechanism continues in a loop until predefined maximum iteration count is reached.
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
                &emsp;In our final version, to produce more artistic and emotional images, we have created multiple
images for each text prompt. We have used Artemis model which gives us an emotion vector with
length of 9. We normalize the emotion vectors according to our standard deviation and mean values
which are extracted from our previous art results. We find out the standard deviation value for each
generated image and we select the image which has the highest std value. Our experiments showed
that the most artistic ones have the highest std values in general. After Artemis model, we have one
intermediate image result for each text promp
                </div>
                <div className='instanceDescription'>
                &emsp;After these steps, we have multiple images, back and fronts. And, we need to
synthesize them to compound the initial version of the desired output. To handle the composition
smoothly, we applied a synthesize method which appends the front images over to background images
such that while placing the correct pixels to the correct coordinates, it assigns a weight value for back
and front image in according to the position of the pixels.
                </div>
                <div className='instanceDescription'>
                &emsp;Before we achieve the smooth synthesized version, we have tried several methods. Firstly, we tried
to replace the front pixels with the back pixels directly. And, we iterated through background text
prompt to smooth the image. This method destroyed the front images. In our second try, we tried to
freeze the background text prompt. This strategy also did not work because the background image
almost disappeared.
                </div>
                <div className='instanceDescription'>
                &emsp;To preserve the multiple prompt strategy in our final result, we have constructed a loss function
which assigns every cutout to the correct text prompt. After creating text-image pairs, we have apply
the CLIP loss calculation method for each pair. Again, we have iterated our intermediate result until
we reach to the maximum iteration count. In the end, we have achieved to reflect the multiple text
prompts within the predefined coordinates.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202875654-b780c59a-898f-4c33-8fa0-9c509c19a440.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Final Result for the text prompts: "Sky Palace", "black sun", "birds"</div>
                </div>
                <div className='instanceDescription'>
                &emsp;<b>Our Web Application:</b>We have designed a system which enables users to define the inputs from an interactive user
interface. The web application includes a home page and create page. The home page shows
randomly chosen 20 image pairs formed of a text prompt which defines the background, left, right
sides of the image, result of our method, and finally result of VQGAN CLIP method. When a user
clicks on an image, the related image pairs pop up showing the intermediate results of the back and
front images. The create page offers a canvas. The sizes of the canvas can be defined by the user
within the create page. Also, user can add front text prompts up to 3. The text prompts should be
defined with some frames from the canvas. These frames can be selected from the user interface
easily
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
                &emsp;The Front-End sends an API call to our Back-End service. Our Back-End service reads json input
and converts it to request.txt file to be sended to our server. When the request reaches to the server,
it starts to create intermediate results for each text prompt. For each text prompt, there will be 4
intermediate results which is evaluated by Artemis model which runs as a flask application on the 
server. When images chosen, our method synthesizes them and starts to iterate it. For every prompt,
it cutouts from selected regions. Every cutout creates a loss value whit the related text prompt. CLIP
takes role in the loss calculation step. CLIP embeds each text and image cutout into same latent space.
The loss produced from the cosine similarity. After predefined iteration count is reached, server sends
a message to our Back-End service. Back-End service takes the final image and sends it to our UI to
be viewed
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