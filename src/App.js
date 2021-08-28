import logo from "./logo.svg";
import "./App.css";
import Main from './Components/Main'
import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Student from "./Components/Student";
import Footer from './Components/Footer';
import {
  NavLink,
  Switch,
  Route,
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import StudentList from "./Components/Student-Lists";
function App() {
  return (
    <>
    <Router>
    <Header/>
    <Main/>
    <Footer/>
            <Switch>
              {/* <Route exact path="/" component={App}></Route> */}
              <Route exact path="/"></Route>
              <Route exact path="/about" component={About}><About/></Route>
              <Route exact path="/contact" component={Contact}><Contact/></Route>
              <Route exact path="/student" component={Student}><Student/></Route>
              <Route exact path="/student-list" component={StudentList}><StudentList/></Route>
            </Switch>
    </Router>
    </>
  );
}
export default App;
