import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import HeaderStyle from './Header.module.css'
import Sidebar from '../sidebar/Sidebar.'

import { RxHome } from "react-icons/rx";
import { PiUsersThree } from "react-icons/pi";
import { MdEvent } from "react-icons/md";
import { TbNotebook } from "react-icons/tb";
import { BiMessageDetail } from "react-icons/bi";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <>
    <div className={HeaderStyle.sidebar}>
      <div className={HeaderStyle.profile}>
      <div className={HeaderStyle.iconProfile}>
      <FaRegUser />
      </div>
      <h2 className={HeaderStyle.usuario}>Usuário</h2>
      </div>
    <div className={HeaderStyle.svg}>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </div>
    </div>
    <div className={HeaderStyle.sidebarLateral}>
        <div className={HeaderStyle.icones}>
        <>
        <RxHome/>
        <PiUsersThree/>
        <MdEvent />
        <TbNotebook />
        <BiMessageDetail />
        <IoCalendarNumberOutline />
        <MdAttachMoney />
        </>
        </div>
    </div>
    </>

  )
}

export default Header