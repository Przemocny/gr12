import React from 'react'
import {connect} from 'react-redux'
import {actions} from '../stores/mainStore'


const postsData = {
    posts:['post1','post2','post3','post4']
}

class ReduxComponent extends React.Component {

    componentDidMount(){
        const {startLoadingPosts, doneLoadingPosts} = this.props
        startLoadingPosts()

        setTimeout(()=>{
            doneLoadingPosts(postsData)
        },3000)
    }
    render(){
        console.log(this.props)
        return <div>ReduxComponent
            <div>{JSON.stringify(this.props.main)}</div>
        </div>
    }
}   

const mapStateToProps = (state)=>{
    return {
        main:state.main
    }
}

const mapDispatchToAction = {
    ...actions
}

export default connect(mapStateToProps, mapDispatchToAction)(ReduxComponent)