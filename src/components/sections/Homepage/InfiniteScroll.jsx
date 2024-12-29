// UX Research | UI Design | Motion Design | Design Management | Service Design | System Design | 

import Marquee from "react-fast-marquee";

export default function InfiniteScroll() {
  return (
      <div className="py-2">
        <hr className="border-gray-800 dark:border-white pt-3"/>
          <Marquee autoFill={true} speed={100}>
            <h2 className="text-4xl text-[#0779e3] font-light pt-1 pb-4 px-2"> UX Research </h2>
            <h2 className="text-4xl font-light pt-1 pb-4"> |</h2>
            <h2 className="text-4xl text-[#0779e3] font-light pt-1 pb-4 px-2"> UI Design </h2>
            <h2 className="text-4xl font-light pt-1 pb-4"> |</h2>
            <h2 className="text-4xl text-[#0779e3] font-light pt-1 pb-4 px-2"> Motion Design </h2>
            <h2 className="text-4xl font-light pt-1 pb-4"> |</h2>
            <h2 className="text-4xl text-[#0779e3] font-light pt-1 pb-4 px-2"> Design Management </h2>
            <h2 className="text-4xl font-light pt-1 pb-4"> |</h2>
            <h2 className="text-4xl text-[#0779e3] font-light pt-1 pb-4 px-2"> Service Design </h2>
            <h2 className="text-4xl font-light pt-1 pb-4"> |</h2>
            <h2 className="text-4xl text-[#0779e3] font-light pt-1 pb-4 px-2"> System Design </h2>
            <h2 className="text-4xl font-light pt-1 pb-4"> |</h2>
            </Marquee>
        <hr className="border-gray-800 dark:border-white pb-3"/>
        
      </div>
  );
}