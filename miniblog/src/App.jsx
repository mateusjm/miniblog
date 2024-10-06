import './App.css'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

// hooks
import { useAuthentication } from './hooks/useAuthentication'

// CSS
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(()=> {

    onAuthStateChanged(auth, (user)=> {
      setUser(user)
    })

  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <Navbar/>
        <div className='container'>
          <Outlet/>
        </div>
      <Footer/>
    </>
  )
}

export default App
