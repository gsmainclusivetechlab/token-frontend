<template>
  <div class="d-flex justify-content-center">
    <div class="sign-up-frame">
      <h2>Sign Up</h2>
      <form @submit.prevent="processForm" method="post">
        <div class="form-group">
          <label for="inputAddress">Nick Name</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="Enter Nick Name" v-model="nickName" maxlength="50" />
          <span class="error-msg" v-if="errors.nickName.length != 0"> {{ errors.nickName }}</span>
        </div>
        <div class="form-group">
          <label for="inputAddress2">Mobile Number</label>
          <vue-tel-input v-model="phone" mode="international" :inputOptions="optionsTelInput" validCharactersOnly></vue-tel-input>
          <span class="error-msg" v-if="errors.phone.length != 0 || errors.format.length != 0">
            {{ errors.phone }} {{ errors.format }}
          </span>
        </div>

        <div class="form-group">
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

        <a v-if="!loading" href="#" class="btn1">
          <input class="btn" type="submit" value="Submit Now" />
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
    errors: {
      format: '',
      nickName: '',
      phone: '',
      tc: '',
    },
    loading: false,
    optionsTelInput: { placeholder: 'Enter Mobile Number' },
    modalShow: false,
    modalTitle: '',
    modalMessage: '',
  }),
  methods: {
    processForm(e) {
      this.errors = {
        format: '',
        nickName: '',
        phone: '',
        tc: '',
      };
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
          .then(res => {
            this.loading = false;
            this.modalTitle = 'Success';
            this.modalMessage = 'Sign up was successful.';
            this.modalShow = true;

            this.phone = '';
            this.nickName = '';
            this.termsConditions = 'no';
          })
          .catch(err => {
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

      e.preventDefault();
    },
  },
};
</script>
<style src="vue-tel-input/dist/vue-tel-input.css"></style>
<style></style>
