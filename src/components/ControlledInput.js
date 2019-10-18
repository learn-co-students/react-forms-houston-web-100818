// Code ControlledInput Component Here
import React from 'react'

export default class ControlledInput extends React.Component{
    constructor(){
        super()
        this.state={
            firstName: "Jordan",
            lastName: "Laird",
            submittedData: []
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        let formData = {firstName: this.state.firstName, lastName: this.state.lastName}
        let dataArray = this.state.submittedData.concat(formData)
        this.setState({
            submittedData: dataArray
        })
    }

    listOfSubmissions = () =>{
        return this.state.submittedData.map(data => {
            return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
        })
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input type="text" name="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName}/>
                    <input type="text" name="lastName"onChange={event => this.handleChange(event)} value={this.state.lastName} />
                    <input type="submit" />
                </form>
                {this.listOfSubmissions()}
            </div>
        )
    }
}