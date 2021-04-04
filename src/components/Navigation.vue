<template>
  <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent app>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <span class="group pa-5" :class="camera1.camera_connect==true?'teal':'deep-orange accent-4'">
          <v-icon v-show="camera1.camera_connect==true">mdi-video</v-icon>
          <v-icon v-show="camera1.camera_connect==false">mdi-video-off</v-icon>
        </span>
      </v-list-item-avatar>

      <v-list-item-title>
        <v-badge bordered :color="camera1.camera_connect==true?'teal':'deep-orange accent-4'" icon="mdi-lan-connect" overlap>
          <v-btn
            class="white--text"
            :color="camera1.camera_connect==true?'teal':'deep-orange accent-4'"
            @click="connect_camera(1)"
            depressed
          >
            192.168.0.207
            <v-progress-circular
              v-if="camera1.camera_show"
              indeterminate
              :width="3"
              :size="20"
            >
            </v-progress-circular>
          </v-btn>
        </v-badge>
      </v-list-item-title>

      <v-btn icon x-small @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>
    <!-- camera 1  -->

    <v-list-item class="px-2">
      <v-list-item-avatar>
        <span class="group pa-5" :class="camera2.camera_connect==true?'teal':'deep-orange accent-4'">
          <v-icon v-show="camera2.camera_connect==true">mdi-video</v-icon>
          <v-icon v-show="camera2.camera_connect==false">mdi-video-off</v-icon>
        </span>
      </v-list-item-avatar>

      <v-list-item-title>
        <v-badge bordered :color="camera2.camera_connect==true?'teal':'deep-orange accent-4'" icon="mdi-lan-connect" overlap>
          <v-btn
            class="white--text"
            :color="camera2.camera_connect==true?'teal':'deep-orange accent-4'"
            depressed
            @click="connect_camera(2)"
          >
            192.168.0.112
            <v-progress-circular
              v-if="camera2.camera_show"
              indeterminate
              :width="3"
              :size="20"
            >
            </v-progress-circular>
          </v-btn>
        </v-badge>
      </v-list-item-title>
    </v-list-item>
    <!-- camera 2  -->

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :to="item.to" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
const { ipcRenderer } = window.require("electron");
export default {
  data() {
    return {
      drawer: true,
      items: [
        {
          title: "双目内参标定",
          icon: "mdi-camera-enhance",
          to: { name: "InerParam" },
        },
        {
          title: "双目外参标定",
          icon: "mdi-camera-enhance-outline",
          to: { name: "ExternParam" },
        },
        {
          title: "实测线性拟合",
          icon: "mdi-camera-iris",
          to: { name: "Liner" },
        },
        { title: "参数检验", icon: "mdi-test-tube", to: { name: "RealTime" } },
      ],
      mini: true,
      // teal | deep-orange accent-4
      camera1:{
        camera_show: false,
        camera_connect: false
      },
      camera2:{
        camera_show: false,
        camera_connect: false
      }
    };
  },
  methods: {
    connect_camera(id) {
      this.total_camera(id);
      ipcRenderer.invoke("connectCameraIpc", id).then((result) => {
        this.total_camera(id);
        switch(id){
          case 1:
            this.camera1.camera_connect = result
            break;
          case 2:
            this.camera2.camera_connect = result
            break;
        }
        console.log(result);
      });
    },
    total_camera(id) {
      switch (id) {
        case 1:
          this.camera1.camera_show = !this.camera1.camera_show;
          break;
        case 2:
          this.camera2.camera_show = !this.camera2.camera_show;
          break;
      }
    },
  },
};
</script>