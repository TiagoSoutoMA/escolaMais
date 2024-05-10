import React from 'react'
import SidebarItemStyle from './SidebarItem.module.css'

const SidebarItem = ({ Text }) => {
  return (
    <div className={SidebarItemStyle.itens}>
      {Text}
    </div>
  )
}

export default SidebarItem