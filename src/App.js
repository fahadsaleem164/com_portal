import logo from './logo.svg';
import './App.css';
import styles from './layout/main_header.css'
import { BrowserRouter as Router , Route , Link } from "react-router-dom";
import MainLayout from './layout/main_layout'
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {

  return (

       <div>
         <MainLayout></MainLayout>
          
       </div>  
  );

}

export default App;
