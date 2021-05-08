import './App.css';
import sajek from './images/Image/sajek2.jpg';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/Home/Home';
import { createContext, useState } from 'react';
import Booking from './components/Booking/Booking';
import Blog from './components/Blog/Blog';
import News from './components/News/News';
import Contact from './components/Contact/Contact';
import Destination from './components/Destination/Destination';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  const [place , setPlace] = useState(
    {
      id: 1,
      name:"Sajek",
      info:'Sajek Valley (Bengali: সাজেক উপত্যকা) is an emerging tourist spot in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District. The valley is 1,476 feet (450 m) above sea level. Sajek valley is known as the Queen of Hills & Roof of Rangamati.',
      img:sajek,
      background:sajek,
    }
  )

  return (
    <UserContext.Provider value={[place, setPlace, loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/login">
            <Login/>
        </Route>

        <PrivateRoute path="/booking/destination">
          <Destination></Destination>
        </PrivateRoute>

        <Route path="/booking/:placeId">
          <Booking></Booking>         
        </Route>
        
        <Route path="/blog">
          <Blog></Blog>
        </Route>

        <Route path="/news">
          <News></News>
        </Route>

        <Route path="/contact">
          <Contact></Contact>
        </Route>

      </Switch>
    </Router>
    </UserContext.Provider>
    
  );
}

export default App;
