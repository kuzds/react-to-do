"use strict";

import express from "express";
import state   from "./state";

const app = express();



// -----------APPLICATION----------
// app.use(express.static(__dirname + "/../build"));

app.use(function(request, response, next){
    console.log(request.url);
    next();
});

// // 1.1 
// app.get("/getNotification_*", function(request, response){
//     // /getNotification_id
//     let slices = fetchUrl(request.url);
//     let id = Number(slices[1]);

//     let data;
//     if (notification.length == 0)
//         data = {
//             res : _res,
//             not : 0,
//             id  : 0,
//             notE: 0,
//             code: 0,
//         };
//     else {
//         data = notification.shift();
//         if( id == 4294967295 )
//             data.id = 0;
//         else
//             data.id = ++id;

//         data.res = _res;
//         if( notification.length != 0 )
//             data.notE = 1;
//         else 
//             data.notE = 0

//         if( data.not  != 1  		||
//             data.id    < 0  		|| 
//             data.code  < 0  		||
//             data.data === undefined ){
//             console.log("ERROR IN NOTIFICATION DATA")
//             return;
//         }
//         console.log(data);
//     }
//     response.send(JSON.stringify(data));
// });
// // 1.2
// app.get("/getAfcStatus", function(request, response){
//     let data = {
//         'res': _res,
//         'afc': afc,
//     };
//     console.log(data);
//     response.send(JSON.stringify(data));
// });















app.get("/resCmd_*", function(request, response){
    console.log(_responce);
    response.send(JSON.stringify(_responce));
});

app.get("/*", function(request, response){
    if( request.url === "/sw.js"                    ||
        request.url === "/babel/parser/lib/index.js") 
        return;
    console.log("Bad URL!");
    response.send(JSON.stringify({ 'res' : 3 }));
});

app.listen(3001);
