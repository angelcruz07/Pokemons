import {useState} from 'react'     
import { Formik, Form, Field} from 'formik'
import './header.css'

function App() {
  const [photos, setPhotos] = useState([])
  console.log({ photos })
  return (
    <div>
      <header>
        <Formik
          initialValues={{ search: '' }}
          onSubmit = {async values => {
            const reponse = await fetch(`https://api.unplash.com/search.photos?per_page=20&query=${values.search}`, {
              headers: {
              'Authorization': 'Client-ID 1WXPB7ZPopKfIPyeNYKBt9njfvQDVgwxUz3FZzVX9nM'
              }
            })
            const data = await reponse.json()
            //llamar a la api de unplash
            setPhotos(data.results)
          }}>
            <Form>
              <Field name="search"/>
            </Form>
        </Formik>
      </header>
    </div>
  )
}

export default App
