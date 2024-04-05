import {HStack, Image, Text} from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/logo.jpeg"
import {ColorModeSwitch} from '.'

function NavBar() {
    return (
        <HStack justify={'space-between'} padding={'10px'}>
            <Image src={logo} alt='logo' boxSize={'60px'} rounded={16} shadow={'0px 1px 1px 1px rgba(0, 0, 0, 0.2)'} />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar