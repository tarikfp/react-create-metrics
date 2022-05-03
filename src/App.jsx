import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button type="button" onClick={() => location.reload()}>
            Click to create metric data!
          </button>
        </p>
        <p>
          You will be creating a metric data on per refresh.
        </p>
      </header>
    </div>
  )
}

export default App
