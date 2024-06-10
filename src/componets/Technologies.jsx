
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { motion} from "framer-motion"
const setMotion=(duration)=>{

  return{
    initial:{y:-10},
    animate:{
      y:[10,-10],
      transition:{
        ease:"linear",
        duration:duration,
      repeat:Infinity,
      repeatType:"reverse"}
    }
  }
}
function Technologies() {
  return <div className="border border-neutral-800 pb-24">
<h1 className="my-20 text-center text-4xl">
    Technologies
</h1>
<motion.div initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.5, duration:1}}  className="flex flex-wrap items-center justify-center gap-4">
    <motion.div variants={setMotion(1.5)} initial="initial" animate="animate"  className="rounded-2xl border-4 border-neutral-800 p-4">
      <RiReactjsLine className="text-7xl text-cyan-400" />
    </motion.div>
    <motion.div variants={setMotion(3)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
      <TbBrandNextjs className="text-7xl" />
    </motion.div>
    <motion.div variants={setMotion(5)}
          initial="initial"
          animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
      <SiMongodb className="text-7xl text-green-500" />
    </motion.div>
    <motion.div variants={setMotion(2)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
      <DiRedis className="text-7xl text-red-900" />
    </motion.div>
    <motion.div variants={setMotion(1)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
      <FaNodeJs className="text-7xl text-green-700" />
    </motion.div>
</motion.div>
  </div>;
}

export default Technologies;
// initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.5, duration:1}}