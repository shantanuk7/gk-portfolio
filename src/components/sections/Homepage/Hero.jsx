import SwitchButton from "../../ui/home-switch-button";
import { useState } from "react";
export default function Hero(){

    const [isOn, setIsOn] = useState(false);

    return <section className='h-[40rem]'>
    <div className='relative w-full h-full'>
      <div className="w-[350px] h-[350px] bg-[#0e8e90]/30 rounded-full blur-[210px] absolute top-24 left-5 mb-auto" />
      <div className="w-[400px] h-[400px] bg-[#596cda]/30 rounded-full blur-[200.60px] absolute m-auto left-0 right-0 top-14" />
      <div className="w-[350px] h-[350px] bg-[#0e8e90]/30 rounded-full blur-[210px] absolute right-5 top-24 mb-auto" />
      <div className="h-full flex flex-col gap-4 justify-center items-center">
        <div className="pt-8">
            <h2 className='text-3xl font-thin inline'>Hello, I'm </h2> 
            <h2 className="font-medium text-3xl italic text-[#0779E3] inline">Gandhar</h2>
        </div>
        <div className="text-center">
            <h1 className='text-[4.3rem] font-light text-center leading-tight inline'>A </h1>
            <h1 className="text-[4.3rem] font-medium italic leading-tight text-[#0779E3] inline">multidisciplinary </h1> 
            <h1 className='text-[4.3rem] font-light text-center leading-tight inline'>designer</h1>
            <br/>
            <h1 className='text-[4.3rem] font-light text-center leading-tight inline'>specializing in creating</h1>
            <br/>
            <h1 className="text-[4.3rem] font-medium italic leading-tight text-[rgb(0,142,194)] inline">User Centric Solutions</h1>
        </div>
        <SwitchButton isOn={isOn} onClick={() => setIsOn(!isOn)}/>
      </div>
    </div>
  </section>
}