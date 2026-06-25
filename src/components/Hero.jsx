import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import banner from "../../src/assets/Banner.jpg";

import {
  CalendarDays,
  Award,
  ShieldCheck,
  Star,
  ArrowRight,
} from "lucide-react";

import { NavLink } from "react-router";


const Counter = ({ value, suffix = "" }) => {

  const [count, setCount] = useState(0);


  useEffect(() => {

    const controls = animate(0, value, {

      duration: 2.5,

      onUpdate(latest) {
        setCount(Math.floor(latest));
      },

    });


    return () => controls.stop();


  }, [value]);


  return (

    <span>
      {count}
      {suffix}
    </span>

  );

};





const StatCard = ({ value, suffix, label }) => {

return (

<motion.div

whileHover={{
y:-8,
scale:1.05,
}}

className="
relative
overflow-hidden
rounded-3xl
p-5
bg-white/10
backdrop-blur-2xl
border
border-white/20
shadow-[0_0_40px_rgba(236,72,153,0.25)]
hover:shadow-[0_0_70px_rgba(236,72,153,0.45)]
"

>


<div className="
absolute
inset-0
bg-gradient-to-br
from-pink-400/10
to-transparent
"/>



<h3 className="
text-4xl
font-black
text-white
relative
z-10
">

<Counter 
value={value}
suffix={suffix}
/>

</h3>



<p className="
text-pink-100
text-sm
mt-2
relative
z-10
">

{label}

</p>



</motion.div>

);

};







const Hero = () => {


return (

<section

className="
relative
overflow-hidden
min-h-[92vh]
bg-gradient-to-br
from-purple-950
via-purple-800
to-pink-700
"

>


{/* Background Glow */}


<div

className="
absolute
inset-0
bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.25),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.25),transparent_40%)]
"

/>



<div

className="
absolute
top-0
left-0
w-[500px]
h-[500px]
bg-purple-500/20
rounded-full
blur-[180px]
"

/>



<div

className="
absolute
bottom-0
right-0
w-[500px]
h-[500px]
bg-pink-500/20
rounded-full
blur-[180px]
"

/>





<div className="
relative
max-w-7xl
mx-auto
px-5
lg:px-8
pt-10
pb-10
">


<div className="
grid
lg:grid-cols-[1.1fr_0.9fr]
gap-20
items-center
">





{/* LEFT */}


<motion.div

initial={{
opacity:0,
x:-80
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:0.8
}}

>



<div

className="
inline-flex
items-center
gap-2
px-5
py-3
rounded-full
bg-purple-500/15
backdrop-blur-xl
border
border-pink-300/20
text-white
mb-8
"

>


<ShieldCheck size={18}/>

Kolkata's Trusted Orthopedic Specialist


</div>





<h1

className="
text-5xl
md:text-6xl
xl:text-7xl
font-black
leading-tight
text-white
"

>


Advanced Bone &

<br/>

Joint Care


</h1>





<p

className="
mt-8
text-lg
md:text-xl
text-pink-100
max-w-2xl
leading-relaxed
"

>


Personalized orthopedic treatments, advanced joint
replacement surgery, sports injury management and
rehabilitation with world-class care.


</p>







{/* Buttons */}


<div className="
flex
flex-wrap
gap-4
mt-10
">



<NavLink to="appointment">


<motion.button

whileHover={{
scale:1.05
}}

whileTap={{
scale:0.95
}}

className="
px-8
py-4
rounded-2xl
bg-gradient-to-r
from-purple-600
to-pink-500
text-white
font-bold
flex
items-center
gap-2
shadow-2xl
"

>


<CalendarDays size={20}/>

Book Appointment


</motion.button>


</NavLink>





<NavLink to="treatments">


<motion.button

whileHover={{
scale:1.05
}}

className="
px-8
py-4
rounded-2xl
bg-purple-500/10
backdrop-blur-xl
border
border-pink-300/20
text-white
flex
items-center
gap-2
"

>


Explore Treatments

<ArrowRight size={18}/>


</motion.button>


</NavLink>




</div>





{/* Stats */}


<div className="
grid
grid-cols-1
md:grid-cols-3
gap-5
mt-12
">


<StatCard

value={15}

suffix="+"

label="Years Experience"

/>



<StatCard

value={500}

suffix="+"

label="Successful Surgeries"

/>



<StatCard

value={98}

suffix="%"

label="Patient Satisfaction"

/>



</div>




</motion.div>
{/* RIGHT */}

<motion.div

initial={{
opacity:0,
x:80
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:1
}}

className="
relative
flex
justify-center
lg:justify-end
mt-10
lg:mt-0
"

>





{/* Satisfaction Card */}


<motion.div

animate={{
y:[-10,10,-10]
}}

transition={{
repeat:Infinity,
duration:5
}}

className="
hidden
sm:block
absolute
top-10
right-[-20px]
z-30
bg-white
rounded-3xl
p-5
shadow-2xl
min-w-[230px]
"

>


<div className="
flex
items-center
gap-4
">


<div className="
w-14
h-14
rounded-2xl
bg-pink-100
flex
items-center
justify-center
">


<Star className="text-pink-600"/>


</div>



<div>


<h3 className="
text-3xl
font-bold
text-slate-800
">

98%

</h3>


<p className="text-gray-500">

Patient Satisfaction

</p>


</div>


</div>


</motion.div>







{/* Surgery Card */}


<motion.div

animate={{
y:[10,-10,10]
}}

transition={{
repeat:Infinity,
duration:6
}}

className="
hidden
sm:block
absolute
left-[-20px]
bottom-10
z-30
bg-white
rounded-3xl
p-5
shadow-2xl
min-w-[240px]
"

>


<div className="
flex
items-center
gap-4
">


<div className="
w-14
h-14
rounded-2xl
bg-purple-100
flex
items-center
justify-center
">


<Award className="text-purple-700"/>


</div>




<div>


<h3 className="
text-3xl
font-bold
text-slate-800
">

500+

</h3>



<p className="text-gray-500">

Successful Surgeries

</p>



</div>


</div>


</motion.div>








{/* Main Image */}


<motion.div

whileHover={{
scale:1.02
}}

className="
relative
w-full
max-w-[650px]
rounded-[35px]
overflow-hidden
border
border-white/20
bg-white/10
backdrop-blur-2xl
shadow-[0_0_80px_rgba(236,72,153,0.30)]
"

>


<div

className="
absolute
inset-0
rounded-[35px]
border-2
border-pink-300/20
z-20
pointer-events-none
"

/>




<img

src={banner}

alt="Orthopedic Care"

className="
w-full
hidden
sm:block
h-[450px]
md:h-[550px]
lg:h-[700px]
object-cover
object-center
transition-all
duration-700
hover:scale-105
"

/>



</motion.div>



</motion.div>





</div>


</div>


</section>


);


};


export default Hero;