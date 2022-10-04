import './index.scss'
import axios from 'axios'
import { useState } from 'react'

const githubURL = 'https://api.github.com/users/Tassio2002/repos'
//utilizar props para selecionar quais id de repositórios eu quero
const Logo = (props) => {
  const [repo, setRepo] = useState({
    name: '',
    url: '',
    language: '',
  })

  const getData = (props) => {
    axios.get(githubURL).then((response) => {
      if (response.status === 200) {
        setRepo((defaultValue) => ({
          ...defaultValue,
          name: response.data[props].name,
          url: response.data[props].html_url,
          language: response.data[props].language,
        }))
      }
    })
  }

  return (
    <div className="repositories">
      <a
        href={repo.url}
        rel="noreferrer"
        target="_blank"
        className="repo-link"
        onLoad={getData(props.idx)}
      >
        {repo.name}
      </a>
      <h2>{repo.language}</h2>
    </div>
  )
}

export default Logo
