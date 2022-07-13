import React from "react";
import {Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import GameList from './components/GameList';

function App() {
  return (
  <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource name='games' list={GameList}/>

  </Admin>
  )
}

export default App;
