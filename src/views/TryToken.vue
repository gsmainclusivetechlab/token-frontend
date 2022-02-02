<template>
  <div class="home">
    <AppHeader v-bind="headerProps" />

    <!-- FRAME 01: CONTENT -->
    <section class="bio-all">
      <div class="container">
        <div class="bio-all-contents">
          <div class="row">
            <div class="col-12 col-lg-6">
              <div class="bio-content-wrap">
                <h2>Info about the tests</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged.
                </p>
                <p>
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                  with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FRAME 02: MOBILE -->
    <section class="two-col-biometric-wrap text-white">
      <b-container>
        <b-row class="justify-content-start align-items-center">
          <b-col cols="12" xl="6">
            <div class="biometric-content">
              <h2>Virtual Mobile Simulation</h2>
              <p>Info here</p>
            </div>
          </b-col>
          <b-col cols="12" xl="6">
            <div class="biometric-img-block">
              <b-row class="justify-content-center align-items-center gutter-20 flex-md-column">
                <b-col cols="12" md="7">
                  <span>Are you a mobile operator and have concerns about safety and security of your customers? </span>
                  <br />
                  <br />
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
    <div class="login-form-frame">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="content-login">
              <h2>Live Token Showcase</h2>
              <h4>Do a real simulation using your own mobile phone</h4>
              <br />
              <p>
                If you want to use the Live version, you need to sign up to be able to receive messages from the system. All the data used
                during the tests is deleted automatically after you finish the tests or refresh the page.
              </p>

              <p>To test the Use Cases, you can follow the instructions present <a href="/howitworks"> here</a>.</p>

              <p>
                If you would like to suggest a new use case or customisation of this solution to meet your business needs, contact the
                <a href="https://www.gsma.com/mobilefordevelopment/mobile-money/gsma-inclusive-tech-lab/" target="_blank">
                  Inclusive Tech Lab</a
                >
                or
                <a @click="scrollBottom" class="link-color"> suggest a new use case.</a>
              </p>
            </div>
          </div>
          <div class="col-12 col-lg-6">
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
      tittle: 'EXPERIENCE THE TOKEN SHOWCASE',
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
