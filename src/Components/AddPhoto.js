import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class AddPhoto extends Component {
    constructor() {
        super()//increases scope to Component from within function 'constructor' which is  null-by-default
        this.handleSubmit = this.handleSubmit.bind(this)//everytime its rendered, bind that variable to its new value 
        
    }
handleSubmit(event) {
    event.preventDefault();
    const imageLink = event.target.elements.Link.value
    const description = event.target.elements.Description.value
    const post = {
        id: Number(new Date()),
        description: description,
        imageLink: imageLink
    }

    
    if (imageLink && description)  {

        console.log('ham')
        console.log('bunnies')
       console.log(typeof(post),post.description,post.id,post.imageLink);
       
       console.log(this.props.onAddPhoto);
       this.props.onAddPhoto(post);
       <div><Link to="/"/></div>
       
        
       
       
       //this.props.onAddPhoto(post)
       

         //console.log(post) // >> THIS WORKS. IT CONSOLE LOGS THEM CORRECTLY
    }

    
//event.preventDefault(); -> prevents default behavior which is reloading of the page everytime its clicked
}


render () {
   return (
        <div>
            <h1> Instagram </h1> 
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input type = "text" placeholder="Link" name="Link"/>
                    <input type = "text" placeholder="Description" name="Description"/>
                        <div className="postButton">
                            <button> Post </button>
                        </div>
                        <div className="mainPageBtn">
                           <Link to="/"> <button> Main Page</button></Link>
                        </div>
                </form>
            </div>
        </div>
    )
}
}


export default AddPhoto