import { motion } from 'framer-motion';
import React from 'react' ;
import { FaArrowUpLong } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Landingpage() {
    useGSAP(()=>{
        const t1 = gsap.timeline() ; 

        t1.from('.textstructure', { 
            delay:1.3,
            opacity: 0
        })
        t1.from('.three', { 
            delay:.2,
            opacity: 0
        })
    })
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="textstructure mt-40 px-20">
            {['we create' , 'eye opening' , 'presentations'].map((items , index) => {
                return <div className="masker ">
                    <div className='w-fit flex items-center'>
                        {index === 1 && (
                        <motion.div initial={{width:0}} animate={{width: "9vw"}} transition={{ease :[0.76, 0, 0.24, 1] , duration: 1 , delay: 2}} className='rounded-md w-[9vw] h-[6vw] relative top-[.5vw] bg-green-500'></motion.div>
                         )}
                    <h1 className='flex items-center uppercase text-9xl leading-[7vw] tracking-tighter font-medium font-["Test Founders Grotesk X-Cond SmBd"]'>
                    {items}
                    </h1>
                    </div>
                
            </div>
            })}
            
           
        </div>
        <div className='three border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
            {['for public and pubvate companies' , 'from the first pitch to ipo'].map((item , index ) => (
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            ))}
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[2px] border-zinc-400 font-light text-md uppercase rounded-full'>start the project</div>
                <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-400 rounded-full '>
                   <span className='rotate-[45deg]'>
                   < FaArrowUpLong />
                    </span> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landingpage