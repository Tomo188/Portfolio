
import aboutImg from "../assets/projects/about.jpg"
import { ABOUT_TEXT } from "../assets/contents";
import {motion} from "framer-motion"
function animate(move){
  return {
    initial:{x:move,
    opacity:0},
    visible:{
      x:0,
      opacity:1,
      transition:{
        delay:1,
        duration:1
      }
    }
  }
}
function About() {
  return <div  className="border-b border-neutral-900 pb-4">
  <h1 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span> </h1>
  <div className="flex flex-wrap">
  <motion.div variants={animate(-100)} whileInView="visible" initial="inital" className="w-full lg:w-1/2 lg:pb-8">
    <div className="flex items-center justify-center">
         <img className="rounded-2xl" src={aboutImg} alt="About" />
    </div>
    </motion.div>
    <motion.div variants={animate(100)} initial="initial" whileInView="visible" className="w-full lg:w-1/2">
        <div className="flex justify-center lg:justify-start">
            <p className="my-2 maxw-xl py-6">{ABOUT_TEXT}</p>
        </div>
    </motion.div>
  
  </div>
  </div>;
}

export default About;
