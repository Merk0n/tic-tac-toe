import { FaGithub } from 'react-icons/fa';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import { useState } from 'react';
import Log from './components/Log';

function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }
    return currentPlayer;
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);

    const activePlayer = deriveActivePlayer(gameTurns);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns((prevTurns) => {
            const currentPlayer = deriveActivePlayer(prevTurns);

            const updatedTurns = [
                {
                    square: { row: rowIndex, col: colIndex },
                    player: currentPlayer,
                },
                ...prevTurns,
            ];

            return updatedTurns;
        });
    }

    return (
        <>
            <header className='border-b-2 border-gray-800 bg-gray-600 p-5 text-green-200'>
                <h1 className='text-center text-6xl font-semibold lg:text-8xl'>
                    Tic-Tac-Toe
                </h1>
            </header>

            <main className='flex flex-col gap-4 px-4'>
                <div className=' mt-4 flex flex-col place-items-center justify-between gap-8 px-12 py-8 text-center text-3xl lg:flex-row lg:text-4xl'>
                    <Player isActive={activePlayer === 'X'} name={'Player1'}>
                        X
                    </Player>

                    <Player isActive={activePlayer === 'O'} name={'Player2'}>
                        O
                    </Player>
                </div>

                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    turns={gameTurns}
                />

                <Log turns={gameTurns} />

                <div className='mx-auto my-4 flex'>
                    <button className='rounded-lg border-2 border-gray-800 bg-gray-600 px-4 py-3 text-4xl text-green-200 hover:bg-gray-500 active:bg-gray-400 lg:px-5 lg:py-4 lg:text-5xl'>
                        RESET
                    </button>
                </div>
            </main>

            <footer className='sticky inset-x-0 bottom-0 flex items-center justify-center gap-1 text-lg lg:text-xl'>
                <p>Copyright &copy; 2024 Merk0n</p>
                <a href='https://github.com/Merk0n/tic-tac-toe'>
                    <FaGithub className='size-5 lg:size-6' />
                </a>
            </footer>
        </>
    );
}

export default App;
