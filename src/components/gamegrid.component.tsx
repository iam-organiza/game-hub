import {SimpleGrid} from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import {GameCard} from '.';

function GameGrid() {
    const {games, error, loading} = useGames();

    return (
        <>
            {loading === 'processing' && <p>loading...</p>}
            {error.length > 0 && <p>{error}</p>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding={'10px'} spacing={10}>
                {
                    games.map(game => <GameCard key={game.id} game={game} />)
                }
            </SimpleGrid>
        </>
    )
}

export default GameGrid