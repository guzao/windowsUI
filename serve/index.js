import { createRequire } from 'module';
const require = createRequire(import.meta.url);
let http = require('http')
let server = http.createServer()

server.on('request',function (request,response) {
    response.write('<head><meta charset="utf-8"/></head>')   //处理中文乱码
    let url = request.url //端口号后面的那一部分
    //根据url响应不同的页面（给ta一个回复--->字符串）
    if(url ==='/'){
        response.end('这是index页面')
    }else if (url === '/login.html'){
        response.end('这是用户的登录页面')
    }else if (url === '/register.html'){
        response.end('这是用户的注册页面')
    }else if(url === '/ding.json'){
        //也可以给ta一个json
        let ding = [
            {
                name:'dingqiusi',
                age:19
            },
            {
                name:'dingqisui2',
                age:18
            },
            {
                name: 'dingqisui3',
                age: 20
            }
        ]
        //然后把这个json转成字符串 最后ta要的格式是 string或者buffer
        response.end(JSON.stringify(ding))
    }else {
        response.end('404 Not Found')
    }
})

//绑定端口号 启动服务
server.listen(9988,function () {
    console.log('http:127.0.0.1:9988/')
})
