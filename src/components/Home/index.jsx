import './index.scss'
import LogoTitle from '../../assets/images/logo-t2.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['a', 's', 's', 'i', 'o', ' ', 'S', 'a', 'n', 't', 'o', 's']
  const jobArray = [
    'd',
    'e',
    's',
    'e',
    'n',
    'v',
    'o',
    'l',
    'v',
    'e',
    'd',
    'o',
    'r',
    ' ',
    'w',
    'e',
    'b',
  ]

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 5000)
  }, [setLetterClass])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>O</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>s</span>
            <span className={`${letterClass} _14`}>ou</span>

            <img src={LogoTitle} alt="logo title" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={27}
            />
          </h1>
          <h2>Full-stack / JavaScript / ReactJs / NodeJS / Express</h2>
          <Link to="/contact" className="flat-button">
            Fale comigo
          </Link>
        </div>
        <div className='logo-container'>
          <Logo idx='15'/>
          <Logo idx='2'/>
        </div>

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
