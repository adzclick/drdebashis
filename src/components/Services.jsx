import { motion } from "framer-motion";
import {
  Award,
  Activity,
  ClipboardCheck,
  Building2,
  HeartHandshake,
  BadgeCheck,
} from "lucide-react";


const features = [
  {
    icon: Award,
    title: "15+ Years of Experience",
    desc: "Extensive expertise in orthopedic surgeries and trauma care.",
  },
  {
    icon: Activity,
    title: "Advanced Surgical Techniques",
    desc: "Minimally invasive procedures ensuring faster recovery.",
  },
  {
    icon: ClipboardCheck,
    title: "Personalized Treatment Plans",
    desc: "Customized care plans designed for every patient individually.",
  },
  {
    icon: Building2,
    title: "Modern Medical Setup",
    desc: "Equipped with advanced diagnostic and surgical systems.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-Centered Care",
    desc: "Compassionate treatment focused on long-term wellbeing.",
  },
  {
    icon: BadgeCheck,
    title: "High Success Rate",
    desc: "Trusted results with thousands of successful treatments.",
  },
];



export default function WhyChooseUs() {


return (

<section

className="
relative
overflow-hidden
py-28
bg-gradient-to-br
from-slate-50
via-purple-50
to-pink-50
"

>



{/* Background Glow */}


<div

className="
absolute
top-20
left-20
w-96
h-96
rounded-full
bg-purple-500/10
blur-[140px]
"

/>



<div

className="
absolute
bottom-20
right-20
w-96
h-96
rounded-full
bg-pink-500/10
blur-[140px]
"

/>






<div className="
max-w-7xl
mx-auto
px-6
relative
z-10
">






{/* Header */}


<div className="
text-center
max-w-3xl
mx-auto
mb-20
">



<span

className="
inline-block
px-5
py-2
rounded-full
bg-pink-100
text-pink-600
text-sm
font-bold
tracking-widest
"

>

WHY CHOOSE US

</span>





<h2

className="
mt-6
text-4xl
md:text-5xl
font-black
text-slate-900
"

>

Why Choose Dr. Debashis Adhikary

</h2>





<p

className="
mt-5
text-lg
text-slate-600
"

>

Combining experience, innovation and compassionate care to
deliver exceptional orthopedic treatment and patient outcomes.

</p>



</div>








{/* Timeline */}


<div className="
relative
max-w-5xl
mx-auto
">





{/* Center Line */}


<div

className="
absolute
left-1/2
top-0
h-full
w-[3px]
bg-gradient-to-b
from-purple-500
via-pink-500
to-purple-500
hidden
md:block
"

/>





<div className="space-y-12">



{

features.map((item,i)=>{


const Icon=item.icon;

const isLeft=i%2===0;



return(



<motion.div

key={i}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:0.5,
delay:i*0.1
}}

className={`relative flex ${
isLeft
?
"justify-start"
:
"justify-end"
}`}

>




{/* Dot */}


<div

className="
hidden
md:block
absolute
left-1/2
-translate-x-1/2
w-5
h-5
rounded-full
bg-gradient-to-r
from-purple-600
to-pink-500
shadow-[0_0_25px_rgba(236,72,153,0.8)]
"

/>







{/* Card */}


<div

className={`
group
w-full
md:w-[44%]
bg-white
rounded-[30px]
border
border-pink-100
p-8
shadow-lg
hover:shadow-2xl
transition-all
duration-500
hover:-translate-y-2
${isLeft ? "md:text-right":"md:text-left"}
`}

>




{/* Icon */}


<div

className={`
w-14
h-14
rounded-2xl
flex
items-center
justify-center
bg-gradient-to-r
from-purple-600
to-pink-500
text-white
shadow-xl
transition-all
duration-500
group-hover:rotate-6
group-hover:scale-110
${isLeft ? "md:ml-auto":"md:mr-auto"}
`}

>


<Icon size={24}/>


</div>







{/* Title */}


<h3 className="
mt-5
text-xl
font-bold
text-slate-900
">

{item.title}

</h3>





{/* Description */}


<p className="
mt-3
text-slate-600
leading-7
">

{item.desc}

</p>






{/* Bottom Accent */}


<div

className={`
mt-5
h-1
rounded-full
bg-gradient-to-r
from-purple-600
to-pink-500
w-0
group-hover:w-24
transition-all
duration-500
${isLeft ? "md:ml-auto":""}
`}

/>




</div>



</motion.div>


)


})


}



</div>



</div>




</div>



</section>


);


}