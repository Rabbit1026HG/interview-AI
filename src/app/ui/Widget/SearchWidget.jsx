import { Icon } from '@iconify/react'
import React from 'react'

export default function SearchWidget({title}) {
  return (
    <>
      <h4 className="cs-sidebar_widget_title">{title}</h4>
      <form className="cs-sidebar_search">
        <input type="text" placeholder="Search..." />
        <button className="cs-sidebar_search_btn">
          <Icon icon="material-symbols:search-rounded" />                   
        </button>
      </form>
    </>
  )
}
