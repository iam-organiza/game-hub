import useGames from '../hooks/useGames';

function GameGrid() {
    const {games, error, loading} = useGames();

    return (
        <>
            {loading === 'processing' && <p>loading...</p>}
            {error.length > 0 && <p>{error}</p>}
            <ul>
                {
                    games.map(game => <li key={game.id}>{game.name}</li>)
                }
            </ul>
        </>
    )
}

export default GameGrid