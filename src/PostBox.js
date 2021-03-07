import NewPost from './NewPost'


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

    const onNewPost = ()=>{
        alert('s');
    }

    return <div>
        <input placeholder={'متن پست شما'}/>
        <button onClick={onNewPost}>اضافه کردن پست</button>
        {
            Post.map(post=>{
                return <NewPost title={post.title} desc={post.desc}/>
            })
        }
    </div>
}

export default PostBox;