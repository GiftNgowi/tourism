<template>
  <v-app>
    <v-app-bar class="pa-2" fixed  color="#6A7882"
      flat>
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
                 <v-btn  router to= "/popDestination" small plain text style="text-transform:none" class="font-head weight-500 white--text"><v-icon size="18">mdi-format-list-bulleted-square</v-icon> <span class="mb-n1">POPULAR DESTINATIONS</span></v-btn>

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
    <section class="pt-10">
    <div class="bg" id="about">
      <div class="main-text white--text text-h4">
        <p><B>ABOUT US</B></p>
      
      </div>
    </div>
    </section>
    <section class="pt-8">
      <div class="main-text">
          <h1>Tourism Experience In Tanzania</h1>
                <p>A tour of the top sites in the world is a Tanzania adventure. We can help you plan the ideal trip, <br> 
                  get the most affordable tickets, and book the greatest hotels.
                   </p>
                    </div>
      <v-row>
        <v-col cols="12" sm="6">
          <img class="ml-4" width="90%" height="70%" src="../assets/tz.png" alt="pic1" />
        </v-col>
        <v-col cols="12" sm="6">
        
          <p class="description mr-4">
            Welcome to Explore Tanzania, your one-stop-shop for travelers and
            explorers. We believe that travel can be a transformative experience
            for both individuals and communities. <br>
            Our Platform is designed to help travelers make informed decisions
            about their travel plans, and to provide tools and resources to
            facilitate their travel. We work with local communities, businesses
            and organizations to promote sustainable tourism practices and to
            help protect natural and cultural heritage sites <br>
            List of advantages: <br>
            <ul>
            <li>Entertainment in the mountains</li> 
     <li>The best views</li>
<li>Cycling</li>
<li>Hike in the mountains</li>
<li>Aquarium</li>
            </ul>
          </p>
        </v-col>
      </v-row>
    </section>
     <footer class="foot">
             <v-col lg="12">
      <v-row justify="center">
           <v-col lg="3">
      <!-- <p><v-img  width="100" src="../assets/logoo1.png"></v-img></p>  -->
      <p>OUR TOURS</p>
           <p>thank you for visiting our site, and we hope you find the resources and information
                   here helpful in planning your next adventure. <br>
Hakuna Matata!</p>
       
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
                    <li>    <router-link to="/ThingsTodo">Explore</router-link></li>
                    <li><a href="#about">About</a></li>
                    <li>  <router-link to="/RestView">Restaurants</router-link></li>
                    <li>  <router-link to="/HotelView">Where to Stay</router-link></li>
                </ul>
        </v-col>
      </v-row>
      <div>
        <v-divider></v-divider>

        <p class="text-center mt-2 mb-0">
          <v-icon>mdi-copyright</v-icon> Copyright Private Tours in Tanzania. All Rights
          Reserved {{ new Date().getFullYear() }}
        </p>
      </div>
    </v-col>
           
    </footer>
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

.bg {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 1%,
      rgba(0, 0, 0, 0.273638) 51.03%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url("../assets/home.jpeg");
  height: 50vh !important;

  position: relative;
  background-position: center;
  background-size: cover;
  
  display: flex;
  align-items: center;
  padding: 1rem 5rem 1rem 2rem;
}
.main-text {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  line-height: 1.5;
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
  text-align: justify;}
  .main-container {
  margin: 4rem auto;
  max-width: 1000px;
  margin-bottom: 4rem;
}

</style>
