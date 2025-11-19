import myPhoto from '../images/Mahak.png'
import '../App.css'

const HomePage = () => {
    const handleDownload = () => {
        const file1 = "/MyResume.pdf";
        const link = document.createElement('a');
        link.href = file1;
        link.setAttribute('download', 'Mahak_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className='bg-gray-50 min-h-screen w-full flex justify-center items-center p-6 sm:p-10 pt-16'>
            <div className='flex flex-col md:flex-row justify-center items-center gap-12 max-w-5xl w-full'>
                <div className='flex justify-center items-center p-4'>
                    <img
                        className='h-64 w-64 md:h-80 md:w-80 rounded-full object-cover shadow-xl border-4 border-white transform hover:scale-105 transition duration-300 ease-in-out'
                        src={myPhoto}
                        alt="Mahak Saini Portfolio Photo"
                    />
                </div>
                <div className='text-gray-900 flex flex-col items-center md:items-start text-center md:text-left'>
                    <p className='font-semibold text-xl sm:text-2xl mb-2'>
                        Hello, I am
                    </p>
                    <h1 className='font-extrabold text-4xl sm:text-5xl lg:text-6xl text-blue-600 beautiful-text mb-4'>
                        Mahak Saini
                    </h1>
                    <div className='font-semibold text-xl sm:text-2xl mb-2'>
                        <p>FrontEnd Developer</p>
                        <p>Software Developer</p>
                    </div>
                    <button
                        onMouseUp={(e) => e.target.blur()}
                        onClick={handleDownload}
                        className='button px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300'
                    >
                        Download Resume
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomePage
