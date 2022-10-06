import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  const curriculumLink =
    'https://drive.google.com/file/d/1yrPPMUXyhimBi6RwCjJ7FFic_5zIl2-V/view?usp=sharing'
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [letterClass])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_e4m6w7k',
        'template_k89p785',
        form.current,
        '0yT6TzD1-3wLOZraL'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 't', 'e', '-', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Entre em contato comigo diretamente por email, ou então pelo whatapp
            ou linkedin.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Nome" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Assunto"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Mensagem"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Enviar" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="curriculum">
          <h2>Quer saber mais sobre mim?</h2>
          <p>Clique no botão abaixo para ver o meu curriculo completo</p>
          <div className="curriculum-btn">
            <a
              className="curriculum-link"
              href={curriculumLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Curriculo

            </a>
            <FontAwesomeIcon
                className="curriculum-icon"
                icon={faFilePdf}
                color="#4d4d4e"
              />
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
