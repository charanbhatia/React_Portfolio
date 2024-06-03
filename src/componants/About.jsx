import image from "../assets/blacknwhite.jpeg"
import { motion } from "framer-motion";

const About = () => {
    return (
        <div id="about" className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">About
                <span className="text-neutral-500">Me</span>
            </h2>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.7 }}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl" src={image} alt="about-image" />
                    </div>

                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.7 }}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">I have a deep passion for cybersecurity, continuously exploring its intricate landscapes to enhance our digital safety. Currently, I'm pursuing my education at Scaler School of Technology, where I am honing my skills to become a top-tier software engineer. I have a talent for translating complex technical concepts into easily digestible content, and as a technical content writer, I enjoy bridging the gap between intricate technology and comprehensible information.</p>
                    </div>

                </motion.div>
            </div>

        </div>
    )
}

export default About
