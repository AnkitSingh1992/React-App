
import './App.css';
import Home from './basic/Home'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import StateExa from './basic/StateExa'
import Hide from './basic/Hide'
import EventClass from './basic/EventClass'
import Life from './basic/Life'
import DidMount from './basic/didmount'
import DidUpdate from './basic/DidUpdate'
import WillUnMount from './basic/WillUnmount'
import HooksOne from './hooks/HooksOne'
import UseEffectOne from './hooks/UseEffectOne'
import UserForm from './forms/userform'
import FormValidation from './forms/formValidation'
import Style from './style/style'
import Profile from './basic/Profile'
import MapListing from './forms/MapListing'
import ApiCall from './forms/Apicall'
import RefPage from './basic/Refpage'
import bootstrappage from './basic/bootstrappage'
import ErrorDemo from './errorboundary/ErrorDemo'
import Memo from './memo/Compoent1'
import Pure from './basic/Pure'
import Unccontrolled from './basic/uncontrolled'
import Controlled from './basic/Controlled'
import LazyComponent from './basic/LazyLoading';
import UploadFile from './basic/uploadFile';
import PropsComponent from './basic/propstype';
import CustomHooks from './basic/customhooks';
function App() {
  return (
    <div className="App">
      <header>
        <Router>
          <table>
          <tbody>
            <tr>
              <td> <Link to="">Home </Link></td>
              <td> <Link to="/profile">Profile</Link></td>
              <td> <Link to="/user">User</Link></td>
              <td> <Link to="state">StateExa </Link></td>
              <td> <Link to="/hide">Hide</Link></td>
            </tr>
            <tr>
              <td> <Link to="/eventClass"> EventClass</Link></td>
              <td><Link to="/life"> Life </Link></td>
              <td> <Link to="/didMount"> DidMount </Link></td>
              <td><Link to="/didUpdate"> DidUpdate </Link></td>
              <td><Link to="/willUnMount"> WillUnMount</Link></td>
            </tr>
            <tr>
              <td><Link to="/hooksOne"> HooksOne </Link></td>
              <td><Link to="/useEffectOne">UseEffectOne </Link></td>
              <td><Link to="/userForm"> UserForm </Link></td>
              <td><Link to="/formValidation"> FormValidation </Link></td>
              <td><Link to="/mapListing"> MapListing </Link></td>
            </tr>
            <tr>
              <td><Link to="/apicall"> Apicall </Link></td>
              <td> <Link to="/ref"> Refuse </Link></td>
              <td><Link to="/boot"> Bootstrap </Link></td>
              <td><Link to="/errorbound"> Errorbound </Link></td>
              <td><Link to="/pure"> pureComponent </Link></td>
            </tr>
            <tr>
              <td><Link to="/style"> Style </Link></td>
              <td><Link to="/memo"> memo </Link></td>
              <td><Link to="/uncontrolled"> uncontrolled </Link></td>
              <td><Link to="/controlled"> Controlled </Link></td>
              <td><Link to="/lazy"> Lazy </Link></td>
            </tr>
            <tr>
              <td><Link to="/upload"> upload </Link></td>   
              <td><Link  to="/propstypecheck"> propstype</Link></td>          
              <td><Link  to="/customhooks"> customhooks</Link></td>   
            </tr>
            </tbody>
          </table>

          <Route exact path="/state" component={StateExa} />
          <Route exact path="/hide" component={Hide} />
          <Route exact path="/eventClass" component={EventClass} />
          <Route exact path="/life" component={Life} />
          <Route exact path="/didMount" component={DidMount} />
          <Route exact path="/didUpdate" component={DidUpdate} />
          <Route exact path="/willUnMount" component={WillUnMount} />
          <Route exact path="/hooksOne" component={HooksOne} />
          <Route exact path="/useEffectOne" component={UseEffectOne} />
          <Route exact path="/userForm" component={UserForm} />
          <Route exact path="/formValidation" component={FormValidation} />
          <Route exact path="/mapListing" component={MapListing} />
          <Route exact path="/Style" component={Style} />
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/user" component={MapListing} />
          <Route path="/apicall" component={ApiCall} />
          <Route path="/ref" component={RefPage} />
          <Route path="/boot" component={bootstrappage} />
          <Route path="/errorbound" component={ErrorDemo} />
          <Route path="/pure" component={Pure} />
          <Route path="/memo" component={Memo} />
          <Route path="/uncontrolled" component={Unccontrolled} />
          <Route path="/controlled" component={Controlled} />
          <Route path="/lazy" component={LazyComponent} />
          <Route path="/upload" component={UploadFile} />          
          <Route path="/propstypecheck" component={PropsComponent} />    
          <Route path="/customhooks" component={CustomHooks} />    
        </Router>
      </header>
    </div>
  );
}

export default App;

