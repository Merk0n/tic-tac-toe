export default function GameOver({ winner, onReset }) {
    return (
        <div className='fixed inset-0 flex flex-col items-center justify-center gap-4 bg-gray-900 bg-opacity-90 p-4'>
            <h2 className='text-6xl text-green-200'>
                {winner ? `${winner} wins!` : "It's a draw!"}
            </h2>

            <button
                onClick={onReset}
                className='rounded-lg border-2 border-gray-800 bg-gray-600 px-4 py-3 text-4xl text-green-200 hover:bg-gray-500 active:bg-gray-400 lg:px-5 lg:py-4 lg:text-5xl'
            >
                Restart
            </button>
        </div>
    );
}
