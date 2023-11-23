
function App() {
  const submit = (e) => {
    e.preventDefault()
    const data = Array.from(new FormData(e.target));
    console.log(Object.fromEntries(data))
  }

  return (
  <form onSubmit={submit}>
    <div>
      <span>
        lala
      </span>
      <input type="text"  name="campo"/>
      <input type="text"  name="campo-2"/>
      <input type="file" name="archivo" />
      <input type="submit"  name="campo" value="enviar"/>
    </div>
  </form>
   
  )
}

export default App