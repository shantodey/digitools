import { ToastContainer } from "react-toastify"
import Navbar from "./Component/Navbar/Navbar"
import Hero from "./Component/Hero/Hero"
import Counter from "./Component/Counter/Counter"
import PDtools from "./Component/PremiumDigitalTools/PDtools"
import { Suspense, useState } from "react"
import GetStart from "./Component/GetStart/GetStart"
import SimpleTransparent from "./Component/SimpleTransparent/SimpleTransparent"
import Footer from "./Component/Footer/Footer"
import ReadytoTransform from "./Component/ReadytoTransform/ReadytoTransform"

const getProdects = async () => {
  const res = await fetch("/data.json");
  return res.json();
}
const getProductsData = getProdects()


console.log(getProductsData);
function App() {
  const [cats, setCats] = useState([]);
  const handleRemoveItem = (idToRemove) => {
    setCats(prevCats => prevCats.filter(item => item.id !== idToRemove));
  };

  return (
    <>
      <Navbar cats={cats} />
      <Hero />
      <Counter />
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <PDtools getProductsData={getProductsData} cats={cats} setCats={setCats} handleRemoveItem={handleRemoveItem} />
      </Suspense>
      <GetStart />
      <SimpleTransparent />
      <ReadytoTransform />
      <Footer />
      <ToastContainer />
      <ToastContainer />
    </>
  )
}

export default App
