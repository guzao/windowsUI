import { createRequire } from 'module';
const require = createRequire(import.meta.url);
let http = require('http')
let server = http.createServer()



function createData (length, title, desc) {
  return Array.from({ length: length }).map((it, index) => {
    return {
      id: index + 1,
      icon: '',
      title: title + index + 1,
      desc: desc + '.....',
    }
  })
}

function getSystemList () {
    return {
      code: 200,
      data: createData(10, '系统', '描述.....'),
      headerData: {
        icon: '',
        title: '',
        subTile: '',
        name: ''
      }
    }
}

function getAnthConfigList () {
    return {
      code: 200,
      data: createData(100, '配置参数', '配置参数.....')
    }
}

function getNetworkList () {
    return {
      code: 200,
      data: createData(50, '网络设置', '网络设置.....')
    }
}

function getIndividuationList () {
    return {
      code: 200,
      data: createData(30, '个性化设置', '个性化设置.....')
    }
}

function getApplicationList () {
    return {
      code: 200,
      data: createData(50, '应用列表', '应用列表.....')
    }
}
  
const publicMap = {
  '/getSystemList': getSystemList,
  '/getAnthConfigList': getAnthConfigList,
  '/getNetworkList': getNetworkList,
  '/getIndividuationList': getIndividuationList,
  '/getApplicationList': getApplicationList,
}


server.on('request',function (request,response) {
    response.write('<head><meta charset="utf-8"/></head>')
    let url = request.url 
    const getter = publicMap[ url ]
    if (getter) {
        response.end(JSON.stringify(getter()))
    } else {
        response.end('404 Not Found')
    }
})

//绑定端口号 启动服务
server.listen(9988,function () {
    console.log('http:127.0.0.1:9988/')
})
