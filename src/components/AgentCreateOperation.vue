<template>
  <div class="sign-up-frame">
    <h2>Create Operation</h2>
    <form @submit.prevent="processForm">
      <!-- Operation type -->
      <div class="form-group">
        <label for="inputOperation">Operation</label>
        <b-form-select
          class="form-group"
          v-model="selectedOperation"
          :options="operationOptions"
          id="inputOperation"
        ></b-form-select>
      </div>

      <!-- Token -->
      <div class="form-group">
        <label for="inputToken">Customer Token</label>
        <b-form-input
          class="form-group"
          v-model="customerToken"
          placeholder="Enter customer token"
          id="inputToken"
        ></b-form-input>
        <span class="error-msg" v-if="errors.inputToken.length != 0">
          {{ errors.inputToken }}</span
        >
      </div>

      <!-- Amount -->
      <div class="form-group">
        <label for="inputAmount">Amount</label>
        <b-form-input
          class="form-group"
          v-model="amount"
          placeholder="Enter amount"
          id="inputAmount"
        ></b-form-input>
        <span class="error-msg" v-if="errors.inputAmount.length != 0">
          {{ errors.inputAmount }}</span
        >
      </div>

      <a href="#" class="btn1">
        <input class="btn" type="submit" value="Create" />
      </a>

      <b-modal v-model="modalShow" hide-footer title="Error">
        <span>{{ errorMessage }}</span>
      </b-modal>
    </form>
  </div>
</template>

<script>
export default {
  name: "AgentCreateOperation",
  props: {
    selectedSystem: {
      type: String,
      required: true,
    }
  },
  data: () => ({
    selectedOperation: "cash-in",
    operationOptions: [
      { value: "cash-in", text: "Cash-In" },
      { value: "cash-out", text: "Cash-Out" },
    ],
    customerToken: null,
    amount: null,
    errors: {
      inputToken: "",
      inputAmount: "",
    },
    errorMessage: "",
    modalShow: false,
  }),
  methods: {
    async processForm(e) {
      try {
        if (!this.customerToken) {
          this.errors.inputToken = "Customer Token required.";
        }

        if (!this.amount) {
          this.errors.inputAmount = "Amount required.";
        }

        if (this.customerToken && this.amount && this.selectedOperation) {
          this.errors = {
            inputToken: "",
            inputAmount: "",
          };

          await this.axios.get(
            process.env.VUE_APP_PROXY_API_URL + "/operations/account-info",
            {
              params: {
                token: this.customerToken,
                amount: this.amount,
                type: this.selectedOperation,
                system: this.selectedSystem
              },
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }
          );

          this.customerToken = "";
          this.amount = "";
          this.selectedOperation = "cash-in";

          this.$root.$emit("createOperation");
        }
      } catch (err) {
        if (this.axios.isAxiosError(err) && err.response) {
          this.errorMessage = err.response.data.error;
          this.modalShow = true;
        }
      }

      e.preventDefault();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>