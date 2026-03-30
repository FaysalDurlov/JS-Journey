const xhr = new XMLHttpRequest();
xhr.addEventListener("load",()=>{
    // console.log("this is Using XML_Req", xhr.response)
})
xhr.open("GET","https://supersimplebackend.dev/greeting")
xhr.send()

async function showMsgAwait(){
    const response = await fetch("https://supersimplebackend.dev/greeting")
    const msg = await response.text()
    console.log(msg)
}
// showMsgAwait()

fetch("https://supersimplebackend.dev/greeting").then((responseFullMassage)=>{
    return responseFullMassage.text() 
    // reading text from the body of the full massage
    // returning a promise
}).then((msgFromBody)=>{
    // console.log(msgFromBody)
})
// 18a - 18c Done

//18d
async function FetchPost18d(){
    const response = await fetch("https://supersimplebackend.dev/greeting",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name: "Faysal_Durlov"})
    })
    const greetFromServer = await response.text()
    console.log(greetFromServer)
}
// FetchPost18d();

// 18e
async function showMsgAmazon(){
    try{
        const response = await fetch("https://amazon.com")
        const msg = await response.text()
        console.log(msg)
    } catch(error){
        console.log(error);
    }
}
// showMsgAmazon();

//18g
async function PostFetch18g(){
    try{
        const response = await fetch("https://supersimplebackend.dev/greeting",{
            method: "POST",
            headers: {"Conetent-Type": "application/json"}
        })
        if(response.status>=400){
            throw response;
        }
    } catch(error){
        if(error.status === 400){
            const errorResponse = await error.json()
            console.log(errorResponse)
        }else{
            console.log("Network error. Please try again later.")
        }
    }
}
// PostFetch18g()
