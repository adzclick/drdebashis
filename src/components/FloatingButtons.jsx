import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

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


{/* WHATSAPP BUTTON */}

<motion.a

href="https://wa.me/919836012345"

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






{/* SCROLL TOP BUTTON */}


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
"0 0 25px rgba(147,51,234,0.7)",

}}



whileTap={{
scale:0.9
}}



className="
w-16
h-16
rounded-full
bg-gradient-to-br
from-purple-600
via-purple-700
to-indigo-700
text-white
flex
items-center
justify-center
shadow-2xl
relative
"

>


<ArrowUp size={22}/>



{/* Purple Glow Aura */}

<span className="
absolute
inset-0
rounded-full
bg-purple-400/30
blur-2xl
animate-pulse
"/>



</motion.button>


)


}


</AnimatePresence>



</div>


);


};


export default FloatingButtons;