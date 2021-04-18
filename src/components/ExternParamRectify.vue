<template>
  <v-card class="mx-auto ml-8" elevation="2" shaped outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">参数采集结果</div>
        <v-list-item-title class="headline mb-1">
          Cp3 测量点拟合
        </v-list-item-title>
        <v-list-item-subtitle>
          <v-textarea 
            no-resize
            name="cp3points"
            filled
            label="cp3坐标"
            value="(x,y,z)"
            height="500px"
          ></v-textarea>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        :loading="loading"
        :disabled="loading"
        @click="loader = 'loading'"
      >
        拍摄一组
      </v-btn>
      <v-btn
        outlined
        rounded
        text
        :loading="loading"
        :disabled="loading"
        @click="loader = 'loading'"
      >
        进行参数拟合
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
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