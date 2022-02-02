<template>
  <div class="d-flex justify-content-center">
    <div class="phone-wrapper">
      <div class="screen-content">
        <form class="my-form" @submit.prevent="processSend" @reset.prevent="processCancel">
          <div class="notification-wrapper" v-if="lastMessageReceive && lastMessageReceive.length != 0">
            <span>{{ lastMessageReceive }}</span>
          </div>
          <div class="fields-wrapper">
            <span class="text">{{ phoneMessageDisplay }}</span>
            <input type="text" v-model="phoneInput" />
            <span class="error-msg" v-if="phoneMessageError.length != 0">
              {{ phoneMessageError }}
            </span>
            <div class="buttons-wrapper">
              <button type="reset">Cancel</button>
              <button type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
      <div class="keys-map">
        <div class="row">
          <div class="col">
            <a href="javascript: void(0)" @click="onClickKey('1')"></a>
          </div>
          <div class="col">
            <a href="javascript: void(0)" @click="onClickKey('2')"></a>
          </div>
          <div class="col">
            <a href="javascript: void(0)" @click="onClickKey('3')"></a>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <a href="javascript: void(0)" @click="onClickKey('4')"></a>
          </div>
          <div class="col">
            <a href="javascript: void(0)" @click="onClickKey('5')"></a>
          </div>
          <div class="col">
            <a href="javascript: void(0)" @click="onClickKey('6')"></a>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <a href="javascript: void(0)" @click="onClickKey('7')"></a>
          </div>
          <div class="col">
            <a href="javascript: void(0)" @click="onClickKey('8')"></a>
          </div>
          <div class="col">
            <a href="javascript: void(0)" @click="onClickKey('9')"></a>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <a href="javascript: void(0)" @click="onClickKey('*')"></a>
          </div>
          <div class="col">
            <a href="javascript: void(0)" @click="onClickKey('0')"></a>
          </div>
          <div class="col">
            <a href="javascript: void(0)" @click="onClickKey('#')"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Phone',
  components: {},
  props: {
    selectedSystem: {
      type: String,
      required: true,
    },
    parentSelectedMode: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    sessionId: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    phoneInput: '',
    phoneMessageDisplay: '',
    phoneWithoutSpaces: '',
    phoneMessageError: '',
    pollIntervalGetSMS: null,
    pollTimeoutGetSMS: null,

    postObjectSMS: {
      phoneNumber: '',
      receivingPhoneNumber: '+447777777',
      text: '',
      system: '',
    },

    postObjectUSSD: {
      phoneNumber: '',
      serviceCode: '',
      text: '',
      system: '',
    },

    lastMessageReceive: '',
    selectedMode: ''
  }),
  created() {
    this.phoneWithoutSpaces = this.phone.replace(/\s/g, '');
    this.selectedMode = this.parentSelectedMode;
    switch (this.selectedMode) {
      case 'SMS':
        this.phoneMessageDisplay = 'Enter the text:';
        this.resetPostObjectSMS();
        break;
      case 'USSD':
        this.phoneMessageDisplay = 'Dial Short Code:';
        this.resetPostObjectUSSD();
        break;
      default:
        break;
    }
  },
  mounted() {
    this.pollIntervalGetSMS = setInterval(this.getSMSResponse, 1000); //save reference to the interval
    this.pollTimeoutGetSMS = setTimeout(() => {
      clearInterval(this.pollIntervalGetSMS);
    }, 1800000); //stop polling after ten minutes

    this.$root.$on('newSelectedMode', (value) => {
      this.selectedMode = value;
      this.phoneMessageError = '';
      switch (this.selectedMode) {
        case 'SMS':
          this.phoneMessageDisplay = 'Enter the text:';
          this.resetPostObjectSMS();
          break;
        case 'USSD':
          this.phoneMessageDisplay = 'Dial Short Code:';
          this.resetPostObjectUSSD();
          break;
        default:
          break;
      }
    });
  },
  beforeDestroy() {
    clearInterval(this.pollIntervalGetSMS);
    clearTimeout(this.pollTimeoutGetSMS);
  },
  methods: {
    onClickKey(key) {
      this.phoneInput += key;
    },

    processSend(e) {
      this.phoneMessageError = '';
      switch (this.selectedMode) {
        case 'SMS':
          this.processSMSMode();
          break;
        case 'USSD':
          this.processUSSDMode();
          break;
        default:
          break;
      }

      e.preventDefault();
    },

    processCancel(e) {
      this.phoneMessageError = '';
      switch (this.selectedMode) {
        case 'SMS':
          this.phoneMessageDisplay = 'Enter the text:';
          this.postObjectSMS.text = '';
          break;
        case 'USSD':
          this.phoneMessageDisplay = 'Dial Short Code:';
          this.postObjectUSSD.serviceCode = '';
          this.postObjectUSSD.text = '';
          break;
        default:
          break;
      }

      e.preventDefault();
    },

    async processSMSMode() {
      this.postObjectSMS.text = this.phoneInput;

      let response = await this.axiosPost(process.env.VUE_APP_PROXY_API_URL + '/sms-gateway/send', this.postObjectSMS);

      if (response && response.data) {
        this.phoneInput = '';
        if (response.data === 'PONG') {
          this.lastMessageReceive = response.data;
        }
      } else {
        this.phoneInput = '';
      }
    },

    async processUSSDMode() {
      if (this.postObjectUSSD.serviceCode === '') {
        this.postObjectUSSD.serviceCode = this.phoneInput;
      } else {
        if (this.postObjectUSSD.text === '') {
          this.postObjectUSSD.text = this.phoneInput;
        } else {
          this.postObjectUSSD.text += '*' + this.phoneInput;
        }
      }

      let response = await this.axiosPost(process.env.VUE_APP_PROXY_API_URL + '/ussd-gateway/send', this.postObjectUSSD);

      if (response && response.data) {
        if (response.data.substring(0, 3) === 'END') {
          if (response.data === 'END Invalid Option') {
            this.phoneMessageDisplay = 'Dial Short Code:';
            this.postObjectUSSD.serviceCode = '';
            this.postObjectUSSD.text = '';
            this.updatePhoneMessageError(response.data.slice(3));
          } else {
            this.phoneMessageDisplay = 'Dial Short Code:';
            this.postObjectUSSD.serviceCode = '';
            this.postObjectUSSD.text = '';
            this.phoneInput = '';
          }
        } else {
          if (response.data === 'ACK') {
            this.phoneInput = '';
            this.postObjectUSSD.serviceCode = '';
            this.postObjectUSSD.text = '';
            this.lastMessageReceive = response.data;
          } else {
            this.updatePhoneMessageDisplay(response.data);
          }
        }
      } else {
        this.phoneMessageDisplay = 'Dial Short Code:';
        this.postObjectUSSD.serviceCode = '';
        this.postObjectUSSD.text = '';
        this.phoneInput = '';
      }
    },

    async axiosPost(url, objectToSend) {
      try {
        let response = await this.axios.post(url, objectToSend, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            sessionId: this.sessionId,
          },
        });

        return response;
      } catch (err) {
        if (this.axios.isAxiosError(err) && err.response) {
          //USSD Case
          if (err.response.data.error === 'Invalid short code') {
            this.updatePhoneMessageError(err.response.data.error);
          }
        }

        return null;
      }
    },

    updatePhoneMessageDisplay(message) {
      this.phoneMessageDisplay = message;
      this.phoneInput = '';
    },

    updatePhoneMessageError(message) {
      this.phoneMessageError = message;
      this.phoneInput = '';
    },

    getSMSResponse() {
      this.axios
        .get(process.env.VUE_APP_PROXY_API_URL + '/message/sms', {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            sessionId: this.sessionId,
          },
        })
        .then((response) => {
          if (response.data) {
            this.lastMessageReceive = response.data.message;
          }
        })
        .catch(() => {});
    },

    resetPostObjectUSSD() {
      this.postObjectUSSD = {
        phoneNumber: this.phoneWithoutSpaces,
        serviceCode: '',
        text: '',
        system: this.selectedSystem,
      };
    },

    resetPostObjectSMS() {
      this.postObjectSMS = {
        phoneNumber: this.phoneWithoutSpaces,
        receivingPhoneNumber: '+447777777',
        text: '',
        system: this.selectedSystem,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.phone-wrapper {
  width: 296px;
  height: 700px;
  position: relative;
  background-image: url('../assets/images/dumb_phone.png');
  margin-top: 1rem;
}
.phone-wrapper .screen-content {
  display: flex;
  width: 212px;
  height: 190px;
  position: absolute;
  top: 130px;
  left: 42px;
}
.phone-wrapper .screen-content form {
  display: flex;
  flex-flow: column;
  flex: 1;
  justify-content: center;
}
.phone-wrapper .screen-content form .fields-wrapper {
  display: flex;
  flex-flow: column;
  background: linear-gradient(#575757, #252525);
  border-radius: 4px;
  padding: 4px 8px;
}
.phone-wrapper .screen-content form .fields-wrapper .text,
.phone-wrapper .screen-content form .fields-wrapper input {
  color: #fff;
}
.phone-wrapper .screen-content form .fields-wrapper .text {
  color: #fff;
  font-size: 14px;
  margin-bottom: 16px;
}
.phone-wrapper .screen-content form .fields-wrapper input {
  font-size: 14px;
  padding: 4px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #ccc;
}
.phone-wrapper .screen-content form .fields-wrapper input:focus {
  outline: none;
}
.phone-wrapper .screen-content form .fields-wrapper .buttons-wrapper {
  display: flex;
  margin-top: 8px;
}
.phone-wrapper .keys-map {
  width: calc(100% - 20px);
  height: 152px;
  bottom: 32px;
  margin: 0 10px;
  position: absolute;
}
.phone-wrapper .keys-map .row {
  height: 38px;
  display: flex;
}
.phone-wrapper .keys-map .row .col {
  flex: 1;
}
.phone-wrapper .keys-map .row .col a {
  display: block;
  width: 100%;
  height: 100%;
}
.error-msg {
  font-size: 14px;
  color: red;
}
.text {
  white-space: pre-line;
}
.notification-wrapper {
  color: #fff;
  font-size: 14px;
  margin-bottom: 0.5rem;
}
</style>
