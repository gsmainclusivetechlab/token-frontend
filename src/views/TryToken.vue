<template>
  <div class="home">
    <AppHeader v-bind="props" />
    <div class="login-form-frame">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6">
            <Agent :selectedSystem="selectedSystem" />
          </div>
          <div class="col-12 col-lg-6">
            <div class="sign-up-frame">
              <h2>Customer</h2>
              <form @submit.prevent="processForm">
                <!-- System radio button -->
                <b-form-group
                  :disabled="formDisabled"
                  v-slot="{ ariaDescribedby }"
                >
                  <b-form-radio-group
                    v-model="selectedSystem"
                    :options="systemOptions"
                    :aria-describedby="ariaDescribedby"
                    name="radio-inline-1"
                  ></b-form-radio-group>
                </b-form-group>

                <!-- Mode radio button -->
                <div class="form-group">
                  <b-form-group
                    :disabled="formDisabled"
                    label="Choose mode:"
                    v-slot="{ ariaDescribedby }"
                  >
                    <b-form-radio-group
                      v-model="selectedMode"
                      :options="modeOptions"
                      :aria-describedby="ariaDescribedby"
                      name="radio-inline-2"
                    ></b-form-radio-group>
                  </b-form-group>
                </div>

                <div v-if="selectedSystem == 'mock'" class="form-group">
                  <label for="inputAddress2">Mobile number</label>
                  <vue-tel-input
                    v-model="phone"
                    :defaultCountry="'GH'"
                    validCharactersOnly
                    :disabled="true"
                  ></vue-tel-input>
                  <span
                    class="error-msg"
                    v-if="errors.phone.length != 0 || errors.format.length != 0"
                  >
                    {{ errors.phone }} {{ errors.format }}
                  </span>
                </div>
                <a v-if="selectedSystem == 'mock'" href="#" class="btn1">
                  <input class="btn" type="submit" :value="formButtonLabel()" />
                </a>
              </form>

              <div v-if="selectedSystem == 'live'">
                <span v-if="selectedMode == 'SMS'" class="font-weight-bold"
                  >Please send an SMS to +447401232937</span
                >
                <span v-if="selectedMode == 'USSD'" class="font-weight-bold"
                  >Please send an SMS to +447401232937</span
                >
              </div>
            </div>
            <div>
              <OperationInformation
                v-if="showOperationInformation"
                :selectedSystem="selectedSystem"
                :selectedMode="selectedMode"
              />
              <Phone
                v-if="showPhoneInterface"
                :selectedSystem="selectedSystem"
                :selectedMode="selectedMode"
                :phone="phone"
              />
            </div>
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
import Phone from "../components/Phone.vue";
import OperationInformation from "../components/OperationInformation.vue";
import Agent from "../components/Agent.vue";

export default {
  name: "TryToken",
  components: {
    AppHeader,
    Footer,
    VueTelInput,
    Phone,
    OperationInformation,
    Agent,
  },
  data: () => ({
    props: {
      tittle: "EXPERIENCE THE TOKEN SHOWCASE",
      breadCrumb: {
        tittle: "Try Token",
        link: "trytoken",
      },
    },
    phone: "+233207212676",
    errors: {
      format: "",
      phone: "",
    },
    loading: false,
    formDisabled: false,
    showPhoneInterface: false,
    showOperationInformation: false,
    selectedSystem: "mock",
    systemOptions: [
      { text: "Mock", value: "mock" },
      { text: "LIVE", value: "live" },
    ],
    selectedMode: "SMS",
    modeOptions: [
      { text: "SMS Mode", value: "SMS" },
      { text: "USSD Mode", value: "USSD" },
    ],
  }),
  mounted() {
    this.$root.$on("showPhoneInterface", () => {
      if (this.selectedSystem === "mock" && !this.formDisabled) {
        this.showPhoneInterface = true;
        this.showOperationInformation = true;
        this.formDisabled = true;
      }
    });
  },
  watch: {
    selectedSystem: function (newSelectedSystem, oldSelectedSystem) {
      switch (newSelectedSystem) {
        case "mock":
          this.showOperationInformation = false;
          break;
        case "live":
          this.selectedMode = "SMS";
          this.showPhoneInterface = false;
          this.showOperationInformation = true;
          this.formDisabled = false;
          break;
        default:
          break;
      }
    },
  },
  methods: {
    scrollBottom() {
      window.scrollTo({
        top: 10000,
        left: 0,
        behavior: "smooth",
      });
    },

    processForm(e) {
      if (this.formDisabled) {
        this.showPhoneInterface = false;
        this.showOperationInformation = false;
        this.formDisabled = false;
      } else {
        this.errors = {
          format: "",
          phone: "",
        };

        let noformat = true;
        const number = this.phone.split(" ").join("");
        if (number.length > 17 || number.length < 12) {
          noformat = false;
          this.errors.format = "Enter phone number in correct format.";
        }

        if (this.phone && noformat) {
          this.showPhoneInterface = true;
          this.showOperationInformation = true;
          this.formDisabled = true;
        }

        if (!this.phone) {
          this.errors.phone = "Phone required.";
        }
      }

      e.preventDefault();
    },

    formButtonLabel() {
      return this.formDisabled ? "Stop" : "Start";
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
    background-image: url("../assets/images/bg.png");
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
