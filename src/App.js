import logo from './logo.svg';
import './App.css';

//q1
function UserList(props){
  console.log(props.userList);
  return <ul>
    {props.userList.map((item,index) => {
      return <li>key={index} - {item.name} {item.email}</li>
})}
  </ul>
}

//q2
function ProductList(props){
  console.log(props.productsList);
  return <ul>
    {props.userList.map((item,index) => {
      return <li>key={index} - {item.name} {item.price}</li>
})}
  </ul>
}



function App() {
  const myList = [
    {id:1, name:'Leen', email:'leen05@gmail.com'},
    {id:2, name:'Lady', email:'lady12@gmail.com'}
  ];
  const products = [
    {id:1, name:'Laptob', price:5000},
    {id:2, name:'Ipad', price:2000}
  ];
  return (
    <div className="App">
      <UserList userList={myList}></UserList>
      <ProductList productsList={products}></ProductList>
    </div>
  );
}

export default App;
