import React, { Component } from 'react'
import TransactionForm from './TransactionForm'

class TransactionList extends Component {
    state = {
        currentIndex: -1,
        list: this.returnList()
    }

    returnList() {
        if (localStorage.getItem('transactions') == null)
            localStorage.setItem('transactions', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('transactions'))
    }

    handleEdit = (index) => {
        this.setState({
            currentIndex: index
        })
    }

    handleDelete = (index) => {
        var list = this.returnList()
        list.splice(index, 1);
        localStorage.setItem('transactions', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }

    onAddOrEdit = (data) => {
        var list = this.returnList()
        if (this.state.currentIndex == -1)
            list.push(data)
        else
            list[this.state.currentIndex] = data
        localStorage.setItem('transactions', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }


    render() {
        return (
            <div>
                <TransactionForm
                    currentIndex={this.state.currentIndex}
                    list={this.state.list}
                    onAddOrEdit={this.onAddOrEdit}
                />
                <hr />

                <table id='customers'>
                <tr>
                    <th>Vendor Name</th>
                    <th>Bank Account Number</th>
                    <th>Bank Name</th>
                    <th>Edit Details</th>
                    <th>Delete Details</th>
                </tr>
                    <tbody>
                        {this.state.list.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.vendorName}</td>
                                <td>{item.bankAccountNo}</td>
                                <td>{item.bankName}</td>
                                <td><button id="btn" onClick={() => this.handleEdit(index)}>Edit</button></td>
                                <td><button id="btn" onClick={() => this.handleDelete(index)}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TransactionList