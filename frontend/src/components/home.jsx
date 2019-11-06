import React, { Component } from 'react';

class Home extends Component {
    state = { 
        count: 0
     };
    render() { 
        return (
            <div>
                <span>{this.formatCount()}</span>
                <button>Incrementtt</button>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state
        return count === 0 ? "Zero" : count;
    }

}
 
export default Home;