import React from "react";


function Home() {
    return (
        <div className="home">
            <div className="homeLeft">
                <div className="profileImage">
                    <img className="profileImageImage" src="https://user-images.githubusercontent.com/12373950/202808122-f57c8245-8abf-4893-987b-f1a2eea8e15e.png" alt="profile image"></img>
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
                                Rumeli Hisari District Kore Okulalti Street Sariyer/Istanbul 34470 Turkey
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homeRight">
                <div className="homeRightText">
                    <div className="homeRightParagraph">
                    &emsp;I am Onur Sefa Ozcibik. I graduated from Bogazici University Computer Engineering, Turkey’s one of the most qualified universities in the field. The experience I received was precious. Even though I am only 24, I feel a bright future awaits me.
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;My research interests are artificial intelligence, computer vision, and natural language processing. I love to deal with deep learning projects, especially challenging ones. I generally propose and build deep learning models for real-world scenarios.
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;I previously attended CoLoRs AI Lab and NLP Lab at Bogazici University. Continuous searching, reading, and implementing state-of-the-art papers
                    enabled me to adapt several different approaches to my current projects. I am eager to find opportunities to develop this skill further.
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;My interest in art started in high school but never ended. I do oil painting in my flat. To do so, I have organized the place to obtain a 
                    studio-like environment. Expressing my feelings through the canvas and paint mesmerizes me. I like to share my artwork with people. 
                    Also, they can be viewed through this <a href="/art">platform</a> and my <a href="https://www.instagram.com/artvoke/">Instagram page</a>.
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;I love to watch movies from different genres. I think I was born to listen to music and my favorite genres are metal, rock, progressive rock, techno, house,
                    and classical piano. I love to write stories and essays in Turkish but I can not find leisure time for this activity anymore. In summer times, I love traveling, biking, and camping.
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;You can contact me anytime about deep learning, art, and my projects.
                    </div>
                    <div>
                    &emsp;<a href="https://github.com/OnurSefa/profile/blob/main/Resume_OnurSefa_Ozcibik.pdf">My Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home