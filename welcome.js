
var fs=require ('fs')
fs.readFile('index.html',function (err,data){
    res.write(data);
    return res.end();
});