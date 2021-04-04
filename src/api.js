import camera_cpp_api from 'node-loader!./addon/stereo-camera-api.node'

function camera_connect(id) {
    return new Promise((resolve,reject) => {
        console.log('do connect')
        try{
            var status = camera_cpp_api.query_camera_cpp(id)
            resolve(status)
        }catch(err){
            reject(err)
        }

    });
}

export {camera_connect}
