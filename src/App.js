import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import ArtForm from './ArtForm';
import NavBar from './NavBar';
import Art from './Art';
import ArtDetail from './ArtDetail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/art">
              <Art />
            </Route>
            <Route path="/art/:id">
              <ArtDetail />
            </Route>
            <Route exact path="/addnewart">
              <ArtForm />
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
