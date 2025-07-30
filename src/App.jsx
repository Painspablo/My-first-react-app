import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showSecret, setShowSecret] = useState(false)

  return (
    <>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: 20 }}>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 style={{ textAlign: 'center', color: '#4caf50', marginTop: 10 }}>
        Bem-vindo ao App do Pablo!
      </h1>

      <div className="card" style={{ textAlign: 'center' }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            fontSize: '1.2rem',
            padding: '10px 20px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: '#61dafb',
            color: '#000',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={e => (e.target.style.backgroundColor = '#21a1f1')}
          onMouseLeave={e => (e.target.style.backgroundColor = '#61dafb')}
        >
          Contador: {count}
        </button>

        <p style={{ marginTop: 15, fontSize: '1rem', color: '#333' }}>
          Clique no botão para aumentar o contador e descobrir uma surpresa!
        </p>

        {count >= 5 && (
          <button
            onClick={() => setShowSecret(!showSecret)}
            style={{
              marginTop: 20,
              padding: '8px 16px',
              borderRadius: '8px',
              border: '2px solid #4caf50',
              backgroundColor: showSecret ? '#4caf50' : 'transparent',
              color: showSecret ? '#fff' : '#4caf50',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
          >
            {showSecret ? 'Esconder Segredo' : 'Mostrar Segredo'}
          </button>
        )}

        {showSecret && (
          <div
            style={{
              marginTop: 20,
              padding: 15,
              borderRadius: 10,
              backgroundColor: '#e0f7fa',
              color: '#006064',
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}
          >
             Parabéns! Você sabe clicar no botão! Já pode se considerar um expert em navegação!
          </div>
        )}
      </div>

      <p className="read-the-docs" style={{ textAlign: 'center', marginTop: 40 }}>
        Clique nos logos do Vite e React para aprender mais.
      </p>
    </>
  )
}

export default App
