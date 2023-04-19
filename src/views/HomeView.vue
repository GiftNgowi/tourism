<template>
  <v-app>
    <v-app-bar class="pa-2" fixed color="transparent" flat>
      <div class="d-flex align-center">
        <!-- <p><v-img src="./assets/logo.png"></v-img></p> -->
        <p
          class="font-2 text-align white--text"
          style="line-height: 1; font-weight: 750"
        >
          Private Tours <br />
          In Tanzania
        </p>
      </div>

      <div class="d-none d-sm-flex">
        <div style="margin-left: 10%" class="d-flex align-center">
          <v-btn
            small
            plain
            text
            style="text-transform: none"
            class="font-head weight-500 white--text"
            ><v-icon size="18">mdi-home</v-icon>
            <span class="mb-n1">HOME</span></v-btn
          >
          <v-btn
            router
            to="/AboutView"
            small
            plain
            text
            style="text-transform: none"
            class="font-head weight-500 white--text"
            ><v-icon size="18">mdi-star-four-points</v-icon>
            <span class="mb-n1">ABOUT US</span></v-btn
          >
          <v-btn
            router
            to="/popDestination"
            small
            plain
            text
            style="text-transform: none"
            class="font-head weight-500 white--text"
            ><v-icon size="18">mdi-format-list-bulleted-square</v-icon>
            <span class="mb-n1">POPULAR DESTINATIONS</span></v-btn
          >

          <v-btn
            small
            plain
            text
            style="text-transform: none"
            class="font-head weight-500 white--text"
            ><v-icon size="18">mdi-newspaper</v-icon>
            <span class="mb-n1">NEWS</span></v-btn
          >
          <v-btn
            small
            plain
            text
            style="text-transform: none"
            class="font-head weight-500 white--text"
            ><v-icon size="18">mdi-star</v-icon>
            <span class="mb-n1">FACTS</span></v-btn
          >
        </div>
      </div>
      <v-spacer></v-spacer>

      <v-app-bar-nav-icon class="white--text d-flex d-sm-none" />
    </v-app-bar>
    <div>
      <div class="bg">
        <v-container style="height: 100%">
          <v-row
            style="height: 100%"
            no-gutters
            align="center"
            justify="center"
          >
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
                <router-link to="/BookView">
                  <button class="book">Book Now</button>
                </router-link>
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
  </v-app>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
<style scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: white;
  color: #6a7882;
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

.text-align {
  text-align: right;
}
/* @media screen and (max-width: 600px) {
  .text-align {
    text-align: left;
  }

  .btn {
    width: 200px !important ;
  }
} */

.book {
  background-color: #ff4b4b;
  color: #ffffff;
  border-radius: 100%;
  border: none;
  outline: none;
  padding: 30px 50px;
  font-size: 16px;
  font-weight: 850;
  cursor: pointer;
  animation: blink 0.9s ease-in-out infinite;
}
@keyframes blink {
  0% {
    opacity: 0.2;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.2;
  }
}
</style>
