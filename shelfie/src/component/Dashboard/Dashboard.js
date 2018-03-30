import React, { Component } from "react";
import axios from "axios";
import "./Dashboard.css";

import Product from "../Product/Product";

class Dashboard extends Component {
  constructor(props) {
    super();

    this.deleteStudent = this.deleteStudent.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
  }

  deleteStudent(id) {
    const { getRequest } = this.props;
    axios
      .delete(`/api/delete/${id}`)
      .then(res => {
        getRequest();
      })
      .catch(console.log);
  }

  // updateProduct(id, name, price, img) {
  //   const { getRequest } = this.props;
  //   axios
  //     .put(`/api/product/${id}`, { name, price, img })
  //     .then(res => {
  //       getRequest();
  //     })
  //     .catch(console.log);
  // }

  render() {
    const { inventory } = this.props;
    const list = inventory.map((e, index) => {
      return (
        <Product
          key={index}
          id={e.id}
          name={e.name}
          price={e.price}
          img={e.img}
          deleted={this.deleteStudent}
          edit={this.updateProduct}
        >
          {e}
        </Product>
      );
    });

    return <div className="dashboard">{list}</div>;
  }
}

export default Dashboard;
