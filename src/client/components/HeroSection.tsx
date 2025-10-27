"use client"
import { motion } from 'framer-motion';
import LocusLogo from "../../../public/locusLogo.svg"
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative scroll-snap-section" id="hero">
      <div className="text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hero-content flex flex-col items-center justify-center text-center"
        >
          <div className=' items-center justify-center mb-10 gap-3 border-[1px] border-white/20 px-4 py-2'>
            <div className='text-[10px]'>
              Backed by 
            </div>
            <div className='flex gap-2'>
              <span className='bg-[#ee5502] px-2'>Y</span>Combinator
            </div>
          </div>
          <Image src={LocusLogo} alt='locus Logo' width={600} className='mx-auto mb-5'/>
          <h1 className="text-3xl md:text-6xl font-600 leading-tight">
            THE AGENTIC PAYMENT LAYER
          </h1>
          <p className="text-sm md:text-base text-gray-400 mb-8 max-w-2xl mx-auto">
            Locus gives autonomous agents the ability to access funds and execute payments securely, with granular controls, audit trails, and seamless integration into your financial systems.
          </p>
          <div className='flex items-center justify-center gap-5'>
          <button className="cursor-pointer relative p-3 border border-[#65cdb2] text-[14px] text-[#65cdb2] overflow-hidden group transition-colors duration-300">
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              Join our beta
            </span>
            <span className="absolute inset-0 bg-[#65cdb2] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
          </button>
          <button className="cursor-pointer p-3 bg-[#65cdb2] text-black text-[14px] hover:opacity-80 transition-opacity duration-300">
            Chat with the team
          </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
