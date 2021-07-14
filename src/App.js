import Header from './components/Header'
import About from './pages/About'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
        </Switch>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
