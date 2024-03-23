import { useState } from 'react';

export default function Player({
    symbol,
    initialName,
    isActive,
    onChangeName,
}) {
    const inputStyle =
        'w-80 border-2 text-center border-gray-800 px-2 py-1 text-2xl lg:px-4 lg:py-2 lg:text-3xl';

    const editButtonStyle =
        'w-32 rounded-lg border-2 border-gray-800 bg-gray-600 px-2 py-1 text-lg text-green-200 hover:bg-gray-500 active:bg-gray-400 lg:mx-auto';

    const [isEditing, setIsEditing] = useState(false);
    function handleEdit() {
        setIsEditing((e) => !e);

        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }
    const [playerName, setPlayerName] = useState(initialName);
    function handleNameChange(e) {
        setPlayerName(e.target.value);
    }

    return (
        <div className='flex flex-row items-center lg:flex-col'>
            {isEditing ? (
                <input
                    className={`${inputStyle} ${isActive && 'border-4 border-red-300'}`}
                    type='text'
                    value={playerName}
                    onChange={handleNameChange}
                />
            ) : (
                <span
                    className={`${inputStyle} ${isActive && 'border-4 border-red-300'} bg-gray-500/60`}
                >
                    {playerName}
                </span>
            )}
            <div className='mr-auto flex flex-row items-center gap-4'>
                <span
                    className={`w-16 border-2 border-l-0 border-gray-700 bg-slate-400 lg:border-l-2 lg:border-t-0`}
                >
                    {symbol}
                </span>
                <button onClick={handleEdit} className={editButtonStyle}>
                    {isEditing ? 'Save' : 'Edit'}
                </button>
            </div>
        </div>
    );
}
