<template>
  <div>
    <div class="bg">
      <v-container style="height: 100%">
        <v-row style="height: 100%" no-gutters align="center" justify="center">
          <v-col cols="12" xl="6" lg="6"> </v-col>
          <v-col cols="12" xl="6" lg="6">
            <p
              class="font-1 text-align white--text"
              style="line-height: 1; font-weight: 750"
            >
              Welcome to Tanzanian Tours
            </p>
            <p class="font-2 text-align white--text" style="font-weight: 400">
              A new world to be explored
            </p>
            <p class="text-align">
              <v-btn
                routed
                to="/BookView"
                rounded
                class="font-3 btn"
                color="red"
                elevation="5"
                dark
                x-large
                style="text-transform: none; font-weight: 850; width: 340px"
                >Book Now</v-btn
              >
            </p>
          </v-col>
        </v-row>
     
      </v-container>
         <footer>
          <v-col lg="12">
            <p class="text-center mt-2 mb-0">
              <v-icon>mdi-copyright</v-icon> Copyright Private Tours in
              Tanzania. All Rights Reserved {{ new Date().getFullYear() }}
            </p>
          </v-col>
        </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",

  components: {},
};
</script>
<style scoped>
footer {
  position: fixed;
   bottom: 0;
    width: 100%;
    height: 60px;
    background-color: white;
  color: #6A7882;
    
}
.bg {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 1%,
      rgba(0, 0, 0, 0.273638) 51.03%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url("../assets/home.jpeg");
  height: 100vh !important;
  background-size: cover;
}
.btn {
  width: 340px;
}
.text-align {
  text-align: right;
}
@media screen and (max-width: 600px) {
  .text-align {
    text-align: left;
  }

  .btn {
    width: 200px !important ;
  }
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
}
</style>
