var http = require('http');
//引入http模块

http.createServer(function (request,response){
	response.writeHead(200,{'Content-Type':'text/plain'})
	//发送http头部  http状态200：ok  内容类型：text/plain

	response.end('hello world\n');
	//发送响应数据
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');
//终端显示

