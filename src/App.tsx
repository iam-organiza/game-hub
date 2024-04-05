import {Grid, GridItem, Show} from '@chakra-ui/react'
import {NavBar} from './components'

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
        <GridItem area={'aside'}>Aside</GridItem>
      </Show>
      <GridItem area={'main'}>Main</GridItem>
    </Grid>
  )
}

export default App
