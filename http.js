const http = require('http')

const server = http.createServer((req,res)=>{
if (req.url === '/') {
    res.end('welcome to our home page')
}
if (req.url=== '/about') {
    res.end('Here is our about page')
}
res.end(`<h1>Ooops!</h1>
<p>we cant find the page u are looking for</p>
<a href='/'>back home</a>`)

})


server.listen(5000)
