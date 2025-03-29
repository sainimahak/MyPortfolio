import '../App.css'

const Navbar = () => {
  return (
    <>
        <div >
            <div className='bg-blue-500 h-100% w-100% flex gap-10 justify-between p-2 box-border text-xl font-bold text-white' >
                {/* logo */}
                <div className='rounded-lg m-2'>
                    <img className='rounded-full' src="logo.png" alt="" />
                </div>
                {/* middle  linkes */}
                <div className='m-2'>
                    <a className='m-4' href="">Home</a>
                    <a className='m-4' href="">About</a>
                    <a className='m-4' href="">Skills</a>
                    <a className='m-4' href="">Education</a>
                    <a className='m-4' href="">Contact Us</a>
                </div>
                {/* profile */}
                <div className='m-2 flex gap-6'>
                    <div className="italic font-semibold">Portfolio</div>
                </div>
               
            </div>



        </div>
    </>
  )
}

export default Navbar