import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchSmurfs } from './actions/index';

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';


import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  state = {
    fetchSmurfs: []
  }

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  getData = () => {
    axios.get('http://localhost:3333/smurfs').then(res=>{
        this.setState({
          fetchSmurfs: res.data
        });
        console.log(res.data)
      })
      .catch(err=> {
        console.log(err);
      })
  };

  render() {
    return (
      <div className="App">
        <Header />

        <main>
        <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return({

    smurfs: state.smurfs

  });
}
export default connect(mapStateToProps, {fetchSmurfs})(App);


//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.