"use client";

import { motion } from "framer-motion";

const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-[0.03]">
      {/* Moving Circles */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0], 
          y: [0, 50, 0],
          scale: [1, 1.2, 1] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full border border-primary"
      />
      <motion.div 
        animate={{ 
          x: [0, -150, 0], 
          y: [0, 100, 0],
          scale: [1, 1.3, 1] 
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[15%] right-[10%] w-[500px] h-[500px] rounded-full border border-accent"
      />

      {/* Floating Technical Lines */}
      <div className="absolute inset-0 flex flex-col justify-around">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        ))}
      </div>

      {/* Scattered Technical Text Elements */}
      <div className="absolute top-1/4 right-[5%] font-mono text-[10px] tracking-[0.5em] rotate-90 uppercase">
        system_status: stable // mode: coffee_bright
      </div>
      <div className="absolute bottom-1/4 left-[5%] font-mono text-[10px] tracking-[0.5em] -rotate-90 uppercase">
        lat: -7.250445 // lng: 112.768845
      </div>
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[1em] uppercase">
        excellence in digital craftsmanship
      </div>
    </div>
  );
};

export default BackgroundElements;
