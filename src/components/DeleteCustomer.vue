<template>
  <div class="d-flex justify-content-center">
    <a class="btn1">
      <input class="btn" type="submit" @click="openDeleteModal()" value="Delete Account" />
    </a>

    <b-modal v-model="modalDeleteShow" hide-footer :title="modalDeleteTitle">
      <form @submit.prevent="processForm" method="post">
        <div class="form-group">
          <label for="inputPhone">Mobile Number</label>
          <vue-tel-input v-model="phone" mode="international" :inputOptions="optionsTelInput" validCharactersOnly></vue-tel-input>
          <span class="error-msg" v-if="errors.phone.length != 0 || errors.format.length != 0">
            {{ errors.phone }} {{ errors.format }}
          </span>

          <a v-if="!loading" class="btn1">
            <input class="btn w-100 mt-3" type="submit" value="Confirm" />
          </a>

          <b-spinner style="margin-left: 45%" v-if="loading" label="Spinning"></b-spinner>
        </div>
      </form>
    </b-modal>

    <b-modal v-model="modalInformationShow" hide-footer :title="modalInformationTitle">
      <span>{{ modalInformationMessage }}</span>
    </b-modal>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);
import { VueTelInput } from 'vue-tel-input';
export default {
  name: 'DeleteCustomer',
  components: { VueTelInput },
  data: () => ({
    phone: '',
    errors: {
      format: '',
      phone: '',
    },
    loading: false,
    optionsTelInput: { placeholder: 'Enter Mobile Number' },
    modalDeleteShow: false,
    modalDeleteTitle: 'Delete Account',

    modalInformationShow: false,
    modalInformationTitle: '',
    modalInformationMessage: '',
  }),
  methods: {
    openDeleteModal() {
      this.phone = '';
      this.errors = {
        format: '',
        phone: '',
      };
      this.modalDeleteShow = true;
    },

    processForm(e) {
      this.errors = {
        format: '',
        phone: '',
      };
      let noformat = true;

      if (!this.phone) {
        this.errors.phone = 'Mobile Phone required.';
      }

      const number = this.phone.split(' ').join('');
      if (this.phone && (number.length > 17 || number.length < 12)) {
        noformat = false;
        this.errors.format = 'Enter mobile number in correct format.';
      }

      if (this.phone && noformat) {
        this.loading = true;

        this.axios
          .delete(`${process.env.VUE_APP_PROXY_API_URL}/accounts/${number}`, {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          })
          .then((res) => {
            this.loading = false;

            this.modalDeleteShow = false;
            this.phone = '';

            this.modalInformationTitle = 'Success';
            this.modalInformationMessage = 'Account deleted.';
            this.modalInformationShow = true;
          })
          .catch((err) => {
            this.loading = false;
            if (this.axios.isAxiosError(err) && err.response) {
              this.modalInformationTitle = 'Error';
              this.modalInformationMessage = err.response.data.error;
              this.modalInformationShow = true;
            }
          });
        return true;
      }

      e.preventDefault();
    },
  },
};
</script>
<style src="vue-tel-input/dist/vue-tel-input.css"></style>
<style>
</style>
