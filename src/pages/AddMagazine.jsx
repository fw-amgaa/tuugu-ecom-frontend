import React, { useState } from 'react'
import axios from 'axios'
import { TextField, Button } from '@mui/material'
import './addmagazine.css'

const AddMagazine = () => {
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [body, setBody] = useState('')

  const save = async () => {
    console.log('save')
    const payload = {
      data: {
        title,
        sub_title: subTitle,
        author,
        published_date: '2021-10-23',
        description,
        body,
      },
    }

    console.log('saving', payload)

    await axios.post('https://tuugu-backend.herokuapp.com/magazines', payload)
  }

  return (
    <div className="container">
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        label="title"
        variant="filled"
      />
      <TextField
        onChange={(e) => setSubTitle(e.target.value)}
        label="sub_title"
        variant="filled"
      />
      <TextField
        onChange={(e) => setAuthor(e.target.value)}
        label="author"
        variant="filled"
      />
      <TextField
        onChange={(e) => setDescription(e.target.value)}
        label="description"
        variant="filled"
      />
      <TextField
        onChange={(e) => setBody(e.target.value)}
        label="body"
        variant="filled"
      />
      <Button
        style={{ display: 'block', margin: '20px auto' }}
        onClick={() => save()}
      >
        Хадгалах
      </Button>
    </div>
  )
}

export default AddMagazine
