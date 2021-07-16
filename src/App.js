import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <Router basename={process.env.PUBLIC_URL}>
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
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default App
