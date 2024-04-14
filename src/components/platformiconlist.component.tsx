import {HStack, Icon} from '@chakra-ui/react';

import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import {IconType} from 'react-icons';
import {Platform} from '../hooks/usePlatforms';


interface Props {
    platforms: Platform[];
}

function PlatformIconList({platforms}: Props) {

    const iconMap: {[key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        playstation3: FaPlaystation,
        playstation4: FaPlaystation,
        playstation5: FaPlaystation,
        ["ps-vita"]: FaPlaystation,
        xbox: FaXbox,
        xbox360: FaXbox,
        ["xbox-series-x"]: FaXbox,
        ["xbox-one"]: FaXbox,
        nintendo: SiNintendo,
        ["nintendo-switch"]: SiNintendo,
        mac: FaApple,
        macos: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid
    }

    return (
        <HStack marginY={1}>
            {
                platforms.map(platform => (
                    <Icon key={platform.id} as={iconMap[platform.slug]} color={'gray.500'} />
                ))
            }
        </HStack>
    )
}

export default PlatformIconList