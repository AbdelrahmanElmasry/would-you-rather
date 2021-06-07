import React,{ Component } from 'react';
import { Switch,Route} from 'react-router-dom';
import { connect } from 'react-redux';

import PrivateRoute from './components/private-route/PrivateRoute';
import Questions from './components/Questions/Questions'
import Login from './components/login'
import Nav from './components/Nav/nav'
import NewQuestion from './components/NewQuestion/NewQuestion'
import LeaderBoard from './components/LeaderBoard/LeaderBoard'
import QuestionDetails from './components/Questions/QuestionDetails';
import { getUsers, getQuestions } from './actions';

import 'antd/dist/antd.css';
import './App.css';
import Page404 from './components/404/Page404';
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
          <PrivateRoute key={1} path='/questions/:id' Component={QuestionDetails} />
          <PrivateRoute key={2}path={['/','/home']} exact Component={Questions} />
          <PrivateRoute key={3}path={'/add'} Component={NewQuestion} />
          <PrivateRoute key={4}path={'/leaderboard'} Component={LeaderBoard} />
          <Route key={5} path={'/login'} component={Login} />
          <Route key={6} path='*' component={Page404} />
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
