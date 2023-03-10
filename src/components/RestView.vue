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
    <v-content>
      <section>
        <div id="popular">
          <v-container class="pt-10">
            <div class="pt-10">
              <h3>Restaurants to visit while in Moshi</h3>
              <p>
                Welcome to explore our restaurants in Moshi! We specialize in different type of
                cuisine and offer a variety of dishes to suit all
                tastes. <br> So come on in and enjoy a delicious dining experience with
                us!
              </p>
            </div>

            <v-row class="pt-10">
              <v-col>
                <v-card class="mx-auto" max-width="344">
                  <v-img
                    src="../assets/moshiA.jpg"
                    height="200px"
                    cover
                  ></v-img>

                  <v-card-title> Maembe Garden </v-card-title>

                  <v-card-subtitle>
                    Details <br />
                    PRICE RANGE: TZS 5,000 - TZS 35,000 <br />
                    CUISINES <br />
                    Italian, American, African, Barbecue, Healthy MEALS <br />
                    Breakfast, Lunch, Dinner, Brunch, Late Night, Drinks
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
                    src="../assets/moshiB.jpg"
                    height="200px"
                    cover
                  ></v-img>

                  <v-card-title> Blossoms Cafe and Wine Bar </v-card-title>

                  <v-card-subtitle>
                    Details <br />
                    PRICE RANGE: TZS 1,000 - TZS 20,000 <br />
                    CUISINES <br />
                    Mexican, American, African, Pizza, Contemporary MEALS <br />
                    Breakfast, Lunch, Dinner
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
                    src="../assets/moshiC.jpg"
                    height="200px"
                    cover
                  ></v-img>

                  <v-card-title> Maisha Khalisi </v-card-title>

                  <v-card-subtitle>
                    Details <br />
                    PRICE RANGE: TZS 11,682,243 - TZS 105,140,184 <br />
                    CUISINES <br />
                    African, Bar, Barbecue, Healthy, Wine Bar MEALS <br />
                    Breakfast, Lunch, Dinner, Late Night, Drinks
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
                    src="../assets/moshiD.jpg"
                    height="200px"
                    cover
                  ></v-img>

                  <v-card-title> Maembe Cafe and Lounge </v-card-title>

                  <v-card-subtitle>
                    Details <br />
                    PRICE RANGE: TZS 5,000 - TZS 35,000 <br />
                    CUISINES <br />
                    African, Bar <br />
                    MEALS <br />
                    Vegetarian Friendly, Vegan Options
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
                    src="../assets/moshiE.jpg"
                    height="200px"
                    cover
                  ></v-img>

                  <v-card-title> Deli Chez </v-card-title>

                  <v-card-subtitle>
                    Details <br />
                    PRICE RANGE: TZS 15,000 - TZS 65,000 <br />
                    CUISINES <br />
                    Chinese, Indian, African, International <br />
                    SPECIAL DIETS <br />
                    Vegetarian Friendly, Vegan Options, Halal <br />
                    MEALS <br />
                    Lunch, Dinner, Breakfast
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
                    src="../assets/moshiF.jpg"
                    height="200px"
                    cover
                  ></v-img>

                  <v-card-title> Shose Garden </v-card-title>

                  <v-card-subtitle>
                    Details <br />
                    PRICE RANGE: TZS 11,682 - TZS 35,047 <br />
                    CUISINES <br />
                    Indian, African, European <br />
                    MEALS <br />
                    Breakfast, Lunch, Dinner, Brunch, Late Night, Drinks
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
            <v-btn
              routed
              to="#"
              rounded
              class="font-3 btn"
              color="#6A7882"
              elevation="5"
              dark
              x-large
              style="text-transform: none; font-weight: 850; width: 340px"
              >View More</v-btn
            >
          </v-container>
        </div>
      </section>
    </v-content>
    <footer class="foot">
      <v-col lg="12">
        <v-row justify="center">
          <v-col lg="3">
            <p>OUR TOURS</p>
            <p>
              thank you for visiting our site, and we hope you find the
              resources and information here helpful in planning your next
              adventure. <br />
              Hakuna Matata!
            </p>
          </v-col>
          <v-col lg="3">
            <p>CONTACT</p>

            <p>+255 767 000 700</p>
            <p>+255 787 300 700</p>
            <p>ptt@gmail.com</p>
          </v-col>
          <v-col lg="3" class="text-center">
            <p>SOCIAL MEDIAS</p>
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
          <v-col lg="3">
            <p>QUICK LINKS</p>
            <ul>
              <li><a href="#popular">Explore</a></li>
              <li><router-link to="/AboutView">About</router-link></li>
              <li><router-link to="/RestView">Restaurants</router-link></li>
              <li><router-link to="/HotelView">Where to Stay</router-link></li>
            </ul>
          </v-col>
        </v-row>
        <div>
          <v-divider></v-divider>

          <p class="text-center mt-2 mb-0">
            <v-icon>mdi-copyright</v-icon> Copyright Private Tours in Tanzania.
            All Rights Reserved {{ new Date().getFullYear() }}
          </p>
        </div>
      </v-col>
    </footer>
  </v-app>
</template>

<script>
import "../css/fonts.css";
export default {
  name: "RestView",
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"],
    };
  },
};
</script>

<style scoped>
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
  height: 50vh !important;
}
</style>
