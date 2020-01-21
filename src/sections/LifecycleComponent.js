import React from 'react'

class LifeCycleComp extends React.Component {
    // old
    // constructor(){
    //     super()
    //     console.log('constructor')
    // }
    timer = null
    state = {
        test:'str'
    }

    render(){
        console.log('render', this.state)
        return null
    }

    componentDidMount(){
        // ajax, timeout, interval, socket
        console.log('componentDidMount')

        this.timer = setInterval(()=>{
            // emulowanie ajax
            console.log('timer')
            this.setState({
                test: 'str2'
            })
        },1000)

        
    }

    componentDidUpdate(){
        // if
        console.log('componentDidUpdate')

    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
        clearInterval(this.timer)
    }
}

export default LifeCycleComp