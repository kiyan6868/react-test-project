const NewPost = ()=>{

    const onNewPost = ()=>{
        alert('s');
    }

    return <div>
        <input placeholder={'متن پست شما'}/>
        <button onClick={onNewPost}>اضافه کردن پست</button>
    </div>
}

export default NewPost;