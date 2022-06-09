import React from 'react'
import Sidebar from './Sidebar'
import LambdaVibe from './ProjectComponents/LambdaVibe'
import GatorMart from './ProjectComponents/GatorMart'
import TankGame from './ProjectComponents/TankGame'
import Discord from './ProjectComponents/Discord'
import Itinerary from './ProjectComponents/Itinerary'
import Languages from './BackgroundComponents/Languages'
// import languageData from './BackgroundComponents/languageData'


function Main() {
    // const [readMore, setReadMore] = useState(false);
    return (
        < div className="container container-flex" >
            <Sidebar />
            <main className="main-container">
                <article className="section">
                    <h2 className="section-title" id="background">Background</h2>
                    <p className="article-body">Hello World! I'm Melissa, a front-end developer with a Bachelor's of Science in Computer Science from San Francisco State University.
                        I have a fine arts background and I've always loved designing user-centered applications, and I <strong>love</strong> to see my
                        creations used by people. I have full-stack development experience, but my forte is UX/UI design. I have a great
                        interest for design, ever since I discovered Livejournal in High School, and learned what CSS is. I'm looking forward to
                        working on some projects in the future to showcase my passion and talent for front-end design.</p>

                    <p className="article-body">What sets me apart from others is my communication skills. While I was in school, I also
                        worked full time as a bartender and bar manager. While I had many responsibilities in regards to the restaurant,
                        one of the "unspoken" job requirements is to be a good listener. I listened to my guests as they spoke about their jobs,
                        their lives, and whatever else was on their mind, and I formed cordial relationships with many of my regulars. It was easy for me
                        to take my communication skills and apply it to several team projects that I took part in. Between running a busy bar and software development,
                        it was clear to see that teamwork is fundamental - and one of the core tenets of teamwork is effective communication. I will always step up to the plate.</p>

                    <p className="article-body">When I do have free time, I enjoy long distance running, yoga, pilates, cooking, painting, and reading. My passions include
                        wellness, mental health, and environmental causes.</p>
                </article>
                <article className="section">
                    <h2 className="section-title" id="languages">Technologies</h2>
                    <p className="article-body">{Languages}</p>
                </article>


                <article className="section">
                    <h2 className="section-title" id="projects">Projects</h2>
                    <p className="section-body">
                        <LambdaVibe />
                        <GatorMart />
                        <TankGame />
                        <Discord />
                        <Itinerary />
                    </p>
                </article>

            </main>
        </div>
    )
}


export default Main