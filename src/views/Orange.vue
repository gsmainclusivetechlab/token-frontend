<template>
  <div class="home">
    <AppHeader v-bind="props" />

    <div class="login-form-frame">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="content-login">
              <h2>
                User Cases Testing Guide <br />
              </h2>
              <p>This project aims to address the use of voice recognition to access mobile money services through a showcase created by the Inclusive Tech Lab - GSMA and Orange.
                 The in different use cases approached in the show case are: Reset PIN, Merchant Payments, Cash-IN, Cash-Out and Cash-to-Cash.
                 This page was created to be used and a guide to those who are testing the show case. The information shared here brings the different possibilities to test including: different user case flows, different communication channels (e.g. SMS, USSD, QRCode, and IVR Call centre), and specific information necessary to proceed with the tests. </p>
              <h4>
                <p>
                  <span class="phone-call-frame mr-10"
                    ><img
                      src="../assets/images/phone-call-blue.png"
                      class="img-fluid"
                      alt="phone-call-blue"
                    />
                  </span>
                  <b>English (UK): </b><a href="tel:+447888872097">+44 7888872097</a>
                </p>
                <p>
                  <span class="phone-call-frame mr-10"
                    ><img
                      src="../assets/images/phone-call-blue.png"
                      class="img-fluid"
                      alt="phone-call-blue"
                    /> </span
                  ><b>French (FR): </b> <a href="tel:++47401232937">+44 7401232937</a>
                </p>
              </h4>
              <p>
                If you have doubts or you have any suggestion, please contact the
                <a
                  href="https://www.gsma.com/mobilefordevelopment/mobile-money/gsma-inclusive-tech-lab/"
                  target="_blank"
                >
                  Inclusive Tech Lab</a
                >
              </p>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            Sign up on the right side and follow the instructions on the call centre to enrol using your voice print, enabling you to navigate through the use cases and test all the different flows of this guide.
            </br>
            </br>
            <div class="sign-up-frame">
              <h2>Sign up</h2>
              <form @submit.prevent="processForm" method="post">
                <div class="form-group">
                  <label for="inputAddress">Nickname</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Enter nickname"
                    v-model="nickName"
                  />
                  <span class="error-msg" v-if="errors.nickName.length != 0">
                    {{ errors.nickName }}</span
                  >
                </div>
                <div class="form-group">
                  <label for="inputAddress2">Mobile number</label>
                  <vue-tel-input
                    v-model="phone"
                    mode="international"
                    validCharactersOnly
                  ></vue-tel-input>
                  <span
                    class="error-msg"
                    v-if="errors.phone.length != 0 || errors.format.length != 0"
                  >
                    {{ errors.phone }} {{ errors.format }}
                  </span>
                </div>

                <div class="form-group">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                        v-model="termsConditions"
                        true-value="yes"
                        false-value="no"
                      />
                      <span class="checkmark"></span>
                      <a href="./terms-and-condition.pdf" target="_blank"
                        >Accept the terms and conditions</a
                      >
                    </label>
                    <span class="error-msg" v-if="errors.tc.length != 0">
                      {{ errors.tc }}</span
                    >
                  </div>
                </div>

                <a v-if="showSubmit && !loading" href="#" class="btn1">
                  <input class="btn" type="submit" value="Submit Now" />
                </a>
                <b-spinner
                  style="margin-left: 45%"
                  v-if="loading"
                  label="Spinning"
                ></b-spinner>
                <div class="form-response" v-if="gotResponse">
                  <b-alert
                    variant="primary"
                    show
                    v-if="response.data.ResponseCode == 200"
                  >
                    {{ response.data.msg }}</b-alert
                  >
                  <b-alert
                    variant="danger"
                    show
                    v-if="response.data.ResponseCode == 623"
                  >
                    {{ response.data.msg }}</b-alert
                  >
                </div>
              </form>
            </div>            <div>
                    </br> <i> If you want to read more information about the Use Case flows please visit our 
                       <a href="https://docs.biometrics.gsmainclusivetechlab.io/" target="_blank">
                      documentation page.</a> </i>
          </div>
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
                Use Case 01 <br />
                Reset PIN Number
              </h2>
              <p>
                This use case approaches the need of the user to change their PIN number. 
                There are two possibilities where it could occur:
              </p>
              <p> <b> 1. The user lost the PIN number and want to reset it: </b>
                </br> <i> Calling the IVR Call Centre and selecting the option reset PIN. The system will validate the user through voice verification and allows the user to change the PIN number introducing the new 4 digits PIN. </i>
              </p>
              <p> <b> 2. The user knows the pin number and want to change: </b> 
                </br> <i> Calling the IVR Call Centre and selecting the option change PIN. The system will validate the user using the previous PIN and allows the user to change the PIN number introducing the new 4 digits PIN. </i>
                </p> 
              
            </div>
          </b-col>
          <b-col cols="12" xl="6">
            <div class="biometric-img-block">
              <b-row class="justify-content-center align-items-center gutter-20 flex-md-column">
                <b-col cols="12" md="10">
                  <div>
                    <u><b>Using SMS/USSD</b></u>
                    </br>1. Send an SMS message to the call centre number using one of the two options: 
                      </br><b>RESETPIN</b> (SMS message style)
                      </br><b>**42*033</b> (USSD code style)
                    </br>2. Receive an inbound call    
                    </br>3. Authenticate with voice and reset your PIN 
                  </div>
                  </br>
                  <div>
                    <u><b>Calling the Call Centre</b></u>
                    </br>1. Use one of the call centre numbers available for this project.
                    </br>2. Select the option 4 in the main menu
                    </br>3. Insert your previous PIN (1234 for demo purposes)
                    </br>4. Insert your new PIN Number
                  </div>
                  </a>                  
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <div class="about-content-wrapper try-frame">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="img-about-content">
              <img
                src="../assets/images/Guide.png"
                class="img-fluid"
                alt="Guide"
              />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <h2>
                Use Case 02 <br />
                Merchant Payments
            </h2>
            <i>(Use Case under development)</i>
            <p>
              </br>  This use case approaches the merchant payment in different scenarios:
              </br>  1. The user makes the payment calling the call centre, typing the merchant number, amount and proceeding with the payment with voice verification. 
              </br>  2. The user generates a QRCode below, reads with the mobile camera and receives a call to verify the user using voice.
              </br>  3. The User sends an SMS/USSD message containing the merchant number and the payment amount, and requests to proceed with the payment. The user receives a call to verify the user using voice.
            </p>
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
                QR Code <br />
                Generating Merchant Code
              </h2>
              <p>
                The algorithm to generate QR Code automatically in under development. It will be added to the project soon.
              </p>
            </div>
          </b-col>
          <b-col cols="12" xl="6">
            <div class="biometric-img-block">
              <b-row class="justify-content-center align-items-center gutter-20 flex-md-column">
                <b-col cols="12" md="12">
                  <div>
                    QR Code will be generated here
                  </div>
                  <div>
                    Info about the QR Code Will be generated here
                  </div>
                  </a>                  
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <div class="about-content-wrapper try-frame">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="img-about-content">
              <img
                src="../assets/images/Tech-lab.png"
                class="img-fluid"
                alt="Tech-lab"
              />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <h2>
                Use Case 03 <br />
                Cash In, Cash Out, Cash-to-Cash
              </h2>
            <h6>
              This use case is stil under development by the Inclusive Tech Lab team.
            </h6>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import AppHeader from "../components/AppHeader";
import Footer from "../components/layout/Footer";
import { VueTelInput } from "vue-tel-input";
export default {
  name: "Orange",
  components: { AppHeader, Footer, VueTelInput },
  data: () => ({
    props: {
      tittle: "IVR Call Centre - Orange/GSMA Project",
      breadCrumb: {
        tittle: "Orange",
        link: "orange",
      },
    },
    value: "",
    phone: "",
    nickName: "",
    termsConditions: "no",
    errors: {
      format: "",
      nickName: "",
      phone: "",
      tc: "",
    },
    showSubmit: true,
    loading: false,
    gotResponse: false,
    response: {},
  }),
  methods: {
    scrollBottom() {
      window.scrollTo({
        top: 10000,
        left: 0,
        behavior: "smooth",
      });
    },

    processForm(e) {
      this.errors = {
        format: "",
        nickName: "",
        phone: "",
        tc: "",
      };
      this.response = {};
      this.gotResponse = false;
      let noformat = true;
      const number = this.phone.split(" ").join("");
      if (number.length > 17 || number.length < 12) {
        noformat = false;
        this.errors.format = "Enter phone number in correct format.";
      }

      if (
        this.phone &&
        this.nickName &&
        this.termsConditions === "yes" &&
        noformat
      ) {
        this.loading = true;
        let postData = {
          nickName: this.nickName,
          id: number,
        };

        this.axios
          .post(
            "https://emsvmxc4y2.execute-api.eu-west-2.amazonaws.com/dev/en-GB/webSignUpOrange",
            postData,
            {
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }
          )
          .then((res) => {
            this.loading = false;
            this.gotResponse = true;
            this.response = res;
            if (res.ResponseCode == 200) {
              this.showSubmit = false;
            }
          })
          .catch((err) => {
            this.loading = false;
            this.response = res;
          });
        return true;
      }
      if (!this.nickName) {
        this.errors.nickName = "Nick Name required.";
      }

      if (!this.phone) {
        this.errors.phone = "Phone required.";
      }

      if (this.termsConditions === "no") {
        this.errors.tc = "Accept terms and conditions.";
      }

      e.preventDefault();
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
.login-form-frame::before {
  content: "";
  background-image: url("../assets/images/phone-call.png");
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
  content: "";
  background-image: url("../assets/images/bg.png");
  position: absolute;
  right: -10px;
  top: -61px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 391px;
  height: 550px;
  z-index: -1;
}
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
.biometric-content p a:hover,
.biometric-content p a {
  color: #ae52c4;
}
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
  content: "";
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
  .login-form-frame::after {
    content: "";
    background-image: url("../assets/images/bg-try.png");
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
  }
}
@media only screen and (max-width: 767px) {
  .coming-soon-frame h4 {
    margin-bottom: 30px;
  }
}
</style>
