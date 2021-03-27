module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions:{
    electronBuilder:{
      nodeIntegration:true,
      externals:["stereo_camera_api.node"]
    }
  }
}
