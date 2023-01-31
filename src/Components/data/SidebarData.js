import {FiArrowUpRight} from 'react-icons/fi'
import {RiAccountCircleFill} from 'react-icons/ri'
import {MdOutlineContactPhone} from 'react-icons/md'
import {BiLogOut} from 'react-icons/bi'
import {FiBox} from 'react-icons/fi'
import {FaWallet} from 'react-icons/fa'

export const SidebarData = [
    {
        title: "Request",
        path: "/",
        icon: < FiArrowUpRight/>,
    },
    {
        title: "Wallet",
        path: "/wallet",
        icon: < FaWallet/>,
    },
    {
        title: "History",
        path: "/history",
        icon: < FiBox/>,
    },
    {
        title: "Account",
        path: "/account",
        icon: < RiAccountCircleFill/>,
    },
    {
        title: "Logout",
        path: "/logout",
        icon: < BiLogOut/>,
    },
    {
        title: "Contact",
        path: "/contact",
        icon: < MdOutlineContactPhone/>,
    },
]
