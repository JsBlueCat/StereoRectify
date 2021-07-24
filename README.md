# stereo-camera

# 项目简介
    技术栈：   nodejs@v11.2.0 + opencv3.4.6 + electron11.0 + vue2/3 + vuetify2.4.6 + hikivision 
    实现功能： 轨道cp3检测标定程序

# 项目构建
```
npm i -g @vue/cli
vue create stereo-camera
vue add electron-builder
vue add vuetify
npm i -g electron-fix
electron-fix start
```

# 启动项目

```
set-executionpolicy remotesigned
.\node_modules\.bin\electron-rebuild.cmd
npm run electron:serve
```

# 打包项目

```
npm run electron:build
```

# 注意事项
接口需要编译为 c++11 的模式，不兼容c++ 17的模式