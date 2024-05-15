import React from 'react'
import SidebarStyle from './Sidebar.module.css'

import { 
    TbArrowBigLeft , 
} from 'react-icons/tb'

  import SidebarItem from '../sidebaritem/SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <div className={`${SidebarStyle.lateral} ${active ? SidebarStyle.active : ''}`} sidebar={active}>
     <div className={SidebarStyle.svg2}>
      <TbArrowBigLeft onClick={closeSidebar} /> 
     </div> 
      <div>
      <SidebarItem    Text="Deshboard" />
        <SidebarItem  Text="Usuário" />
        <SidebarItem  Text="Eventos" />
        <SidebarItem  Text="Classes" />
        <SidebarItem  Text="Mensagens" />
        <SidebarItem  Text="Calendário" />
        <SidebarItem  Text="Financeiro" />
      </div>
    </div>
  )
}

export default Sidebar