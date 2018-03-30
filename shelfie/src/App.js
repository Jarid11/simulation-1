import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
      selectedId: {}
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/inventory")
      .then(res => {
        this.setState({
          inventory: res.data
        });
      })
      .catch(console.log);
  }

  render() {
    const { inventory, selectedId } = this.state;
    return (
      <div className="App">
        <Header />
        <main className="main">
          <Dashboard
            inventory={inventory}
            getRequest={this.componentDidMount}
          />
          <Form getRequest={this.componentDidMount} selectedId={selectedId} />
        </main>
      </div>
    );
  }
}

export default App;
