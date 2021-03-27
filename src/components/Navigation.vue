<template>
  <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent app>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <span class="group pa-5" :class="camera1_color">
          <v-icon>mdi-video</v-icon>
        </span>
      </v-list-item-avatar>

      <v-list-item-title>
        <v-badge bordered :color="camera1_color" icon="mdi-lan-connect" overlap>
          <v-btn
            class="white--text"
            :color="camera1_color"
            @click="connect_camera(1)"
            depressed
          >
            192.168.0.22
            <v-progress-circular
              v-if="camera1_show"
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
        <span class="group pa-5" :class="camera2_color">
          <v-icon>mdi-video-off</v-icon>
        </span>
      </v-list-item-avatar>

      <v-list-item-title>
        <v-badge bordered :color="camera2_color" icon="mdi-lan-connect" overlap>
          <v-btn
            class="white--text"
            :color="camera2_color"
            depressed
            @click="connect_camera(2)"
          >
            192.168.0.33
            <v-progress-circular
              v-if="camera2_show"
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
      camera1_color: "teal",
      camera2_color: "deep-orange accent-4",
      camera1_show: false,
      camera2_show: false,
    };
  },
  methods: {
    connect_camera(id) {
      this.total_camera(id);
      ipcRenderer.invoke("connect-camera", id).then((result) => {
        this.total_camera(id);
        console.log(result);
      });
    },
    total_camera(id) {
      switch (id) {
        case 1:
          this.camera1_show = !this.camera1_show;
          break;
        case 2:
          this.camera2_show = !this.camera2_show;
          break;
      }
    },
  },
};
</script>