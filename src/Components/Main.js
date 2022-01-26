import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route, Routes, history} from 'react-router-dom'



class Main extends Component {
    constructor() { 
        super() //MUST call and it gives access to use 'this' on next line
        this.state = {//now, when the array gets added to, it changes the state, which will cause render() to be called as this is in constructor and that is its job is to be stateful
            posts: [
                {id: "0",
            description: "beautiful landscape",
            imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg"
            }, {
            id: "1",
            description: "Aliens???",
            imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
            }, {
            id: "2",
            description: "On a vacation!",
            imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
            }, {
                id: "3",
                description: "awe!",
                imageLink: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Nature_.jpg"
             } ]
        }//hardest part here. 'this' bindings are lost inside functions even inside Main component class. so bind 'this' to root so that the 'this' inside your function isn't bound to the root of that function, which is null by default
    this.removePhoto = this.removePhoto.bind(this);//else the below function removePhoto() won't be binded to 'this' so it breaks the site with errors
    this.addPhoto = this.addPhoto.bind(this);
    
}

    removePhoto(postRemoved) {
        console.log(postRemoved.description, 'no')
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }) )
    }

    addPhoto(postSubmitted) {
        
        //console.log(postSubmitted.Link,postSubmitted.description)
        //console.log(postSubmitted,postSubmitted.id, postSubmitted.description,  postSubmitted.imageLink)
        this.setState(state => ({ 
             posts: state.posts.concat([postSubmitted]) 
        
        }) ); console.log(this.state.posts.concat([postSubmitted]));
        
}
    

    navigate() {
        this.setState({
            screen: 'addPhoto'
        })
    }

    /* 
    componentDidMount() {
        const data = SimulateFetchFromDatabase()
        this.setState({
            posts: data,
            screen: 'photos'//photos,addphotos, use to switch screens
        })
    } */

componentDidUpdate(prevProps, prevState) {
    console.log(prevState.posts)
    console.log(this.state.posts)

}

//<Title title={'PhotoWall'} />
render() {
    console.log(this.state.posts)
    return (       
        <div>
            <Routes>
            <Route exact path = "/" element={<><Title title={'PhotoWall'}/><PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/></>}/>
            <Route path = "/AddPhoto" element={<AddPhoto onAddPhoto={this.addPhoto}/>}/>

            <Route path = "/denis" element={<Title title={'Test-test'}/>}/>
            </Routes>
        </div>
            )
    }   
}

/* 
// COPY THIS INTO LINE ABOVE ME INTO JAVASCRIPT ELEMENT  (addedPost, {history}) => {this.addPhoto(addedPost); history.push('/')
function SimulateFetchFromDatabase() {  //from AWS datapool
    return [{
        id: "0",
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg"
        }, {
        id: "1",
        description: "Aliens???",
        imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
        }, {
        id: "2",
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        }, {
            id: "3",
            description: "awe!",
            imageLink: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Nature_.jpg"
        }]
    }
        */




  export default Main