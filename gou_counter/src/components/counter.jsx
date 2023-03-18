import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: this.props.value
    };
    /*constructor(){
        super();
        console.log("Constructor");
        this.handleIncrement = this.handleIncrement.bind(this);
    }*/
    styles = {
        fontSize: 20,
        fontWeight: "bold",

    }
    handleIncrement= () =>{
        this.setState({ count: this.state.count+1});
        console.log("Increment Clicked",this.props.id);
    }
    render() { 
        return (
        <div> 
            <span style={this.styles} 
            className={this.getBadgeType()}>{this.formatCount()}</span>
            <button 
            onClick={this.handleIncrement} 
            style={{ fontSize: 20 }} 
            className="btn btn-secondary m-2">Increment</button>
            <button 
            onClick={() => this.props.onDelete(this.props.id)} 
            style={{ fontSize: 20 }} 
            className="btn btn-danger m-2 text-light">Delete</button>
        </div>
        );
    }

    getBadgeType() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0? "Zero": count;
    }
}
  
export default Counter;