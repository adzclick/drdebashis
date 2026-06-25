import { motion } from "framer-motion";
import {
  Bone,
  Activity,
  HeartPulse,
  Dumbbell,
  ShieldPlus,
  Stethoscope,
  UserRound,
  Accessibility,
} from "lucide-react";


const services = [
  {
    title: "Joint Replacement Surgery",
    description: "Advanced knee, hip and shoulder replacement procedures.",
    icon: Bone,
  },
  {
    title: "Knee Pain Treatment",
    description: "Complete diagnosis and treatment for knee conditions.",
    icon: Activity,
  },
  {
    title: "Hip Replacement",
    description: "Modern hip replacement with faster recovery.",
    icon: Accessibility,
  },
  {
    title: "Arthritis Treatment",
    description: "Personalized arthritis management solutions.",
    icon: HeartPulse,
  },
  {
    title: "Sports Injury Treatment",
    description: "Treatment for ligament and tendon injuries.",
    icon: Dumbbell,
  },
  {
    title: "Fracture Management",
    description: "Advanced fracture fixation and healing care.",
    icon: ShieldPlus,
  },
  {
    title: "Spine & Back Pain Care",
    description: "Comprehensive spine and back pain treatment.",
    icon: Stethoscope,
  },
  {
    title: "Orthopedic Consultation",
    description: "Expert orthopedic assessment and guidance.",
    icon: UserRound,
  },
];



const Treatments = () => {

return (

<section

className="
relative
overflow-hidden
py-24
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
top-0
left-0
w-96
h-96
rounded-full
bg-purple-500/10
blur-[120px]
"

/>


<div

className="
absolute
bottom-0
right-0
w-96
h-96
rounded-full
bg-pink-500/10
blur-[120px]
"

/>





<div className="
max-w-7xl
mx-auto
px-6
">





{/* Header */}


<div className="
text-center
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
tracking-wide
"

>

SPECIALIZATIONS

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

Treatments & Procedures

</h2>




<p

className="
mt-5
max-w-2xl
mx-auto
text-slate-600
text-lg
"

>

Comprehensive orthopedic care with advanced technology,
minimally invasive surgery and patient-focused treatment.

</p>


</div>







{/* Cards */}


<div className="
grid
gap-8
md:grid-cols-2
lg:grid-cols-4
">



{

services.map((service,index)=>{


const Icon = service.icon;



return(


<motion.div


key={index}


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
delay:index*0.08
}}


whileHover={{
y:-10,
scale:1.03
}}


className="
group
relative
overflow-hidden
rounded-[28px]
bg-white
border
border-pink-100
p-8
shadow-lg
hover:shadow-2xl
transition-all
duration-500
"


>



{/* Hover Glow */}


<div

className="
absolute
-top-20
-right-20
w-40
h-40
rounded-full
bg-pink-500/20
blur-3xl
opacity-0
group-hover:opacity-100
transition-all
duration-500
"

/>





{/* Icon */}


<div

className="
relative
z-10
w-16
h-16
rounded-2xl
flex
items-center
justify-center
bg-gradient-to-r
from-purple-600
to-pink-500
text-white
shadow-xl
group-hover:scale-110
group-hover:rotate-6
transition-all
duration-500
"

>


<Icon size={28}/>


</div>





{/* Content */}


<h3

className="
mt-6
text-xl
font-bold
text-slate-900
"

>

{service.title}

</h3>




<p

className="
mt-3
text-slate-600
leading-7
text-sm
"

>

{service.description}

</p>






{/* Bottom Line */}


<div

className="
mt-6
h-1
w-0
rounded-full
bg-gradient-to-r
from-purple-600
to-pink-500
group-hover:w-20
transition-all
duration-500
"

/>



</motion.div>


)


})


}


</div>




</div>


</section>


);


};


export default Treatments;