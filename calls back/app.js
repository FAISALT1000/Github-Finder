const posts = [
    {title:'Post one', body:'this is post one'},
    {title:'Post two', body:'this is post two '},
    {title:'Post three', body:'this is post three'},
    {title:'Post four', body:'this is post four'}
];

/* 
function createPost(post){
    setTimeout(function(){
        posts.push(post);
    },2000);
}

function getPosts(){
    setTimeout(function(){
        let output='';
        posts.forEach(function(post){
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },3000);
}; */


function createPost(post, callback){

    setTimeout(function(){
        posts.push(post);
        callback();
    },2000);
}

function getPosts(){
    setTimeout(function(){
        let output='';
        posts.forEach(function(post){
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
};

createPost({title:'Post five',body:'this is post five'},getPosts);