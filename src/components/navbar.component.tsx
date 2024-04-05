import {HStack, Image, Text} from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/logo.jpeg"

function NavBar() {
    return (
        <HStack>
            <Image src={logo} alt='logo' boxSize={'60px'} rounded={16} shadow={'0px 1px 1px 1px rgba(0, 0, 0, 0.2)'} />
            <Text>NavBar</Text>
        </HStack>
    )
}

export default NavBar