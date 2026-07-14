import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// ── Pista palette ──────────────────────────────────────────
// Main:    #93C572
// Dark:    #6A9E4F
// Deeper:  #3D6B2C
// Tint:    #EAF4E1
// Border:  #C5E1AE
// ──────────────────────────────────────────────────────────

const FloatingButtons = () => {

  const [show,setShow]=useState(false);


  useEffect(()=>{

    const handleScroll=()=>setShow(window.scrollY>300);

    window.addEventListener("scroll",handleScroll);

    return()=>window.removeEventListener("scroll",handleScroll);

  },[]);



  const scrollTop=()=>{

    window.scrollTo({
      top:0,
      behavior:"smooth"
    });

  };



return(

<div className="
fixed
bottom-6
right-6
flex
flex-col
gap-5
z-50
">


{/* WHATSAPP BUTTON — kept its own brand green */}

<motion.a

href="https://wa.me/9147395588"

target="_blank"

rel="noreferrer"

whileHover={{scale:1.15}}

whileTap={{scale:0.9}}


animate={{

boxShadow:[

"0 0 0px rgba(34,197,94,0.3)",

"0 0 25px rgba(34,197,94,0.8)",

"0 0 50px rgba(34,197,94,0.6)",

"0 0 25px rgba(34,197,94,0.8)",

"0 0 0px rgba(34,197,94,0.3)",

],

}}


transition={{

duration:2,

repeat:Infinity,

ease:"easeInOut",

}}



className="
relative
w-16
h-16
rounded-full
bg-[#25D366]
text-white
flex
items-center
justify-center
shadow-2xl
"

>


<span className="
absolute
inset-0
rounded-full
bg-green-400/30
animate-ping
"/>


<span className="
absolute
-inset-2
rounded-full
bg-green-400/20
blur-xl
animate-pulse
"/>


<FaWhatsapp

size={34}

className="
relative
z-10
drop-shadow-lg
"

/>


</motion.a>






{/* SCROLL TOP BUTTON — recolored to pista */}


<AnimatePresence>

{

show && (


<motion.button


onClick={scrollTop}


initial={{
opacity:0,
y:20,
scale:0.7
}}


animate={{
opacity:1,
y:0,
scale:1
}}


exit={{
opacity:0,
y:20,
scale:0.7
}}



whileHover={{

scale:1.2,

boxShadow:
"0 0 25px rgba(106,158,79,0.7)",

}}



whileTap={{
scale:0.9
}}



className="
w-16
h-16
rounded-full
text-white
flex
items-center
justify-center
shadow-2xl
relative
"

style={{
  background: "linear-gradient(to bottom right, #6A9E4F, #4f7d38, #3D6B2C)",
}}

>


<ArrowUp size={22}/>



{/* Pista Glow Aura */}

<span
className="
absolute
inset-0
rounded-full
blur-2xl
animate-pulse
"
style={{ background: "rgba(147,197,114,0.3)" }}
/>



</motion.button>


)


}


</AnimatePresence>



</div>


);


};


export default FloatingButtons;