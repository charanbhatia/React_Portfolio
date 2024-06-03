import { EXPERIENCES } from "../constants"

const Experince = () => {
    return (
        <div id="experience" className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl"> Experience</h2>
            <div>
                {EXPERIENCES.map((Experince, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{Experince.year}</p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mv-2 font-semibold">
                                {Experince.role}-{" "}
                                <span className="text-sm text-purple-100">
                                    {Experince.company}
                                </span>
                            </h6>
                            <p className="mb-4 text-neutral-400">{Experince.description}</p>
                            {Experince.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800" >
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

export default Experince
