import { FC } from "react"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Product from "./components/product/Product"
import About from "./components/about/About"
import Footer from "./components/footer/Footer"

const App: FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Product />
      <Footer />
    </div>
  )
}

export default App