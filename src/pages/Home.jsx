import React, { useState, useEffect } from 'react'
import Magazine from '../components/magazines'
import axios from 'axios'

const Home = () => {
  const [magazines, setMagazines] = useState()

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://tuugu-backend.herokuapp.com/magazines`,
      responseType: 'stream',
    }).then((response) => {
      setMagazines(response.data.data.rows)
      console.log(response.data.data.rows)
    })
  }, [])
  return (
    <div>
      <h1>All Magazines</h1>
      {magazines &&
        magazines.map((magazine) => {
          return (
            <div
              style={{
                display: 'block',
                boxShadow: '0 0 5px 2px #bbbbff',
                margin: '10px',
                padding: '10px',
                borderRadius: '10px',
              }}
            >
              <h3>{magazine.title}</h3>
              <h4>{magazine.title}</h4>
              <span>{magazine.sub_title}</span>
              <i>{magazine.author}</i>
              <b>{magazine.description}</b>
              <p>{magazine.body}</p>
            </div>
          )
        })}
    </div>
  )
}

export default Home
