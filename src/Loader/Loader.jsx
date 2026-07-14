import { motion } from "framer-motion";
import doctor from "../assets/doctor icon.jpg";

// ── Pista palette ──────────────────────────────────────────
// Main:    #93C572
// Dark:    #6A9E4F
// Deeper:  #3D6B2C
// Tint:    #EAF4E1
// Border:  #C5E1AE
// ──────────────────────────────────────────────────────────

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">

      <div className="relative flex flex-col items-center">


        {/* Glow */}

        <div
          className="absolute w-52 h-52 rounded-full blur-3xl animate-pulse"
          style={{ background: "rgba(147,197,114,0.3)" }}
        />



        {/* Doctor Image */}

        <motion.img

          src={doctor}

          alt="Doctor"

          className="w-40 h-40 rounded-full object-cover border-4 shadow-2xl relative z-10"
          style={{ borderColor: "#6A9E4F" }}

          animate={{

            scale:[1,1.08,1],

            boxShadow:[

              "0 0 20px rgba(106,158,79,.4)",

              "0 0 60px rgba(147,197,114,.8)",

              "0 0 20px rgba(106,158,79,.4)",

            ],

          }}

          transition={{

            duration:3,

            repeat:Infinity,

          }}

        />





        {/* Loading Text */}

        <motion.h2

          className="mt-8 text-2xl font-bold text-slate-800"

          animate={{
            opacity:[0.4,1,0.4]
          }}

          transition={{

            duration:1.5,

            repeat:Infinity,

          }}

        >

          Loading...

        </motion.h2>





        {/* Progress Dots */}

        <div className="flex gap-2 mt-4">


          {[1,2,3].map((dot)=>(


            <motion.div

              key={dot}

              className="w-3 h-3 rounded-full"
              style={{ background: "linear-gradient(to right, #6A9E4F, #3D6B2C)" }}

              animate={{

                y:[0,-8,0],

              }}

              transition={{

                duration:0.6,

                repeat:Infinity,

                delay:dot*0.2,

              }}

            />


          ))}


        </div>



      </div>


    </div>
  );
};


export default Loader;