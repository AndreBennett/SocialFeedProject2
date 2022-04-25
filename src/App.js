import React, { useState,  } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts'
import AddPostForm from './Components/AddPost/AddPostForm'
import DisplayNames from './Components/DisplayNames/DisplayNames';
import './App.css';



function App() {

const [names, setName] = useState([{name:'Andre'}])
const [posts, setPost] = useState([{post: 'Hi'}])

function addNewName(name){
  
  let tempName = [...names, name];
  setName(tempName);

function addNewPost(post){
  
  let tempPost = [...posts, post];
  setPost(tempPost);
}
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='border-box'>
            <DisplayNames parentName={names} />
          </div>
        <div className='col-md-6'>
          <div className='border-box'>
            <DisplayPosts parentPost={posts} />
          </div>
          <button type='submit' className='btn btn-primary'>Like</button>
          <button type='submit' className='btn btn-primary'>Dislike</button>
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
 }
export default App;
