import { use, useState } from "react";
import {
  Menu,
  X,
  CalendarDays,
  Home,
  Info,
  HeartPulse,
  Stethoscope,
  Star,
  CircleHelp,
  Phone,
  LayoutDashboard,
  LogOut,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router";
import { FaUserDoctor } from "react-icons/fa6";
import { AuthContext } from "../Context/AuthContext";
import logo2 from "../../src/assets/doctor.jpg";
import Swal from "sweetalert2";


const Navbar = () => {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const { user, userlogout } = use(AuthContext);


  const handleLogout = () => {
    userlogout()
      .then(() => {

        Swal.fire({
          title: "Logout Successful",
          text: "You have logged out successfully",
          icon: "success",
          confirmButtonColor: "#db2777",
          confirmButtonText: "OK",
        });

        navigate("/");
        setOpen(false);

      })
      .catch((error) => {
        console.log(error);
      });
  };


  const navLinks = [
    { path: "/", name: "Home", icon: Home },
    { path: "/about", name: "About", icon: Info },
    { path: "/treatments", name: "Treatments", icon: HeartPulse },
    { path: "/services", name: "Services", icon: Stethoscope },
    { path: "/reviews", name: "Reviews", icon: Star },
    { path: "/testimonials", name: "FAQ", icon: CircleHelp },
    { path: "/contact", name: "Contact", icon: Phone },
  ];


  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
      isActive
        ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
        : "text-slate-700 hover:text-pink-600"
    }`;


  return (

<header className="sticky top-0 z-50 w-full py-4 bg-transparent">

<div className="max-w-[1600px] mx-auto px-4 lg:px-8">


<div className="
bg-white/95 
backdrop-blur-xl 
border border-purple-100 
rounded-[32px] 
shadow-[0_10px_40px_rgba(236,72,153,0.18)]
px-6 lg:px-8
">


{/* Desktop */}

<div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center h-24">


{/* Logo */}

<NavLink to="/" className="flex items-center gap-4">

<div className="
w-14 h-14 
rounded-2xl 
overflow-hidden 
shadow-lg 
border border-pink-100
">

<img
src={logo2}
alt="Doctor Logo"
className="w-full h-full object-cover"
/>

</div>


<div>

<h2 className="text-slate-900 font-bold text-2xl">
Dr. Debashis Adhikary
</h2>


<p className="text-pink-600 text-sm font-medium">
Orthopedic & Joint Replacement Surgeon
</p>


</div>

</NavLink>



{/* Menu */}

<nav className="flex items-center gap-2">


{
navLinks.map((link)=>{

const Icon = link.icon;


return(

<NavLink
key={link.path}
to={link.path}
className={navLinkClass}
>

<Icon size={16}/>
{link.name}

</NavLink>

)

})

}


</nav>



{/* Right Side */}

<div className="justify-self-end flex items-center gap-4">


{
user ? (

<>


<NavLink to="/DashBoardLayout/appointments">


<button
className="
flex items-center gap-2 
px-5 py-3 
rounded-2xl 
bg-gradient-to-r 
from-purple-600 
to-pink-500 
text-white 
font-semibold 
shadow-lg 
hover:scale-105 
transition-all
"
>


<LayoutDashboard size={18}/>

Dashboard


</button>


</NavLink>



<button
onClick={handleLogout}
className="
flex items-center gap-2 
px-5 py-3 
rounded-2xl 
bg-red-500 
text-white 
font-semibold 
shadow-lg 
hover:bg-red-600
transition-all
"
>


<LogOut size={18}/>

Logout


</button>


</>


)

:

(


<>


<NavLink
to="/login"
className="
group flex items-center gap-2 
text-slate-700 
font-medium 
hover:text-pink-600 
transition-all
"
>

<FaUserDoctor/>

Doctor Login

</NavLink>



<NavLink to="/appointment">


<button
className="
flex items-center gap-2 
px-6 py-3 
rounded-2xl 
bg-gradient-to-r 
from-purple-600 
to-pink-500 
text-white 
font-semibold 
shadow-xl 
hover:scale-105 
transition-all
"
>

<CalendarDays size={18}/>

Book Appointment

</button>


</NavLink>


</>

)

}


</div>


</div>
{/* Mobile Header */}

<div className="lg:hidden flex items-center justify-between h-20">


<NavLink 
to="/" 
className="flex items-center gap-3"
>


<div 
className="
w-12 h-12 
rounded-xl 
overflow-hidden 
border border-pink-100
"
>

<img
src={logo2}
alt="Doctor"
className="w-full h-full object-cover"
/>

</div>



<div>

<h2 className="text-slate-900 font-bold text-lg">
Dr. Debashis
</h2>


<p className="text-pink-600 text-xs">
Orthopedic Surgeon
</p>


</div>


</NavLink>




<button

onClick={()=>setOpen(!open)}

className="
p-3 
rounded-xl 
bg-gradient-to-r 
from-purple-600 
to-pink-500 
text-white 
shadow-lg
"

>


{
open 
? 
<X size={22}/> 
: 
<Menu size={22}/>
}


</button>


</div>





{/* Mobile Menu */}


{
open && (

<div className="lg:hidden pb-5">


<div 
className="
bg-white 
rounded-3xl 
border border-purple-100 
p-4 
shadow-xl
"
>


{

navLinks.map((link)=>{


const Icon = link.icon;


return(

<NavLink

key={link.path}

to={link.path}

onClick={()=>setOpen(false)}

className={({isActive})=>

`
flex items-center gap-3 
px-4 py-3 
rounded-xl 
mb-1

${
isActive

?

"bg-gradient-to-r from-purple-600 to-pink-500 text-white"

:

"text-slate-700 hover:bg-pink-50"

}

`

}

>


<Icon size={18}/>

{link.name}


</NavLink>


)


})

}





{
user ? (

<>

<NavLink

to="/DashBoardLayout"

onClick={()=>setOpen(false)}

className="
flex items-center gap-3 
px-4 py-3 
text-slate-700 
hover:bg-pink-50 
rounded-xl
"

>


<LayoutDashboard size={18}/>

Dashboard


</NavLink>




<button

onClick={()=>{

handleLogout();

setOpen(false);

}}

className="
w-full 
flex items-center gap-3 
px-4 py-3 
text-red-500 
hover:bg-red-50 
rounded-xl
"

>


<LogOut size={18}/>

Logout


</button>


</>


)

:

(

<>


<NavLink

to="/login"

onClick={()=>setOpen(false)}

className="
flex items-center gap-3 
px-4 py-3 
text-slate-700 
hover:bg-pink-50 
rounded-xl
"

>


<FaUserDoctor/>

Doctor Login


</NavLink>




<NavLink

to="/appointment"

onClick={()=>setOpen(false)}

>


<button

className="
mt-3 
w-full 
flex items-center justify-center gap-2 
py-3 
rounded-xl 
bg-gradient-to-r 
from-purple-600 
to-pink-500 
text-white 
font-semibold
"

>


<CalendarDays size={18}/>

Book Appointment


</button>


</NavLink>


</>

)

}



</div>


</div>

)

}


</div>


</div>


</header>


);

};


export default Navbar;