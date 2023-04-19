<template>
  <v-app>
    <v-app-bar class="pa-2" fixed color="#6A7882" flat>
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
            router
            to="/"
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
            router
            to="/RestView"
            small
            plain
            text
            style="text-transform: none"
            class="font-head weight-500 white--text"
            ><v-icon size="18">mdi-food</v-icon>
            <span class="mb-n1">RESTAURANTS</span></v-btn
          >
          <v-btn
            router
            to="/HotelView"
            small
            plain
            text
            style="text-transform: none"
            class="font-head weight-500 white--text"
            ><v-icon size="18">mdi-home</v-icon>
            <span class="mb-n1">WHERE TO STAY</span></v-btn
          >
        </div>
      </div>
      <v-spacer></v-spacer>

      <v-app-bar-nav-icon class="white--text d-flex d-sm-none" />
    </v-app-bar>
    <v-content>
      <section class="main-text pt-14">
        <h1 class="pt-5">Why Visit Moshi?</h1>
        <p>
          Adventures in Moshi offer a variety of exciting experiences for
          travelers. Some must-visit places in Moshi include Mount Kilimanjaro,<br>
          Moshi Market, and Lake Chala. Travelers can also enjoy hiking,
          safaris, and cultural experiences while in Moshi.
        </p>
      </section>
      <v-container class="media pt-10" id="media">
        <v-row class="main-container pt-5">
          <v-col>
            <div class="flip-box image image-1">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src="../assets/moshi6.jpg" alt="Erupting Volcano" />
                  <div class="centered white--text">
                    <h2>Climbing Kilimanjaro</h2>
                  </div>
                </div>
                <div class="flip-box-back pt-5">
                  <h2>Mount Kilimanjaro</h2>
                  <br />
                  <p>
                    Mount Kilimanjaro is Africa's highest peak, located in the
                    Kilimanjaro Region of Northern Tanzania.
                  </p>
                  <br />
                  <v-btn
                    router
                    to="/MountKlm"
                    id="myBtn"
                    class="button dark--text"
                    >Read more</v-btn
                  >
                </div>
              </div>
            </div>
          </v-col>
          <v-col>
            <div class="flip-box image image-2">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src="../assets/moshi4.jpg" alt="Icelandic horses " />
                  <div class="centered white--text">
                    <h2>Cultural Tours</h2>
                  </div>
                </div>
                <div class="flip-box-back"></div>
              </div>
            </div>
          </v-col>
          <v-col>
            <div class="flip-box image image-3">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src="../assets/tz.png" alt="majimoto" />
                  <div class="centered white--text">
                    <h2>Kikuletwa Springs (Maji Moto)</h2>
                  </div>
                </div>
                <div class="flip-box-back"></div>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row class="main-container">
          <v-col>
            <div class="flip-box image image-4">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src="../assets/moshi2.jpg" alt="hike" />
                  <div class="centered white--text"><h2>Hiking Tours</h2></div>
                </div>
                <div class="flip-box-back"></div>
              </div>
            </div>
          </v-col>
          <v-col>
            <div class="flip-box image image-5">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src="../assets/moshi3.jpg" alt="Parliament of Puffins" />
                  <div class="centered white--text">
                    <h2>Materuni Waterfalls</h2>
                  </div>
                </div>
                <div class="flip-box-back"></div>
              </div>
            </div>
          </v-col>
          <v-col>
            <div class="flip-box image image-6">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src="../assets/moshi5.jpg" alt=" Iceland Beach" />
                  <div class="centered white--text">
                    <h2>Lake Chala</h2>
                  </div>
                </div>
                <div class="flip-box-back"></div>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row class="main-container">
          <v-col>
            <div class="flip-box image image-7">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src="../assets/moshi7.jpg" alt="Reykjavík City" />
                  <div class="centered white--text">
                    <h2>Makasa Tanzania Safaris</h2>
                  </div>
                </div>
                <div class="flip-box-back"></div>
              </div>
            </div>
          </v-col>
          <v-col>
            <div class="flip-box image image-8">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src="../assets/moshi8.jpg" alt="Skogafoss Waterfall" />
                  <div class="centered white--text">
                    <h2>MamaAfrica Gift</h2>
                  </div>
                </div>
                <div class="flip-box-back"></div>
              </div>
            </div>
          </v-col>
          <v-col>
            <div class="flip-box image image-9">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src="../assets/moshi9.jpg" alt="serval" />
                  <div class="centered white--text">
                    <h2>Serval Wildlife</h2>
                  </div>
                </div>
                <div class="flip-box-back"></div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-btn
        routed
        to="#"
        class="mb-5 move-left"
        color="#6A7882"
        elevation="5"
        dark
        x-large
        style="text-transform: none; font-weight: 850; width: 150px"
        >View More</v-btn
      >
    </v-content>
    <footer class="foot">
      <v-col lg="12">
        <div>
          <p class="text-center mt-1 mb-0">
            <v-icon class="white--text">mdi-copyright</v-icon> Copyright Private
            Tours in Tanzania. All Rights Reserved
            {{ new Date().getFullYear() }}
          </p>
        </div>
      </v-col>
    </footer>
  </v-app>
</template>

<script>
import "../css/fonts.css";
export default {
  name: "ThingsTodo",
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"],
    };
  },
};
</script>

<style scoped>
.main-text {
  width: 100vw;
  text-align: center;
  padding: 2rem;
  box-sizing: border-box;
  background-color: #f2f0f0;
}
.main-text h1 {
  font-size: 4vh;
  color: black;
  margin-bottom: 2rem;
  letter-spacing: 1px;
  line-height: 1.3;
  font-family: "Poppins", sans-serif;
}

.move-left {
  margin-left: 133px;
}
.weight-500 {
  font-weight: 500 !important;
}
.media {
  margin: 0rem auto 0rem auto;
  padding: 10rem 2rem 2rem 2rem;
}
.media .main-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  gap: 2rem;
}
.media .main-container .image {
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 280px;
  background-color: transparent;
  border-radius: 3px;
  overflow: hidden;
  transition: all 450ms ease-in-out;
}
.media .main-container .image img {
  transition: all 450ms ease-in-out;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}

.media h1 {
  text-align: center;
}

/* The flip box container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-box {
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */

  object-fit: cover;
}

/* This container is needed to position the front and back side */
.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-box-front,
.flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-box-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-box-back {
  background-color: #6a7882;
  color: white;
  transform: rotateY(180deg);
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.foot {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 1%,
      rgba(0, 0, 0, 0.273638) 51.03%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url("../assets/home.jpeg");
  height: 9vh !important;
  color: white;
}
</style>
