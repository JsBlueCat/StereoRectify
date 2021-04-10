import camera_cpp_api from 'node-loader!./addon/api.node'
// var addon = require('bindings')('api');
// console.log(addon.query_camera_cpp(1));
camera_cpp_api.connect_camera_cpp()

function camera_connect(id) {
    return new Promise((resolve,reject) => {
        try{
            var status = camera_cpp_api.query_camera_cpp(id)
            console.log("get status from cpp", status )
            resolve(status)
        }catch(err){
            reject(err)
        }

    });
}

export {camera_connect}
