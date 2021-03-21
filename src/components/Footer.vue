<template>
  <v-footer dark padless absolute app>
    <v-card class="flex" flat tile>
      <v-card-title class="teal">
        <strong class="subheading">智能轨道CP3 —— 测量双目标定程序</strong>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        All Right Server {{ new Date().getFullYear() }} — <strong>上海铁路精调有限公司</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: ["mdi-github"],
    }),
  };
</script>

<style>
</style>