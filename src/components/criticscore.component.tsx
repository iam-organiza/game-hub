import {Badge} from '@chakra-ui/react';
import React from 'react'

interface Prop {
    score: number;
}

function CriticScore({score}: Prop) {
    const color = score > 60 ? 'green' : score < 60 ? 'yellow' : '';

    return (
        <Badge colorScheme={color} fontSize={'14px'} paddingX={2} borderRadius={'4px'}>{score}</Badge>
    )
}

export default CriticScore