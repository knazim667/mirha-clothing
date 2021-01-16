import React, { Component } from "react";
import ProductCard from "../card/productCard";
import "./categories.css";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
        },
      ],
    };
  }
  render() {
    const { categories } = this.state;
    return (
      <div className="categories">
        {categories.map(({ title, imageUrl, size }) => (
          <ProductCard title={title} size={size} imageUrl={imageUrl} />
        ))}
      </div>
    );
  }
}

export default Categories;
