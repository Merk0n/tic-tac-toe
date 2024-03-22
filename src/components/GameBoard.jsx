import { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const fieldStyle =
        'h-28 w-28 lg:h-36 lg:w-36 border border-gray-800 bg-gray-300 text-8xl lg:text-9xl text-center font-semibold cursor-pointer hover:bg-gray-400 active:bg-gray-500';

    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedGameBoard = prevGameBoard.map((innerArray) => [
                ...innerArray,
            ]);
            updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedGameBoard;
        });

        onSelectSquare();
    }

    return (
        <div className='mx-auto my-0 grid h-[340px] w-[340px] grid-cols-3 border-2 border-gray-800 lg:h-[436px] lg:w-[436px]'>
            {gameBoard.map((row, rowIndex) =>
                row.map((playerSymbol, colIndex) => (
                    <button
                        onClick={() => handleSelectSquare(rowIndex, colIndex)}
                        key={rowIndex + colIndex}
                        className={fieldStyle}
                    >
                        {playerSymbol}
                    </button>
                )),
            )}
        </div>
    );
}
