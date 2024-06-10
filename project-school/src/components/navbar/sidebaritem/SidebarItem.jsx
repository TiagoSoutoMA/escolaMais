import React from 'react'
import SidebarItemStyle from './SidebarItem.module.css'
import { Link } from 'react-router-dom';

const SidebarItem = ({ Text, to }) => {
  return (
    <Link className= {SidebarItemStyle.link} to={to} >
    <div className={SidebarItemStyle.itens}>
      {Text}
    </div>
    </Link>
  )
}

export default SidebarItem