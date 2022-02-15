<template>
  <div>
    <h2 class="text-center">Agent / Merchant</h2>
    <div class="d-flex justify-content-center">
      <div class="sign-up-frame">
        <h4>Agent Operation Seetings</h4>
        <form @submit.prevent="processForm">
          <!-- Operation type -->
          <div class="form-group">
            <label for="inputOperation">Operation</label>
            <b-form-select class="form-group" v-model="selectedOperation" :options="operationOptions" id="inputOperation"></b-form-select>
          </div>

          <!-- Token/Phone -->
          <div class="form-group">
            <label for="inputTokenPhone">Customer Token/Phone</label>
            <b-form-input
              class="form-group"
              v-model="customerIdentifier"
              placeholder="Enter Customer Token/Phone"
              id="inputTokenPhone"
              type="text"
              maxlength="50"
            ></b-form-input>
            <span class="error-msg" v-if="errors.inputTokenPhone.length != 0"> {{ errors.inputTokenPhone }}</span>
          </div>

          <!-- Amount -->
          <div class="form-group">
            <label for="inputAmount">Amount</label>
            <currency-input v-model="amount" :options="optionsCurrency" placeholder="Enter Amount" id="inputAmount" />
            <span class="error-msg" v-if="errors.inputAmount.length != 0"> {{ errors.inputAmount }}</span>
          </div>

          <!-- Merchant -->
          <div v-if="selectedOperation == 'merchant-payment'" class="form-group">
            <label for="inputMerchant">Merchant Code</label>
            <b-form-input class="form-group" v-model="merchantCode" placeholder="Enter Merchant Code" id="inputMerchant"></b-form-input>
            <span class="error-msg" v-if="errors.inputMerchant.length != 0"> {{ errors.inputMerchant }}</span>
          </div>

          <a v-if="!loading" class="btn1">
            <input class="btn" type="submit" value="Create" />
          </a>
          <b-spinner style="margin-left: 45%" v-if="loading" label="Spinning"></b-spinner>

          <b-modal v-model="modalShow" hide-footer :title="modalTitle">
            <span>{{ modalMessage }}</span>
          </b-modal>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import CurrencyInput from './CurrencyInput';

export default {
  name: 'AgentConfig',
  components: { CurrencyInput },
  props: {
    selectedSystem: {
      type: String,
      required: true,
    },
    sessionId: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    selectedOperation: 'cash-in',
    operationOptions: [
      { value: 'cash-in', text: 'Cash-In' },
      { value: 'cash-out', text: 'Cash-Out' },
      { value: 'merchant-payment', text: 'Merchant-Payment' },
    ],
    customerIdentifier: null,
    amount: null,
    merchantCode: null,
    errors: {
      inputTokenPhone: '',
      inputAmount: '',
      inputMerchant: '',
    },
    modalShow: false,
    modalTitle: '',
    modalMessage: '',
    loading: false,

    optionsCurrency: {
      locale: 'en-US',
      currency: 'USD',
      currencyDisplay: 'narrowSymbol',
      valueRange: {
        min: 0,
        // max: 500,
      },
      precision: 2,
      hideCurrencySymbolOnFocus: true,
      hideGroupingSeparatorOnFocus: true,
      hideNegligibleDecimalDigitsOnFocus: true,
      autoDecimalDigits: false,
      autoSign: true,
      useGrouping: true,
      accountingSign: false,
    },
  }),
  methods: {
    async processForm(e) {
      try {
        var errorFlag = false;
        if (!this.customerIdentifier) {
          this.errors.inputTokenPhone = 'Customer Token/Phone required.';
          errorFlag = true;
        }

        if (!this.amount) {
          this.errors.inputAmount = 'Amount required.';
          errorFlag = true;
        } else {
          if (this.amount > 500) {
            this.errors.inputAmount = `Amount can't be greater than $500`;
            errorFlag = true;
          }
        }

        if (this.selectedOperation == 'merchant-payment' && !this.merchantCode) {
          this.errors.inputMerchant = 'Merchant Code required.';
          errorFlag = true;
        }

        if (!errorFlag && this.customerIdentifier && this.amount && this.selectedOperation) {
          this.errors = {
            inputTokenPhone: '',
            inputAmount: '',
            inputMerchant: '',
          };

          let postData = {
            identifier: this.customerIdentifier.split(' ').join(''),
            amount: this.amount,
            type: this.selectedOperation,
            system: this.selectedSystem,
            merchantCode: this.merchantCode,
          };

          await this.axios.post(process.env.VUE_APP_PROXY_API_URL + '/operations', postData, {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'sessionId': this.sessionId
            },
          });

          this.modalTitle = 'Success';
          this.modalMessage = 'Operation was created successfully.';
          this.modalShow = true;

          this.customerIdentifier = null;
          this.amount = null;
          this.merchantCode = null;

          this.$root.$emit('showPhoneInterface');
        }
      } catch (err) {
        if (this.axios.isAxiosError(err) && err.response) {
          this.modalTitle = 'Error';
          this.modalMessage = err.response.data.error;
          this.modalShow = true;
        }
      }

      e.preventDefault();
    },
  },
};
</script>

<style lang="scss" scoped></style>
