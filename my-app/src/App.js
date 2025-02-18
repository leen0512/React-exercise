import logo from './logo.svg';
import './App.css';

//q1
function DisplayWebsiteName(){
  return <h1>React Learning Center</h1>
}

//q2
function SimpleButton(){
  return <button>Simple Button</button>
}

//q3
function ComponentPara(){
  return <p>React Components Exercise</p>
}

//q4
function Header(){
  return (
    <div>
        <h1>Title</h1>
        <hr/>
    </div>  
  );
}

//q5
function NumberList(){
  return <div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </div>
}




//main
function App() {
  return (
    <div className="App">
     <DisplayWebsiteName/>
     <SimpleButton/>
     <ComponentPara/>
     <Header/>
     <NumberList/>
    </div>
  );
}

export default App;