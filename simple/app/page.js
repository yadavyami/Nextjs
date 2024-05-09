// 'use client'

// import React, { Component } from 'react';

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: 'Yamini' };

//     // Bind the changeName method to the class instance
//     this.changeName = this.changeName.bind(this);
//   }

//   changeName() {
//     // Update state using setState to trigger re-render
//     this.setState({
//       name: this.state.name === "Yamini" ? "Yadav" : "Yamini"
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Name: {this.state.name}</h1>
//         {/* Call changeName using an arrow function to preserve 'this' context */}
//         <button onClick={() => this.changeName()}>Change Name</button>
//       </div>
//     );
//   }
// }
//use functional componant change name
 'use client'
// import React, { useState } from 'react';

// const Home = () => {
//   // Using useState hook to manage state
//   const [name, setName] = useState('Yamini');

//   // Function to toggle name
//   const changeName = () => {
//     setName(name === 'Yamini' ? 'Yadav' : 'Yamini');
//   };

//   return (
//     <div>
//       <h1>Name: {name}</h1>
//       {/* Button to trigger name change */}
//       <button onClick={changeName}>Change Name</button>
//     </div>
//   );
// };

// export default Home;


// import React, { Component } from 'react';

// // Child component
// class ChildComponent extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Child Component</h2>
//         {/* Displaying the prop passed from ParentComponent */}
//         <p>Received prop: {this.props.message}</p>
//       </div>
//     );
//   }
// }

// // Parent component
// class ParentComponent extends Component {
//   render() {
//     return (
//       <div>
//         <h1>There is a parent componant</h1>
//         {/* Passing a prop to ChildComponent */}
//         <ChildComponent message="Hello from ParentComponent!" />
//       </div>
//     );
//   }
// }

// export default ParentComponent;

     

// import Link from 'next/link';
// import React from  'react';
// export default function Home() {
//     return(
//         <div>
//             <Link href ='/Productlist' style={{textDecoraton: 'none'}}>Product List Page</Link>
//         </div>
//     )
// }
// 'use client'
// import React, {useEffect, useState} from 'react';

// export default  function ProductList(){

//     const [product,setProduct] =useState([]);
//     useEffect( () => {
//         const fetchData= async() => {
//         let data = await fetch('https://dummyjson.com/products')
//         data = await data.json();
//         console.log(data)
//         setProduct(data.products);
//         }
//         fetchData();
//     },[])
//     return (
//         <div>
//             <h1>Product List</h1>
//             {product.map((item) => (
//                 <h3> Name: {item.title}, Price: {item.price}</h3>
//             ))}
                
        
//         </div>
//     )
// }


//server side
// async function productList(){
//     let data = await fetch('https://dummyjson.com/products')
//     data = await data.json();
//    return data.products
// }
// export default async function ProductList(){
//     let products = await productList()
//     console.log(products)
//     return (
//         <div>
//             <h1>Product List</h1>
//                        {products.map((item) => (
//               <h3> Name: {item.title}, Price: {item.price}</h3>
//             ))}
            
//          </div>
//     )
// }
    

// 'use client'
// import store  from  './store/page'
// import {Provider} from "react-redux"
// import {useSelector, useDispatch}  from "react-redux"
// import {DECREMENT, INCREMENT} from "./actions/page"
// export default function Home({}){
//     const dispatch = useDispatch();
//     const counter = useSelector(store.counter)
//     return (
//         <Provider>
// <h1>Counter: {counter}</h1>
//             <button onClick={() => dispatch({type: INCREMENT})}>Increment</button>
//             <button onClick={() => dispatch({type: DECREMENT})}>Decrement</button>
        
//         </Provider>
            
//     )
// }
// 'use client'
// import store from './store/page';
// import { Provider } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
// import { DECREMENT, INCREMENT } from './actions/page';

// export default function Home() {
//   const dispatch = useDispatch();
//   const counter = useSelector(state => state.counter); // Access counter directly from state

//   return (
//     <Provider store={store}> {/* Provide the Redux store */}
//       <div>
//         <h1>Counter: {counter}</h1>
//         <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
//         <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
//       </div>
//     </Provider>
//   );
// }
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "./actions/page";

const Home = () => {
    const count = useSelector((state) => state.count); // Access the 'count' property from the Redux store state
    const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Home;





