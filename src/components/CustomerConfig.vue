<template>
  <div>
    <h2 class="text-center">Customer</h2>
    <div class="d-flex justify-content-center">
      <div class="sign-up-frame">
        <h4>Customer Settings</h4>
        <form @submit.prevent="processForm">
          <!-- System radio button -->
          <b-form-group :disabled="formDisabled" v-slot="{ ariaDescribedby }">
            <b-form-radio-group
              v-model="selectedSystem"
              :options="systemOptions"
              :aria-describedby="ariaDescribedby"
              name="radio-inline-1"
            ></b-form-radio-group>
          </b-form-group>

          <!-- Mode radio button -->
          <div class="form-group">
            <b-form-group :disabled="formDisabled" label="Choose mode:" v-slot="{ ariaDescribedby }">
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
            <vue-tel-input v-model="phone" validCharactersOnly :disabled="true"></vue-tel-input>
            <span class="error-msg" v-if="errors.phone.length != 0 || errors.format.length != 0">
              {{ errors.phone }} {{ errors.format }}
            </span>
          </div>
          <a v-if="selectedSystem == 'mock'" href="#" class="btn1">
            <input class="btn" type="submit" :value="formButtonLabel()" />
          </a>
        </form>

        <div v-if="selectedSystem == 'live'">
          <span v-if="selectedMode == 'SMS'" class="font-weight-bold">Please send an SMS to +447401232937</span>
          <span v-if="selectedMode == 'USSD'" class="font-weight-bold">Please send an SMS to +447401232937</span>
        </div>

        <div class="mt-2" v-if="selectedSystem == 'mock' && !formDisabled">
          <span><i>When using the Mock mode you need to press "Start" to initiate the mobile interface in this page.</i></span>
        </div>
      </div>
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
  name: 'CustomerConfig',
  components: {
    VueTelInput,
  },
  props: {
    selectedSystemParent: {
      type: String,
      required: true,
    },
    selectedModeParent: {
      type: String,
      required: true,
    },
    phoneParent: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    selectedSystem: null,
    selectedMode: null,
    phone: null,
    errors: {
      format: '',
      phone: '',
    },
    loading: false,
    formDisabled: false,
    systemOptions: [
      { text: 'Mock', value: 'mock' },
      { text: 'LIVE', value: 'live' },
    ],
    modeOptions: [
      { text: 'SMS Mode', value: 'SMS' },
      { text: 'USSD Mode', value: 'USSD' },
    ],
  }),
  created() {
    this.selectedSystem = this.selectedSystemParent;
    this.selectedMode = this.selectedModeParent;
    this.phone = this.phoneParent;
  },
  mounted() {
    this.$root.$on('showPhoneInterface', () => {
      if (this.selectedSystem === 'mock' && !this.formDisabled) {
        this.formDisabled = true;
        this.$emit('emitShowPhoneInterface', this.formDisabled);
      }
    });
  },
  watch: {
    selectedSystem: function (newSelectedSystem, oldSelectedSystem) {
      switch (newSelectedSystem) {
        case 'mock':
          break;
        case 'live':
          this.formDisabled = false;
          break;
        default:
          break;
      }
      this.$emit('selectedSystemChild', newSelectedSystem);
    },

    selectedMode: function (newSelectedMode, oldSelectedMode) {
      this.$emit('selectedModeChild', newSelectedMode);
    },
  },
  methods: {
    processForm(e) {
      this.formDisabled = !this.formDisabled;
      this.$emit('emitShowPhoneInterface', this.formDisabled);

      e.preventDefault();
    },

    formButtonLabel() {
      return this.formDisabled ? 'Stop' : 'Start';
    },
  },
};
</script>
<style src="vue-tel-input/dist/vue-tel-input.css"></style>
<style></style>
