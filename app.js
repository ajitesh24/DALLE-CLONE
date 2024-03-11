const api_key =" 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"
const submitIcon = document.querySelector("#submit-icon") 
const inputElement= document.querySelector("input")



const getImages= async() =>{

    const Options={
        method: "POST",
        headers: {
            "Authorization": 'Bearer ${API_KEY}',
            'Content-Type': "application/jason"
        },


        body: JSON.stringify({
            "prompt": "inputElement.value",
            "n": 4,
            "size": "1024x1792"
        })
    }
      try {
                
           const response= await fetch('https://api.openai.com/v1/images/generations',Options)
           const data =  await response.json()
           console.log(data)



      } catch(error){

         console.error(error)



      }
  




}





submitIcon.addEventListener('click',getImages)