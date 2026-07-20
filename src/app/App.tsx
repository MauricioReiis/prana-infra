import Header from '../components/layout/Header/Header'
import Hero from '../components/sections/Hero/Hero'
import Services from '../components/sections/Services/Services'
import ClientsLocations from '../components/sections/ClientsLocations/ClientsLocations'
import About from '../components/sections/About/About'
import ContactCTA from '../components/sections/ContactCTA/ContactCTA'
import Footer from '../components/layout/Footer/Footer'
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <ClientsLocations />
        <About />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
