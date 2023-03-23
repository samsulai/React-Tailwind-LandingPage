import NavBar from "@/scenes/NavBar"
import Home from "@/scenes/Home"
import Benefits from "@/scenes/benefits"
import OurClasses from "@/scenes/OurClasses"
import ContactUs from "@/scenes/ContactUs"
import Footer from "@/scenes/Footer"
import {useState, useEffect} from "react"
import {SelectedPage} from "./shared/types"
function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  return (

    <div className="app">
   <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
   <Home setSelectedPage={setSelectedPage}/>
   <Benefits setSelectedPage={setSelectedPage} />
   <OurClasses setSelectedPage={setSelectedPage} />
   <ContactUs setSelectedPage={setSelectedPage} />
   <Footer/>
     </div>
  )
}

export default App
