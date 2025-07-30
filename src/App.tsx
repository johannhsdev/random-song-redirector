import { useEffect } from 'react'
import './App.css'

const links = [
  'https://youtu.be/2go_dOJVwc4?si=V6oy14TsxvaE2MHp',
  'https://youtu.be/-dFZGGhSqks?si=RcQ_RKcOvYvhmqR0',
  'https://youtu.be/mMrdziQaETU?si=xknSV2of2ETQl7i4',
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
