import React from 'react'
import './header.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h3>Read your magazine here</h3>
      </Link>
      <Link to="/add-magazine">
        <Button>Add Magazine</Button>
      </Link>
    </div>
  )
}

export default Header
