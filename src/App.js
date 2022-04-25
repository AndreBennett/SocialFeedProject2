import React, { useState  } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts'
import AddPostForm from './Components/AddPost/AddPostForm'
import DisplayNames from './Components/DisplayNames/DisplayNames';
import './App.css';



function App() {

const [names, setName] = useState([{name:'Andre'}])
const [posts, setPost] = useState([{post: 'Hi'}])

// function addNewName(name){
  
  

function addNewPost(post, name){
  
  let tempPost = [...posts, post];
  setPost(tempPost);

  let tempName = [...names, name];
  setName(tempName);
}
  return (
    <div className='container-fluid'>
      <div className='row'>
        <h3 style={{margin: '1em'}}>Social
        <small className='text-muted'>Feed</small></h3>
        <div className='col-md-6'>
          <div className='border-box'>
            <DisplayNames parentName={names} />
          </div>
        <div className='col-md-6'>
          <div className='border-box'>
            <DisplayPosts parentPost={posts} />
          </div>
          <button type='submit' className='btn btn-primary'  style={{'margin-left': '1em'}} >Like</button>
          <button type='submit' className='btn btn-primary'  style={{'margin-left': '1em'}} >Dislike</button>
          <div className='col-md-6'>
            <div className='border-box'>
              <AddPostForm addNewPost={addNewPost} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
    

  );
}
  // }
export default App;
