import { motion } from "framer-motion";
import profilephoto from "../assets/charanbh.jpeg";

const delay_container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    }
})

const Hero = () => {
    return (
        <div id="home" className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={delay_container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                        >
                            Charanjeet Bhatia
                        </motion.h1>
                        <motion.span
                            variants={delay_container(0.7)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            Software Developer
                        </motion.span>
                        <motion.p
                            variants={delay_container(1.2)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            I'm deeply passionate about cybersecurity, constantly exploring its intricate landscapes to better understand and contribute to our digital safety. Currently, I'm pursuing my education at Scaler School of Technology, honing my skills to become a standout software engineer in the top 1%.

                            I also have a knack for translating complex technical concepts into easily digestible content. As a technical content writer, I enjoy bridging the gap between intricate technology and comprehensible information.
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilephoto}
                            alt="Charan Bhatia"
                            className="rounded-lg w-50 h-50 lg:w-90 lg:h-82"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
