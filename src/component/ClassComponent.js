// ClassComponent.js
import React, { Component } from 'react';
class ClassComponent extends Component {
constructor(props) {
super(props);
this.state = { count: 0 };
}
render() {
return (
<div>
Count: {this.state.count}
<button onClick={() => this.setState({ count: this.state.count + 1
})}>
Increment
</button>
</div>);
}
}
export default ClassComponent;