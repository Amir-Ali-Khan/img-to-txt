  //var sub = document.querySelector("#btn")
  const file1 = document.querySelector("#file")
  let txt = document.querySelector("#txt")
  
  const myform = document.querySelector("#myform")
  
  const APIkey = "gP1eaUwBzWeuNAa9jiKOhQ==tH8j88za5zbhTDzK"
  const URL = "https://api.api-ninjas.com/v1/imagetotext"
  


    myform.addEventListener("submit",e => {
      txt.innerHTML = ""
      e.preventDefault();
      //console.groupCollapsed(myform)
      if(file1.files.length == 0){
        alert("Select Image")
      }else{
        
        const formData = new FormData();
          formData.append('image', file1.files[0]);
            const options = {
                      method : "POST",
                      body : formData,
                      headers : {
                          "X-Api-Key" : APIkey
                    }
                          
          }
          
              fetch(URL,options).then((response) => {
               // console.log(response)
                return response.json();
                  
              }).then((data)=>{
                //console.log(data)
  
                if(data.length == 0){
                  txt.innerHTML = "No Text Found"
  
                }else{
                  for( let i = 0 ; i <= data.length ; i++){
                    txt.append(data[i].text + " ")
                  }}
                
              }).catch(() =>{
                 
              })
        
      }



          
    })
  





