function camera_connect(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({'id':id});
        }, 2000);
    });
}

module.exports = {
    camera_connect: camera_connect
};