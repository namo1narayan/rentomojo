import {Admin,   Pagination,   Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import GameList from './components/GameList';

function App() {
  return (
    <div className="App">
  <Admin  dataProvider={restProvider('http://localhost:3000')}>
    <Resource name='games' list={GameList}/>
</Admin>
  </div>
  
  )
}

export default App;
