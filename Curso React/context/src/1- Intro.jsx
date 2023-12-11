import { createContext, useContext} from 'react'

const DefaultContext = createContext('Valor por defecto')
const Context2 = createContext('Valor por defecto2')

//  provider es una convencion usando context
const DefaultProvider = ({ children }) => {
  return (
  <Context.Provider value={'mi valor'}>
    {children}
    </Context.Provider>
  )
}

const Contenido = () => {
  const context = useContext(DefaultContext)
  return (
    <div>{context}</div>
  )
}

const Contenido2 = () => {
  const context2 = useContext(Context2)
  return (
    <div>{context2}</div>
  )
}

function App() {
  return (
    <DefaultProvider>
      <Contenido/>
      <Contenido2/>
    </DefaultProvider>
  )
}


export default App
