import React from 'react'
import {Game} from '../hooks/useGames'
import {Card, CardBody, HStack, Heading, Image, Text} from '@chakra-ui/react'
import PlatformIconList from './platformiconlist.component'
import CriticScore from './criticscore.component'

interface Prop {
    game: Game
}

function GameCard({game}: Prop) {

    return (
        <Card borderRadius={10} overflow={'hidden'}>
            <Image src={game.background_image} alt={game.name} />
            <CardBody>
                <Heading fontSize={'2xl'}>{game.name}</Heading>
                <HStack justifyContent={'space-between'}>
                    <PlatformIconList platforms={game.platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard