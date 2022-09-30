import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  return(
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={['S', 'o', 'b', 'r', 'e', ' ', 'm', 'i', 'm']}
            idx = {15}
          />
        </h1>
      </div>
    </div>
    )
}

export default Home