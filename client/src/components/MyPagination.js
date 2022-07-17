import { Pagination, List,TextField,Datagrid } from 'react-admin';

const PostPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;

export const PageList = (props) => (
    <List {...props} pagination={<PostPagination />}>
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
