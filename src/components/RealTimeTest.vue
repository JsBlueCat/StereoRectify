<template>
  <v-timeline>
    <v-timeline-item v-for="n in 3" :key="n" color="red lighten-2" large>
      <template v-slot:opposite>
        <span>拍摄设置{{ n }}</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline"> 已知靶参数修正 </v-card-title>
        <v-card-text>
          参数为AAA
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {};
</script>