 var obj1={
      "name":"person 1",
      "age": 5
    };
    var obj2={
        "age": 5,
      "name":"person 1"
     };
     function compareJSON(obj1,obj2){
         if (JSON.stringify(obj1)===JSON.stringify(obj2)){
       console.log (true);
   }
       else{ console.log(false);
       }
       return result;
     }
     console.log(compareJSON(obj1,obj2));



                                  <<<<<<<<<<<<<<<<<<<<<<<<<<<==========OR==========>>>>>>>>>>>>>>>>>>>>>>>>>>
                                    
   var obj1={
      "name":"person 1",
      "age": 5
    };
    var obj2={
        "age": 5,
      "name":"person 1"
     };                                 
  console.log(JSON.stringify(obj1)===JSON.stringify(obj2));                                  
                                    
                                    
