import {Button, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react'
import {BsChevronDown} from 'react-icons/bs'
import usePlatforms, {Platform} from '../hooks/usePlatforms'

interface Props {
    onSelect: (platform: Platform | null) => void;
    selectedPlatform: Platform | null;
}

function PlatformList({onSelect, selectedPlatform}: Props) {
    const {data: platforms, error} = usePlatforms();

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || 'Platform'}</MenuButton>
            <MenuList>
                {
                    platforms.map(platform => (
                        <MenuItem onClick={() => onSelect(platform)} key={platform.id}>{platform.name}</MenuItem>
                    ))
                }
            </MenuList>
        </Menu>
    )
}

export default PlatformList