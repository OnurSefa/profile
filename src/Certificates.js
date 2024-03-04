import React from "react";
import Swal from 'sweetalert2';


class Certificates extends React.Component{
    constructor(){
        super();
        this.state = {
            certificates: [
                {
                    "imgUrl": "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~PC5PK6CENHU2/CERTIFICATE_LANDING_PAGE~PC5PK6CENHU2.jpeg",
                    "url": "https://www.coursera.org/account/accomplishments/specialization/PC5PK6CENHU2",
                    "heading": "Natural Language Processing Specialization",
                    "provider": "DeepLearning.AI",
                    "date": "2023 Dec",
                    "skills": [
                        "Machine Translation", "Transformers", "Sentiment Analysis", "Word2vec", "Attention Models"
                    ]
                },
                {
                    "imgUrl": "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~HMNW3JDU5A2P/CERTIFICATE_LANDING_PAGE~HMNW3JDU5A2P.jpeg",
                    "url": "https://www.coursera.org/account/accomplishments/verify/HMNW3JDU5A2P",
                    "heading": "Natural Language Processing with Attention Models",
                    "provider": "DeepLearning.AI",
                    "date": "2023 Dec",
                    "skills": [
                        "T5+BERT Models", "Chatterbot", "Reformer Models", "Neural Machine Translation", "Attention Models"
                    ]
                },
                {
                    "imgUrl": "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~UVYH6KY7K2M9/CERTIFICATE_LANDING_PAGE~UVYH6KY7K2M9.jpeg",
                    "url": "https://coursera.org/verify/UVYH6KY7K2M9",
                    "heading": "Natural Language Processing with Sequence Models",
                    "provider": "DeepLearning.AI",
                    "date": "2023 Dec",
                    "skills": [
                        "Word Embedding", "Siamesse Networks", "Sentiment with Neural Nets", "Natural Language Generation", "Named-Entity Recognition"
                    ]
                },
                {
                    "imgUrl": "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~33XYAQJ4NCEA/CERTIFICATE_LANDING_PAGE~33XYAQJ4NCEA.jpeg",
                    "url": "https://www.coursera.org/account/accomplishments/verify/33XYAQJ4NCEA",
                    "heading": "Natural Language Processing with Probabilistic Models",
                    "provider": "DeepLearning.AI",
                    "date": "2023 Dec",
                    "skills": [
                        "N-gram Language Models", "Autocorrect", "Parts-of-Speech Tagging", "Word2vec"
                    ]
                },
                {
                    "imgUrl": "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~PWUVVJJ5ALQZ/CERTIFICATE_LANDING_PAGE~PWUVVJJ5ALQZ.jpeg",
                    "url": "https://www.coursera.org/account/accomplishments/verify/PWUVVJJ5ALQZ",
                    "heading": "Natural Language Processing with Classification and Vector Spaces",
                    "provider": "DeepLearning.AI",
                    "date": "2023 Nov",
                    "skills": [
                        "Machine Translation", "Locality-Sensitive Hashing", "Sentiment Analysis", "Word Embeddings", "Vector Space Models"
                    ]
                },
                {
                    "imgUrl": "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~F9TCKKGWJAKX/CERTIFICATE_LANDING_PAGE~F9TCKKGWJAKX.jpeg",
                    "url": "https://www.coursera.org/account/accomplishments/verify/F9TCKKGWJAKX",
                    "heading": "Introduction to Machine Learning in Production",
                    "provider": "DeepLearning.AI",
                    "date": "2023 Sep",
                    "skills": [
                        "Concept Drift", "ML Deployment Challenges", "Human-level Performance (HLP)", "Project Scoping and Design", "Model baseline"
                    ]
                },
                {
                    "imgUrl": "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~N7KFC6QD7MLY/CERTIFICATE_LANDING_PAGE~N7KFC6QD7MLY.jpeg",
                    "url": "https://www.coursera.org/account/accomplishments/specialization/N7KFC6QD7MLY",
                    "heading": "Machine Learning Specialization",
                    "provider": "DeepLearning.AI, Stanford University",
                    "date": "2023 Sep",
                    "skills": [
                        "Logistic Regression", "Artificial Neural Network", "Linear Regression", "Decision Trees", "Recommender Systems"
                    ]
                },
                {
                    "imgUrl": "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~PUJTVYRB6VUH/CERTIFICATE_LANDING_PAGE~PUJTVYRB6VUH.jpeg",
                    "url": "https://www.coursera.org/account/accomplishments/verify/PUJTVYRB6VUH",
                    "heading": "Unsupervised Learning, Recommenders, Reinforcement Learning",
                    "provider": "DeepLearning.AI, Stanford University",
                    "date": "2023 Sep",
                    "skills": [
                        "Anomaly Detection", "Unsupervised Learning", "Reinforcement Learning", "Collaborative Filtering", "Recommender Systems"
                    ]
                },
                {
                    "imgUrl": "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~UCPAQBHRPG9T/CERTIFICATE_LANDING_PAGE~UCPAQBHRPG9T.jpeg",
                    "url": "https://www.coursera.org/account/accomplishments/verify/UCPAQBHRPG9T",
                    "heading": "Advanced Learning Algorithms",
                    "provider": "DeepLearning.AI, Stanford University",
                    "date": "2023 Sep",
                    "skills": [
                        "Tensorflow", "Advice for Model Development", "Artificial Neural Network", "Xgboost", "Tree Ensembles"
                    ]
                },
                {
                    "imgUrl": "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~CH986GZYDD23/CERTIFICATE_LANDING_PAGE~CH986GZYDD23.jpeg",
                    "url": "https://www.coursera.org/account/accomplishments/verify/CH986GZYDD23",
                    "heading": "Supervised Machine Learning: Regression and Classification",
                    "provider": "DeepLearning.AI, Stanford University",
                    "date": "2023 Sep",
                    "skills": [
                        "Linear Regression", "Regularization to Avoid Overfitting", "Logistic Regression for Classification", "Gradient Descent", "Supervised Learning"
                    ]
                },
                {
                    "imgUrl": "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~N6CPA33SQE9J/CERTIFICATE_LANDING_PAGE~N6CPA33SQE9J.jpeg",
                    "url": "https://www.coursera.org/account/accomplishments/verify/N6CPA33SQE9J",
                    "heading": "Structuring Machine Learning Projects",
                    "provider": "DeepLearning.AI",
                    "date": "2021 Jul",
                    "skills": [
                        "Decision-Making", "Machine Learning", "Deep Learning", "Inductive Transfer", "Multi-Task Learning"
                    ]
                },
                {
                    "imgUrl": "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~72ZR3KWXJ3G7/CERTIFICATE_LANDING_PAGE~72ZR3KWXJ3G7.jpeg",
                    "url": "https://www.coursera.org/account/accomplishments/verify/72ZR3KWXJ3G7",
                    "heading": "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
                    "provider": "DeepLearning.AI",
                    "date": "2021 Jul",
                    "skills": [
                        "Tensorflow", "Deep Learning", "hyperparameter tuning", "Mathematical Optimization"
                    ]
                },
                {
                    "imgUrl": "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~8F7CV93L9CND/CERTIFICATE_LANDING_PAGE~8F7CV93L9CND.jpeg",
                    "url": "https://www.coursera.org/account/accomplishments/verify/8F7CV93L9CND",
                    "heading": "Neural Networks and Deep Learning",
                    "provider": "DeepLearning.AI",
                    "date": "2021 Jul",
                    "skills": [
                        "Artificial Neural Network", "Backpropagation", "Python Programming", "Deep Learning", "Neural Network Architecture"
                    ]
                },
            ]
        }
    }

    popCertificate(certificate)
    {
        Swal.fire({
            imageUrl: certificate.imgUrl
        })
    }

    makeSkills(k)
    {
        return (
            <div className="cSkill">{k}</div>
        )
    }

    makeCertificate(k){
        const skills = k.skills;
        return (
            <div className="cHolder">
                <div className="cImageHolder" onClick={()=>this.popCertificate(k)}>
                    <img className="cImage" src={k.imgUrl}></img>
                </div>
                <div className="cDescHolder">
                    <div className="cHeading">{k.heading}</div>
                    <div className="cProvider">{k.provider}</div> 
                    <div className="cDate">{k.date}</div>
                    <div className="cSkills">
                        {
                            skills.map((key) => this.makeSkills(key))
                        }
                    </div>

                    <a href={k.url} className="cCredential">
                        Show Credential
                    </a>
                </div>
            </div>
        )

    }


    render(){

        const certificates = this.state.certificates;

        return <div className="certificatesPage">
            <div className="certificatesPane">
                {
                    certificates.map((key)=> this.makeCertificate(key))
                }
            </div>
        </div>
    }
}

export default Certificates
