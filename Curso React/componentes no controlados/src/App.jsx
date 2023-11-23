import {useState} from 'react'

function App() {
  const [value, setValue] = useState({normal: '', texto: '', select: '', check: false, estado: 'feliz'})
  const handleChange = ({target}) => {
    setValue({
    ...value,
      [target.name]: target.type === 'checkbox' 
      ? target.checked 
      : target.value }
      )}

  console.log(value)

  return (
    <div>
      {value.length < 5 ? <span>Longitud minima de 5</span> : null}
      <input type="text" name="normal" value={value.normal} onChange={handleChange} />
      <textarea name="texto" onChange={handleChange} value={value.texto} />
      <select name="selects" value={value.select} onChange={handleChange} >
        <option value="">-- Seleccione --</option>
        <option value="perros">-- Perros --</option>
        <option value="gatos">-- Gatos --</option>
        <option value="osos">-- osos --</option>
      </select>
      <input type="checkbox" name="check"
      onChange={handleChange}
      checked={value.check}
      />
      <div>
        <label>Chancho</label>
        <input onChange={handleChange}
         type="radio" 
         value="feliz" 
         name="estado" 
         checked={value.estado ==='feliz'} />feliz
        <input 
        onChange={handleChange} 
        type="radio" 
        value="triste" 
        name="estado" 
        checked={value.estado ==='triste'}
          />
        triste
        <input 
        onChange={handleChange} 
        type="radio" 
        value="angel" 
        name="estado"
        checked={value.estado ==='angel'}
        />
        angel
      </div>
   </div>
  )
  }

export default App