import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Projects from './pages/Projects'
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
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
