module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions:{
    electronBuilder:{
      nodeIntegration:true,
      externals:[
        "path",
        "bindings",
        "api.node",
        "dirname"
      ]
    }
  }
}
