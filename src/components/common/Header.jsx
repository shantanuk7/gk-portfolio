export default function Header(){
    return <header className="sticky top-0 z-10" >
        <div className='py-8' style={{background:"rgba(249, 249, 249, 0.1)", backdropFilter:"blur(52px)"}}>
            <div className="flex h-6 justify-between items-center px-14">
                <h1 className='font-light text-2xl pl-1'>Gandhar Kulkarni</h1>
                <div className='flex text-xl pr-1'>
                    <a href="#" className="pl-14">Home</a>
                    <a href="#" className="pl-14">About</a>
                    <a href="#" className="pl-14">Work</a>
                    <a href="#" className="pl-14">Blogs</a>
                    <a href="#" className="pl-14">Resume</a>
                </div>
            </div>
        </div>
    </header>
}