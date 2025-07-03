import Navbar from '../../Components/Landing/Navbar'
import Footer from '../../Components/Landing/Footer'
import HeroSection from './HeroSection'

const Home = () => {

  return (
    <div className='text-white bg-black/90'>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  )
}

export default Home