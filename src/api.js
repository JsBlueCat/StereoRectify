// import camera_cpp_api from 'node-loader!./addon/api.node'
var addon = require('bindings')('api');

console.log(addon.query_camera_cpp(1));

// function camera_connect(id) {
//     return new Promise((resolve,reject) => {
//         console.log('do connect')
//         try{
//             var status = camera_cpp_api.query_camera_cpp(id)
//             resolve(status)
//         }catch(err){
//             reject(err)
//         }

//     });
// }

// export {camera_connect}
