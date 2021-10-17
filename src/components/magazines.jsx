import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button'

const Magazine = ({ magazine }) => {
  const history = useHistory()
  console.log(magazine)

  const handleClick = (magazine) => {
    // history.push(`/magazines/${magazine.id}`)
  }
  return (
    <Button variant="outlined" onClick={handleClick(magazine)} variant="text">
      {magazine.title}
    </Button>
  )
}

export default Magazine
