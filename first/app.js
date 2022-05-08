document.getElementById('button').addEventListener('click',loadData);

function loadData(){
// create an XHR Object for HttpRequest
    const xhr= new XMLHttpRequest();
// make XMLHttpRequest open and give it the data
    xhr.open('GET','data.txt',true);
// 
    xhr.onprogress = function(){
        console.log('READYSTATE', xhr.readyState);
    }
   // onLoad function to give you a response if it success
      xhr.onload =function(){
        if(this.status === 200){
          document.getElementById('output').innerHTML = `<h3>${this.responseText}</h3>`
        }
    }  
  /*   xhr.onreadystatechange = function(){
        if(this.status === 200 && this.readyState === 4){
            console.log(this.responseText);
            console.log('READYSTATE', xhr.readyState);
        }
    } */
  xhr.onerror = function(){
      console.log('Request error.....');
  }
  // send the request
    xhr.send();
  
}