import { useState } from 'react'

function App() {
  const [mostrar, setMostrar] = useState(false)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-300 via-pink-100 to-pink-200 text-center">
      <h1 className="text-4xl font-bold text-pink-700 mb-6">
        Bienvenida Ángela 💖
      </h1>

      <button
        onClick={() => setMostrar(!mostrar)}
        className="bg-gradient-to-r from-pink-500 via-red-400 to-yellow-300 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-all duration-300 animate-pulse"
      >
        🌟 Mostrar a la chica más linda 🌟
      </button>

      {mostrar && (
        <div className="mt-8 animate-fade-in">
          <img
            src="/angela.jpg" // asegúrate de que esté en la carpeta `public`
            alt="Ángela"
            className="w-64 h-64 object-cover rounded-full shadow-2xl border-4 border-white mx-auto mb-4"
          />
          <div  className="text-xl text-pink-900 font-semibold bg-white bg-opacity-70 px-4 py-2 rounded-lg shadow">
            <p >
            "Eres la razón por la que sonrío cada día 💕"
          </p>
          <p >
            "🌟Espero poder tener la dicha de conocerte en persona. Bonita 🌟"
          </p>
          </div>
          
        </div>
      )}
    </div>
  )
}

export default App

