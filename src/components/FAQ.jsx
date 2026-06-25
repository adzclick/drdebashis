"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";


export default function FAQ() {

const [active,setActive] = useState(0);



const faqs = [

{
question:"What orthopedic treatments are available?",
answer:
"Dr. Adhikary offers a full range including joint replacement (knee, hip, shoulder), arthroscopy, sports injury management, fracture care, spine treatment, arthritis management, pediatric orthopedics, and general consultations.",
},

{
question:"Do you perform joint replacement surgery?",
answer:
"Yes. Dr. Adhikary specializes in total and partial knee replacement, total hip replacement, and shoulder replacement using advanced minimally invasive techniques.",
},

{
question:"How can I book an appointment?",
answer:
"You can book through the appointment page, call directly, WhatsApp, or email. Our team confirms appointments promptly.",
},

{
question:"What conditions do you treat?",
answer:
"We treat arthritis, fractures, sports injuries, ligament tears, spinal disorders, osteoporosis, and a wide range of musculoskeletal conditions.",
},

{
question:"Do you provide post-surgery care?",
answer:
"Absolutely. Follow-up care includes physiotherapy guidance, rehabilitation planning, pain management, and long-term recovery monitoring.",
},

];





return (

<section

className="
relative
overflow-hidden
bg-gradient-to-br
from-slate-50
via-purple-50
to-pink-50
py-24
"

>





{/* Background Glow */}


<div

className="
absolute
left-0
top-0
h-96
w-96
rounded-full
bg-purple-500/10
blur-[120px]
"

/>



<div

className="
absolute
right-0
bottom-0
h-96
w-96
rounded-full
bg-pink-500/10
blur-[120px]
"

/>






<div className="
relative
mx-auto
max-w-4xl
px-4
">






{/* Header */}


<div className="
mb-14
text-center
">



<span

className="
rounded-full
bg-pink-100
px-4
py-2
text-xs
font-semibold
uppercase
tracking-[0.2em]
text-pink-600
"

>

FAQ

</span>





<h2

className="
mt-5
text-4xl
font-bold
text-slate-900
md:text-5xl
"

>

Frequently Asked Questions

</h2>





<p

className="
mx-auto
mt-4
max-w-2xl
text-slate-600
"

>

Common questions about orthopedic treatments, consultations and
recovery care.

</p>



</div>







{/* FAQ Items */}


<div className="space-y-5">



{

faqs.map((faq,index)=>{


const isOpen = active === index;



return(



<motion.div


key={index}


layout


whileHover={{
y:-4
}}


transition={{

type:"spring",

stiffness:250,

damping:20

}}



className={`

group
relative
overflow-hidden
rounded-3xl
border
backdrop-blur-xl

${

isOpen

?

"border-pink-200 bg-white shadow-2xl"

:

"border-slate-200 bg-white/80 shadow-lg"

}

`}


>







{/* Hover Glow */}


<div

className="
absolute
inset-0
opacity-0
transition-opacity
duration-500
group-hover:opacity-100
"

>


<div

className="
absolute
-left-10
top-0
h-32
w-32
rounded-full
bg-purple-500/10
blur-3xl
"

/>



<div

className="
absolute
right-0
bottom-0
h-32
w-32
rounded-full
bg-pink-500/10
blur-3xl
"

/>



</div>







<button


onClick={()=>setActive(isOpen ? null : index)}


className="
relative
flex
w-full
items-center
justify-between
p-6
text-left
"


>


<h3 className="
pr-4
text-lg
font-semibold
text-slate-900
">

{faq.question}

</h3>





<motion.div


animate={{

rotate:isOpen ? 45 : 0

}}


transition={{

duration:0.25

}}



className={`

flex
h-12
w-12
items-center
justify-center
rounded-full

${

isOpen

?

"bg-gradient-to-r from-purple-600 to-pink-500 text-white"

:

"bg-pink-50 text-pink-600"

}

`}


>


<Plus size={22}/>


</motion.div>



</button>







<AnimatePresence initial={false}>


{

isOpen && (



<motion.div


initial={{

height:0,

opacity:0

}}


animate={{

height:"auto",

opacity:1

}}


exit={{

height:0,

opacity:0

}}


transition={{

duration:0.35

}}



>


<div className="
px-6
pb-6
">


<div

className="
mb-5
h-px
bg-gradient-to-r
from-purple-500/30
via-pink-500/30
to-transparent
"

/>




<p className="
leading-7
text-slate-600
">

{faq.answer}

</p>



</div>


</motion.div>


)


}



</AnimatePresence>







{

isOpen && (

<motion.div

layoutId="activeBorder"

className="
absolute
inset-0
rounded-3xl
border-2
border-pink-500/20
"

/>

)

}




</motion.div>



)


})


}



</div>





</div>


</section>


);

}