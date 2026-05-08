
import './App.css'
import BookingForm from './components/BookingForm/BookingForm'
import { FAQ } from './components/FAQAccordion/FAQAccordion'
import { GallerySlider } from './components/GallerySlider/GallerySlider'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import TextLinkSection from './components/TextLinkSection/TextLinkSection'

function App() {

  return (
    <div className='bg-[#FAF6F1]'>
      <Header/>
      <Hero/>
      <TextLinkSection/>
      <GallerySlider/>
      <FAQ/>
      <BookingForm/>
    </div>
  )
}

export default App
