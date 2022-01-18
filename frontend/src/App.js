import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components

import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Aboutpage from './components/About';


// Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

function App() {


    return (
        <Router>
     
            <main className="app">
                <Switch>
                    <Route exact path="/register" component={Signup} />
                    <Route exact path="/" component={Login} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={Aboutpage} />
                    <Route exact path="/products" component={HomeScreen} />
                    <Route exact path="/product/:id" component={ProductScreen} />
                    <Route exact path="/cart" component={CartScreen} />
                </Switch>
       
            </main>
      
        </Router>
     
    );
}

export default App;
