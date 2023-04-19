// import { Component } from "react";
// import InputField from "./CustomInput";

// class Signup extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: [],
//     };
//   }

//   componentDidMount() {
//     fetch("https://dummyjson.com/products")
//       .then((a) => {
//         return a.json();
//       })
//       .then((a) => this.setState({ data: a.products }))
//       .catch((err) => console.log(err));
//   }

//   render() {
//     return (

            
//       <div>
//         <h1>Hello</h1>
//         {this.state.data.map(elem =>{

//         return elem.title
//     }
//         )}
//       </div>
//     );
//   }
// }

// export default Signup;
