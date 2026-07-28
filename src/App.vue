<template>
  <v-app>
    <v-app-bar app color="secondary" dark elevate-on-scroll>
      <v-avatar size="40" class="mr-3">
        <v-img src="https://raw.githubusercontent.com/leodave/Profile-Pics/main/photo_1.jpeg"/>
      </v-avatar>
      <v-toolbar-title class="font-weight-bold">Dawit Elias</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/" class="hidden-sm-and-down">Home</v-btn>
      <v-btn text to="/experience" class="hidden-sm-and-down">Experience</v-btn>
      <v-btn text to="/education" class="hidden-sm-and-down">Education</v-btn>
      <v-btn text to="/hobbies" class="hidden-sm-and-down">Hobbies</v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" class="hidden-md-and-up">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item to="/experience">
            <v-list-item-title>Experience</v-list-item-title>
          </v-list-item>
          <v-list-item to="/education">
            <v-list-item-title>Education</v-list-item-title>
          </v-list-item>
          <v-list-item to="/hobbies">
            <v-list-item-title>Hobbies</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main class="bg-dark">
      <router-view/>
    </v-main>

    <v-footer padless color="secondary" dark>
      <v-col class="text-center py-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Dawit Elias</strong>
        <div class="mt-2">
          <v-btn icon href="https://github.com/leodave" target="_blank">
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn icon href="https://www.linkedin.com/in/dawit-elias/" target="_blank">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn icon href="mailto:dawitelias733@gmail.com">
            <v-icon>mdi-email</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.bg-dark {
  background-color: #121212;
  min-height: 100vh;
}
</style>
