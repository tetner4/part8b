  
import { useMutation, useQuery } from '@apollo/client'
import React, {useState} from 'react'
import { ALL_AUTHORS, EDIT_AUTHOR } from '../queries'


const [name, setName] = useState("")
const [born, setBorn] = useState("")
const [changeBirthYear] = useMutation(EDIT_AUTHOR)
const authors = useQuery(ALL_AUTHORS)

const submit = (event) => {
  event.preventDefault()
  changeBirthYear({variables: {name, born}})

  setName('')
  setBorn('')
}

const Authors = (props) => {
  if (!props.show) {
    return null
  }



  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              born
            </th>
            <th>
              books
            </th>
          </tr>
          {authors.map(a =>
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          )}
        </tbody>
      </table>

      <div>
            <h2>Set Birthyear</h2>
              <form>
                <div>
                  Name
                  <input value={name}  
                  onChange={({ target }) => setName(target.value)} />
                </div>
                <div>
                  Born
                  <input value={name}  
                  onChange={({ target }) => setName(target.value)} />
                </div>
             </form>
      </div>
    </div>
  )
}

export default Authors
