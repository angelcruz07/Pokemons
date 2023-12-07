import { isEqual} from 'lodash'
import { memo } from 'react'

// Optimizacion con memo

const Li = memo(({ children }) => {
  console.log(`Renderizando children ${children}`)
  return (
    <li>
      {children}
    </li>
  )
}, isEqual)


const MyList = ({ data }) => {
  console.log('renderizando lista')
  return (
    <ul>
      {data.map(x =>
        <Li key={x.name + x.lastname}>
          {x.name} {x.lastname}
        </Li>
      )}
    </ul>
  )
}

export default MyList
