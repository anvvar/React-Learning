import React from 'react'

const Header = ({title}) => {
  return (
    <header><h2>{title}</h2></header>
  )
}
Header.defaultProps={
  title:'Shopin Cart Name'
}

export default Header