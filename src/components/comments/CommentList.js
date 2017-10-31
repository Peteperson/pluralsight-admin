import React, { PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const CommentList = ({ comments }) => {
    return (
        <BootstrapTable data={comments} pagination 
            headerStyle={{ color: '#cccccc' }} bodyStyle={{ color: '#aaaaaa' }}>
            <TableHeaderColumn isKey dataField="id" hidden>Comment ID</TableHeaderColumn>
            <TableHeaderColumn dataField="name" width="150" dataSort={"true"}
                tdStyle={{ whiteSpace: 'normal' }}>Name</TableHeaderColumn>
            <TableHeaderColumn dataField="body" dataSort={"true"} 
                tdStyle={{ whiteSpace: 'normal' }}>Message</TableHeaderColumn>
        </BootstrapTable>
    );
};

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
};

export default CommentList;
