import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from 'axios';

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
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        const fetchSmurfs = res.data;
        this.setState({
          fetchSmurfs
        });
        console.log(res);
      });
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
        {/* { this.state.fetchSmurfs.map(smurf => <SmurfList smurf={smurf} key={smurf.id}/>)} */}
        <SmurfList smurf={this.state.fetchSmurfs}/>
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
export default connect(mapStateToProps)(App);


//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.