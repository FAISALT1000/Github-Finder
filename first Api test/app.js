document.querySelector('.get-jokes').addEventListener('click',getJokes);

function getJokes(e){
    const number= document.querySelector('input[type ="number"]').value;

    const xhr=new XMLHttpRequest();
    xhr.open('GET',`https://api.icndb.com/jokes/random/${number}`,true);
xhr.onload = function(){
    if(this.status === 200){
        const response= JSON.parse(this.responseText);
    
        let output= '';
        let num =0;
      
        if(response.type === 'success'){
            try{
            response.value.forEach(function(joke){
                num++;
                output += `<li>${num}- ${joke.joke}</li>`;
        })}catch(err){
            alert('must select a number ++-++');
        }
        ;
        }else{
            output+='<li>Something went wrong</li>';
        };
        document.querySelector('.jokes').innerHTML = output;
    
    }
};
xhr.send();

    e.preventDefault();
    
};