<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">
        双目标定靶标定，标定靶（竖着标定）
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">
        双目检测标定：等待3-5分钟
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3"> 标定完成 </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-sheet class="mx-auto mb-12" elevation="8">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'primary' : 'grey lighten-1'"
                class="ma-4"
                height="200"
                width="400"
                @click="toggle"
              >
                <v-row class="fill-height" align="center" justify="center">
                  <v-scale-transition>
                    <v-icon
                      v-if="active"
                      color="white"
                      size="48"
                      v-text="'mdi-close-circle-outline'"
                    ></v-icon>
                  </v-scale-transition>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
        <v-spacer></v-spacer>

        <v-sheet class="mx-auto mb-12" elevation="8">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'primary' : 'grey lighten-1'"
                class="ma-4"
                height="200"
                width="400"
                @click="toggle"
              >
                <v-row class="fill-height" align="center" justify="center">
                  <v-scale-transition>
                    <v-icon
                      v-if="active"
                      color="white"
                      size="48"
                      v-text="'mdi-close-circle-outline'"
                    ></v-icon>
                  </v-scale-transition>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>

        <v-spacer></v-spacer>
        
        <v-btn
          :loading="loading"
          :disabled="loading"
          @click="loader = 'loading';e1 = 1"
          color="primary"
        >
          拍摄
        </v-btn>

        <v-btn text @click="e1 = 2"> 启动标定 </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 3"> 标定 </v-btn>

        <v-btn text @click="e1 = 1"> 上一步 </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
export default {
  data() {
    return {
      e1: 1,
      model: null,
      loader: null,
      loading: false,
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    },
  },
};
</script>