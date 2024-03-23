export default function Log({ turns }) {
    return (
        <ol className='flex flex-col place-items-center'>
            {turns.map((turn) => (
                <li
                    className='text-sm'
                    key={`${turn.square.row}${turn.square.col}`}
                >
                    {turn.player} selected {turn.square.row}, {turn.square.col}
                </li>
            ))}
        </ol>
    );
}
