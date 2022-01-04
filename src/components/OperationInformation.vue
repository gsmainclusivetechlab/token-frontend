<template>
  <div class="wrapper">
    <span>Available Operations:</span>
    <ul v-if="selectedMode === 'SMS'">
      <li>
        <span>Get Token</span> - Write 'GET_TOKEN' on input field. The user will
        receive the message with his token.
      </li>
      <li>
        <span>Delete Token</span> - Write 'DELETE_TOKEN' on input field. The
        user will receive the message saying that his token was deleted.
      </li>
      <li>
        <span>Cash In</span> - Write 'CASH_IN -space- {AMOUNT}' on input field.
        The user will receive the message about the operation being accepted or
        not.
      </li>
      <li>
        <span>Cash Out</span> - Write 'CASH_OUT -space- {AMOUNT}' on input
        field. The user will receive the message about the operation being
        accepted or not.
      </li>
    </ul>
    <ul v-if="selectedMode === 'USSD'">
      <li>
        <span>Get Token</span> - Write short code '*165#' -> 1. The user will
        receive the message with his token.
      </li>
      <li>
        <span>Delete Token</span> - Write short code '*165#' -> 2. The user will
        receive the message saying that his token was deleted.
      </li>
      <li>
        <span>Cash In</span> - Write short code '*165#' -> 3 -> Insert Amount.
        The user will receive the message about the operation being accepted or
        not.
      </li>
      <li>
        <span>Cash Out</span> - Write short code '*165#' -> 4 -> Insert Amount.
        The user will receive the message about the operation being accepted or
        not.
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "OperationInformation",
  props: {
    selectedMode: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 1rem;
  font-size: 0.8rem;
}

.wrapper ul {
  list-style: disc;
}

.wrapper li span {
  font-weight: bold;
}
</style>