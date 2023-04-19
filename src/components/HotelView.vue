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
            to="/ThingsTodo"
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
    <v-content class="pt-5">
      <section class="main-text pt-14">
        <h1>Hotels to visit while in Moshi</h1>
        <p>
          We pride ourselves on providing exceptional service and comfortable
          accommodations to all of our guests.<br />
          Our rooms are spacious, well-appointed, and designed with your comfort
          in mind.
        </p>
      </section>
      <section>
        <div id="popular">
          <v-container>
            <v-row class="pt-10">
              <v-col>
                <v-card class="mx-auto" max-width="344">
                  <v-img
                    src="../assets/moshi2F.jpg"
                    height="200px"
                    cover
                  ></v-img>

                  <v-card-title> Kili Villa </v-card-title>

                  <v-card-subtitle>
                    Kili Villa offers spacious accommodation in Arusha, together
                    with a swimming pool and garden. Guests can enjoy views of
                    Mount Meru and Kilimanjaro to the north, and the Maasai
                    Steppe to the south. The villa is fully services by 2
                    attending staff and a private chef.
                  </v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      router
                      to="#"
                      color="orange-lighten-2"
                      variant="text"
                    >
                      Explore
                    </v-btn>

                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col>
                <v-card class="mx-auto" max-width="344">
                  <v-img
                    src="../assets/moshi2A.jpg"
                    height="200px"
                    cover
                  ></v-img>

                  <v-card-title> Panone Hotel Boma </v-card-title>

                  <v-card-subtitle>
                    Situated in Boma la Ngombe, This hotel features
                    accommodation with a terrace, free private parking, a
                    restaurant and a bar. This 2-star hotel offers room service
                    and a 24-hour front desk. The accommodation offers airport
                    transfers, while a bicycle rental service is also available.
                  </v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      router
                      to="#"
                      color="orange-lighten-2"
                      variant="text"
                    >
                      Explore
                    </v-btn>

                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col>
                <v-card class="mx-auto" max-width="344">
                  <v-img
                    src="../assets/moshi2C.jpg"
                    height="200px"
                    cover
                  ></v-img>

                  <v-card-title> Karibu Heritage House </v-card-title>

                  <v-card-subtitle>
                    This house offers accommodation with an outdoor swimming
                    pool, free private parking, a garden and a shared lounge.
                    This property also welcomes guests with a restaurant and a
                    terrace. The accommodation features airport transfers and
                    free WiFi throughout the property.
                  </v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      router
                      to="#"
                      color="orange-lighten-2"
                      variant="text"
                    >
                      Explore
                    </v-btn>

                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
            <!-- -->
            <v-row class="pt-10">
              <v-col>
                <v-card class="mx-auto" max-width="344">
                  <v-img
                    src="../assets/moshi2D.jpg"
                    height="200px"
                    cover
                  ></v-img>

                  <v-card-title> Mrimba Palm Hotel </v-card-title>

                  <v-card-subtitle>
                    Mrimba Palm Hotel features a garden, shared lounge, a
                    terrace and bar in Arusha. Featuring a concierge service,
                    this property also provides guests with a casino. The
                    accommodation provides a 24-hour front desk, airport
                    transfers, room service and free WiFi throughout the propert
                  </v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      router
                      to="#"
                      color="orange-lighten-2"
                      variant="text"
                    >
                      Explore
                    </v-btn>

                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col>
                <v-card class="mx-auto" max-width="344">
                  <v-img
                    src="../assets/moshi2B.jpg"
                    height="200px"
                    cover
                  ></v-img>

                  <v-card-title> Gold Crest Hotel </v-card-title>

                  <v-card-subtitle>
                    Gold Crest Hotel offers accommodation with an outdoor
                    swimming pool, free private parking, a garden and a shared
                    lounge. Featuring room service, this property also welcomes
                    guests with a restaurant and a terrace. The accommodation
                    features airport transfers, a shared kitchen and free WiFi
                    throughout the property.
                  </v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      router
                      to="#"
                      color="orange-lighten-2"
                      variant="text"
                    >
                      Explore
                    </v-btn>

                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col>
                <v-card class="mx-auto" max-width="344">
                  <v-img
                    src="../assets/moshi2E.jpg"
                    height="200px"
                    cover
                  ></v-img>

                  <v-card-title> Tulia Retreat Hotel and Spa </v-card-title>

                  <v-card-subtitle>
                    Tulia Retreat Hotel and Spa features accommodation with an
                    outdoor swimming pool, free private parking, a garden and a
                    shared lounge. With a terrace, the property also has a
                    restaurant, as well as a bar. The accommodation offers a
                    24-hour front desk, airport transfers, room service and free
                    WiFi.
                  </v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      router
                      to="#"
                      color="orange-lighten-2"
                      variant="text"
                    >
                      Explore
                    </v-btn>

                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
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
      </section>
    </v-content>
    <footer class="foot">
      <v-col lg="12">
        <div>
          <p class="text-center mt-2 mb-0">
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
  name: "HotelView",
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"],
    };
  },
};
</script>

<style scoped>
.move-left {
  margin-left: 149px;
}
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
.weight-500 {
  font-weight: 500 !important;
}
.foot {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 1%,
      rgba(0, 0, 0, 0.273638) 51.03%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url("../assets/home.jpeg");
  height: 10vh !important;
  color: white;
}
.main-text {
  text-align: center;
}
</style>
