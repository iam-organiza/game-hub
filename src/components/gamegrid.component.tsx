import {SimpleGrid} from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import {GameCard} from '.';
import GameCardSkeleton from './gamecardskeleton.component';
import {Genre} from '../hooks/useGenres';

function GameGrid({selectedGenre}: {selectedGenre: Genre | null}) {
    const {data: games, error, loading} = useGames(selectedGenre);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <>
            {error.length > 0 && <p>{error}</p>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding={'10px'} spacing={10}>
                {
                    loading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)
                }
                {
                    !loading && games.map(game => <GameCard key={game.id} game={game} />)
                }
            </SimpleGrid>
        </>
    )
}

export default GameGrid