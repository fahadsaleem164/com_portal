import logo from './logo.svg';
import './App.css';
import styles from './layout/main_header.css'
import { BrowserRouter as Router , Route , Link } from "react-router-dom";
import MainLayout from './layout/main_layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import Event from './components/events/add'
import GetAllEvents from './components/events/get_all'
import Homepage from './components/homepage'
import EditEvent from './components/events/edit'




const AppRoute = ({component : Component, layout:Layout, ...rest})=>(
  <Route {...rest} render={props=>(
    <Layout><Component {...props}></Component></Layout>
    )}>
    </Route>
    )



function App() {

  return (

     
          <Router>
             <AppRoute exact path='/' layout={MainLayout} component={Homepage} />
               <AppRoute exact path='/events' layout={MainLayout} component={Event} />
               <AppRoute exact path='/edit_event/:id' layout={MainLayout} component={EditEvent} />
               <AppRoute exact path='/all_events' layout={MainLayout} component={GetAllEvents} />
        
          </Router>
          
      
  );

}

export default App;
