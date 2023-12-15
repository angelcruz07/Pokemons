import { Routes, Route, NavLink } from 'react-router-dom'

const Portafolio = () => {
    return (
        <div>
            <h1>Portafolio</h1>
            <ul>
            <li>
                <NavLink end className={({isActive}) => {
                    console.log(isActive)
                    return "nav-link " + (isActive ? "activated" : "") }
                        }to="proyecto-1">Proyecto 1</NavLink>
                    </li>
                     <li>
                         <NavLink end style={({isActive, isPending}) => {
                             console.log(isActive, isPending)
                         return {color: isActive ? "red" : "blue"}
                             }} to="proyecto-2">Proyecto 2</NavLink>
                </li> 
            </ul>
            <div>
                <Routes>
                    <Route path="/proyecto-1" element={<h2>Proyecto 1</h2>} />
                    <Route path="/proyecto-2" element={<h2>Proyecto 2</h2>} />
                </Routes>
            </div>
        </div>
    )
}

function App() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink end to='/'>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink end to='/portafolio'>Portafolio</NavLink>
                    </li>
                </ul>
            </nav>
            <section>
                <Routes>
                    <Route path="/" element={<h1>Inicio</h1>} />
                    <Route path="/portafolio/*" element={<Portafolio />} />
                </Routes>
            </section>
        </div>
    );
}

export default App;