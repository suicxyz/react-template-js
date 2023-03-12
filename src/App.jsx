import reactLogo from './assets/react.svg'
import './App.css'

/**
 * Edite esse arquivo para alterar o
 * que aparece na tela do navegador.
 * 
 * */

function App() {
    return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        
        <p>
          Edite <code>src/App.jsx</code> e salve para testar HMR (Hot Module Replacement).
        </p>
      </div>
      <p className="read-the-docs">
        Clique nas logos do Vite e React para aprender mais.
      </p>
    </div>
  )
}

export default App
