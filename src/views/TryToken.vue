<template>
  <div class="home">
    <AppHeader v-bind="props" />
    <div class="login-form-frame">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="content-login">
              <h2>
                Sign up to test our <br />
                IVR Call Centre
              </h2>
              <p>The call centre is currently operating using two numbers:</p>
              <h4>
                <p>
                  <span class="phone-call-frame mr-10"
                    ><img
                      src="../assets/images/phone-call-blue.png"
                      class="img-fluid"
                      alt="phone-call-blue"
                    />
                  </span>
                  <b>English (UK): </b
                  ><a href="tel:+441904803378">+44 1904 803378</a> /
                  <a href="tel:+17372450200">+1 737 245 0200</a>
                </p>
                <p>
                  <span class="phone-call-frame mr-10"
                    ><img
                      src="../assets/images/phone-call-blue.png"
                      class="img-fluid"
                      alt="phone-call-blue"
                    /> </span
                  ><b>French (FR): </b>
                  <a href="tel:+447723432543">+44 7723 432543</a>
                </p>
                <p>
                  <span class="phone-call-frame mr-10"
                    ><img
                      src="../assets/images/phone-call-blue.png"
                      class="img-fluid"
                      alt="phone-call-blue"
                    /> </span
                  ><b>Urdu (PK): </b>
                  <a href="tel:+441485500402">+44 1485 500402</a>
                </p>
              </h4>
              <p>
                Follow the instructions to enrol using your voice print,
                enabling you to navigate through the use cases.
              </p>
              <p>
                If you would like to suggest a new use case to meet your
                business needs, contact the
                <a
                  href="https://www.gsma.com/mobilefordevelopment/mobile-money/gsma-inclusive-tech-lab/"
                  target="_blank"
                >
                  Inclusive Tech Lab</a
                >
                or
                <a @click="scrollBottom" class="link-color">
                  suggest a new use case.</a
                >
              </p>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="sign-up-frame">
              <h2>Customer</h2>
              <form @submit.prevent="processForm">
                <div class="form-group">
                  <b-form-group
                    :disabled="formDisabled"
                    v-slot="{ ariaDescribedby }"
                  >
                    <b-form-radio
                      v-model="selectedMode"
                      :aria-describedby="ariaDescribedby"
                      name="some-radios"
                      value="SMS"
                      >SMS Mode</b-form-radio
                    >
                    <b-form-radio
                      v-model="selectedMode"
                      :aria-describedby="ariaDescribedby"
                      name="some-radios"
                      value="USSD"
                      >USSD Mode</b-form-radio
                    >
                  </b-form-group>
                </div>
                <div class="form-group">
                  <label for="inputAddress2">Mobile number</label>
                  <vue-tel-input
                    v-model="phone"
                    mode="international"
                    validCharactersOnly
                    :disabled="formDisabled"
                  ></vue-tel-input>
                  <span
                    class="error-msg"
                    v-if="errors.phone.length != 0 || errors.format.length != 0"
                  >
                    {{ errors.phone }} {{ errors.format }}
                  </span>
                </div>
                <a href="#" class="btn1">
                  <input class="btn" type="submit" :value="formButtonLabel()" />
                </a>

                <!-- <b-spinner
                  style="margin-left: 45%"
                  v-if="loading"
                  label="Spinning"
                ></b-spinner> !-->
              </form>

              <form
                v-if="showInterectiveTerminal"
                @submit.prevent="processTerminal"
                method="post"
                class="mt-3"
              >
                <div class="terminal">
                  <template v-for="question in terminalQuestions">
                    <div :key="question.key">
                      <span class="question">{{ question.question }} </span>
                      <span class="answer">{{ question.answer }}</span>
                    </div>
                  </template>
                </div>

                <div class="form-group">
                  <textarea
                    type="text"
                    class="form-control"
                    id="inputTextarea"
                    v-model="terminalInputText"
                  />
                  <span
                    class="error-msg"
                    v-if="errors.terminalInputText.length != 0"
                  >
                    {{ errors.terminalInputText }}</span
                  >
                </div>

                <a href="#" class="btn1">
                  <input class="btn" type="submit" value="Send" />
                </a>
              </form>
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
import "dotenv/config";

export default {
  name: "TryToken",
  components: { AppHeader, Footer, VueTelInput },
  data: () => ({
    props: {
      tittle: "EXPERIENCE THE TOKEN SHOWCASE",
      breadCrumb: {
        tittle: "Try Token",
        link: "trytoken",
      },
    },
    phone: "",
    errors: {
      format: "",
      phone: "",
      terminalInputText: "",
    },
    showSubmit: true,
    loading: false,
    formDisabled: false,
    showInterectiveTerminal: false,
    selectedMode: "SMS",
    terminalInputText: "",
    terminalQuestions: [
      { key: 1, question: "What's the receiving phone number?", answer: "" },
    ],
    actualQuestionIndex: 0,
    postObjectSMS: {
      senderPhoneNumber: "",
      receivingPhoneNumber: "",
      text: "",
    },
    postObjectUSSD: {
      phoneNumber: "",
      sessionId: "123",
      serviceCode: "123",
      text: "",
    },
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
      if (this.formDisabled) {
        this.resetTerminalProperties();
        this.formDisabled = false;
      } else {
        this.resetErrors();

        let noformat = true;
        const number = this.phone.split(" ").join("");
        if (number.length > 17 || number.length < 12) {
          noformat = false;
          this.errors.format = "Enter phone number in correct format.";
        }

        if (this.phone && noformat) {
          switch (this.selectedMode) {
            case "SMS":
              this.postObjectSMS.senderPhoneNumber = this.phone;
              break;
            case "USSD":
              break;
            default:
              break;
          }

          this.showInterectiveTerminal = true;
          this.formDisabled = true;
        }

        if (!this.phone) {
          this.errors.phone = "Phone required.";
        }
      }

      e.preventDefault();
    },

    processTerminal(e) {
      this.resetErrors();

      if (this.terminalInputText === "") {
        this.errors.terminalInputText = "Write something.";
        return;
      }

      switch (this.selectedMode) {
        case "SMS":
          this.processSMSMode();
          break;
        case "USSD":
          this.processUSSDMode();
          break;
        default:
          break;
      }

      e.preventDefault();
    },

    async processSMSMode() {
      let response = null;
      switch (this.actualQuestionIndex) {
        case 0:
          this.postObjectSMS.receivingPhoneNumber = this.terminalInputText;
          this.addAnswerToQuestion(this.terminalInputText);
          this.createNewQuestion("Enter the text:");
          break;
        case 1:
          this.postObjectSMS.text = this.terminalInputText;

          console.log(process.env.PROXY_WEB_HOOK_URL);

          response = await this.axiosPost(
            process.env.VUE_APP_PROXY_WEBHOOK_URL + "/sms-gateway",
            this.postObjectSMS
          );

          if (response && response.data) {
            this.addAnswerToQuestion(this.terminalInputText);
            this.createNewQuestion(response.data);
          }

          break;
        default:
          break;
      }
    },

    async processUSSDMode() {
      let response = null;

      switch (this.actualQuestionIndex) {
        case 0:
          this.postObjectUSSD.phoneNumber = this.terminalInputText;

          response = await this.axiosPost(
            process.env.VUE_APP_PROXY_WEBHOOK_URL + "/ussd-gateway",
            this.postObjectUSSD
          );

          if (response && response.data) {
            this.addAnswerToQuestion(this.terminalInputText);
            this.createNewQuestion(response.data);
          }

          break;
        case 1:
          this.postObjectUSSD.text = this.terminalInputText;

          response = await this.axiosPost(
            process.env.VUE_APP_PROXY_WEBHOOK_URL + "/ussd-gateway",
            this.postObjectUSSD
          );

          if (response && response.data) {
            this.addAnswerToQuestion(this.terminalInputText);
            this.createNewQuestion(response.data);
          }
          break;
        default:
          break;
      }
    },

    formButtonLabel() {
      return this.formDisabled ? "Stop" : "Start";
    },

    resetTerminalProperties() {
      this.showInterectiveTerminal = false;
      this.terminalInputText = "";
      this.terminalQuestions = [
        { key: 1, question: "What's the receiving phone number?", answer: "" },
      ];
      this.actualQuestionIndex = 0;

      this.postObjectSMS = {
        senderPhoneNumber: "",
        receivingPhoneNumber: "",
        text: "",
      };

      this.postObjectUSSD = {
        phoneNumber: "",
        sessionId: "123",
        serviceCode: "123",
        text: "",
      };
    },

    resetErrors() {
      this.errors = {
        format: "",
        phone: "",
        terminalInputText: "",
      };
    },

    async axiosPost(url, objectToSend) {
      let response = await this.axios.post(url, objectToSend, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      return response;
    },

    addAnswerToQuestion(answer) {
      this.terminalQuestions[this.actualQuestionIndex].answer = answer;
    },

    createNewQuestion(newQuestion) {
      this.actualQuestionIndex += 1;
      this.terminalQuestions.push({
        key: this.actualQuestionIndex + 1,
        question: newQuestion,
        answer: "",
      });
      this.terminalInputText = "";
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

.terminal {
  width: 100%;
  min-height: 5rem;
  background: #373737;
  padding: 0.375rem 0.75rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
}

.terminal span {
  word-break: break-all;
}

.terminal .question {
  color: greenyellow;
}

.terminal .answer {
  color: white;
}
</style>
