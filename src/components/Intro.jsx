// import React from 'react'
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);


// function Intro() {
//     useGSAP(()=> {
//         var t1 = gsap.timeline(); 
//         t1.to('.intro' , { 
//             // top : '-100vh', 
//             scale: 2,
//             duration: 1,
//         },"d")
//         t1.to('.mi2' , { 
//             // top : '-100vh', 
//             scale: 2,
//             duration: 1,
//         },"d")
//         t1.to('.intro ' , {
//             opacity: 0
//         },'a')
//         t1.to('.mi' ,{
//             // top : '-100vh', 
//             opacity: 0, 
//             // scale:2, 
//             // duration : 
//         },'a')
//         t1.to('.intro' , { 
//             y: '-100vh'
//         })
//         t1.to('.mi' , { 
//             y: '-100vh'
//         })
//         t1.to('.mi2' , { 
//             y: '-100vh'
//         })
//     })

//   return (
    
//     <div className='mi absolute top-0 w-full h-[100vh] overflow-hidden bg-red-500 z-[9999999]  '>
//         <div className='mi2 absolute top-[5%] left-[10%] w-[80%] h-[90vh] overflow-hidden bg-green-500 z-[9999999]  '>
//          <div className='intro  absolute top-[25%]  left-[25%]  z-[999] w-[50%] h-[50vh] bg-black text-white flex items-center justify-center ' >WELCOME BACK!!!!</div>
//          </div>
//     </div>
   
//   )
// }

// export default Intro