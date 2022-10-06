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
  }, [letterClass])
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
            Desde criança sempre fui atraido a tecnologia, lembro de tentar aprender tudo o que podia sobre hardware de computadores, celulares e consoles. Não demorou muito para que eu começasse a me interessar por software também. No ensino médio entrei numa escola técnica em T.I, onde conheci mais sobre todo o ciclo de desenvolvimento e decidi que era isso que eu queria para a minha vida profissional.
          </p>
          <p>
            Logo após a escola passei por um processo seletivo concorrido onde só haviam 20 vagas para o meu estado (Bahia) consegui ser um dos selecionados para fazer um bootcamp intensivo em desenvolvimento full-stack, aprendi muito nesse periodo, estudava entre 6 e 8 horas por dia e com certeza o esforço valeu a pena.
          </p>
          <p>
            Após finalizar o curso entrei no mercado de trabalho onde venho atuando como desenvolvedor full-stack junior e aprendendo mais a cada dia. Continuo estudando bastante pra mim é quase como se fosse um hobbie, eu realmente sinto que me encontrei nessa área.
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
