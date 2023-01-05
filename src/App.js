import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Add from "./components/AddNote";
import Navbar from "./components/Navbar";
import NoteDetails from "./components/NoteDetails";
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
        <Route exact  path="/add" component={Add} />
        <Route exact  path="/notes/edit/:id" component={Add} />
        <Route exact  path="/notes/:id" component={NoteDetails} />
         <Route path="*" component={NotFound} />
 
</Switch>
</div>
</div>

</BrowserRouter>
  );
}

export default App;
