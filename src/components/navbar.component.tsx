import {HStack, Image, Text} from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/logo.webp"
import {ColorModeSwitch, SearchInput} from '.'

interface Props {
    onSearch: (searchText: string) => void;
}

function NavBar({onSearch}: Props) {
    return (
        <HStack padding={'10px'}>
            <Image src={logo} alt='logo' boxSize={'60px'} />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar