<template>
  <v-app>
    <div class="bg">
         <v-btn
          router
          to="/ThingsTodo"
          color="transparent"
          class="white--text mr-4"
        >
          <v-icon>mdi-chevron-left-circle-outline </v-icon>go back</v-btn
        >
      <div class="main-text2">
        <h1>MOUNT KILIMANJARO</h1>
        <p>
          <i
            >Upon Arrival, you will meet your guide and he/she will give you a
            first briefing for the upcoming climb and together you will verify
            whether all the necessary climbing materials are present.
          </i>
        </p>
      </div>
    </div>

    <section class="main-text">
      <h1 style="text-align: center" class="pt-5">Activities</h1>
      <v-row>
        <v-col cols="4">
          <v-sheet min-height="30vh" rounded="lg">
            <p class="text-h6">Climbing Mount Kilimanjaro via Marangu Route</p>
            <p>
              <!-- Truncated text -->
              <span v-if="!showFirst">
                The Marangu Route, also known as the "Coca Cola" or tourist
                route, is the simplest and shortest way to reach Kilimanjaro's
                summit. It provides solar-powered sleeping huts with comfortable
                beds and basic amenities such as restrooms and running water...
              </span>

              <!-- Full text -->
              <span v-else>
                The Marangu Route, also known as the "Coca Cola" or tourist
                route, is the simplest and shortest way to reach Kilimanjaro's
                summit. It provides solar-powered sleeping huts with comfortable
                beds and basic amenities such as restrooms and running water.
                Climbing groups from all over the world share communal dining
                huts where they can buy soft drinks, bottled water, and beer.
                The standard route takes five days, but an extra day for
                acclimatization can be added. <br /><br />
                Duration: 5 days <br />
                Prices: Group of 1: USD 2000 each <br />
                Group of 2: USD 1790 each <br />
                Group of 3: USD 1737 each <br />
                Group of 4: USD 1685 each <br />
                Group of 5: USD 1632 each <br />
                Group of 6: USD 1579 each <br />
                Group of 7: USD 1527 each <br />
                Group of 7: USD 1474 each <br />
                <br />

                Distance covered: day 1 -> Climbing from Marangu Gate to Mandara
                hut: 8km Climbing <br />
                day 2 -> Climbing from Mandara Hut to Horombo: 12km climbing
                <br />
                day 3 -> Climbing from Horombo Hut To Kibo Hut: 10km climbing
                <br />
                day 4 -> Climbing from Kibo Hut to Uhuru Peak: 10km climbing
                <br />
                day 5 -> Descending from Horombo hut to Marangu park gate: 20km
                <br />
              </span>

              <!-- "Read more" button -->
              <button @click="showFirst = !showFirst" style="color: blue">
                {{ showFirst ? "Read less" : "Read more" }}
              </button>
            </p>
          </v-sheet>
          <br />
        </v-col>
        <v-col cols="4">
          <v-sheet min-height="30vh" rounded="lg">
            <p class="text-h6">Climbing Mount Kilimanjaro via Machame Route</p>

            <p>
              <!-- Truncated text -->

              <span v-if="!showSecond">
                The Machame route, also known as the Whiskey route, is the most
                popular route on Kilimanjaro. It has scenic beauty but is
                considered difficult and steep, making it better suited for
                experienced hikers. The approach is from the south,...
              </span>
              <!-- Full text -->
              <span v-else>
                The Machame route, also known as the Whiskey route, is the most
                popular route on Kilimanjaro. It has scenic beauty but is
                considered difficult and steep, making it better suited for
                experienced hikers. The approach is from the south, through the
                rainforest to the Shira Plateau, then beneath the Southern Ice
                Field to Barafu. Plan Africa Adventures provides a seven-day
                group climb as well as a six-day private climb with a shortened
                itinerary. <br /><br />Duration: 6 days <br />
                Prices: Group of 1: USD 2000 each <br />
                Group of 2: USD 1790 each <br />
                Group of 3: USD 1737 each <br />
                Group of 4: USD 1685 each <br />
                Group of 5: USD 1632 each <br />
                Group of 6: USD 1579 each <br />
                Group of 7: USD 1527 each <br />
                Group of 7: USD 1474 each <br />
                <br />
                Distance covered: day 1 -> Climbing from Machame Gate to Machame
                Camp: 18km Climbing <br />
                day 2 -> Climbing from Machame Camp to Shira Camp: 4km climbing
                <br />
                day 3 -> Climbing from Shira Camp to Barranco Camp: 10.8km
                climbing <br />
                day 4 -> Climbing from Barranco Camp to Barafu Camp: 6km
                climbing
                <br />
                day 5 -> Climbing from Barafu to Uhuru Peak and descend to Mweka
                Camp: 7km <br />
                day 6 -> Descending from Mweka Camp to Mweka Gate: 10km <br />
              </span>
              <!-- "Read more" button -->
              <button @click="showSecond = !showSecond" style="color: blue">
                {{ showSecond ? "Read less" : "Read more" }}
              </button>
            </p>
          </v-sheet>
        </v-col>
        <v-col cols="4">
          <v-sheet min-height="30vh" rounded="lg">
            <p class="text-h6">Climbing Mount Kilimanjaro via Rongai Route</p>
            <p>
              <!-- Truncated text -->

              <span v-if="!showThird">
                The Rongai Route is the only approach to Kilimanjaro from the
                north, known for its scenic beauty, ease of trekking, and high
                success rate. Unlike the Marangu Route, it uses tents for
                sleeping and dining. Meals are served in a dinner tent...
              </span>
              <!-- Full text -->
              <span v-else>
                The Rongai Route is the only approach to Kilimanjaro from the
                north, known for its scenic beauty, ease of trekking, and high
                success rate. Unlike the Marangu Route, it uses tents for
                sleeping and dining. Meals are served in a dinner tent or
                outside on a blanket, and porters pitch the tents. The route has
                a gradual slope and is less travelled. The Rongai joins the
                Marangu Route for the summit climb and descends via the
                southeast side, providing multiple viewpoints of Kilimanjaro.
                <br /><br />
                Duration: 7 days
                <br />
                Prices: Group of 1: USD 2000 each <br />
                Group of 2: USD 1790 each <br />
                Group of 3: USD 1737 each <br />
                Group of 4: USD 1685 each <br />
                Group of 5: USD 1632 each <br />
                Group of 6: USD 1579 each <br />
                Group of 7: USD 1527 each <br />
                Group of 7: USD 1474 each <br />
                <br />
                Distance covered: day 1 -> Climbing from Rongai Gate to Rongai
                Cave: 8km Climbing <br />
                day 2 -> Climbing from Rongai Cave to second Cave: 6km climbing
                <br />
                day 3 -> Climbing from kikelewa cave to Mawenzi tarn: 5km
                climbing
                <br />
                day 4 -> climbing from Mawenzi Tarn to Mawenzi Ridge: 5km
                climbing
                <br />
                day 5 -> climbing from Mawenzi Tarn to Kibo Hut: 8km
                <br />
                day 6 -> Climbing from Kibo Hut to Uhuru peak: 6km
                <br />
                day 7 -> Descent from Horombo Hut to Marangu Gate: 20km <br />
              </span>
              <!-- "Read more" button -->
              <button @click="showThird = !showThird" style="color: blue">
                {{ showThird ? "Read less" : "Read more" }}
              </button>
            </p>
          </v-sheet>
        </v-col>
      </v-row>
    </section>
    <section>
      <v-row>
        <v-col cols="4" class="ml-4">
          <h5 class="pt-5">Food and Beverages</h5>
          <p>
            Water, tea, and coffee are included, as well as full board. Please
            inform us in advance if you require any special meals, such as
            vegetarian, gluten-free, or other meals due to dietary restrictions
            or allergies.
          </p>
        </v-col>
        <v-col cols="4">
          <h5 class="pt-5">Needed Skill Level</h5>
          <p>You must be in good physical condition.</p>
       
          <h5>Options for children</h5>
          <p>Participation is possible for kids above 12 years old.</p>
        </v-col>
      </v-row>
    </section>

    <footer>
      <v-col lg="12">
        <div class="text-center mt-2 mb-0">
          <v-icon class="white--text">mdi-copyright</v-icon> Copyright Private
          Tours in Tanzania. All Rights Reserved {{ new Date().getFullYear() }}
        </div>
      </v-col>
    </footer>
  </v-app>
</template>
<script>
import "../css/fonts.css";

export default {
  name: "MountKlm",
  components: {},
  data() {
    return {
      showFirst: false,
      showSecond: false,
      showThird: false,
    };
  },
};
</script>

<style scoped>
.weight-500 {
  font-weight: 500 !important;
}
p.description {
  font-size: 19px;
  font-family: cursive;
  margin: 32px 0px;
  color: black;
}
.bg {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 1%,
      rgba(0, 0, 0, 0.273638) 51.03%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url("../assets/klm.jpeg");
  height: 50vh !important;

  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  padding: 1rem 5rem 1rem 2rem;
}
.main-text2 {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  line-height: 1.5;
}
.main-text2 h1 {
  font-size: 4vh;
  color: hsl(0deg, 0%, 100%);
  margin-bottom: 2rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  line-height: 1.3;
  font-family: "Poppins", sans-serif;
}

.main-text2 p {
  color: hsl(0deg, 0%, 100%);
  font-size: 1rem;
  letter-spacing: 1px;
  margin-bottom: 3rem;
  padding-right: 2rem;
}
.main-text {
  width: 100vw;
  text-align: center;
  padding: 1rem;
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
footer {
  width: 100%;
  height: 10vh;
  background-color: #6a7882;
  color: white;
}
</style>
