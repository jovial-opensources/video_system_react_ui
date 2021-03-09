const UMS_HOST = "http://localhost:1812"

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
//myHeaders.append("Cookie", "user_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpMjNzMyIsInVzZXJfaWQiOiI1ZmNjYjdjZDI4Y2UwNjA1NWNkZWIwMTYiLCJpYXQiOjE2MTUzNzc2MDMsImV4cCI6MTYxNTQ2NDAwM30.sLltsso7UdcQQ_kxvXmE8RS0X8T-i9Ty5fIHlr2PdMU");


export function login(username:string, password:string):
    Promise<{
        error: string
    }> {
    return new Promise((resolve, reject)=>{
        fetch(`${UMS_HOST}/login`, {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow',
            body: JSON.stringify({username, password})
        }).then((res)=>{
            return res.json()
        }).then((res)=>{
            resolve(res)
        }).catch((e)=>{
            reject(e.message)
        })
    })
}