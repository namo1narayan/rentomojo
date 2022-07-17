import React from 'react';
import { List, Datagrid,TextField,TextInput}  from 'react-admin'
const GameList = (props) => {
  const filters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Title" source="title" />,
];
    return (
       <List {...props} filters={filters} sort={{ field: 'score', order: 'DESC' }} >
        
         <Datagrid>
         <TextField source='id' />
        <TextField source='title' />
        <TextField source='platform' />
        <TextField source='score'/>
        <TextField source='genre' />
        <TextField source='editors_choice' />
        
      </Datagrid>

       </List>
    );
};

export default GameList;

