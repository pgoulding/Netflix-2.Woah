import './App.css';
import { getDefaultData }from '../../ApiFetch'
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class App extends Component {

  async componentDidMount() {
    const something = await getDefaultData()
    console.log(something)
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

}) 


export default connect(mapStateToProps, mapDispatchToProps)(App)



