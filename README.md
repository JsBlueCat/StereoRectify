# stereo-camera

# 项目简介
    技术栈：    opencv3.4.6 + electron11.0 + vue2/3 + vuetify2.4.6 + hikivision 
    实现功能： 轨道cp3检测标定程序

# 项目构建
```
npm i -g @vue/cli
vue create stereo-camera
vue add electron-builder
vue add vuetify
npm i -g electorn-fix
electorn-fix start
```

# 启动项目

```
.\node_modules\.bin\electron-rebuild.cmd
npm run electron:serve
```

# 打包项目

```
npm run electron:build
```