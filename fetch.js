const url = "https://jsonplaceholder.typicode.com/users"
let emails = []

fetch(url).then((res) => {
    return res.json()
}).then((res) => {
    emails = res.map((item, index) => {
        return item.email.toLowerCase()
    })
    
    console.log(emails)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

async function fetchEmail(){
    try{
        const data = await fetch(url)
        const res = await data.json()
        emails = res.map((item, index) => {
            return item.email.toLowerCase()
        })
        console.log(emails)
    }catch(err) {
        console.log(`Error : ${err}`)
    }
}

fetchEmail()
