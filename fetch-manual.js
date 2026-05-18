const url = "https://jsonplaceholder.typicode.com/users"
let emails = []


fetch(url).then((res) => {
    return res.json()
}).then((res) => {

    const chars = "abcdefghijklmnopqrstuvwxyz"
    const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for(let i = 0; i< res.length; i++){
        let str = res[i].email
        let lowered = ''

        for(let j = 0; j < str.length; j++){
            let isFound = false
            for(let k = 0; k < upperChar.length; k++){
                if(str[j] === upperChar[k]){
                   isFound = true
                   str[j] = chars[k]
                   lowered += chars[k]
                   break;
                } 
            }
            if(!isFound) {
                lowered += str[j]
            }
        }
        emails.push(lowered)
    }
    console.log(emails)

}).catch((err) => {
    console.log(`Error: ${err}`)
})

async function fetchEmail(){
    try{
        const data = await fetch(url)
        const res = await data.json()
        
        const chars = "abcdefghijklmnopqrstuvwxyz"
        const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for(let i = 0; i< res.length; i++){
        let str = res[i].email
        let lowered = ''

        for(let j = 0; j < str.length; j++){
            let isFound = false
            for(let k = 0; k < upperChar.length; k++){
                if(str[j] === upperChar[k]){
                   isFound = true
                   str[j] = chars[k]
                   lowered += chars[k]
                   break;
                } 
            }
            if(!isFound) {
                lowered += str[j]
            }
        }
        emails.push(lowered)
    }
    console.log(emails)
    }catch(err) {
        console.log(`Error : ${err}`)
    }
}

fetchEmail()
