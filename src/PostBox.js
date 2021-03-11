import NewPost from './NewPost'
import {useState} from 'react'


const Post = [
    {
        'title':'post1',
        'desc' : 'dsadasasdasdsda'
    },
    {
        'title':'post2',
        'desc' : 'dsadasasdasdsdasdasdafadsfdsadasa'
    }
]

const PostBox = ()=>{

    const [newPostText,setNewPostText] = useState('')
    const [Task,setTask] = useState(Post)
    
    const onChangeInput = (e)=>{
        setNewPostText(e.target.value);
    }

    const onNewPost = ()=>{
        if(!newPostText){
            return
        }else{
            setTask(currentTask=>{
                return [...currentTask,{'title' : newPostText, 'desc': 'x'}]
            })
            setNewPostText('')
        }
    }

    return <div>
        <input placeholder={'متن پست شما'} onChange={onChangeInput} value={newPostText}/>
        <button onClick={onNewPost}>اضافه کردن پست</button>
        {
            Task.map(post=>{
                return <NewPost title={post.title} desc={post.desc}/>
            })
        }
    </div>
}

export default PostBox;