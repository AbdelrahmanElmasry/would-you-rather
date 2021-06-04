import logo from './logo.svg';
import './App.css';
import { Switch,Route} from 'react-router-dom';
import PrivateRoute from './components/private-route/PrivateRoute';
import Questions from './components/Questions/Questions'
import Login from './components/login'
import React,{ Component } from 'react';
import { getUsers } from './actions';
import { connect } from 'react-redux';
class App extends Component{
  componentDidMount(){
    const {dispatch} = this.props;
    console.log(this.props);
    
    dispatch(getUsers());
  }
  render(){
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
}
const mapStateToProps = ({users,authUser}) => ({
  users,
  authUser
})

export default connect(mapStateToProps)(App);
