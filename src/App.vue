<template>
  <v-app id="inspire">
    <Navigation />
    <v-main>
      <router-view />
    </v-main>

    <Footer :absolute="true" />
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
export default {
  data: () => ({
    links: [
      ["mdi-inbox-arrow-down", "Inbox"],
      ["mdi-send", "Send"],
      ["mdi-delete", "Trash"],
      ["mdi-alert-octagon", "Spam"],
    ],
  }),
  components: {
    Footer,
    Navigation,
  },
};
</script>