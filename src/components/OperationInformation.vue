<template>
  <div class="wrapper">
    <div class="text-center">
      <span class="font-weight-bold">DEFAULT PIN: 1234</span>
      <br>
      <span class="font-weight-bold">MERCHANT AVAILABLE: 4321</span>
    </div>

    <div>
      <span>Live - SMS Mode</span>
      <ul>
        <li
          v-for="item in getInformation('live', 'SMS')"
          :key="item.title"
        >
          <span class="font-weight-bold">{{ item.title }}</span
          ><span>{{ item.description }}</span>
        </li>
      </ul>

      <span>Live - USSD Mode</span>
      <ul>
        <li
          v-for="item in getInformation('live', 'USSD')"
          :key="item.title"
        >
          <span class="font-weight-bold">{{ item.title }}</span
          ><span>{{ item.description }}</span>
        </li>
      </ul>

      <span>Mock - SMS Mode</span>
      <ul>
        <li
          v-for="item in getInformation('mock', 'SMS')"
          :key="item.title"
        >
          <span class="font-weight-bold">{{ item.title }}</span
          ><span>{{ item.description }}</span>
        </li>
      </ul>

      <span>Mock - USSD Mode</span>
      <ul>
        <li
          v-for="item in getInformation('mock', 'USSD')"
          :key="item.title"
        >
          <span class="font-weight-bold">{{ item.title }}</span
          ><span>{{ item.description }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "OperationInformation",
  props: {
    selectedSystem: {
      type: String,
      required: true,
    },
    selectedMode: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    informations: [
      {
        system: ["mock", "live"],
        mode: "SMS",
        title: "Get Token",
        description:
          " - Write 'GET_TOKEN' on input field. The user will receive the message with his token",
      },
      {
        system: ["mock", "live"],
        mode: "SMS",
        title: "Delete Token",
        description:
          " - Write 'DELETE_TOKEN' on input field. The user will receive the message saying that his token was deleted.",
      },
      {
        system: ["mock", "live"],
        mode: "SMS",
        title: "Cash In",
        description:
          " - Write 'CASH_IN -space- {AMOUNT}' on input field. If the agent accepts the operation, the user will receive a message asking for the pin, otherwise he will receive a message saying that the operation was rejected.",
      },
      {
        system: ["mock", "live"],
        mode: "SMS",
        title: "Cash Out",
        description:
          " - Write 'CASH_OUT -space- {AMOUNT}' on input field. If the agent accepts the operation, the user will receive a message asking for the pin, otherwise he will receive a message saying that the operation was rejected.",
      },
      {
        system: ["mock", "live"],
        mode: "SMS",
        title: "PIN",
        description:
          " - Write 'PIN -space- 1234' on input field. This is the last step when the user have a pending transaction.",
      },
      {
        system: ["mock", "live"],
        mode: "SMS",
        title: "Payment",
        description:
          " - Write 'PAYMENT -space- {MERCHANT_CODE} -space- {AMOUNT}' on input field. The user will receive a message asking for the pin.",
      },

      {
        system: ["mock"],
        mode: "USSD",
        title: "Get Token",
        description:
          " - Write short code '*165#' -> 1. The user will receive the message with his token.",
      },
      {
        system: ["mock"],
        mode: "USSD",
        title: "Delete Token",
        description:
          " - Write short code '*165#' -> 2. The user will receive the message saying that his token was deleted.",
      },
      {
        system: ["mock"],
        mode: "USSD",
        title: "Cash In",
        description:
          " - Write short code '*165#' -> 3 -> Insert Amount. If the agent accepts the operation, the user will receive a message asking for the pin, otherwise he will receive a message saying that the operation was rejected.",
      },
      {
        system: ["mock"],
        mode: "USSD",
        title: "Cash Out",
        description:
          " - Write short code '*165#' -> 4 -> Insert Amount. If the agent accepts the operation, the user will receive a message asking for the pin, otherwise he will receive a message saying that the operation was rejected.",
      },
      {
        system: ["mock"],
        mode: "USSD",
        title: "Payment",
        description:
          " - Write short code '*165#' -> 5 -> Insert Merchant Code -> Insert Amount. The user will receive a message asking for the pin.",
      },

      {
        system: ["live"],
        mode: "USSD",
        title: "Get Token",
        description:
          " - Send the following message - '*165#*1' to the number above. The user will receive the message with his token.",
      },
      {
        system: ["live"],
        mode: "USSD",
        title: "Delete Token",
        description:
          " - Send the following message - '*165#*2' to the number above. The user will receive the message saying that his token was deleted.",
      },
      {
        system: ["live"],
        mode: "USSD",
        title: "Cash In",
        description:
          " - Send the following message - '*165#*3*{AMOUNT}' to the number above. If the agent accepts the operation, the user will receive a message asking for the pin, otherwise he will receive a message saying that the operation was rejected.",
      },
      {
        system: ["live"],
        mode: "USSD",
        title: "Cash Out",
        description:
          " - Send the following message - '*165#*4*{AMOUNT}' to the number above. If the agent accepts the operation, the user will receive a message asking for the pin, otherwise he will receive a message saying that the operation was rejected.",
      },
      {
        system: ["live"],
        mode: "USSD",
        title: "Payment",
        description:
          " - Send the following message - '*165#*5*{MERCHANT_CODE}*{AMOUNT}' to the number above. The user will receive a message asking for the pin.",
      },
    ],
  }),
  methods: {
    getInformation(system, mode) {
      return this.informations.filter(
        (elem) => elem.system.includes(system) && elem.mode === mode
      );
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
</style>
