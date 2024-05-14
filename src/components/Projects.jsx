import './Projects.css';
import projects from '../projects.json';
import Project from "./Project";
import ProjectCard from "./ProjectCard";
export default function Projects() {
    return (
        <section className={"projects"} id={"projects-sec"}>
            <h1>MY EXPERIENCE</h1>
            <div className={"holder"}>
                {
                    projects.map((project, index) => {
                        return <ProjectCard project={project} key={index}/>
                    })
                }
            </div>
        </section>
    );
}