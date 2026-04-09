import { ToastContainer } from "react-toastify/unstyled"
import Navbar from "./Component/Navbar/Navbar"
import Hero from "./Component/Hero/Hero"
import Counter from "./Component/Counter/Counter"
import PDtools from "./Component/PremiumDigitalTools/PDtools"
import { Suspense, useState } from "react"

const getProdects = async () => {
  const res = await fetch("/public/data.json");
  return res.json();
}
const getProductsData=getProdects()


console.log(getProductsData);
function App() {
  const [cats, setCats]=useState([])
  return (
    <>
      <Navbar cats={cats}/>
      <Hero/>
      <Counter/>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <PDtools getProductsData ={getProductsData} cats={cats} setCats={setCats}/>
      </Suspense>
      
      <ToastContainer />
    </>
  )
}

export default App
