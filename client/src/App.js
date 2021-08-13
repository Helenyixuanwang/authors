
import './App.css';
import { Router } from '@reach/router';

import AllAuthors from './components/AllAuthors';
import EditAuthor from  './components/EditAuthor';
import CreateAuthor from './components/CreateAuthor';



function App() {
  return (
    <div className="App" >
      <h1>Favorite Authors</h1>
        
      <Router>
      <AllAuthors path='/authors' />
      <CreateAuthor path="/authors/new"  />
      <EditAuthor path="/authors/:id/edit" />

      </Router>
   
     
    </div>
  );
}

export default App;
