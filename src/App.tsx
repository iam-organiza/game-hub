import {Grid, GridItem, Show} from '@chakra-ui/react'
import {NavBar} from './components'
import GameGrid from './components/gamegrid.component'
import GenreList from './components/genrelist.component'
import {useState} from 'react'
import {Genre} from './hooks/useGenres'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const handleOnSelectGenre = (genre: Genre | null) => {
    setSelectedGenre(genre);
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
          <GenreList onSelect={handleOnSelectGenre} />
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
