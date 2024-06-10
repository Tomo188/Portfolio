import { PROJECTS } from "../assets/contents";
import {motion} from "framer-motion"

const Projects = () => {
  return <div className="border-b border-neutral-900 pb-4">
    <motion.h1 whileInView={{y:0,opacity:1}} initial={{y:-100,opacity:0}} transition={{duration:1}}  className="my-20 text-center text-4xl">Projects</motion.h1>
    <div>
        {PROJECTS.map((project,key)=>(
        <div  key={key} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div whileInView={{x:0,opacity:1}} initial={{x:-100,opacity:0}} transition={{duration:1}} className="w-full lg:w-1/4">
                            <img src={project.image} alt={project.title} width={150} height={150} />
            </motion.div>
     <motion.div whileInView={{x:0,opacity:1}} initial={{x:100,opacity:0}} transition={{duration:1}} className="w-full max-w-xl lg:w-3/4">
        <h6 className="mb-2 font-semibold">{project.title}</h6>
        <p className="mb-4 text-neutral-400">{project.description}
        {project.technologies.map((tech,index)=>(
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium" key={index}>{tech}</span>
        ))}</p>
    </motion.div>
    </div>
    ))}
    </div>
   
  </div>;
};

export default Projects;
