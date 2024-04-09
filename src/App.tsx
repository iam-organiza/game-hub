import {Grid, GridItem, HStack, Show} from '@chakra-ui/react'
import {GameGrid, GenreList, NavBar, PlatformList, SortList} from './components'
import {useState} from 'react'
import {Genre} from './hooks/useGenres'
import {Platform} from './hooks/usePlatforms';

export interface Sort {
  id: number;
  name: string;
}

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sort: Sort | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const sortlist = [
    {id: 1, name: "Relevance"},
    {id: 2, name: "Date added"},
    {id: 3, name: "Name"},
    {id: 4, name: "Release date"},
    {id: 5, name: "Popularity"},
    {id: 6, name: "Average rating"},
  ]

  const handleOnSelectGenre = (genre: Genre | null) => {
    setGameQuery({...gameQuery, genre});
  }

  const handleOnSelectPlatform = (platform: Platform | null) => {
    setGameQuery({...gameQuery, platform});
  }

  const handleOnSelectSort = (sort: Sort | null) => {
    setGameQuery({...gameQuery, sort});
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
        <HStack paddingLeft={'10px'} marginBottom={'10px'}>
          <PlatformList selectedPlatform={gameQuery.platform} onSelect={handleOnSelectPlatform} />
          <SortList list={sortlist} gameQuery={gameQuery} onSelect={handleOnSelectSort} />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
