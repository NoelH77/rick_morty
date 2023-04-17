import { useEffect, useState } from 'react'
import './App.css'
import { getRandomDimension } from './helpers/random'
import axios from 'axios'
import Location from './components/Location'
import ResidentList from './components/ResidentList'
import Portal from './components/Portal'

function App() {

  const [location, setLocation] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = e.target.locationId.value

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`
    axios.get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err))
  }
 
  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`
    
    axios.get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">
      <Portal />
      <form className='form' onSubmit={handleSubmit} >
        <div className='p-5 flex justify-center  border-[#8EFF8B]'>
              <input id='locationId' placeholder='Type a location Id...' className='flex-input
              border-2 text-black ' type="text" />
            <button className='button'>Search <i className='bx bx-search'></i></button>
            </div>
        </form>
        <h2 className="py-6 text-[#8EFF8B] font-medium mx-auto flex justify-center">Welcome to the crazy universe!</h2>
       <Location location={location}/>
       <ResidentList location={location} />
    </div>
  )
}

export default App
