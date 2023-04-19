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
      <section class="pt-5">
        <div>
          <v-container>
            <div class="pt-10">
              <h3>Places to visit and things to do while in Tanzania</h3>
              <p>
                Tanzania is a beautiful and diverse country with many amazing
                places to visit. The Serengeti National Park is famous for its
                wildebeest migration and abundant wildlife. Mount Kilimanjaro is
                a must-see for adventurous hikers and offers stunning views from
                the top. Zanzibar Island is a great destination for those
                looking for beautiful beaches and a rich cultural experience.
                The Ngorongoro Conservation Area is home to a vast crater and
                some of the world's last remaining black rhinos. The capital
                city of Dar es Salaam is a bustling metropolis with a vibrant
                culture and delicious cuisine.
              </p>
            </div>
            <v-row class="pt-10">
              <v-col>
                <v-card class="mx-auto" max-width="344">
                  <v-img
                    src="../assets/moshi.jpeg"
                    height="200px"
                    cover
                  ></v-img>

                  <v-card-title> Moshi </v-card-title>

                  <v-card-subtitle>
                    Moshi city is one of the tourist centers in the northern
                    safari circuit of Tanzania and capital of the Kilimanjaro
                    region.
                  </v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      router
                      to="/ThingsTodo"
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
                    src="../assets/zanzibar.jpeg"
                    height="200px"
                    cover
                  ></v-img>

                  <v-card-title> Zanzibar </v-card-title>

                  <v-card-subtitle>
                    Zanzibar, Swahili Unguja, island in the Indian Ocean, lying
                    22 miles (35 km) off the coast of east-central Africa
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
                    src="../assets/arusha2.jpeg"
                    height="200px"
                    cover
                  ></v-img>

                  <v-card-title> Arusha </v-card-title>

                  <v-card-subtitle>
                    Arusha, formerly Northern Region, administrative region,
                    northern Tanzania, East Africa. It is bordered on the
                    northeast by Kenya.
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
            <v-row class="pt-5">
              <v-col>
                <v-card class="mx-auto" max-width="344">
                  <v-img
                    src="../assets/mwanza.jpeg"
                    height="200px"
                    cover
                  ></v-img>

                  <v-card-title> Mwanza </v-card-title>

                  <v-card-subtitle>
                    Mwanza is a city located in the northern part of Tanzania,
                    East Africa. It is situated on the southern shores of Lake
                    Victoria, the largest lake in Tanzania and the
                    second-largest freshwater lake in the world.
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
                    src="../assets/morogoro.jpeg"
                    height="200px"
                    cover
                  ></v-img>

                  <v-card-title> Morogoro </v-card-title>

                  <v-card-subtitle>
                    Morogoro is a city located in the eastern part of Tanzania,
                    East Africa. It is the capital of the Morogoro Region and is
                    situated approximately 190 kilometers (120 miles) west of
                    Dar es Salaam, the largest city in Tanzania.
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
                    src="../assets/pemba.jpeg"
                    height="200px"
                    cover
                  ></v-img>

                  <v-card-title> Pemba </v-card-title>

                  <v-card-subtitle>
                    Pemba is an island located in the Indian Ocean, just off the
                    coast of Tanzania, East Africa. It is part of the Zanzibar
                    Archipelago, which includes several other islands, the
                    largest of which is Unguja Island (referred to as Zanzibar
                    Island).
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
  name: "popDestination",
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
  height: 9vh !important;
  color: white;
}
h3 {
  font-size: 3vh;
  color: black;
  margin-bottom: 2rem;
  letter-spacing: 1px;
  line-height: 1.3;
  font-family: "Poppins", sans-serif;
  text-align: center;
}
</style>
