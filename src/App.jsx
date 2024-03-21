import { FaGithub } from 'react-icons/fa';
import { MdDoneOutline } from 'react-icons/md';

function App() {
    const fieldStyle =
        'h-28 w-28 lg:h-36 lg:w-36 border border-gray-800 bg-gray-300 text-8xl lg:text-9xl text-center font-semibold cursor-pointer hover:bg-gray-400';

    const inputStyle =
        'w-80 border-2 border-gray-800 px-2 py-1 text-2xl lg:px-4 lg:py-2 lg:text-3xl';

    const editButtonStyle =
        'ml-4 w-14 rounded-lg border-2 border-gray-800 bg-gray-600 px-2 py-1 text-lg text-green-200 lg:mx-auto';

    const acceptButtonStyle =
        'ml-2 rounded-lg border-2 border-gray-800 bg-green-200 p-1';

    return (
        <>
            {/* header */}
            <header className='h- border-b-2 border-gray-800 bg-gray-600 p-5 text-green-200'>
                <h1 className='text-center text-6xl font-semibold lg:text-8xl'>
                    Tic-Tac-Toe
                </h1>
            </header>
            <main className='flex flex-col gap-4 px-4'>
                {/* player1-message-player2 */}
                <div className='mt-4 grid grid-rows-1 justify-items-center gap-8 px-12 py-8 text-center text-3xl lg:grid-cols-3 lg:text-4xl'>
                    <div className='flex flex-row items-center lg:flex-col'>
                        <input
                            className={`${inputStyle}`}
                            type='text'
                            placeholder='Player1'
                        />
                        <div className='mt-1 flex flex-row'>
                            <button className={editButtonStyle}>Edit</button>
                            <button className={acceptButtonStyle}>
                                <MdDoneOutline />
                            </button>
                        </div>
                    </div>

                    <div className='row-start-1 row-end-2 text-3xl lg:col-start-2 lg:col-end-3 lg:text-4xl'>
                        Player X Turn
                    </div>
                    <div className='flex flex-row items-center lg:flex-col'>
                        <input
                            className={`${inputStyle}`}
                            type='text'
                            placeholder='Player2'
                        />
                        <div className='mt-1 flex flex-row'>
                            <button className={editButtonStyle}>Edit</button>
                            <button className={acceptButtonStyle}>
                                <MdDoneOutline />
                            </button>
                        </div>
                    </div>
                </div>
                {/* gameboard */}
                <div className='mx-auto my-0 grid h-[340px] w-[340px] grid-cols-3 border-2 border-gray-800 lg:h-[436px] lg:w-[436px]'>
                    <button className={fieldStyle}></button>
                    <button className={fieldStyle}></button>
                    <button className={fieldStyle}></button>
                    <button className={fieldStyle}></button>
                    <button className={fieldStyle}></button>
                    <button className={fieldStyle}></button>
                    <button className={fieldStyle}></button>
                    <button className={fieldStyle}></button>
                    <button className={fieldStyle}></button>
                </div>
                {/* button reset */}
                <div className='mx-auto my-4 flex'>
                    <button className='rounded-lg border-2 border-gray-800 bg-gray-600 px-4 py-3 text-4xl text-green-200 hover:bg-gray-500 lg:px-5 lg:py-4 lg:text-5xl'>
                        RESET
                    </button>
                </div>
            </main>
            {/* footer */}
            <footer className='absolute bottom-0 flex w-full items-center justify-center gap-1 text-lg lg:text-xl'>
                <p>Copyright &copy; 2024 Merk0n</p>
                <a href='https://github.com/Merk0n/tic-tac-toe'>
                    <FaGithub className='size-5 lg:size-6' />
                </a>
            </footer>
        </>
    );
}

export default App;
