import React, { PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';



const getCaret = direction => {
    if (direction === 'asc') {
        return (
            <span> <i className="fa fa-sort-asc" aria-hidden="true"/></span>
        );
    }

    if (direction === 'desc') {
        return (
            <span> <i className="fa fa-sort-desc" aria-hidden="true"/></span>
        );
    }

    return (
        <span> <i className="fa fa-sort" aria-hidden="true" /></span>
    );
};



const titleFormatter = (cell, row) => {
  return `<a href=${row.watchHref} target="_blank">${cell}</a>`;
};



class CourseList extends React.Component {

    constructor(props) {
        super(props);

        this.options = {
            sortIndicator: true,
            noDataText: 'No data'
        };

        this.selectRowProp = {
            mode: 'radio',
            bgColor: '#c1f291',
            onSelect: props.handleRowSelect,
            clickToSelect: true,
            hideSelectColumn: true
        };
    }



    render() {


        return (
            <BootstrapTable data={this.props.courses}  selectRow={this.selectRowProp}  options={this.options} bordered={false} striped hover condensed>
                <TableHeaderColumn dataField="id" isKey hidden>Id</TableHeaderColumn>

                <TableHeaderColumn
                    dataField="nome"
                    dataFormat={titleFormatter}
                    dataSort={true}
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Nome
                </TableHeaderColumn>

                <TableHeaderColumn
                    dataField="sobrenome"
                    dataSort={true}
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Sobrenome
                </TableHeaderColumn>

                <TableHeaderColumn
                    dataField="email"
                    dataSort={true}
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Email
                </TableHeaderColumn>

                <TableHeaderColumn
                    dataField="telefone"
                    dataSort={true}
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Telefone
                </TableHeaderColumn>
            </BootstrapTable>
        );
    }

}



CourseList.propTypes = {
    courses: PropTypes.array.isRequired,
    handleRowSelect: PropTypes.func.isRequired
};



export default CourseList;
