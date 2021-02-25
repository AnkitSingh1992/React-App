import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from "./components/Home"
import ResturantCreate from "./components/ResturantCreate"
import ResturantDetais from "./components/ResturantDetais"
import ResturantList from "./components/ResturantList"
import ResturantSerch from "./components/ResturantSerch"
import ResturantUpdate from "./components/ResturantUpdate"
import { Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faUser, faList, faHome, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import Login from './components/Login'
function App() {
  return (
    <div className="App">

      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Restro</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faHome} />Home</Link></Nav.Link>
              <Nav.Link href="#list"><Link to="/list"><FontAwesomeIcon icon={faList} />List</Link></Nav.Link>
              <Nav.Link href="#create"><Link to="/create"><FontAwesomeIcon icon={faPlus} />Create</Link></Nav.Link>
              <Nav.Link href="#serch"><Link to="/serch"><FontAwesomeIcon icon={faSearch} />search</Link> </Nav.Link>
              <Nav.Link href="#login"><Link to="/login"><FontAwesomeIcon icon={faUser} />Login</Link> </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


        <Route path="/list">
          <ResturantList />
        </Route>
        <Route path="/create">
          <ResturantCreate />
        </Route>
        <Route path="/serch">
          <ResturantSerch />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/details">
          <ResturantDetais />
        </Route>
        <Route path="/update/:id"
          render={props => (
            <ResturantUpdate {...props} />
          )}
        >
         
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>


    </div>
  );
}

export default App;
