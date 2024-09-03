import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react"

function navbar() {
  useGSAP(()=>{
    gsap.from('.logo' , {
      delay: .5,
      y : -80, 
      opacity: 0,
      // stagger: 1, 
      duration: 1
    } )
    gsap.from('.navb' , {
      delay: .5,
      y : -80, 
      opacity: 0,
      // stagger: 1, 
      duration: 1
    } )
    gsap.from('.links a' , {
      delay:.5,
      y : -80, 
      opacity: 0,
      // stagger: 1, 
      duration: 1
    } )



  })

  return (
    <div className='navb fixed z-[99999999] w-full px-20 py-[1.6rem] font-["Neue Montreal"] flex justify-between items-center  bg-red-500/40 '>
        <div className='logo w-[100px] h-[10px] bg-green-600'> 
              <img src="https://mintlify.s3-us-west-1.amazonaws.com/unify-d270b1a5/images/unify_logo_only.png" alt="" />
        </div>
        <div className='links flex gap-10'>
            {['services' , 'our work' , 'about us' , 'insights ', 'contact' ].map((item ,index)=>(<a key={index} className={`text-lg capitalize font-light ${index === 4 && 'ml-32'}`}>{item}</a>))}
        </div>
        {/* <div className=' fixed top-[0] left-[0] w-full h-[5rem] '></div> */}
    </div>
  )
}

export default navbar ; 