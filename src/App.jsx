import { FaGithub } from 'react-icons/fa';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import { useState } from 'react';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations.js';
import GameOver from './components/GameOver.jsx';

const PLAYERS = {
    X: 'Player1',
    O: 'Player2',
};

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }
    return currentPlayer;
}

function App() {
    const [player, setPlayer] = useState(PLAYERS);

    const [gameTurns, setGameTurns] = useState([]);

    const activePlayer = deriveActivePlayer(gameTurns);
    const gameBoard = generateGameBoard(gameTurns);
    const winner = checkWinner(gameBoard, player);
    const isDraw = gameTurns.length === 9 && !winner;

    function generateGameBoard(gameTurns) {
        let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];
        for (const turn of gameTurns) {
            const { square, player } = turn;
            const { row, col } = square;

            gameBoard[row][col] = player;
        }
        return gameBoard;
    }

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

    function handleEditPlayerName(playerSymbol, newName) {
        setPlayer((prevPlayers) => {
            return {
                ...prevPlayers,
                [playerSymbol]: newName,
            };
        });
    }

    function checkWinner(gameBoard, player) {
        let winner;

        for (const combination of WINNING_COMBINATIONS) {
            const firstSquareSymbol =
                gameBoard[combination[0].row][combination[0].col];
            const secondSquareSymbol =
                gameBoard[combination[1].row][combination[1].col];
            const thirdSquareSymbol =
                gameBoard[combination[2].row][combination[2].col];

            if (
                firstSquareSymbol &&
                firstSquareSymbol === secondSquareSymbol &&
                firstSquareSymbol === thirdSquareSymbol
            ) {
                winner = player[firstSquareSymbol];
            }
        }
        return winner;
    }

    return (
        <>
            <header className='border-b-2 border-gray-800 bg-gray-600 p-5 text-green-200'>
                <h1 className='text-center text-6xl font-semibold lg:text-8xl'>
                    Tic-Tac-Toe
                </h1>
            </header>

            <main className='flex flex-col gap-4 px-4'>
                <div className=' mt-4 flex flex-col place-items-center justify-between gap-8 px-12 py-2  text-center text-3xl lg:flex-row lg:text-4xl'>
                    <Player
                        onChangeName={handleEditPlayerName}
                        symbol='X'
                        isActive={activePlayer === 'X'}
                        initialName={PLAYERS.X}
                    ></Player>

                    <Player
                        onChangeName={handleEditPlayerName}
                        symbol='O'
                        isActive={activePlayer === 'O'}
                        initialName={PLAYERS.O}
                    ></Player>
                </div>
                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    board={gameBoard}
                />

                <Log turns={gameTurns} />
            </main>
            {(winner || isDraw) && (
                <GameOver onReset={() => setGameTurns([])} winner={winner} />
            )}

            <footer className='absolute inset-x-0 bottom-0 flex items-center justify-center gap-1 text-lg lg:text-xl'>
                <p>Copyright &copy; 2024 Merk0n</p>
                <a href='https://github.com/Merk0n/tic-tac-toe'>
                    <FaGithub className='size-5 lg:size-6' />
                </a>
            </footer>
        </>
    );
}

export default App;
