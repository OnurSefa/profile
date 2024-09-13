import React from "react";


function Home() {
    return (
        <div className="home">
            <div className="homeLeft">
                <div className="profileImage">
                    <img className="profileImageImage" src={`${process.env.PUBLIC_URL}/me.jpg`} alt="profile image"></img>
                </div>
                
                <div className="contactHolder">
                    <div className="contact">

                        <div className="contactInstance">
                            <div className="contactName">
                                <b>E-mail</b>
                                
                            </div>
                            <div className="contactDirection">
                                onursefaozcibik@gmail.com
                            </div>
                        </div>
                        <div className="contactInstance">
                            <div className="contactName">
                                <b>Phone</b>
                                
                            </div>
                            <div className="contactDirection">
                                +(90) 505 473 28 22
                            </div>
                        </div>
                        <div className="contactInstance">
                            <div className="contactName">
                                <b>Address</b>
                            </div>
                            <div className="contactDirection">
                                Esentepe District, Zincirlidere Street, Sisli/Istanbul, 34394, Turkey
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homeRight">
                <div className="homeRightText">
                    <div className="homeRightParagraph">
                    &emsp;I am Onur Sefa Ozcibik, a master's degree student in Computer Engineering at Bogazici University. I also graduated
                    from the same department at June 2022. Bogazici University stands as one of Turkey's foremost 
                    institutions in this field which is why I chose to pursue my education in there. Guidance of my professors and 
                    experience I gain are priceless.
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;My academic pursuits align with my passion for artificial intelligence, computer vision, and natural language 
                    processing. I enjoy resolving challenging real-world problems by researching, proposing, and constructing deep 
                    learning models. Prior to my current position, I actively participated in the NLP Lab and had the privilege of 
                    auditing the CoLoRs AI Lab at Bogazici University. I believe the only way to build my own personality is unleashing
                    my full potential in ever means possible. Following this ideom, I improve myself with continuous learning by reading,
                    implementing, and exploring cutting-edge research papers and adapting these various approaches to my ongoing projects. 
                    I am eager to pursue further opportunities for skill development in my passionate fields.
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;My art journey began in high school and has continued to bring color to my life. I have curated a studio-like 
                    environment in my apartment for oil painting, a medium through which I find peace in expressing my emotions on canvas. 
                    Sharing my artwork with others brings me great joy, and you can view my creations both on this <a href="/art">platform</a> and 
                    through my <a href="https://www.instagram.com/artvoke/">Instagram page</a>.
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;Feel free to reach out to me anytime, whether it's about deep learning, art, or any other topic that 
                    piques your interest. I'm always open to meaningful conversations and connections.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home