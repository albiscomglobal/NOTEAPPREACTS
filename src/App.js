import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import NoteList from './components/NoteList';
import NotFound from './components/NotFound';
 
 

function App() {
  return (
<BrowserRouter> 
<div>

  <Navbar/>
<div>
<Switch>
        <Route exact  path="/" component={NoteList} />
         <Route path="*" component={NotFound} />
 
</Switch>
</div>
</div>

</BrowserRouter>
  );
}

export default App;
