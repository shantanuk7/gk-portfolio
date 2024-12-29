import { useState } from "react";
import {AnimatePresence, motion} from 'framer-motion'

export default function SwitchButton(){

    const [isWorkHover,setWorkHover] = useState(true);
    const [isResumeHover,setResumeHover] = useState(false);

    return (
        <div className="pt-8">
            <div
                className="w-[293.40px] h-16 p-2 bg-white/10 rounded-[39.97px] border border-gray-900 backdrop-blur-md justify-center items-center gap-2 inline-flex"
            >
            <AnimatePresence mode="popLayout">
                <div className="h-16 px-4">
                    <motion.div 
                        style={{
                            position:"relative",
                            lineHeight:"4rem",
                            zIndex:10,
                            textAlign:"center",
                            cursor:"pointer",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center"
                        }}
                        className={
                            `text-xl font-medium px-3 flex justify-center items-center gap-2
                            ${isWorkHover?"left-3 text-white":"left-2 text-black font-thin"}
                            `}
                        onMouseEnter={()=>{setWorkHover(!isWorkHover); setResumeHover(!isResumeHover)}}

                        layout="position"
                    >
                        Work 
                    
                    <div className={isWorkHover?"visible":"hidden"}>
                        <svg
                        xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M17 7l-10 10" />
                            <path d="M8 7l9 0l0 9" />
                        </svg>
                    </div>
                    </motion.div >
                </div>
                <div className="h-16 px-4">
                    <motion.div 
                        style={{
                            position:"relative",
                            lineHeight:"4rem",
                            zIndex:10,
                            textAlign:"center",
                            cursor:"pointer",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center"
                        }}
                        className={
                            `text-xl font-medium px-3 flex justify-center items-center gap-2
                            ${isResumeHover?"left-3 text-white":"left-2 text-black font-thin"}
                            `}
                        onMouseEnter={()=>{setResumeHover(!isResumeHover); setWorkHover(!isWorkHover)}}
                        transition={{
                            type:"spring",
                            duration:"0.5"
                        }}
                        layout="position"
                    >
                        Resume 
                    
                    <div className={isResumeHover?"visible":"hidden"}>
                        <svg
                        xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M17 7l-10 10" />
                            <path d="M8 7l9 0l0 9" />
                        </svg>
                    </div>
                    </motion.div >
                </div>
                    <motion.div
                        style={{
                            position:"absolute",
                            left:`${isWorkHover?"0.5rem":""}`,
                            right:`${isResumeHover?"0.5rem":""}`,
                            margin:"auto 0",
                            height:'3rem',
                            width:'9rem',
                            borderRadius:'100px',
                            backgroundColor:'#0779e3',
                            zIndex:0
                        }}
                        
                        transition={{
                            type:"spring",
                            duration:"0.35"
                        }}

                        layout
                        />
            </AnimatePresence>
            </div>
        </div>
    )
}

