//step 01:create an XHR object
var request=new XMLHttpRequest();
//step 02:initiate a request
request.open("GET","https://restcountries.com/v2/all");
//step 03 :sending the request
request.send();
//step 04 : once the data successfully loaded from the server
request.onload=function(){
   var result=JSON.parse(request.response);
   for(let i=0; i<result.length;i++){
    console.log(result[i].name,result[i].region,result[i].subregion,result[i].population);
   }
}
