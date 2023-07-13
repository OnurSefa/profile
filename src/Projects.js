import React from 'react';

class Projects extends React.Component{
    constructor(){
        super();

        this.state = {
            projects: [
                {
                    "title": "Generating Art using Generative Adversarial Networks",
                    "description": "This project is my graduation project and we were group of 2 undergraduate students. I researched several vision methodologies and implemented a GAN to produce art images more purposefully using VQGAN+CLIP.",
                    "redirect": "/projects/generatingart",
                    "image": "https://user-images.githubusercontent.com/12373950/202875753-61866f25-7cfa-45c1-b1db-3a6545b8379f.png"
                },
                {
                    "title": "Address Line Detection",
                    "description": "I have adapted DenseDepth methodology to extract address lines from invoice images.",
                    "redirect": "/projects/address",
                    "image": "https://user-images.githubusercontent.com/12373950/202281280-902bd6b6-d1ed-4d98-b547-dbbcb78c68a3.png"
                },
                {
                    "title": "Tax Id Field Extraction from Invoices",
                    "description": "Tax Id defines the related tax office, it is crucial to extract this value correctly. I have used autoencoders, RNN, attention, and candidate embedding mechanism.",
                    "redirect": "/projects/taxid",
                    "image": "https://user-images.githubusercontent.com/12373950/202869526-f48e8411-f27b-4a93-b72a-44508d19133c.png"
                },   
                {
                    "title": "Open Domain End-to-End Question Answering System built on BERT",
                    "description": "The project includes document retriever and document reader modules to detect correct paragraphs and then detect correct phrases according to question sentence.",
                    "redirect": "/projects/questionanswer",
                    "image": "https://user-images.githubusercontent.com/12373950/202878698-f2145c0f-7b53-435d-8603-5250ec9330c9.png"
                },             
                {
                    "title": "Credit Card Field Extraction from Inovices",
                    "description": "Repayment of some invoices can done by the credit card information. Finding this information accuratly helps companies.",
                    "redirect": "/projects/creditcard",
                    "image": "https://user-images.githubusercontent.com/12373950/202870647-3893771d-c014-4692-b72a-935cdda328a4.png"
                },
                {
                    "title": "Data Visualization using PCA",
                    "description": "Dimensionality reduction techniques are used on MNIST dataset to view how to visualize multidimensional data on 2D planes. Also, implementation of reconstruction methods of dimensionally reduced images.",
                    "redirect": "/projects/pca",
                    "image": "https://user-images.githubusercontent.com/12373950/202245488-d3e69941-4c52-44d3-98e4-cdc7478bae65.png"
                },
                {
                    "title": "Payment Type Detection of Invoices",
                    "description": "Detecting if the payment type is cash or credit card is essential for some companies.",
                    "redirect": "/projects/paymenttype",
                    "image": "https://user-images.githubusercontent.com/12373950/202870359-1f672a85-319f-4103-ba5e-82c7875592c5.png"
                },
                {
                    "title": "Inspectation of Outlier Detection Methodologies",
                    "description": "This project aims to display main differences betweeen two outlier detection methodologoies: Isolation Forest Model and Local Outlier Factor. It includes implementations of these two methods and comparisons.",
                    "redirect": "/projects/outlier",
                    "image": "https://user-images.githubusercontent.com/12373950/202242561-d6078a8b-5c2e-4f5f-84a9-c0d38c2fd6e7.png"
                },
                {
                    "title": "Tax Office Detection from Invoices",
                    "description": "Detection of Tax Office names from invoices. This field is crucial for accounting.",
                    "redirect": "/projects/taxoffice",
                    "image": "https://user-images.githubusercontent.com/12373950/202870783-1e5bb1d3-35af-4efe-91de-ebc39e5bb66b.png"
                },
                {
                    "title": "Invoice Type Detector",
                    "description": "There are several invoice types and detection of them highly affects posterior models.",
                    "redirect": "/projects/invoicetype",
                    "image": "https://user-images.githubusercontent.com/12373950/202871487-90a00df6-0dd0-49b4-a8d0-a436955a43ee.png"
                },
                {
                    "title": "Variable Minimization using Bisection Method and Steepest Descent Method",
                    "description": "Two methods are implemented to detect minimum point given the related functions.",
                    "redirect": "/projects/variableminimization",
                    "image": "https://user-images.githubusercontent.com/12373950/202872372-a525dc53-7129-49d2-84e8-3bcf368a8ed7.png"
                },
                {
                    "title": "Global Maxima Point Detector",
                    "description": "Global maxima point detection methods and examples are investigated and implemented.",
                    "redirect": "/projects/globalmaxima",
                    "image": "https://user-images.githubusercontent.com/12373950/202873622-d7b051aa-aedb-4fff-a10e-8118b89152c7.png"
                },
                {
                    "title": "Decision Tree",
                    "description": "I have implemented a decision tree algorithm that classifies points lie on a plane. Aim of the project was to visualize results of this algorithm in different stiuations and show when this algorithm is applicable and when it is not.",
                    "redirect": "/projects/decisiontree",
                    "image": "https://user-images.githubusercontent.com/12373950/202244829-a0b8a47e-395c-4dc9-9aa5-c9e8bacd048d.png"
                },
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
            <div className="projectsText">
            &emsp;There are some of my projects. I upload them when I find an opportunity, so not all my projects are listed here. Also, most of them do not include related
            code parts. To reach them, or ask details about the projects, you can mail me.
            </div>
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