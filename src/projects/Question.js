import React from 'react';

class Project extends React.Component{
    constructor(){
        super();

    }

    render(){

        return <div className="instanceBackground">
            <div className='instance'>
                <div className='instanceHeader'>
                    <b>Open Domain End-to-End Question Answering System built on BERT</b>
                </div>
                <div className='instanceDescription'>
                &emsp;This project was a group semester project given in the Advanced Natural Language Processing 
                master's degree course at Bogazici University. We were a group of two people and my group friend 
                was a master’s degree student even though I was continuing to bachelor’s degree at that time. We 
                have inspected several academic papers and tried to re-implement the ones we admire the most. The 
                references to those papers are at the bottom of this page.  
                </div>
                <div className='instanceDescription'>
                &emsp;The question answering task is a complex task, especially in an open domain setup. 
                To achieve success, we restricted the domain to only 100 documents for each bach. We implemented 
                two different modules that are trained in an end-to-end manner. The first module is the document 
                retriever and the second one is the document reader. When a question is prompted, the retriever 
                module identifies the most relevant document out of the domain, and the reader module tries to 
                identify which texts constitute the correct answer from the chosen document. 
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202878668-884569f8-a27b-423f-b84a-3697d48fc6ca.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Example Documents</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202878670-5d64dd79-3748-4894-b793-dac729d957a0.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Example Questions</div>
                </div>
                <div className='instanceDescription'>
                &emsp;We have used the SQuAD and the Natural Questions datasets. Example paragraphs and related 
                questions are shown in the above images. Representation of them in a matrix can be viewed in the 
                below image. The designed retriever model assigns the similarity scores for each document and question 
                pair. So, the scores that lie in the diagonal of the matrix (shown in green) should be high compared 
                to the other pair scores (shown in red). 
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202878667-4e25483b-dfee-4f6f-b818-7122d33f439e.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Matrix Representation</div>
                </div>
                <div className='instanceDescription'>
                &emsp;The retriever module consists of two BERTs and two fully connected neural networks. The model 
                structure is shown in the below image. The BERT structure is used to convert the document and question 
                texts into embedding vectors. The FCNN structures take these vectors and encode them further. The 
                cosine similarity function is applied to the encoded document and paragraph vectors to get the 
                similarity score for the regarding pair. 
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202878698-f2145c0f-7b53-435d-8603-5250ec9330c9.png' alt='project image'></img>
                    <div className='instanceImageDescription'>The Retriever Module</div>
                </div>
                <div className='instanceDescription'>
                &emsp;The structure of the reader module is quite similar to the structure of the retriever module. 
                It compares the document text and question text to create a similarity score between each word in 
                the selected document and question text. It also uses the BERT and NNs. After similarity scores are 
                produced, the module takes the most relevant words as an answer. 
                </div>
                <div className='instanceDescription'>
                &emsp;Unfortunately, I could not reach out to my group friend. We split the project in a way that I 
                implemented the retriever module and she dealt with the reader module. So, I can not give more details 
                or show graphs/charts about the project parts that are completed by her because of my ethical concerns.
                </div>
                <div className='instanceDescription'>
                &emsp;<b>References</b>
                </div>
                <div className='instanceDescription'>
                &emsp;Zhang, Linhai, et al. "A Bayesian end-to-end model with estimated uncertainties for simple question answering over knowledge bases.“ Computer Speech & Language 66 (2021): 101167.
                </div>
                <div className='instanceDescription'>
                &emsp;D, Chen., A, Fisch., J, Weston., A, Bordes.,
"Reading Wikipedia to Answer OpenDomain Questions"ACL, p-1870–1879,
2017.
                </div>
                <div className='instanceDescription'>
                &emsp;V, Karpukhin., B, Oğuz., S, Min., P, Lewis.,
L, Wu., S, Edunov., D, Chen., W, Yih."Dense
Passage Retrieval for Open-Domain
Question Answering", ACL, p-6769–6781,
2020. 
                </div>
                <div className='instanceDescription'>
                &emsp;Sachan, Devendra Singh, et al. "End-to-end training of neural retrievers for open-domain question answering." arXiv preprint arXiv:2101.00408 (2021).
                </div>
                <div className='instanceDescription'>
                &emsp;<a href="https://rajpurkar.github.io/SQuAD-explorer/">SQuAD Dataset</a>
                </div>
                <div className='instanceDescription'>
                &emsp;<a href="https://ai.google.com/research/NaturalQuestions">Natural Questions Dataset</a>
                </div>
            </div>
        </div>
    }
}

export default Project