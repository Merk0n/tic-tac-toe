import { FaGithub } from 'react-icons/fa';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import { useState } from 'react';

function App() {
    const [activePlayer, setActivePlayer] = useState('X');

    function handleSelectSquare() {
        setActivePlayer((curActivePlayer) =>
            curActivePlayer === 'X' ? 'O' : 'X',
        );
    }

    return (
        <>
            <header className='border-b-2 border-gray-800 bg-gray-600 p-5 text-green-200'>
                <h1 className='text-center text-6xl font-semibold lg:text-8xl'>
                    Tic-Tac-Toe
                </h1>
            </header>

            <main className='flex flex-col gap-4 px-4'>
                <div className='mt-4 grid grid-rows-1 justify-items-center gap-8 px-12 py-8 text-center text-3xl lg:grid-cols-3 lg:text-4xl'>
                    <Player isActive={activePlayer === 'X'} name={'Player1'}>
                        X
                    </Player>

                    <div className='row-start-1 row-end-2 text-3xl lg:col-start-2 lg:col-end-3 lg:text-4xl'>
                        Player X Turn
                    </div>

                    <Player isActive={activePlayer === 'O'} name={'Player2'}>
                        O
                    </Player>
                </div>

                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    activePlayerSymbol={activePlayer}
                />
                <div className='mx-auto my-4 flex'>
                    <button className='rounded-lg border-2 border-gray-800 bg-gray-600 px-4 py-3 text-4xl text-green-200 hover:bg-gray-500 active:bg-gray-400 lg:px-5 lg:py-4 lg:text-5xl'>
                        RESET
                    </button>
                </div>
            </main>

            <footer className='absolute inset-x-0 bottom-0 flex w-full items-center justify-center gap-1 text-lg lg:text-xl'>
                <p>Copyright &copy; 2024 Merk0n</p>
                <a href='https://github.com/Merk0n/tic-tac-toe'>
                    <FaGithub className='size-5 lg:size-6' />
                </a>
            </footer>
        </>
    );
}

export default App;
