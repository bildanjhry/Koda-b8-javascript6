function handleQueue(time, name){
    function queue(resolve, rejected){
        if(typeof time !== "number"){
            switch(typeof time){
                case "string":
                    rejected("Input string tidak diterima")
                    break
                case "undefined":
                    rejected("Input undefined tidak diterima")
                    break;
                default:
                    rejected("Input tidak valid")
                }
                return
        }
        
        setTimeout(() => {
              resolve(name)
        }, time)
    }

    return new Promise(queue)
}

handleQueue(1500, "John").then((name)=> {
   console.log(name)
   handleQueue(2000, "Ed").then((name)=> {
        console.log(name)
        handleQueue(500, "Jane").then((name)=> {
            console.log(name)
        })
   })
}).catch((err) => {
    console.log(`Error: ${err}`)
})
