import { useEffect } from 'react'
import './App.css'

const links = [
  'https://www.youtube.com/watch?v=abc123',
  'https://open.spotify.com/track/xyz456',
  'https://soundcloud.com/example-song',
  'https://www.youtube.com/watch?v=otrovideo123'
];

function App() {

  useEffect(() => {
    const randomLink = links[Math.floor(Math.random() * links.length)];
    window.location.href = randomLink;
  }, []);

  return (
    <>
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Redirigiéndote a una canción aleatoria...</h1>
        <p>Si no eres redirigido automáticamente, haz clic <a href="/">aquí</a>.</p>
      </div>
    </>
  )
}

export default App
