import logo from './logo.svg';
import './App.css';
import { Switch,Route} from 'react-router-dom';
import PrivateRoute from './components/private-route/PrivateRoute';
import Questions from './components/Questions/Questions'
import Login from './components/login'
function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute path='/questions/:id' Component={Questions}></PrivateRoute>
        <PrivateRoute path={['/','/home']} exact Component={Questions} />
        <Route path={['/login']} component={Login} />
      </Switch>
    </div>
  );
}

export default App;
