<template>
  <v-app>
    <v-app-bar class="pa-2" color="#6A7882" fixed flat>
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

    <v-content class="pt-10">
      <v-container class="pt-10">
        <h3>Tour Booking Form</h3>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="last"
                :rules="nameRules"
                label="Surname:"
                required
                outlined
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="first"
                :rules="nameRules"
                label="First Name:"
                required
                outlined
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="email"
                label="Email:"
                required
                outlined
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="4">
              <v-text-field
                v-model="PhoneNumber"
                label="Phone Number:"
                required
                outlined
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="visit"
                label="When are you planning to visit?"
                required
                outlined
                type="date"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="place"
                label="Where are you departing from?"
                required
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="reason"
                label="Reason for Travel"
                required
                outlined
              ></v-text-field>
              <p>
                Note: Please specify if you are traveling for work, a wedding, a
                birthday, a girl's trip, a bachelor or bachelorette getaway,
                romance, recreation or family vacation.
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="people"
                label="How many people are in your group?"
                required
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="adults"
                label="How many Adults?"
                required
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="children"
                label="How many Children?"
                required
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
            <v-row>
           
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="rooms"
                label="Number of Rooms"
                required
                outlined
              ></v-text-field>

            </v-col>
          </v-row>
          <v-row>
           <v-col cols="12" sm="6">
              <v-text-field
                v-model="accomodations"
                label="Type of Accomodations"
                required
                outlined
              ></v-text-field>
   <p> Note: standard room, suite, ocean view, balcony</p>
            </v-col>
          </v-row>
         <v-row>
            <v-col cols="12" sm="6">
              <p>Which Hotels are you interested in?</p>

              <v-select
                label="Select Hotel"
                :items="[
                  'Hotel Verde -> Zanzibar',
                  'Gran Melia -> Arusha',
                  'Zanzibar Beach Resort -> Zanzibar',
                  'Ocean Bay -> Mwanza',
                  'The Kilimanjaro Hotel -> Dar es salaam',
                  'Aya Sophia -> Dar es salaam',
                ]"
                outlined
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
              <p>Which tours or events are you interested in?</p>

              <v-select
                label="Select Tour"
                :items="[
                  'Climbing kilimanjaro',
                  'Jozani Forest',
                  'The Ngorongoro Crater',
                  'Mikumi National Park',
                  'Maasai Tours',
                  'Blue Safari Tour',
                ]"
                outlined
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
              <p>What is the best way to contact you?</p>

              <v-radio-group>
                <v-radio label="Phone" value="1"></v-radio>
                <v-radio label="Email" value="2"></v-radio>
                <v-radio label="Either" value="3"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <p>If phone, when is the best time of day for a call-back?</p>

              <v-radio-group>
                <v-radio label="8-11 AM" value="1"></v-radio>
                <v-radio label="12-4 PM" value="2"></v-radio>
                <v-radio label="6-10 PM" value="3"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
              <p>Choose your Payment Method</p>

              <v-radio-group>
                <v-radio label="VISA" value="1"></v-radio>
                <v-radio label="mastercard" value="2"></v-radio>
                <v-radio label="cash" value="3"></v-radio>
                <v-radio label="other" value="4"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <p>What type of vacation trip are you thinking of?</p>

             
              <v-checkbox label="Flight Needed"></v-checkbox>
              <v-checkbox label="Rental Car Needed"></v-checkbox>
              <v-checkbox label="All-inclusive Resort"></v-checkbox>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
              <p>
                Do you need transport(s) from where-ever you will be? i.e
                Airport
              </p>

              <v-radio-group>
                <v-radio label="Yes" value="1"></v-radio>
                <v-radio label="No" value="2"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
              <p>
                Provide any additional information that We might need to know,
                such as any restrictions, preferred resorts, or cruise
                activities. The more information you provide, the more probable
                it is that We can satisfy all of your needs. (For instance, FOOD
                ALLERGIES, limitations, we'd like excursions for our cruise, or
                just give us first class airfare prices.)
              </p>
              <v-textarea outlined></v-textarea>
            </v-col>
          </v-row>

          <p>
            Thank you again for choosing our services. We value you and we
            understand that <br />
            every vacation is an opportunity to make lasting life long memories.
          </p>

          <v-btn
        
            class="mt-5 white--text"
            type="submit"
            elevation="20"
            color="#6A7882"
            width="200"
            height="40"
          >
            send
          </v-btn>
        </v-form>
      </v-container>
          
    </v-content>
      <footer>
          <v-col lg="12">
            <div class="text-center mt-2 mb-0">
              <v-icon class="white--text">mdi-copyright</v-icon> Copyright Private Tours in
              Tanzania. All Rights Reserved {{ new Date().getFullYear() }}
            </div>
          </v-col>
        </footer>
  </v-app>
</template>
<script>
import "../css/fonts.css";

export default {
  name: "BookView",
  components: {},
  data() {
    return {};
  },

};
</script>

<style scoped>
.weight-500 {
  font-weight: 500 !important;
}

p {
  color: #746b66;
}
footer {
  
 
    width: 100%;
    height: 60px;
    background-color: #6A7882;
  color: white;
    
}
</style>
