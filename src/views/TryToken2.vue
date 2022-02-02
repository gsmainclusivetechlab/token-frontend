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
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                </p>
                <p>
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
              <h2>
                Virtual Mobile Simulation
              </h2>
              <p>
                Info here
              </p>
            </div>
          </b-col>
          <b-col cols="12" xl="6">
            <div class="biometric-img-block">
              <b-row class="justify-content-center align-items-center gutter-20 flex-md-column">
                <b-col cols="12" md="7">    
                  Are you a mobile operator and have concerns about safety and security of your customers?
                  </br>
                  </br>
                  <div align="right" class="newscase-btn">
                    <a id="show-modal" href="/requestform" class="btn-newscase"
                    >Try Virtual Token Simulation</a
                    >
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
              <h2>
                Live Token Showcase
              </h2>
              <h4> Do a real simulation using your own mobile phone </h4> 
              </br> 
              <p>
                If you want to use the Live version, you need to sign up to be able to receive messages from the system. 
                All the data used during the tests is deleted automatically after you finish the tests or refresh the page.</p>

              <p>To test the Use Cases, you can follow the instructions present <a href="/howitworks" target="_blank"> here</a>.</p>

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



<!-- ----------------------------------------------------
ALTAR MUST CLEAN THIS SCRIPT IF PROCEED WITH THIS PAGE
----------------------------------------------------  -->

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
import OperationInformation from '../components/OperationInformation.vue';
import DeleteCustomer from '../components/DeleteCustomer.vue';
export default {
  name: 'TryToken',
  components: {
    AppHeader,
    Footer,
    VueTelInput,
    SignUpCustomer,
    AgentConfig,
    CustomerConfig,
    Phone,
    AgentTables,
    OperationInformation,
    DeleteCustomer,
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
