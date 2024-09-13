import React from 'react';

class Projects extends React.Component{
    constructor(){
        super();

        this.state = {
            projects: [
                {
                    "title": "U-Net Monocular Relative Depth Estimation",
                    "date": "September 2024",
                    "description": "I have adapted DenseDepth methodology to extract depth maps from images.",
                    "redirect": "/projects/depth",
                    "image": "https://onur-sefa-bucket.s3.eu-west-1.amazonaws.com/milestone+(1).png"
                },
                {
                    "title": "Generating Art using Generative Adversarial Networks",
                    "date": "June 2022",
                    "description": "This project was my graduation project that lasted for two semesters. I have worked with my colleague. We used VQGAN and CLIP models to achieve good results. I have reimplemented the loss function to locate different text prompts to different locations on the generated images.",
                    "redirect": "/projects/generatingart",
                    "image": "https://user-images.githubusercontent.com/12373950/202875753-61866f25-7cfa-45c1-b1db-3a6545b8379f.png"
                },
                // {
                //     "title": "Address Line Detection",
                //     "description": "I have adapted DenseDepth methodology to extract address lines from invoice images.",
                //     "redirect": "/projects/address",
                //     "image": "https://user-images.githubusercontent.com/12373950/202281280-902bd6b6-d1ed-4d98-b547-dbbcb78c68a3.png"
                // },
                {
                    "title": "Tax Office ID Extraction from Expense Documents",
                    "date": "January 2022",
                    "description": "It is crucial to extract the Tax ID values from expense documents because they define the related tax offices. I used the autoencoder, RNN, and attention mechanism.",
                    "redirect": "/projects/taxid",
                    "image": "https://user-images.githubusercontent.com/12373950/202869526-f48e8411-f27b-4a93-b72a-44508d19133c.png"
                },   
                {
                    "title": "Open Domain End-to-End Question Answering System built on BERT",
                    "date": "June 2022",
                    "description": "The project includes a document retriever and document reader modules to answer questions using its open domain. The retriever selects the correct paragraphs and then the reader extracts the correct answers from selected sentences.",
                    "redirect": "/projects/questionanswer",
                    "image": "https://user-images.githubusercontent.com/12373950/202878698-f2145c0f-7b53-435d-8603-5250ec9330c9.png"
                },
                {
                    "title": "Data Visualization using PCA and t-SNE",
                    "date": "December 2021",
                    "description": "I used dimensionality reduction techniques on the MNIST dataset to compare the results. Visualization of multidimensional data on a 2D plane is not an easy task but the mentioned methods achieve good results. ",
                    "redirect": "/projects/pca",
                    "image": "https://user-images.githubusercontent.com/12373950/202245488-d3e69941-4c52-44d3-98e4-cdc7478bae65.png"
                },
                {
                    "title": "Detection of Expense Documents' Payment Type",
                    "date": "September 2022",
                    "description": "The payment method of an expense document is crucial information for companies that offer company credit cards for their employees. The project aims to detect the payment type using photographs of expense documents.",
                    "redirect": "/projects/paymenttype",
                    "image": "https://user-images.githubusercontent.com/12373950/202870359-1f672a85-319f-4103-ba5e-82c7875592c5.png"
                },             
                {
                    "title": "Credit Card Number Extraction from Expense Documents",
                    "date": "October 2022",
                    "description": "Companies should pay the expenses of the employees only if the employee does not pay the bill with a company credit card. The project aims to detect the 4 last digits of the used credit card using photographs of expense documents.",
                    "redirect": "/projects/creditcard",
                    "image": "https://user-images.githubusercontent.com/12373950/202870647-3893771d-c014-4692-b72a-935cdda328a4.png"
                },
                {
                    "title": "Inspectation of Outlier Detection Methodologies",
                    "date": "November 2021",
                    "description": "This project aims to display the main differences between two outlier detection methods: the Isolation Forest Model and the Local Outlier Factor. It also tries to give intuition about both methods.",
                    "redirect": "/projects/outlier",
                    "image": "https://user-images.githubusercontent.com/12373950/202242561-d6078a8b-5c2e-4f5f-84a9-c0d38c2fd6e7.png"
                },
                // {
                //     "title": "Tax Office Detection from Invoices",
                //     "description": "Detection of Tax Office names from invoices. This field is crucial for accounting.",
                //     "redirect": "/projects/taxoffice",
                //     "image": "https://user-images.githubusercontent.com/12373950/202870783-1e5bb1d3-35af-4efe-91de-ebc39e5bb66b.png"
                // },
                {
                    "title": "Expense Document Classification",
                    "date": "August 2023",
                    "description": "There are several invoice types and detection of them highly affects posterior operations.",
                    "redirect": "/projects/invoicetype",
                    "image": "https://user-images.githubusercontent.com/12373950/202871487-90a00df6-0dd0-49b4-a8d0-a436955a43ee.png"
                },
                // {
                //     "title": "Variable Minimization using Bisection Method and Steepest Descent Method",
                //     "description": "Two methods are implemented to detect minimum point given the related functions.",
                //     "redirect": "/projects/variableminimization",
                //     "image": "https://user-images.githubusercontent.com/12373950/202872372-a525dc53-7129-49d2-84e8-3bcf368a8ed7.png"
                // },
                // {
                //     "title": "Global Maxima Point Detector",
                //     "description": "Global maxima point detection methods and examples are investigated and implemented.",
                //     "redirect": "/projects/globalmaxima",
                //     "image": "https://user-images.githubusercontent.com/12373950/202873622-d7b051aa-aedb-4fff-a10e-8118b89152c7.png"
                // },
                // {
                //     "title": "Decision Tree",
                //     "description": "I have implemented a decision tree algorithm that classifies points lie on a plane. Aim of the project was to visualize results of this algorithm in different stiuations and show when this algorithm is applicable and when it is not.",
                //     "redirect": "/projects/decisiontree",
                //     "image": "https://user-images.githubusercontent.com/12373950/202244829-a0b8a47e-395c-4dc9-9aa5-c9e8bacd048d.png"
                // },
                // {
                //     "title": "Robot Localization Logic using Prolog",
                //     "description": "",
                //     "redirect": "/projects/robotlocalization",
                //     "image": "https://user-images.githubusercontent.com/12373950/202246832-b760adf1-260d-42b3-a024-5357bd2cd28c.png"
                // },
                // {
                //     "title": "Different Approaches of Minimax on Skewed Chess Game",
                //     "description": "",
                //     "redirect": "/projects/minimax",
                //     "image": "https://user-images.githubusercontent.com/12373950/202247906-51b71f87-c409-456c-aae3-4b647864903f.png"
                // },
                // {
                //     "title": "Tents Puzzle on Scheme",
                //     "description": "",
                //     "redirect": "/projects/tentspuzzle",
                //     "image": "https://user-images.githubusercontent.com/12373950/202248474-e7e27315-65ae-415f-a0b3-9fee0f36c992.png"
                // },
                // {
                //     "title": "Song Recommendation System in Prolog",
                //     "description": "",
                //     "redirect": "/projects/songrecommendation",
                //     "image": "https://user-images.githubusercontent.com/12373950/202249069-8c51869f-7bf2-4ee0-8965-f6bb29e9aa8c.png"
                // },
                // {
                //     "title": "PDF Reader",
                //     "description": "",
                //     "redirect": "/projects/pdfreader",
                //     "image": ""
                // },
                // {
                //     "title": "Contex Free Grammer Parser for Turkish",
                //     "description": "ssd de var",
                //     "redirect": "/projects/grammerparser",
                //     "image": ""
                // },
                // {
                //     "title": "Sync Ticket",
                //     "description": "gepsmin syncticket github",
                //     "redirect": "/projects/syncticket",
                //     "image": ""
                // },
                // {
                //     "title": "WatchDog",
                //     "description": "gepsmin watchdog github",
                //     "redirect": "/projects/watchdog",
                //     "image": ""
                // },
                // {
                //     "title": "Multi Processing using MPI",
                //     "description": "gepsmin MPI github",
                //     "redirect": "/projects/mpi",
                //     "image": ""
                // },
                // {
                //     "title": "identic: Traversing Files or Directories",
                //     "description": "gepsmin identic github",
                //     "redirect": "/projects/identic",
                //     "image": ""
                // },
                // {
                //     "title": "QT Memory Game",
                //     "description": "gepsmin qt memory game",
                //     "redirect": "/projects/qtmemorygame",
                //     "image": ""
                // },
                // {
                //     "title": "Data Structures and Algorithms Course Projects",
                //     "description": "gepsmin assignemnt ile baslayan projeler, hepsini bir araya getirip sunucam ayri ayri sacma olur gibi",
                //     "redirect": "/projects/datastructures",
                //     "image": ""
                // },
                // {
                //     "title": "Movie App",
                //     "description": "eger guncellemeey firsat bulursam ekleyecegim",
                //     "redirect": "/projects/movieapp",
                //     "image": ""
                // },
                // {
                //     "title": "Turkish Preprocessing",
                //     "description": "OnurSefa github hesabinda var ama sanirim o final hali degil, ssd deki versiyonu bitmis hali sanirim",
                //     "redirect": "/projects/preprocessing",
                //     "image": ""
                // },
            ]
        }
    
    }

    redirectToProject(url){
        window.location.href = url;
    }

    makeProject(k){
        return (<div onClick={()=>this.redirectToProject(k.redirect)} className='projectSection'>
            <div className='projectImageSection'>
                <img className='projectInstanceImage' src={k.image} alt="project image"></img>
            </div>
            <div className='projectDescriptionSection'>
                <div className="projectTitle">
                    <b>{k.title}</b>
                </div>
                <div className="projectDate">
                    {k.date}
                </div>
                <div className="projectDescription">
                    {k.description}
                </div>
            </div>

        </div>

        )
    }


    render(){
        let projects = this.state.projects;

        return <div className='projectsHolder'>
            <div className='projectsSpace'></div>
        <div className="projects">
            {/* <div className="projectsText">
            &emsp;There are some of my projects. I upload them when I find an opportunity, so not all my projects are listed here. Also, most of them do not include related
            code parts. To reach them, or ask details about the projects, you can mail me.
            </div> */}
            <div className='projectSections'>
                {
                    projects.map((key)=>this.makeProject(key))
                }
            </div>
        </div>
        </div>
    }
}

export default Projects