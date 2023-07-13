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
                &emsp;We were group of two people who take Advanced NLP course at Bogazici University. We have inspected several papers and tried to reimplement
                them. References can be seen in the bottom of this page.  
                </div>
                <div className='instanceDescription'>
                &emsp;Question answering task is a complex task and we have tried to implement two different modules that are trained in an end-to-end manner. The 
                first part is document retriever and the second is document reader. When a question is prompted, the retriever part identifies the most relavant document
                and the reader module tries to extract the correct answer from the chosen document.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202878668-884569f8-a27b-423f-b84a-3697d48fc6ca.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Example Paragraphs</div>
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202878670-5d64dd79-3748-4894-b793-dac729d957a0.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Example Questions</div>
                </div>
                <div className='instanceDescription'>
                &emsp;We have used SQuAD and Natural Questions datasets. Example paragraphs and related questions are shown. Representation of them in a matrix can be viewed below. Green scores
                should be high and red ones should be low to indicate correct relevance scores.
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202878667-4e25483b-dfee-4f6f-b818-7122d33f439e.png' alt='project image'></img>
                    <div className='instanceImageDescription'>Matrix Representation</div>
                </div>
                <div className='instanceDescription'>
                &emsp;Retriever model structure takes paragraphs and questions and tries to find similarities of them using BERT and FNN. 
                </div>
                <div className='instanceImage'>
                    <img className='instanceImageImage' src='https://user-images.githubusercontent.com/12373950/202878698-f2145c0f-7b53-435d-8603-5250ec9330c9.png' alt='project image'></img>
                    <div className='instanceImageDescription'>The Retriever Module</div>
                </div>
                <div className='instanceDescription'>
                &emsp;Structure of the reader part is very similar to the retriever part. It also takes words of the selected document and questions. After BERT produces word vectors and question context
                vector, they are compared, most relevant words are selected to be in the answer sentence.
                </div>
                <div className='instanceDescription'>
                &emsp;Unfortunately, I couldn't reach out my project friend, I can not give more details about the project because of my ethical concerns.
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
            </div>
        </div>
    }
}

export default Project