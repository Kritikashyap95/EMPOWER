import { Component } from "react";
import "./CustomCard.css";

class CustomCard extends Component {
  
  render() {
    const { title, description, price, imageSource } = this.props;

    return (
        
      <div className="card">
        <div className="image">
          <img src={imageSource} alt="" />
        </div>

        <div className="titleAndDescription">
          <h1 className="title">{title}</h1>

          <h1> $ {price}</h1>

          <button >Buy Now</button>
        </div>

        <div className="description">
          <p>{description}</p>
        </div>

      </div>
    );
  }
}
export default CustomCard;
