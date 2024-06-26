import {Game} from '../hooks/useGames'
import {Card, CardBody, HStack, Heading, Image} from '@chakra-ui/react'
import PlatformIconList from './platformiconlist.component'
import CriticScore from './criticscore.component'
import getCroppedImageUrl from '../services/image-url'
import Emoji from './emoji.components'

interface Prop {
    game: Game
}

function GameCard({game}: Prop) {

    return (
        <Card borderRadius={10} overflow={'hidden'}>
            <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
            <CardBody>
                <HStack justifyContent={'space-between'} marginBottom={3}>
                    <PlatformIconList platforms={game.platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize={'2xl'}>{game.name}<Emoji rating={game.rating_top} /></Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard