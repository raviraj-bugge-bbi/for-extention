var data;
var dataApi = `[{"htmlData" : "Ashwin"}]`;

window.onload = (event) => {

    const fs = require('fs')
  
// Data which will write in a file.
let data = "Learning how to write in a file."
  
// Write data in 'Output.txt' .
fs.writeFile('Output.txt', data, (err) => {
      
    // In case of a error throw err.
    if (err) throw err;
})

//     fetch('./api.json')
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(ResponseData){
//         data = ResponseData;
//         console.log(data[0]['htmlData']);
//         let htmlData = data[0]['htmlData'];
//         document.getElementById("apidata").innerText = htmlData;
//     })
//   };

//   async function save(){
//     fetch('./api.json')
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(ResponseData){
//         data = ResponseData;
//         console.log(data[0]['htmlData']);
//         let htmlData = data[0]['htmlData'];
//         document.getElementById("apidata").innerText = htmlData;
//         console.log("--------------------");
//        let textAreaData = document.getElementById("apidata").value;
//        console.log(textAreaData);

//        data[0]["htmlData"] = textAreaData;
//     })
  }