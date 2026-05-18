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

async function printQueue(){
    try{
        const queue1 = await handleQueue(1500, "John")
        console.log(queue1)
        const queue2 = await handleQueue(2000, "Ed")
        console.log(queue2)
        const queue3 = await handleQueue(500, "Jane")
        console.log(queue3)

    }catch(err){
        console.log(`Error: ${err}`)
    }
}

printQueue()