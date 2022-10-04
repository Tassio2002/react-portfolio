import './index.scss'
import axios from 'axios'
import { useState } from 'react'

const githubURL = 'https://api.github.com/users/Tassio2002/repos'

const Logo = (props) => {
  const [repo, setRepo] = useState({})

  const getData = (props) => {
    axios.get(githubURL).then((response) => {
      if (response.status === 200) {
        setRepo((defaultValue) => ({
          ...defaultValue,
          name: response.data[props].name,
          url: response.data[props].html_url,
          language: response.data[props].language,
          desc: response.data[props].description,
        }))
      }
    })
  }

  const openLink = () => {
    window.open(repo.url)
  }

  return (
    <div className="repositories" onClick={() => openLink()}>
      <div className="repo-title">
        <a
          href={repo.url}
          rel="noreferrer"
          target="_blank"
          className="repo-link"
          onLoad={getData(props.idx)}
        >
          {repo.name}
        </a>
        <p className="language-tag">{repo.language}</p>
      </div>
      <div className="repo-desc">
        <p className="description">{repo.desc}</p>
      </div>
    </div>
  )
}

export default Logo
