<template>
  <div class="home">
    <AppHeader v-bind="headerProps" />
    <!-- <div class="login-form-frame">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="content-login">
              <h2>
                Sign up to test our <br />
                Token Project
              </h2>
              <p>
                If you want to use the Live version, you need to sign up to be able to receive messages from the system. After the test, you
                have the possibility to remove your data from the system, just press the button 'Delete Account'.
              </p>

              <p>To test the Use Cases, you can follow the instructions present <a href="/howitworks" target="_blank"> here</a>.</p>

              <p>
                If you would like to suggest a new use case to meet your business needs, contact the
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
            <DeleteCustomer class="mt-3" />
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div class="login-form-frame">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6">
            <AgentConfig :selectedSystem="selectedSystem" />
          </div>
          <div class="col-12 col-lg-6">
            <CustomerConfig
              :selectedSystemParent="selectedSystem"
              :selectedModeParent="selectedMode"
              :phoneParent="phoneNumber"
              @selectedSystemChild="updateSelectedSystem"
              @selectedModeChild="updateSelectedMode"
              @emitShowPhoneInterface="updateShowPhoneInterface"
            />
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div class="login-form-frame">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6">
            <AgentTables />
          </div>
          <div class="col-12 col-lg-6">
            <h2 class="text-center">Mobile Simulation</h2>
            <Phone v-if="showPhoneInterface" :selectedSystem="selectedSystem" :selectedMode="selectedMode" :phone="phoneNumber" />
          </div>
        </div>
      </div>
    </div> -->
    <div class="try-token-frame">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="text-dark">Mobile Simulation</h2>
          </div>
          <div class="col-12 col-lg-6"></div>
          <div class="col-12 col-lg-6 d-flex justify-content-center">
            <a class="btn1">
              <input class="btn" type="submit" @click="tryMock()" value="Try" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="try-token-frame">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center"><h2 class="text-dark">Live Mobile</h2></div>
          <div class="col-12 col-lg-6"></div>
          <div class="col-12 col-lg-6">
            <SignUpCustomer />
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <router-view></router-view>
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
