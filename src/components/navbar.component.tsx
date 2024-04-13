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
            <Image src={logo} alt='logo' boxSize={'60px'} rounded={16} shadow={'0px 1px 1px 1px rgba(0, 0, 0, 0.2)'} />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar