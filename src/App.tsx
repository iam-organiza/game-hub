import {Grid, GridItem, HStack, Show} from '@chakra-ui/react'
import {GameGrid, GenreList, NavBar, PlatformList, SortList} from './components'
import {useState} from 'react'
import {Genre} from './hooks/useGenres'
import {Platform} from './hooks/usePlatforms';

export interface Sort {
  id: number;
  name: string;
  slug: "name" | "released" | "added" | "created" | "updated" | "rating" | "metacritic" | "-name" | "-released" | "-added" | "-created" | "-updated" | "-rating" | "-metacritic";
}

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sort: Sort | null;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const sortlist: Sort[] = [
    {id: 1, name: "Relevance", slug: "updated"},
    {id: 2, name: "Date added", slug: "-added"},
    {id: 3, name: "Name", slug: "name"},
    {id: 4, name: "Release date", slug: "-released"},
    {id: 5, name: "Popularity", slug: "-metacritic"},
    {id: 6, name: "Average rating", slug: "-rating"},
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

  const handleOnSearch = (searchText: string) => {
    setGameQuery({...gameQuery, searchText});
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
        <NavBar onSearch={handleOnSearch} />
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
