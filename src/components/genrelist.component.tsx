import useGenres from '../hooks/useGenres'
import {HStack, Image, List, ListItem, Skeleton, SkeletonText, Text} from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';

function GenreList() {
    const {data: genres, loading, error} = useGenres();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    if (error) return null;

    return (
        <>
            <List>
                {
                    loading && <List>{skeletons.map(skeleton => (
                        <ListItem key={skeleton} paddingY={'5px'}>
                            <HStack>
                                <Skeleton boxSize={'32px'} borderRadius={8} />
                                <SkeletonText noOfLines={1} flex={0.5} />
                            </HStack>
                        </ListItem>
                    ))}</List>
                }

                {!loading && genres.map(genre => (
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