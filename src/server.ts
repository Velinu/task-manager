import App from './app'

function server(){
    App.listen(3030, () =>{
        console.log('http://localhost:3030')
    })
}

server()