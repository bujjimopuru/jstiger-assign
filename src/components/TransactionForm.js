import React, { Component } from 'react'
import './index.css'

class TransactionForm extends Component {

    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if (this.props.currentIndex == -1)
            return {
                vendorName:"",
                bankAccountNo: '',
                bankName: '',
                addressline1:"",
                addressline2:"",
                city:"",
                country:"",
                zipcode:""
            }
        else
            return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex != this.props.currentIndex || prevProps.list != this.props.list) {
            this.setState({ ...this.returnStateObject() })
            console.log(prevProps, this.props)
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAddOrEdit(this.state)
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <input type="text" name="vendorName" placeholder="venor name" onChange={this.handleInputChange} value={this.state.vendorName} /><br />
                <input type="text" name="bankAccountNo" placeholder="Bank Account Number" onChange={this.handleInputChange} value={this.state.bankAccountNo} /><br />
                <input type="text" name="bankName" placeholder="Bank Name" onChange={this.handleInputChange} value={this.state.bankName} /><br />
                <input type="text" name="addressline1" placeholder="Address Line1" onChange={this.handleInputChange} value={this.state.addressline1} /><br />
                <input type="text" name="addressline2" placeholder="Address Line2" onChange={this.handleInputChange} value={this.state.addressline2} /><br />
                <input type="text" name="city" placeholder="City" onChange={this.handleInputChange} value={this.state.city} /><br />
                <input type="text" name="country" placeholder="Country" onChange={this.handleInputChange} value={this.state.country} /><br />
                <input type="text" name="zipcode" placeholder="Zipcode" onChange={this.handleInputChange} value={this.state.zipcode} /><br />
                <button type="submit">Submit</button>
            </form>
            </div>
        )
    }
}

export default TransactionForm