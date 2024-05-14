import './Project.css';
import './Projects.css';
export default function Project({ project }) {
    return(
      <article className={"project card"}>
          <div className={"projects container"}>
              <div className={"project image"}>
                  <img src={project.image}/>
                  <a href={project.url} className={"projects-button b"}>
                      <i className='bx bxs-right-arrow-square'></i>
                  </a>
              </div>
              <div className={"projects content"}>
                  <h2 className={"projects title"}>{project.name}</h2>
                  <p className={"projects desc"}>{project.description}</p>
              </div>
              <div className={"projects-button"}>
                  <a href={project.git} target={"_blank"} className={"projects_link"}>
                      <i className='bx bxl-github'></i> View
                  </a>
              </div>
              <div className={"tags"}>
                  {
                      project.tags.map((tag, index) => {
                          return <div className={"tag"} key={index}>{tag}</div>
                      })
                  }
              </div>
          </div>
      </article>
    );
}