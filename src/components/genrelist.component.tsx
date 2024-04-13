import useGenres, {Genre} from '../hooks/useGenres'
import {Button, HStack, Heading, Image, List, ListItem, Skeleton, SkeletonText} from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';

interface Props {
    onSelect: (genre: Genre | null) => void;
    selectedGenre: Genre | null;
}

function GenreList({onSelect, selectedGenre}: Props) {
    const {data: genres, loading, error} = useGenres();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    if (error) return null;

    return (
        <>
            <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
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
                            <Image boxSize={'32px'} objectFit={'cover'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} alt={genre.slug} />
                            <Button fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'} textAlign={'left'} whiteSpace={'normal'} onClick={() => onSelect(genre)} variant={'link'} fontSize={'lg'}>{genre.name}</Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default GenreList