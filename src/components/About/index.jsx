import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGit,
  faJsSquare,
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons'

import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'o', 'b', 'r', 'e', ' ', 'm', 'i', 'm']}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            delectus illo illum quae consequatur. Harum ex vel modi quis nihil
            earum unde debitis rerum ad incidunt, sint impedit provident sequi.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            delectus illo illum quae consequatur. Harum ex vel modi quis nihil
            earum unde debitis rerum ad incidunt, sint impedit provident sequi.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            delectus illo illum quae consequatur. Harum ex vel modi quis nihil
            earum unde debitis rerum ad incidunt, sint impedit provident sequi.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faCode} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#DD0031" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#DD0031" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faNode} color="#DD0031" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faDatabase} color="#DD0031" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGit} color="#DD0031" />
            </div>
          </div>
        </div>
      </div>

      <Loader type='pacman' />
    </>
  )
}

export default About
