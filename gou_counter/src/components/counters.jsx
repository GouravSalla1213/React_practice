import Counter from './counter'
import React, { Component } from 'react';


class  Counters extends Component {
    state = { 
        counters:[
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ],
        imageUrl: "https://picsum.photos/300"
     } 
     handleReset = () =>{
        //this.sate.counters.map(c => {c.value=0;return 0;});
        console.log("Reset Called");
     }
     handleDelete = counterId =>{
        const counters= this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters:counters});
        console.log( "Delete Called!", counterId);
     }
    render() { 
        return (
            <div>
                <h1 className="text-success">Hello , Welcome! </h1>
                <button 
                style={{ fontSize: 20 }} 
                onClick={this.handleReset}
                className="btn btn-primary btn-sm">Reset</button>
                <img className="m-2" src={this.state.imageUrl} alt=""/>
                {this.state.counters.map( counter => 
                <Counter 
                key={counter.id}
                id={counter.id} 
                value={counter.value} 
                onDelete={this.handleDelete}
                 /> )}
            </div>
        );
    }
}
 
export default Counters;