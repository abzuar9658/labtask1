import React from 'react'
import { Table , Button} from 'semantic-ui-react'

const TableComponent = ({persons}) => (
    <div>
    <h2>List of Persons</h2>
    <Table singleLine>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Gender</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Age</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
        </Table.Header>
        <Table.Body>
            {
                persons.map((person,i)=>{
                    return(
                    <Table.Row key = {i}>
                        <Table.Cell>{person.name}</Table.Cell>
                        <Table.Cell>{person.gender}</Table.Cell>
                        <Table.Cell>{person.age}</Table.Cell>
                        <Table.Cell>{person.city}</Table.Cell>
                        <Table.Cell><Button secondary content='Delete'/>/ <Button primary content='Select'/></Table.Cell>
                        
                    </Table.Row>
                    );
                })
            }

        </Table.Body>
  </Table>
  </div>
)

export default TableComponent
