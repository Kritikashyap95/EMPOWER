import CustomCard from "./CustomCard";
import { Component } from "react";

class MyPage extends Component{

    constructor(props) {
            super(props);
            this.state = {
              data: [],
            };
          }

    componentDidMount() {
    fetch("https://dummyjson.com/products")
      .then((a) => {
        return a.json();
      })
      .then((a) => this.setState({ data: a.products }))
      .catch((err) => console.log(err));
  }


    render(){
        return( 
                     
            <div style={{display:'flex', justifyContent: "center" , gap:"10px", flexWrap:"wrap"}}>

            {this.state.data.map((elem) => {
                return  <CustomCard title = {elem.title} description = {elem.description} imageSource ={elem.thumbnail} price ={elem.price}/>
            })}

       
        </div>
            
        )
    }
}



export default MyPage;