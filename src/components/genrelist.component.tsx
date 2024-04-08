import React from 'react'
import useGenres from '../hooks/useGenres'
import {HStack, Image, List, ListItem, Text} from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';

function GenreList() {
    const {data: genres} = useGenres();

    return (
        <>
            <List>
                {genres.map(genre => (
                    <ListItem key={genre.slug} paddingY={'5px'}>
                        <HStack>
                            <Image boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} alt={genre.slug} />
                            <Text fontSize={'lg'}>{genre.name}</Text>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default GenreList