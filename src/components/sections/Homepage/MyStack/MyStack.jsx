import InfiniteScroll from "../InfiniteScroll";

export default function MyStack() {
  return (
    <div className="py-8 container inset-20 shadow-inner-[]">

      <div className="text-left relative left-0 z-0">
        <h1 className="text-6xl font-light inline-block">
          My <i className="font-medium text-[#0779E3]">Stack</i>
        </h1>
      </div>

      <InfiniteScroll/>

    </div>
  );
}
