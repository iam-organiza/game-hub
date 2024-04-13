import {Input, InputGroup, InputLeftElement} from '@chakra-ui/react'
import {BsSearch} from 'react-icons/bs'

function SearchInput() {
    return (
        <InputGroup>
            <InputLeftElement children={<BsSearch />} />
            <Input variant="filled" borderRadius={20} placeholder='search games...' />
        </InputGroup>
    )
}

export default SearchInput