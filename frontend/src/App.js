import './App.css'
import { Route, Switch } from 'react-router-dom'
import Login from './Login';
import Clients from './Clients';
import View from './View';
import Add from './Add';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={'/'} exact component={Login}/>
        <Route path={'/clients'} exact component={Clients}/>
        <Route path={'/clients/view-client'} exact component={View}/>
        <Route path={'/clients/add-client'} exact component={Add}/>
      </Switch>
    </div>
  );
}

export default App;
