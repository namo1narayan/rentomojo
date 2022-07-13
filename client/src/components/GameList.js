import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
  } from 'react-admin'
const GameList = (props) => {
    return (
       <List {...props}>
         <Datagrid>
        <TextField source='title' />
        <TextField source='platform' />
        <TextField source='score'/>
        <TextField source='genre' />
        <TextField source='editors_choice' />
        <EditButton basePath='/games' />
        <DeleteButton basePath='/games' />
      </Datagrid>

       </List>
    );
};

export default GameList;
