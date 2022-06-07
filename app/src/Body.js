import React from 'react'
import Projects from './Projects'
import ProjectInfo from './ProjectInfo'
import Sidebar from './Sidebar'

function Main() {

    const projectsData = ProjectInfo.map(project =>
        <Projects
            key={project.id}
            title={project.title}
            description={project.description}
        />
    )

    return (
        <div className="container container-flex">
            <Sidebar />
            <main className="main-container">

                <article className="section">
                    <h2 className="section-title">Background</h2>
                    <p className="article-body">About me About me About me About me About me About me About me About me About me
                        About me About me About me About me About me About me About me About me About me About me About me About me
                        About me About me About me About me About me About me About me About me About me About me About me About me About me
                        About me About me About me About me About me About me About me About me About me About me About me About me About me
                        About me About me About me About me About me About me About me About me About me About me About me About me About me
                        About me About me About me About me About me About me About me About me About me About me About me About me About me </p>
                </article>


                <article className="section">
                    <h2 className="section-title">Projects</h2>
                    <p className="section-body">
                        {projectsData}
                    </p>
                </article>
            </main>
        </div>
    )
}

export default Main