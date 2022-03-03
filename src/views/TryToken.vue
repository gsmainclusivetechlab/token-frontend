<template>
  <div class="home">
    <AppHeader v-bind="headerProps" />

    <!-- FRAME 01: TRY OUR SOLUTION -->
    <div class="digital-wrapper mb-3">
      <b-container>
        <b-row>
          <b-col cols="12" md="5">
            <div class="digital-frame-left-content">
              <h3>Innovating mobile tokenisation to keep your customers safe</h3>
              <p>This showcase demonstrates how tokenising customers’ phone numbers protects their contact details and keeps their identity private. Try it out in different mobile money scenarios.</p>
              <p>There are two methods to try out the solution.</p>
            </div>
          </b-col>
          <b-col cols="12" md="7">
            <div class="content-digital">
              <h4>Try out on our simulator</h4>
              <p>Experience different scenarios in an interface to simulate both user and service agent. </p>
              <h4>Try out on your own device</h4>
              <p>Sign up and experience on your own phone. Send and receive SMS/USSD commands and access services. </p>
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
            <div class="biometric-content">
              <h2>Try out our simulator</h2>
              <p>Experience different scenarios in an interface to simulate both user and service agent. </p>
              <ul>
                <li>- Everything in one interface</li>
                <li>- Quick demonstration and evaluation</li>
                <li>- Uses a feature phone</li>
                <li>- Link to User Manual in the documentation</li>
              </ul>
            </div>
          </b-col>
          <b-col cols="12" xl="6">
            <div class="biometric-img-block">
              <b-row class="justify-content-center align-items-center gutter-20 flex-md-column">
                <b-col cols="12">

                  <div align="right" class="newscase-btn">
                    <a id="show-modal" href="/trytoken/mock" class="btn-newscase">Try Virtual Token Simulation</a>
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
      content: 'Protect yourself from exposing your phone number using a token solution',
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
</style>
