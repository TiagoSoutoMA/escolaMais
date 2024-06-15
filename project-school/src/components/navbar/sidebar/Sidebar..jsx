import React from 'react'
import SidebarStyle from './Sidebar.module.css'
import { Link } from 'react-router-dom';

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
      <div className={SidebarStyle.names}> 
        <SidebarItem  Text="Deshboard" to="/dashboard" />
        <SidebarItem  Text="Usuário"  to="/users"/>
        <SidebarItem  Text="Eventos" to ="/createEvents"/> 
        <SidebarItem  Text="Classes" />
        <SidebarItem  Text="Mensagens" />
        <SidebarItem  Text="Calendário" />
        <SidebarItem  Text="Financeiro" />
      </div>
    </div>
  )
}

export default Sidebar