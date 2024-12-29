import './App.css'
import Header from './components/common/Header'
import Hero from './components/sections/Homepage/Hero'
import InfiniteScroll from './components/sections/Homepage/InfiniteScroll'
import MyStack from './components/sections/Homepage/MyStack/MyStack'
import MyProjects from "./components/sections/Homepage/ProjectsCarousel/MyProjects"

function App() {
  return (
    <div className='bg-[#F5F4EB]'>
      <Header/>
      <Hero/>
      <InfiniteScroll/>
      <MyProjects/>
      <MyStack/>
    </div>
  )
}

export default App