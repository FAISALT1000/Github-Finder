document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getJson);
document.getElementById('button3').addEventListener('click',getApiData);

function getText(){
    fetch('test.txt')
        .then(function (res){
          return res.text();
        })
        .then(function (data){
            document.getElementById('output').innerHTML = data;
        }).catch(function (err){
            console.log(err);
    });
}

function getJson(){
    fetch('posts.json')
        .then(function (res){
            return res.json();
        })
        .then(function (data){

          let output='';
            data.forEach(function (post){
                output+=`<li>${post.title}</\li>
                          <li>${post.body}</\li><br>`;
            });
            document.getElementById("output").innerHTML = output;
        }).catch(function (err){
        console.log(err);
    });
}
function getApiData(){

    fetch('https://api.github.com/users')
        .then(function (res){
            return res.json();
        })
        .then(function (data){

            let output='<h2>30 user from github API</h2><br>';
            data.forEach(function (post){

                output+=`<li> id number: ${post.id}</\li>
                          <li>UserName: ${post.login}</\li><br>`;
            });
            document.getElementById("output").innerHTML = output;
        }).catch(function (err){
        console.log(err);
    });
}