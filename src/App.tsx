import {Grid, GridItem, Show} from '@chakra-ui/react'
import {NavBar} from './components'
import GameGrid from './components/gamegrid.component'
import GenreList from './components/genrelist.component'

function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area={'nav'} padding={2}>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area={'aside'}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
