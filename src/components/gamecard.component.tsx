import React from 'react'
import {Game} from '../hooks/useGames'
import {Card, CardBody, Heading, Image, Text} from '@chakra-ui/react'
import PlatformIconList from './platformiconlist.component'

interface Prop {
    game: Game
}

function GameCard({game}: Prop) {

    return (
        <Card borderRadius={10} overflow={'hidden'}>
            <Image src={game.background_image} alt={game.name} />
            <CardBody>
                <Heading fontSize={'2xl'}>{game.name}</Heading>
                <PlatformIconList platforms={game.platforms.map(p => p.platform)} />
            </CardBody>
        </Card>
    )
}

export default GameCard