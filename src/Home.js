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
                                Esentepe District, Zincirlidere Street, Sisli/Istanbul, 34394, Turkey
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homeRight">
                <div className="homeRightText">
                    <div className="homeRightParagraph">
                    &emsp;I am Onur Sefa Ozcibik, a graduate of Bogazici University with a Bachelor of Science (B.S.) in the Department 
                    of Computer Engineering, which I completed in June 2022. Bogazici University stands as one of Turkey's foremost 
                    institutions in this field, and the experiences I gained during my time there were invaluable. I firmly believe that 
                    a bright future lies ahead.
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;My academic pursuits align with my passion for artificial intelligence, computer vision, and natural language 
                    processing. I thrive on tackling intricate deep learning projects, especially those that present a challenge. 
                    My forte lies in proposing and constructing deep learning models tailored for real-world applications.
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;Prior to this, I actively participated in the NLP Lab and had the privilege of auditing the CoLoRs AI Lab at 
                    Bogazici University. This immersive experience allowed me to continually explore, read, and implement cutting-edge 
                    research papers, enabling me to adapt various approaches to my ongoing projects. I am eager to seize further 
                    opportunities for skill development in this ever-evolving field.
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;Beyond the realm of technology, my interests extend to the world of art. My journey began in high school and 
                    has continued to flourish. Within the confines of my apartment, I have curated a studio-like environment for oil 
                    painting, a medium through which I find peace in expressing my emotions on canvas. Sharing my artwork with others 
                    brings me great joy, and you can view my creations both on this <a href="/art">platform</a> and through 
                    my <a href="https://www.instagram.com/artvoke/">Instagram page</a>.
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;Art and technology aside, my life finds its rhythm in the appreciation of various forms of storytelling and 
                    artistic expression. In cinema, I gravitate towards mind-bending classics such as 'Memento,' 'Predestination,' 
                    'Mr. Nobody,' and the thought-provoking 'Fight Club.'
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;My life is serenaded by a diverse musical tapestry. From the thunderous riffs of metal and rock to the 
                    entrancing beats of techno and house, and the timeless elegance of classical piano, music resonates deeply 
                    within my soul.
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;While the demands of life have afforded me less leisure time for writing, my love for the craft remains 
                    unwavering, especially when it comes to composing stories and essays in my native Turkish.
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;As summer rolls around, I embrace adventure wholeheartedly. An enthusiastic traveler, I embark on journeys 
                    that take me far and wide. Long bike rides and passionate camping trips are my preferred modes of exploration. 
                    More recently, I've discovered a newfound passion in photography, allowing me to capture the beauty and fleeting 
                    moments of life, preserving them in time to share with others.
                    </div>
                    <div className="homeRightParagraph">
                    &emsp;Feel free to reach out to me anytime, whether it's about deep learning, art, or any other topic that 
                    piques your interest. I'm always open to meaningful conversations and connections.
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