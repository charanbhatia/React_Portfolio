import { PROJECTS } from "../constants"

const Project = () => {
    return (
        <div id="projects" className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Projects</h2>
            <div>
                {PROJECTS.map((Project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{Project.title}</h6>
                            <p className="mb-4 text-neutral-400">{Project.description}</p>
                            {Project.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project
