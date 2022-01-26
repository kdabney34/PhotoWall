import React, {Component} from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
/*

class PhotoWall extends Component {
    render () {
        return <div className="photoGrid">
                    {this.props.posts.map((post,index) => <Photo key={index} post={post} />)}
               </div>
    }
} */
 //PhotoWall(props) is easier than saying PhotoWall(ALL VARS LISTED IN THE INSTANCE OF PHOTOWALL THAT IS RENDERED BY DOM)
function PhotoWall(props) { //whenever photowall is called, do this function using the 'props' that are declared by feeding them inside the component instance like so -> <Title onRemovePhoto="this"/>  so onRemovePhoto is a prop
    return ( <div> 
            <Link className="addIcon" to="/AddPhoto">  </Link>
                <div className="photoGrid">  
                    {props.posts.map((post,index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}
                </div>
            </div> )
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}



export default PhotoWall




