import { useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'

// Por convencion se debe usar initialState
const initialState = { 
  entities: [],
}

export const reducer = ( state = initialState, action ) => {
  switch (action.type) {
    case 'todo/add': {
      console.log('reducer')
      return { 
        ...state,
        entities: state.entities.concat({ ...action.payload})
        
      }
    }
  }
  return state
}


// Componente de la lista
const TodoItem  = ({ todo }) => {
  return ( 
    <li>{todo.title}</li>
  )
}



function App() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const state = useSelector(x => x)
  
  const submit = e => { 
    e.preventDefault()
    if ( !value.trim()){ 
      return 
    }
      //  Creacion de un id para cada Todo
  const id  = Math.random().toString(36)
  const todo = { title: value , completed: false, id }
  dispatch({type: 'todo/add', payload: todo})
  setValue('')
  }

  return (
  <div>
    <form onSubmit={submit}>
      <input value={value} onChange={e => setValue(e.target.value)}/>
    </form>
    <button onClick={ () =>  dispatch({ type: 'todo/add'})}>Mostrar todos</button>
    <button>Completados</button>
    <button>Incompletos</button>
    <ul>
      {state.entities.map(todo  => <TodoItem key={todo.id } todo={todo} />)}
    </ul>
  </div>
  )
}

export default App
