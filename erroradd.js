/**
 * Created by Administrator on 2016/3/11.
 */
var http=require('http');
var domain=require('domain');
var server=http.createServer(function(req,res){
    var reqv=domain.create();
    reqv.add(res);
    reqv.add(req);
    reqv.on('error',function(err){
        res.writeHead(200);

        res.write('服务器端接收客户端请求时发生错误');
        res.end('ssssssss:'+err.message);
    });
    res.writeHead(200);
    reqv.remove(req);
    req.on('data',function(data){
      aaa();
        console.log('服务端接收到的数据'+data);
        res.write('hello你');
        res.end();

    });





}).listen(1332,'127.0.0.1');s 
