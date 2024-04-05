export default function GameBoard({ onSelectSquare, board }) {
    const fieldStyle =
        'h-28 w-28 lg:h-36 lg:w-36 border border-gray-800 bg-gray-300 text-8xl lg:text-9xl text-center font-semibold cursor-pointer hover:bg-gray-400 active:bg-gray-500';

    return (
        <div className='mx-auto my-0 grid  grid-cols-3 border-4 border-gray-800'>
            {board.map((row, rowIndex) =>
                row.map((playerSymbol, colIndex) => (
                    <button
                        onClick={() => onSelectSquare(rowIndex, colIndex)}
                        key={rowIndex + colIndex}
                        className={fieldStyle}
                        disabled={playerSymbol !== null}
                    >
                        {playerSymbol}
                    </button>
                )),
            )}
        </div>
    );
}
