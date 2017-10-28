import React, { PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const CommentList = ({ comments }) => {
    return (
        <BootstrapTable data={comments}>
            <TableHeaderColumn isKey dataField='id'>Comment ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='body'>Message</TableHeaderColumn>
        </BootstrapTable>
    );
};

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
};

export default CommentList;
