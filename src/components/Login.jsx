import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Login() {
  useGSAP(() => {
    const menu = document.querySelector(".menu");
    const cross = document.querySelector(".menu2");
    const tl = gsap.timeline();
    tl.to(".nav2", {
      top: 0,
      duration: 0.5,
      opacity: 1,
    });

    gsap.to('.menu' , {
      y:20 , 
      repeat: -1, 
      yoyo: true ,
      duration:3
    })
    gsap.to('.menu2' , {
      y:20 , 
      repeat: -1, 
      yoyo: true ,
      duration:3,
      delay:1
    })

    
    gsap.to(menu, { x: -200, rotate: "-20deg", duration: 4, scale: 2 , delay:1 ,opacity: 1});
    gsap.to(cross, { x: -350, rotate: "-40deg", duration: 4, scale: 3 , delay:1 ,opacity: 1});

    tl.pause();
    menu.addEventListener("click", function () {
      tl.play();
    });

    cross.addEventListener("click", function () {
      tl.reverse();
    }); 

    
   
    
  });
  return (
    <>
      <div classNameName="relative">
        <div className="z-[100000] nav2  absolute top-[-101vh] backdrop-opacity-10 backdrop-invert bg-red-500/80 w-full h-[100vh] ">
          <div className="flex items-center bg-black justify-center h-[100vh] w-[59%] ">
            <div className="w-[60%] h-[70%] bg-gradient-to-r from-red-500   to-pink-500 rounded-xl flex items-center justify-center flex-col ">
              <div className=" w-[60%] h-[75%] flex flex-col gap-4">
              <div className=" leading-[3.2rem]">
                 <h1 className="text-[3rem]">HELLO,</h1>
                 <h1 className="text-[3rem] font-bold">WELCOME !</h1>
              </div>
            <input
              className="text-white placeholder-white p-3 rounded-full border-[3px] bg-transparent "
              type="text"
              placeholder="Email ID"
            />
            <input
              className="text-white placeholder-white p-3 rounded-full border-[3px] bg-transparent "
              type="password"
              placeholder="Password"
            />
            <div className="flex justify-between">
              <div className="flex gap-1 items-center ">
                <input  type="checkbox"  />Remember me
              </div>
              <a className="text-blue-500" href="">Forget Password?</a>
            </div>

            <button className="bg-white p-3 text-black rounded-full font-semibold text-black" >Login</button>

            <div className="flex justify-center gap-5">
            <a className="text-[2rem]" href=""><FaFacebook /></a>
            <a className="text-[2rem]" href=""><FaInstagram /></a>
            <a className="text-[2rem]" href=""><FaXTwitter /></a>
            </div>
           
            </div>
              </div>
           
            
          </div>
        </div>
      </div>
      <div className="opacity-[0] menu bg-black text-white w-[5rem] h-[5rem] m-3 p-3 absolute z-[100000] top-[20vh] right-[0]">
        SIGN IN 
      </div>
      <div className="opacity-[0] menu2 bg-red-500 text-white w-[5rem] h-[5rem] m-3 p-3 absolute z-[100000] top-[40vh] right-[0] overflow-hidden">
        CROSS
      </div>
    </>
  );
}

export default Login;
