import React, { Component } from "react";
import Collections from "../../components/collections/collections";
import SHOP_DATA from "../../shopData";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: SHOP_DATA,
    };
  }
  render() {
    return (
      <div className="collections">
        {this.state.data.map((item) => (
          <Collections key={item.id} title={item.title} items={item.items} />
        ))}
      </div>
    );
  }
}

export default Shop;
