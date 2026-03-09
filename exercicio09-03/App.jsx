// src/App.jsx
import Header from "./components/Header"
import Servicos from "./sections/Servicos"
import "./styles/global.css"  // Caminho corrigido para a pasta styles

function App() {
  return (
    <>
      <Header />
      <Servicos />
    </>
  )
}

export default App