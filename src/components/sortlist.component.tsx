import {Button, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react'
import {BsChevronDown} from 'react-icons/bs'
import {GameQuery, Sort} from '../App'

interface Props {
    list: Sort[]
    gameQuery: GameQuery;
    onSelect: (sort: Sort) => void;
}

function SortList({list, gameQuery, onSelect}: Props) {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order by: {gameQuery.sort?.name || ''}</MenuButton>
            <MenuList>
                {
                    list.map(item => (
                        <MenuItem key={item.id} onClick={() => onSelect(item)}>{item.name}</MenuItem>
                    ))
                }
            </MenuList>
        </Menu>
    )
}

export default SortList