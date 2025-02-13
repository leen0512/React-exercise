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
    {props.productsList.map((item,index) => {
      return <li>key={index} - {item.name} {item.price}</li>
})}
  </ul>
}

//q3
function EmployeesCards(props) {
  console.log(props.employees);
  return (
    <div>
      {props.employees.map((item, index) => {
        return (
          <div>
            <h2>{item.name}</h2>
            <p>{item.position}</p>
            <img src={item.image} style={{ width: "200px", height: "200px" }} alt={item.name} />
          </div>
        );
      })}
    </div>
  );
}

//q4
function NavBar(props){
  console.log(props.links);
  return (
  <nav>
    <ul>
      {props.links.map(item => (
        <li key={item.id}>
          <a href={item.href}>{item.label}</a>
          </li>
      ))}
    </ul>
  </nav>
  );
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
  const employeesList = [
    {id:1, name:'Walt Disney', position:'Manager', image:'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1971001350-copy.jpg?c=original'},
    {id:2, name:'Fa Mulan', position:'Employee', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvJ8GTA_fEyh_uiBTcdjfWUf6jnIpOSTncuQ&s'}  ];
    const linksList = [
      { id: 1, label: "Google", href: "https://www.google.com" },
      { id: 2, label: "YouTube", href: "https://www.youtube.com" },
      { id: 3, label: "GitHub", href: "https://github.com" },
    ];
    
    return (
    <div className="App">
      <UserList userList={myList}></UserList>
      <ProductList productsList={products}></ProductList>
      <EmployeesCards employees={employeesList}></EmployeesCards>
      <NavBar links={linksList}></NavBar>
    </div>
  );
}

export default App;
