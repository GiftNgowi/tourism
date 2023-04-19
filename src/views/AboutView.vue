<template>
  <v-app>
    <v-app-bar class="pa-2" fixed color="#6A7882" flat>
      <div class="d-flex align-center">
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
    <v-content>
      <section class="pt-10">
        <div class="bg" id="about">
          <!-- <v-row style="height: 100%" no-gutters align="center" justify="center">
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
        </v-row> -->
        </div>
      </section>
            <section class="main-text">
    <h1 class="pt-5">Tourism Experience In Tanzania</h1>
    <p>
      A tour of the top sites in the world is a Tanzania adventure. We can
      help you plan the ideal trip, <br />
      get the most affordable tickets, and book the greatest hotels.
    </p>
          </section>
      <v-container class="pt-0">
        <v-row>
           <v-col cols="4" sm="4">
            <h6><B>Experience Tanzania </B></h6>
            <p>
              <!-- Tanzania is a top-rated tourist destination, famous for its
              breathtaking national parks and wildlife reserves like Serengeti,
              Ngorongoro Conservation Area, and Tarangire. With an abundance of
              diverse wildlife, including the Big Five, Tanzania provides an
              unforgettable safari experience. The country also boasts Zanzibar,
              a beautiful island with stunning beaches and rich cultural
              heritage that attracts tourists from around the world.  -->
               Welcome to Explore Tanzania, your one-stop-shop for travelers and
            explorers. We believe that travel can be a transformative experience
            for both individuals and communities.
            Our Platform is designed to help travelers make informed decisions
            about their travel plans, and to provide tools and resources to
            facilitate their travel. We work with local communities, businesses
            and organizations to promote sustainable tourism practices.
            </p>
          </v-col>
          <v-col cols="4" sm="4">
            <h6><B> Exquisite and exclusive camps </B></h6>
            <p>
              We offer a unique opportunity to combine a safari experience with
              a beach holiday in Tanzania. Our camps are located in some of the
              most iconic national parks in the country, including the
              Serengeti, Ngorongoro Conservation Area, Tarangire and Ruaha. Our
              guests can enjoy excellent game viewing, exceptional hospitality,
              and a range of activities for a fully immersive safari experience.
            </p>
          </v-col>
          <v-col cols="4" sm="4">
            <h6><B> Safari Beach Combo </B></h6>
            <p>
              In addition to safaris, tourists can also explore Tanzania's
              beautiful beaches, historic towns, and vibrant markets. The
              country's warm hospitality and friendly people also make it a
              memorable destination for travelers from all over the world.
              Additionally, the country is home to the beautiful island of
              Zanzibar, which attracts visitors with its pristine beaches and
              rich cultural heritage.
            </p>
          </v-col>
       
        </v-row>
      </v-container>
      <footer class="foot">
        <v-divider></v-divider>

        <v-row class="pt-5 ml-4">
          <v-col md="12" lg="6">
            <h5 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3 dark"></i>Company name
            </h5>
            <p>
              thank you for visiting our site, and we hope you find the
              resources and information <br />
              here helpful in planning your next adventure.We sincerely hope
              that you find what <br />
              you're looking for and that it provides you with the guidance you
              need. <br />
              Hakuna Matata!
            </p>
          </v-col>
          <v-col md="6" lg="3">
            <p>CONTACT</p>

            <p><i class="fa fa-phone mr-4"></i> +255 767 000 700</p>
            <p><i class="fa fa-phone mr-4"></i> +255 787 300 700</p>

            <p><i class="fas fa-envelope mr-4"></i>ptt@gmail.com</p>
          </v-col>

          <v-col md="6" lg="3">
            <p>Get connected with us on social networks</p>

            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 black--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <p class="text-center mt-3" style="color: #6a7882">
          <v-icon>mdi-copyright</v-icon> Copyright Private Tours in Tanzania.
          All Rights Reserved {{ new Date().getFullYear() }}
        </p>
      </footer>
    </v-content>
  </v-app>
</template>

<script>
import "../css/fonts.css";
export default {
  name: "AboutView",

  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"],
    };
  },
};
</script>

<style scoped>
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
}

.weight-500 {
  font-weight: 500 !important;
}
.foot {
  background-color: #F2F0F0;
  height: 30vh !important;
}

.bg {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 1%,
      rgba(0, 0, 0, 0.273638) 51.03%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url("../assets/g01.jpg");
  height: 50vh !important;
  position: relative;
  background-position: center;
  background-size: cover;

  display: flex;
  align-items: center;
  padding: 1rem 5rem 1rem 2rem;
}
.main-text {
 width: 100vw;
  text-align: center;
  padding: 2rem;
  box-sizing: border-box;
  background-color: #F2F0F0;
}
.main-text h1 {
  font-size: 4vh;
  color: black;
  margin-bottom: 2rem;
  letter-spacing: 1px;
  line-height: 1.3;
  font-family: "Poppins", sans-serif;
}
p.description {
  font-size: 19px;
  margin: 32px 0px;
  color: black;
  text-align: justify;
}
.main-container {
  margin: 4rem auto;
  max-width: 1000px;
  margin-bottom: 4rem;
}
</style>
