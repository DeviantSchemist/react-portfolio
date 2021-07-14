import NavbarComponent from './components/Navbar'
import About from './pages/About'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <NavbarComponent />
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
