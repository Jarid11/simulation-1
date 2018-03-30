import React, { Component } from "react";
import axios from "axios";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      img: "",
      selectId: null
    };
  }

  handleName(val) {
    this.setState({
      name: val
    });
  }

  handlePrice(val) {
    this.setState({
      price: val
    });
  }

  handleImgurl(val) {
    this.setState({
      img: val
    });
  }

  handleReset() {
    this.setState({
      name: "",
      price: 0,
      img: ""
    });
  }

  makeNewProduct(name, price, img) {
    const { getRequest } = this.props;
    axios
      .post("/api/product", { name, price, img })
      .then(res => {
        getRequest();
        this.handleReset();
      })
      .catch(console.log);
  }

  updateProduct(id, name, price, img) {
    const { getRequest } = this.props;
    console.log(id, name, price, img);
    axios
      .put(`/api/product/${id}`, { name, price, img })
      .then(res => {
        getRequest();
      })
      .catch(console.log);
  }

  render() {
    const { name, price, img } = this.state;
    return (
      <div className="form">
        <div />
        <h3>Image URL:</h3>
        <input onChange={e => this.handleImgurl(e.target.value)} />
        <h3>Product Name:</h3>
        <input onChange={e => this.handleName(e.target.value)} />
        <h3>Price:</h3>
        <input onChange={e => this.handlePrice(e.target.value)} />
        <div className="alignBtns">
          <button onClick={() => this.handleReset()}>Cancel</button>
          <button onClick={() => this.makeNewProduct(name, price, img)}>
            Add to Inventory
          </button>
        </div>
      </div>
    );
  }
}

export default Form;

/* <button onClick={() => this.updateProduct(name, price, img)}>
          Save Changes
        </button> */
