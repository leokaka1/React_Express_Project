import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {add,minus} from './redux/action/demo1Action'

class App extends React.Component{
  render(){
    return(
      <div>
        <div>
          {this.props.count}
        </div>
        <button type="button" onClick={()=>this.props.add(10)}>+</button>
        <button type="button" onClick={()=>this.props.minus(20)}>-</button>
      </div>
    )
  }

  add(){
    console.log(123)
  }

  minus(){
    console.log(223)
  }
}

const mapStateToProps = (state) => ({
    count:state.demo1.count
})

const mapDispatchToProps = {
  add,
  minus
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
