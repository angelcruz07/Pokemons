import { Routes, Route, Link, useNavigate } from "react-router-dom"


function App() {
    const navigate = useNavigate()
    const forward = () => {
        navigate(1)
        }
        const back = () => {
        navigate(-1)
        }
        const push = (url) => {
        navigate(url)
        }
        
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
        </ul>
      </nav>
      <section>
            <button onClick={forward}>Back</button>
            <button onClick={back}>Forward</button>
            <button onClick={() => push('/chanchitoFeliz')}>Push</button>
        <Routes>
            <Route path="/inicio" element={<h1>Inicio</h1>}/>
            <Route path="/perfil" element={<h1>Perfil</h1>}/>
        </Routes>
      </section>
    </div>
  );
}

export default App;
