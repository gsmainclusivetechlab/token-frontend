<template>
  <div class="home">
    <AppHeader v-bind="headerProps" />
    <div class="login-form-frame">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="content-login">
              <h2>
                Sign up to test our <br />
                Token Project
              </h2>
              <p>FILL INFORMATION HERE ABOUT THE PROJECT AND THE ENROLLMENT</p>
              <p>Currently the call center is working in two numbers:</p>
              <h4>
                <p><b>UK </b><a href="tel:+1234567890">+1234567890</a> / <a href="tel:+1234567890">+1234567890</a></p>
              </h4>
              <p>
                You can call and follow the instructions to enrol using your voice print, to then be able to navigate through the use cases.
              </p>
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
          </div>
        </div>
      </div>
    </div>
    <section class="two-col-biometric-wrap text-white">
      <b-container>
        <b-row class="justify-content-start align-items-center">
          <b-col cols="12" xl="6">
            <div class="biometric-content">
              <h2>
                Test Different <br />
                Biometric Providers
              </h2>
              <p>
                Biometrics For All allows mobile money providers to test multiple biometrics solutions available in the market. Our solution
                was structured with a modular and flexible architecture, allowing new biometrics providers to include their solutions to
                showcase both in our IVR call centre and in the mobile app. Our team is constantly evolving the assets, increasing the range
                of possible suppliers available. If you are a biometric supplier and would like to contribute to our showcase, please
                <a href="https://www.gsma.com/mobilefordevelopment/mobile-money/gsma-inclusive-tech-lab/" target="_blank">
                  contact the Inclusive Tech lab.</a
                >
              </p>
            </div>
          </b-col>
          <b-col cols="12" xl="6">
            <div class="biometric-img-block">
              <b-row class="justify-content-center align-items-center gutter-20 flex-md-column">
                <b-col cols="12" md="7">
                  <a href="https://voiceit.io/" target="_blank">
                    <div class="bg-biometric2 bg-black">
                      <img src="../assets/images/biometric-provide-icon-1.svg" class="img-fluid" alt="biometric-provide-icon-1" />
                    </div>
                  </a>
                  <a href="https://diamondfortress.com/" target="_blank">
                    <div class="bg-biometric2 bg-blue">
                      <img src="../assets/images/biometric-provide-icon-3.svg" class="img-fluid" alt="biometric-provide-icon-3" />
                    </div>
                  </a>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <div class="login-form-frame">
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
    </div>

    <div class="login-form-frame">
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
    </div>

    <div class="about-content-wrapper try-frame">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="img-about-content">
              <img src="../assets/images/Guide.png" class="img-fluid" alt="Guide" />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <h2>Use our documentation to get the most out of your experience</h2>
            <h6>
              B4LL allows you to experience different use cases. Our documentation guides you through happy and unhappy flows and tells you
              everything you need to know to make the correct use of the showcase. So please visit our documentation page and try to go over
              the flows which are outlined. There is an infinite number of open possibilities, so, help us to improve bringing your business
              needs so we can provide a customised experience to you.
            </h6>
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
import { VueTelInput } from 'vue-tel-input';
import SignUpCustomer from '../components/SignUpCustomer.vue';
import AgentConfig from '../components/AgentConfig.vue';
import CustomerConfig from '../components/CustomerConfig.vue';
import Phone from '../components/Phone.vue';
import AgentTables from '../components/AgentTables.vue';
export default {
  name: 'TryToken',
  components: { AppHeader, Footer, VueTelInput, SignUpCustomer, AgentConfig, CustomerConfig, Phone, AgentTables },
  data: () => ({
    headerProps: {
      tittle: 'EXPERIENCE THE TOKEN SHOWCASE',
      content: 'Protect yourself from exposing your phone number using a token solution',
      breadCrumb: {
        tittle: 'Try Token',
        link: 'trytoken',
      },
    },
    showPhoneInterface: false,
    selectedSystem: 'mock',
    selectedMode: 'SMS',
    phoneNumber: '+447401232937',
  }),
  methods: {
    scrollBottom() {
      window.scrollTo({
        top: 10000,
        left: 0,
        behavior: 'smooth',
      });
    },

    updateSelectedSystem(newValue) {
      this.selectedSystem = newValue;
    },

    updateSelectedMode(newValue) {
      this.selectedMode = newValue;
    },

    updateShowPhoneInterface(newValue) {
      this.showPhoneInterface = newValue;
    },
  },
};
</script>
<style src="vue-tel-input/dist/vue-tel-input.css"></style>
<style>
.coming-soon-frame h4 {
  margin-bottom: 0;
  color: #fff;
  padding-top: 10px;
}
.try-frame {
  padding-top: 90px;
  padding-bottom: 90px;
}
.login-form-frame {
  padding-top: 71px;
  padding-bottom: 70px;
  position: relative;
}
/* .login-form-frame::before {
  content: '';
  background-image: url('../assets/images/phone-call.png');
  position: absolute;
  left: 49px;
  top: 17px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100px;
  height: 100px;
}
.login-form-frame::after {
  content: '';
  background-image: url('../assets/images/bg.png');
  position: absolute;
  right: -10px;
  top: -61px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 391px;
  height: 550px;
  z-index: -1;
} */
.error-msg {
  font-size: 12px;
  color: red;
}
.form-control:focus {
  outline: none;
  box-shadow: none;
  border: 1px solid #95236c;
}
.login-form-frame .btn {
  width: 100%;
}
.mr-10 {
  margin-right: 10px;
}
.phone-call-frame img {
  margin-top: -7px;
}
.login-form-frame .content-login h4 {
  font-weight: bold;
  position: relative;
  /* padding-left: 35px; */
}
.login-form-frame .content-login p a {
  /* color: #000000; */
  font-size: 16px;
}
.biometric-content p a {
  color: #fff;
}
/* .biometric-content p a:hover,
.biometric-content p a {
  color: #ae52c4;
} */
.link-color:hover {
  color: #ae52c4;
  cursor: pointer;
}
/* .login-form-frame .content-login h4::before {
  content: "";
  position: absolute;
  background-image: url("../assets/images/phone-call-blue.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  left: 0;
  top: 0;
  bottom: 0;
  width: 25px;
  height: 25px;
} */
.login-form-frame .sign-up-frame p {
  font-size: 14px;
}

.login-form-frame .sign-up-frame h2,
.login-form-frame .sign-up-frame h4,
.login-form-frame .sign-up-frame p {
  text-align: center;
}

.login-form-frame .sign-up-frame {
  background-color: #f9f9f9;
  border-radius: 18px;
  border: 1px solid #f2f2f2;
  width: 485px;
  /* height: 501px; */
  padding-left: 26px;
  padding-top: 34px;
  padding-right: 28px;
  padding-bottom: 51px;
}
::placeholder {
  font-size: 14px;
}
.login-form-frame .sign-up-frame .checkmark {
  position: absolute;
  top: 5px;
  margin-right: 5px;
  left: 0;
  border: 1px solid #979797;
  width: 14px;
  height: 14px;
}
.login-form-frame .content-login h4 a {
  color: #373737;
  font-size: 18px;
  font-weight: bold;
}
.login-form-frame .sign-up-frame .form-check {
  padding-left: 0;
}
.login-form-frame .sign-up-frame .checkmark:after {
  content: '';
  position: absolute;
  display: none;
}
.form-check-label {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.form-check-label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
/* Show the checkmark when checked */
.form-check-label input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.form-check-label .checkmark:after {
  left: 3px;
  top: 0px;
  width: 5px;
  height: 10px;
  border: solid #95236c;
  border-width: 0 3px 3px 0;
  /* background-color: #95236c; */
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.form-response {
  text-align: center;
  margin-top: 20px;
}
@media only screen and (max-width: 1024px) {
  .login-form-frame .sign-up-frame {
    width: auto;
  }
  /* .login-form-frame::after {
    content: '';
    background-image: url('../assets/images/bg.png');
    position: absolute;
    right: 0;
    bottom: 0;
    top: auto;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 224px;
    height: 330px;
    z-index: -1;
  } */
}
@media only screen and (max-width: 767px) {
  .coming-soon-frame h4 {
    margin-bottom: 30px;
  }
}
</style>