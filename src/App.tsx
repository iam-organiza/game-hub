import {Grid, GridItem, Show} from '@chakra-ui/react'
import {GameGrid, GenreList, NavBar, PlatformList} from './components'
import {useState} from 'react'
import {Genre} from './hooks/useGenres'
import {Platform} from './hooks/usePlatforms';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleOnSelectGenre = (genre: Genre | null) => {
    setGameQuery({...gameQuery, genre});
  }

  const handleOnSelectPlatform = (platform: Platform | null) => {
    setGameQuery({...gameQuery, platform});
  }

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }} templateColumns={{
      base: "1fr",
      lg: "200px 1fr"
    }}>
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area={'aside'} paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelect={handleOnSelectGenre} />
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <PlatformList selectedPlatform={gameQuery.platform} onSelect={handleOnSelectPlatform} />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
