import { ToastContainer } from "react-toastify/unstyled"
import Navbar from "./Component/Navbar/Navbar"
import Hero from "./Component/Hero/Hero"
import Counter from "./Component/Counter/Counter"

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Counter/>
      <ToastContainer />
    </>
  )
}

export default App
