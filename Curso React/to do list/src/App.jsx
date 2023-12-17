import { useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'

// Por convencion se debe usar initialState
const initialState = { 
  entities: [],
  filter: 'all'
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
    case 'todo/completed': {
      const newTodos = state.entities.map(todo =>  { 
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed}
        }
        return todo 
      })
      return { 
        ...state,
        entities: newTodos
      }
    }
    case 'filter/set' : { 
      return { 
        ...state, 
        filter: action.payload,
      }
    }
  }
  return state
}


const  selectTodos =  state =>  { 

  const { entities, filter } = state

  if(filter === 'completed') { 
    return entities.filter(todo => todo.completed )
  }
  else if (filter === 'incompleted') { 
    return entities.filter(todo => !todo.completed)
  }

  return entities 
}


// Componente de la lista
const TodoItem  = ({ todo }) => {
  const dispatch = useDispatch()

  return ( 
    <li
    style = {{ textDecoration: todo.completed ? 'line-through' : 'none'}}
    onClick = {() => dispatch({ type: 'todo/completed', payload: todo })}>
      {todo.title}
    </li>
  )
}



function App() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const todos = useSelector(selectTodos)
  
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
    <button onClick={() =>  dispatch({ type: 'filter/set', payload : 'all'})}>Mostrar todos</button>
    <button onClick={() => dispatch({ type: 'filter/set' , payload: 'completed'})}>Completados</button>
    <button onClick={() => dispatch({ type: 'filter/set' , payload: 'incompleted'})}>Incompletos</button>
    <ul>
      {todos.map(todo  => <TodoItem key={todo.id } todo={todo} />)}
    </ul>
  </div>
  )
}

export default App
