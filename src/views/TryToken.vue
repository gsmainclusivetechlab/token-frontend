<template>
  <div class="home">
    <AppHeader v-bind="headerProps" />

    <!-- FRAME 01: TRY OUR SOLUTION -->
    <div class="digital-wrapper mb-3">
      <b-container>
        <!-- <b-row> 
          <h2>
            This showcase demonstrates how tokenising customers’ phone numbers protects their contact details and keeps their identity private. Try it out in different mobile money scenarios. 
          </h2>
        </b-row> -->
        <b-row>
          <b-col cols="12" md="5">
            <div class="digital-frame-left-content">
              <h2>Innovating mobile tokenisation to keep your customers safe</h2>
              <p>This showcase demonstrates how tokenising customers’ phone numbers protects their contact details and keeps their identity private. Try it out in different mobile money scenarios.</p>
              <p><b>On our simulator:</b> Experience different scenarios in an interface to simulate both user and service agent. </p>
              <p><b>Onn your own device:</b> Sign up and experience on your own phone. Send and receive SMS/USSD commands and access services. </p>
              <p style="color: red"><i>*You can use the phone number or the token to access the transactions</i></p>
            </div>
          </b-col>
          <b-col cols="12" md="1"></b-col>
          <b-col cols="12" md="6">
            <div class="content-digital">
              <h2 style="text-align:center">Codes and comands</h2>
              <table>
                <tr>
                  <th style="width:60%">SMS</th>
                  <th>USSD</th>
                </tr>
                <tr>
                  <td>GET TOKEN</td>
                  <td>*165*1#</td>
                </tr>
                <tr>
                  <td>DELETE TOKEN</td>
                  <td>*165*2#</td>
                </tr>
                <tr>
                  <td>CASH IN (amount)</td>
                  <td>*165*3*amount*pin#</td>
                </tr>
                <tr>
                  <td>CASH OUT (amount)</td>
                  <td>*165*4*amount*pin#</td>
                </tr>
                <tr>
                  <td>PAYMENT (merchant) (amount)</td>
                  <td>*165*3*merchant*amount*pin#</td>
                </tr>
              </table>
              <p></p>
              <p><i>*More information about the use cases and codes can be found in our <a href="https://docs.token.gsmainclusivetechlab.io/">documentation</a></i></p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <!-- FRAME 02: MOBILE -->
    <section class="two-col-biometric-wrap text-white">
      <b-container>
        <b-row class="justify-content-start align-items-center">
          <b-col cols="12" xl="6">
            
            <h2 style="text-align:center">Try out our simulator</h2>
            <ul>
              <li> <img src="../assets/images/tick.png" alt="tick symbol"/> Everything in one interface</li>
              <li> <img src="../assets/images/tick.png" alt="tick symbol"/> Quick demonstration and evaluation</li>
              <li> <img src="../assets/images/tick.png" alt="tick symbol"/> Uses a feature phone</li>
              <li> <img src="../assets/images/tick.png" alt="tick symbol"/> Link to User Manual in the documentation</li>
            </ul>
            <p></p>
            <div align="center" class="newscase-btn">
              <p><a id="show-modal" href="/trytoken/mock" class="btn-newscase">Try Virtual Token Simulation</a></p>
            </div>


          </b-col>
          <b-col cols="12" xl="1"> </b-col>
          <b-col cols="12" xl="5">
            <div class="biometric-img-block">
              <b-row class="justify-content-center align-items-center gutter-20 flex-md-column">
                <b-col cols="12">
                  
                  <div class="biometric-content">
                    <div class="img-bio">
                      <img src="../assets/images/graphic-03.1.png" class="img-fluid" alt="usecase-content" />
                    </div>
                    <h5 style="text-align:center">Experience different scenarios in an interface to simulate both user and service agent.</h5>
                  </div>

                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <!-- FRAME 03: LIVE SIMULATION -->
    <div class="try-token-frame">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="content-login">
              <h2>Try out on your own device</h2>
              <h4>Sign up and experience on your own phone. Send and receive SMS/USSD commands and access services.</h4>
              <br />
              <p> If you want to use the Live version, you need to sign up to be able to receive messages from the system. All the data used during the tests is deleted automatically after you finish the tests or refresh the page. </p>
              <p> To test the Use Cases, you can follow the instructions present at <a href="https://docs.token.gsmainclusivetechlab.io/" target="_blank">Token Documentation</a></p>
              <p> If you would like to suggest a new use case or customisation of this solution to meet your business needs, contact the
                <a href="https://www.gsma.com/mobilefordevelopment/mobile-money/gsma-inclusive-tech-lab/" target="_blank"> Inclusive Tech Lab </a></p>

              
            </div>
          </div>
          <div class="col-12 col-lg-6 mb-4">
            <SignUpCustomer />
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);
import AppHeader from '../components/AppHeader';
import Footer from '../components/layout/Footer';
import SignUpCustomer from '../components/SignUpCustomer.vue';
export default {
  name: 'TryToken',
  components: {
    AppHeader,
    Footer,
    SignUpCustomer,
  },
  data: () => ({
    headerProps: {
      tittle: 'EXPERIENCE MOBILE TOKENISATION',
      content: 'Try out our live and simulation version using SMS and USSD',
      breadCrumb: {
        tittle: 'Try Token',
        link: 'trytoken',
      },
    },
  }),
  methods: {
    scrollBottom() {
      window.scrollTo({
        top: 10000,
        left: 0,
        behavior: 'smooth',
      });
    },
    tryMock() {
      this.$router.push({ path: `/trytoken/mock` });
    },
  },
};
</script>
<style src="vue-tel-input/dist/vue-tel-input.css"></style>
<style>
.try-token-frame {
  padding-top: 71px;
  padding-bottom: 70px;
  position: relative;
}

@media only screen and (max-width: 1024px) {
  .try-token-frame .sign-up-frame {
    width: auto;
  }
}

th, td {
  padding: 9px;
  padding-left: 30px;
}

tr{
  border-bottom: 1px solid rgb(0, 0, 0);
  text-align: left;
}

ul {
    margin-left: 60px; /* To remove default bottom margin */ 
    padding: 30px; /* To remove default left padding */
}

</style>
