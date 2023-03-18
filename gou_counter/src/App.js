import React, { Component } from 'react';
import Counters from './components/counters'
class App extends Component {
    state = {  } 
    render() { 
        return (
                <React.Fragment>
                    
                    <Counters/>
                </React.Fragment>
        );
    }
}
 
export default App;