<template>
  <div class="d-flex justify-content-center">
    <div class="sign-up-frame">
      <h2>Sign Up</h2>
      <form @submit.prevent="processForm" method="post">
        <div v-if="!insertOTP" class="form-group">
          <label for="inputNickName">Nick Name</label>
          <input type="text" class="form-control" id="inputNickName" placeholder="Enter Nick Name" v-model="nickName" maxlength="50" />
          <span class="error-msg" v-if="errors.nickName.length != 0"> {{ errors.nickName }}</span>
        </div>
        <div v-if="!insertOTP" class="form-group">
          <label for="inputMobileNumber">Mobile Number</label>
          <vue-tel-input v-model="phone" mode="international" :inputOptions="optionsTelInput" validCharactersOnly></vue-tel-input>
          <span class="error-msg" v-if="errors.phone.length != 0 || errors.format.length != 0">
            {{ errors.phone }} {{ errors.format }}
          </span>
        </div>

        <div v-if="!insertOTP" class="form-group">
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" id="gridCheck" v-model="termsConditions" true-value="yes" false-value="no" />
              <span class="checkmark"></span>
              <!-- Change the pdf -->
              <a href="./terms-and-condition.pdf" target="_blank">Accept the terms and conditions</a>
            </label>
            <span class="error-msg" v-if="errors.tc.length != 0"> {{ errors.tc }}</span>
          </div>
        </div>

        <div v-if="insertOTP" class="form-group">
          <label for="inputOTP">Hello {{ this.nickNameToDisplay }},<br>Please insert here the access code you received on your phone.</label>
          <input type="text" class="form-control" id="inputOTP" placeholder="Enter Access Code" v-model="otp" maxlength="4" />
          <span class="error-msg" v-if="errors.otp.length != 0"> {{ errors.otp }}</span>
        </div>

        <a v-if="!loading" href="#" class="btn1">
          <input class="btn" type="submit" value="Try Live Token Simulation" />
        </a>
        <b-spinner style="margin-left: 45%" v-if="loading" label="Spinning"></b-spinner>

        <b-modal v-model="modalShow" hide-footer :title="modalTitle">
          <span>{{ modalMessage }}</span>
        </b-modal>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);
import { VueTelInput } from 'vue-tel-input';
export default {
  name: 'SignUpCustomer',
  components: { VueTelInput },
  data: () => ({
    phone: '',
    nickName: '',
    termsConditions: 'no',
    otp: '',
    errors: {
      format: '',
      nickName: '',
      phone: '',
      tc: '',
      otp: '',
    },
    loading: false,
    optionsTelInput: { placeholder: 'Enter Mobile Number' },

    modalShow: false,
    modalTitle: '',
    modalMessage: '',

    insertOTP: false,
    nickNameToDisplay: ''
  }),
  methods: {
    processForm(e) {
      this.errors = {
        format: '',
        nickName: '',
        phone: '',
        tc: '',
        otp: '',
      };

      if (this.insertOTP) {
        this.processOTPValidation();
      } else {
        this.processSignUp();
      }

      e.preventDefault();
    },

    processSignUp() {
      let noformat = true;
      const number = this.phone.split(' ').join('');
      if (number.length > 17 || number.length < 12) {
        noformat = false;
        this.errors.format = 'Enter mobile number in correct format.';
      }

      if (this.phone && this.nickName && this.termsConditions === 'yes' && noformat) {
        this.loading = true;

        let postData = {
          nickName: this.nickName,
          phoneNumber: number,
        };

        this.axios
          .post(`${process.env.VUE_APP_PROXY_API_URL}/accounts`, postData, {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          })
          .then((res) => {
            this.loading = false;

            this.phone = '';
            this.nickNameToDisplay = this.nickName;
            this.nickName = '';
            this.termsConditions = 'no';

            this.insertOTP = true;
          })
          .catch((err) => {
            this.loading = false;
            if (this.axios.isAxiosError(err) && err.response) {
              this.modalTitle = 'Error';
              this.modalMessage = err.response.data.error;
              this.modalShow = true;
            }
          });
        return true;
      }
      if (!this.nickName) {
        this.errors.nickName = 'Nick Name required.';
      }

      if (!this.phone) {
        this.errors.phone = 'Mobile Phone required.';
      }

      if (this.termsConditions === 'no') {
        this.errors.tc = 'Accept terms and conditions.';
      }
    },

    processOTPValidation() {
      if (!this.otp) {
        this.errors.otp = 'Access Code required.';
      } else {
        this.axios
          .get(`${process.env.VUE_APP_PROXY_API_URL}/accounts/${this.otp}/valid`, {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          })
          .then((res) => {
            this.loading = false;
            this.$router.push({ path: `/trytoken/live/${this.otp}` });
          })
          .catch((err) => {
            this.loading = false;
            if (this.axios.isAxiosError(err) && err.response) {
              this.modalTitle = 'Error';
              this.modalMessage = err.response.data.error;
              this.modalShow = true;
            }
          });
      }
    },
  },
};
</script>
<style src="vue-tel-input/dist/vue-tel-input.css"></style>
<style scoped>
.btn {
  width: 100%;
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
.link-color:hover {
  color: #ae52c4;
  cursor: pointer;
}
.sign-up-frame p {
  font-size: 14px;
}

.sign-up-frame h2,
.sign-up-frame h4,
.sign-up-frame p {
  text-align: center;
}

.sign-up-frame {
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
.sign-up-frame .checkmark {
  position: absolute;
  top: 5px;
  margin-right: 5px;
  left: 0;
  border: 1px solid #979797;
  width: 14px;
  height: 14px;
}
.content-login h4 a {
  color: #373737;
  font-size: 18px;
  font-weight: bold;
}
.sign-up-frame .form-check {
  padding-left: 0;
}
.sign-up-frame .checkmark:after {
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
</style>
