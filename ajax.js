console.log("Let's begin")

let fetchreq = document.getElementById("fetchbtn");
fetchreq.addEventListener("click",fetchHandler);


let postreq = document.getElementById("postbtn");
postreq.addEventListener("click",postHandler);

function fetchHandler(){
    console.log("getreq")
    let xhr = new XMLHttpRequest();

    console.log("xhr",xhr)

    //initiate a request
    xhr.open("get","https://jsonplaceholder.typicode.com/users",true);

    //while it is in progress
    xhr.onprogress =function(){
        console.log("req is in progress...")
    }

    xhr.onload = function(){
        let str = ""; 
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            for(key in obj){
                str += `<li> ${obj[key].name} </li>`;
                console.log(obj[key].name)
            }
            
            document.getElementById('list').innerHTML = str;
            
            

        }
        

    }

    //send req
    xhr.send();
}



function postHandler(){
    console.log("postreq")
    let postxhr = new XMLHttpRequest();

    postxhr.open("post","https://dummy.restapiexample.com/create",true);

    //creating header
    postxhr.getResponseHeader('Content-Type','application/json')
   postxhr.getResponseHeader('Access-Control-Allow-Origin', '*')
//    postxhr.getResponseHeader('Access-Control-Allow-Methods', 'POST,GET')
//    postxhr.getResponseHeader('Access-Control-Allow-Headers', 'Content-Type')

    postxhr.onload = function(){
        console.log(this.responseText)
    }

    params = `{"name":"test","salary":"123","age":"23"}`;
    postxhr.send(params);
}