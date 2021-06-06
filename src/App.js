import logo from './logo.svg';
import './App.css';
import { Switch,Route} from 'react-router-dom';
import PrivateRoute from './components/private-route/PrivateRoute';
import Questions from './components/Questions/Questions'
import Login from './components/login'
import Nav from './components/Nav/nav'
import React,{ Component } from 'react';
import { getUsers, getQuestions } from './actions';
import { connect } from 'react-redux';

import 'antd/dist/antd.css'; 
import QuestionDetails from './components/Questions/QuestionDetails';
class App extends Component{
  componentDidMount(){
    const {dispatch} = this.props;
    dispatch(getUsers());
    dispatch(getQuestions(this.updateQuestionsIds));    
  }

  updateQuestionsIds= (questions) => {
    if(questions){
        this.setState({
            questionsIds:Object.keys(questions)
        })
    }
  }
  render(){
      return (
        <div className="App">
          <Nav />
        <Switch>
          <PrivateRoute path='/questions/:id' Component={QuestionDetails}></PrivateRoute>
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
