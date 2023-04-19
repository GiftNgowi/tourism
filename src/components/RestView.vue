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
              <h1>Restaurants to visit while in Moshi</h1>
              <p>
                Welcome to explore our restaurants in Moshi! We specialize in different type of
                cuisine <br>and offer a variety of dishes to suit all
                tastes. So come on in and enjoy a delicious dining experience with
                us!
              </p>
            </section>
      <section>
        <div id="popular">
          <v-container>
           

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
                    Mexican, American, African, Pizza, Contemporary <br/> MEALS <br/> 
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
                    Breakfast, Lunch, Dinner, Brunch, Drinks
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
            <v-icon class="white--text">mdi-copyright</v-icon> Copyright Private Tours in Tanzania.
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
