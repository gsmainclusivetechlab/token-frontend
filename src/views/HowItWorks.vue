<template>
  <div class="home">
    <AppHeader v-bind="props" />

    <section class="bio-all">
      <div class="container">
        <div class="bio-all-contents">
          <div class="row">
            <div class="col-12 col-lg-6">
              <div class="bio-content-wrap">
                <h2>Token Solution</h2>
                <p>
                  One of the targets of the Token project is to demonstrate the advantages of using a token that will replace the user's
                  phone number to make mobile money transactions with the goal of improving the security of the users.
                </p>
                <p>
                  This showcase consists of a system that allows the user to generate a token based on their phone number to execute
                  transactions preventing their phone number from being exposed.
                </p>
                <p>
                  The available use cases will show that if users use the token they will be able to do the same as they are currently able
                  to do using their phone number.
                </p>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="img-bio">
                <img src="../assets/images/usecase-gsma.png" class="img-fluid" alt="usecase-content" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="two-col-biometric-wrap text-white managing-content">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="right-manage-img">
              <h2 class="mb-0">How it works</h2>
              <p>
                Our showcase has an Agent/Merchant simulation and two possibilities to act as the Customer, a simulated Mock mode and Live
                mode.
              </p>
              <p>
                In the Mock mode, a mobile phone will appear on the page that will simulate a real mobile phone. it will be possible to
                choose between using SMS or USSD to make actions. To use the Mock mode the user's needs to choose option Mock on the
                Customer Area and press the "Start" button.
              </p>
              <p>
                In Live mode, the user will use his mobile phone to send SMS messages to a phone number provided for demonstrating the Token
                Solution. To use this mode the user will need to sign, for the system to recognize his phone number as belonging to a valid
                user. The option to delete his information from the system is also provided via the “Delete Account” button.
              </p>
              <p>
                Note that when the Mock mode is selected the notifications from the Agent/Merchant workflow will be sent to the page itself
                and shown in the mobile interface provide. If the Live mode is selected the notifications will be sent to the user's real
                mobile phone.
              </p>
              <p>
                During the simulation, a PIN will be requested to the user to confirm operations. The PIN provided below is the only
                accepted value.
              </p>
              <p>
                <u><b>Default PIN</b></u
                >: 1234
              </p>
              <p>
                A Merchant code identifier is also required for the Merchant payment use cases, and the only accepted value is the one
                below.
              </p>
              <p>
                <u><b>Merchant Code Available</b></u
                >: 4321
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="managing-box">
              <div class="row">
                <div class="col-12">
                  <h2>Use Cases</h2>
                </div>
                <div class="col-12 col-md-6">
                  <div class="twoline-managing-frame">
                    <div class="content-manage-frame">
                      <h5 class="text-center">UC1 - Get Token</h5>
                      <p>Generate a token based on the user's phone number.</p>
                      <p>
                        <u><b>Using SMS in Mock Mode</b></u> - Write 'GET TOKEN' on the input field.
                      </p>
                      <p>
                        <u><b>Using SMS in Live Mode</b></u> - Send the following SMS to +447401232937 - 'GET TOKEN'.
                      </p>
                      <p>
                        <u><b>Using USSD in Mock Mode</b></u> - Write the short code '*165#' -> 1.
                      </p>
                      <p>
                        <u><b>Using USSD in Live Mode</b></u> - Send the following SMS to +447401232937 - '*165*1#'.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="twoline-managing-frame">
                    <div class="content-manage-frame">
                      <h5 class="text-center">UC2 - Delete Token</h5>
                      <p>Delete the generated token.</p>
                      <p>
                        <u><b>Using SMS in Mock Mode</b></u> - Write 'DELETE TOKEN' on input field.
                      </p>
                      <p>
                        <u><b>Using SMS in Live Mode</b></u> - Send the following SMS to +447401232937 - 'DELETE TOKEN'.
                      </p>
                      <p>
                        <u><b>Using USSD in Mock Mode</b></u> - Write the short code '*165#' -> 2.
                      </p>
                      <p>
                        <u><b>Using USSD in Live Mode</b></u> - Send the following SMS to +447401232937 - '*165*2#'.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="twoline-managing-frame">
                    <div class="content-manage-frame">
                      <h5 class="text-center">UC3 - Customer Initiated Cash-in / Cash-out</h5>
                      <p>
                        <u><b>Using SMS in Mock Mode</b></u> - Write 'CASH IN {AMOUNT}' or 'CASH OUT {AMOUNT}' on input field. Next, write
                        'PIN {VALUE}' on input field. Finally, accept the operation with the Agent.
                      </p>
                      <p>
                        <u><b>Using SMS in Live Mode</b></u> - Send the following SMS to +447401232937 - 'CASH IN {AMOUNT}' or 'CASH OUT
                        {AMOUNT}'. Next, the following SMS to +447401232937 - 'PIN {VALUE}'. Finally, accept the operation with the Agent.
                      </p>
                      <p>
                        <u><b>Using USSD in Mock Mode</b></u> - Write the short code '*165#' -> 3 or 4 -> Insert Amount -> Insert Pin. Then,
                        accept the operation with the Agent.
                      </p>
                      <p>
                        <u><b>Using USSD in Live Mode</b></u> - Send the following SMS to +447401232937 - '*165*3*{AMOUNT}*{PIN}#' or
                        '*165*4*{AMOUNT}*{PIN}#'. Then, accept the operation with the Agent.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="twoline-managing-frame">
                    <div class="content-manage-frame">
                      <h5 class="text-center">UC5 - Customer Initiated Merchant Payment</h5>
                      <p>
                        <u><b>Using SMS in Mock Mode</b></u> - Write 'PAYMENT {MERCHANT_CODE} {AMOUNT}' on input field. Next, write 'PIN
                        {VALUE}' on input field. Finally, accept the operation with the Merchant.
                      </p>
                      <p>
                        <u><b>Using SMS in Live Mode</b></u> - Send the following SMS to +447401232937 - 'PAYMENT {MERCHANT_CODE} {AMOUNT}'.
                        Next, the following SMS to +447401232937 - 'PIN {VALUE}'. Finally, accept the operation with the Merchant.
                      </p>
                      <p>
                        <u><b>Using USSD in Mock Mode</b></u> - Write the short code '*165#' -> 5 -> Insert Merchant Code -> Insert Amount
                        -> Insert Pin. Then, accept the operation with the Merchant.
                      </p>
                      <p>
                        <u><b>Using USSD in Live Mode</b></u> - Send the following SMS to +447401232937 -
                        '*165*5*{MERCHANT_CODE}*{AMOUNT}*{PIN}#'. Then, accept the operation with the Merchant.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="twoline-managing-frame">
                    <div class="content-manage-frame">
                      <h5 class="text-center">UC4 - Agent Initiated Cash-in / Cash-out</h5>
                      <p>
                        Create an operation in Agent Operation Settings by choosing the Cash-In or Cash-Out option in the Operation field, then
                        accept this operation with the Agent.
                      </p>
                      <p>
                        <u><b>Using SMS in Mock Mode</b></u> - Write 'PIN {VALUE}' on input field.
                      </p>
                      <p>
                        <u><b>Using SMS in Live Mode</b></u> - Send the following SMS to +447401232937 - 'PIN {VALUE}'.
                      </p>
                      <p>
                        <u><b>Using USSD in Mock Mode</b></u> - Write the short code '*165*6*1234#' on input field.
                      </p>
                      <p>
                        <u><b>Using USSD in Live Mode</b></u> - Send the following SMS to +447401232937 - '*165*6*1234#'.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="twoline-managing-frame">
                    <div class="content-manage-frame">
                      <h5 class="text-center">UC6 - Merchant Initiated Merchant Payment</h5>
                      <p>
                        Create an operation in Agent Operation Settings by choosing the Merchant-Payment option in the Operation field, then accept
                        this operation with the Merchant.
                      </p>
                      <p>
                        <u><b>Using SMS in Mock Mode</b></u> - Write 'PIN {VALUE}' on input field.
                      </p>
                      <p>
                        <u><b>Using SMS in Live Mode</b></u> - Send the following SMS to +447401232937 - 'PIN {VALUE}'.
                      </p>
                      <p>
                        <u><b>Using USSD in Mock Mode</b></u> - Write '*165*6*1234#' on input field.
                      </p>
                      <p>
                        <u><b>Using USSD in Live Mode</b></u> - Send the following SMS to +447401232937 - '*165*6*1234#'.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bio-all">
      <div class="container">
        <div class="bio-all-contents">
          <div class="row">
            <div class="col-12">
              <div class="bio-content-wrap">
                <h2>New Use Cases</h2>
                <p>The number of use cases are always growing, and we invite those interested to bring new ideas for us to implement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader';
import Footer from '../components/layout/Footer';
export default {
  name: 'HowItWorks',
  components: { AppHeader, Footer },
  data: () => ({
    props: {
      tittle: 'FEATURES TOKEN BRINGS TO YOU',
      breadCrumb: {
        tittle: 'How it works',
        link: '/howitworks',
      },
    },
  }),
};
</script>

<style>
.card-wrap h5 {
  font-weight: bold;
}
.card-wrap {
  background-color: #ffffff;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1);
  min-height: 249px;
  border-radius: 10px;
  padding-top: 35px;
  padding-left: 25px;
  padding-bottom: 28px;
  padding-right: 25px;
  transition: all 0.25s ease-out;
  height: calc(100% - 30px);
  margin-bottom: 30px;
}
.card-wrap img {
  padding-bottom: 25px;
}
.managing-content {
  padding-top: 64px;
  padding-bottom: 94px;
}
.managing-content h2 {
  margin-bottom: 40px;
}
.twoline-managing-frame {
  display: flex;
  justify-content: flex-start;
}
.twoline-managing-frame .img-manage {
  padding-right: 21px;
}
.twoline-managing-frame .img-manage img {
  max-width: 41px;
}
.tutorial-section {
  position: relative;
  padding-top: 71px;
  padding-bottom: 73px;
}
.tutorial-section p {
  padding-bottom: 35px;
}
.tutorial-section::before {
  content: '';
  position: absolute;
  left: 0;
  background-image: url(../assets/images/bio-left.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  top: 0;
  bottom: 0;
  width: 169px;
  left: 0;
}
.tutorial-section::after {
  content: '';
  position: absolute;
  right: 0;
  background-image: url(../assets/images/video-bg-1.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 400px;
  height: 290px;
  bottom: 0;
}
.usecase-wrapper {
  padding-top: 40px;
  padding-bottom: 77px;
}
.usecase-wrapper .usecase-main {
  padding-bottom: 55px;
}
.usecase-wrapper .usecase-three-col-content .usecase-frame {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 23px rgba(0, 0, 0, 0.13);
  min-height: 104px;
  padding-top: 19px;
  padding-left: 16px;
  padding-right: 45px;
  padding-bottom: 11px;
  margin-bottom: 37px;
}
.usecase-wrapper .usecase-three-col-content .usecase-frame .usecase-img {
  width: 50px;

  margin-right: 20px;
}
.usecase-wrapper .usecase-three-col-content .usecase-frame .usecase-img img {
  max-width: 41px;
}
.grey-bg {
  background-color: #f3f3f3;
}
.mobile-app-content {
  padding-top: 68px;
  position: relative;
}
.mobile-app-content::after {
  content: '';
  background-image: url('../assets/images/bg-5.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  position: absolute;
  min-height: 291px;
  top: 0;
  left: 0;
  width: 345px;
}
.mobile-app-content .app-content-wrap {
  padding-bottom: 113px;
}
.mobile-app-content .img-app-wrap {
  position: absolute;
  width: 686px;
  height: 501px;
  bottom: -106px;
  left: 0;
}
.usecase-wrapper {
  position: relative;
}
.usecase-wrapper::before {
  content: '';
  background-position: center;
  background-image: url('../assets/images/Bubble-small.png');
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 259px;
  height: 261px;
}
.usecase-wrapper .usecase-three-col-content::after {
  content: '';
  background-position: center;
  background-image: url('../assets/images/bubblel.png');
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: -127px;
  right: 0;
  width: 280px;
  height: 443px;
  display: block;
  z-index: -1;
}
.usecase-wrapper .usecase-three-col-content {
  position: relative;
}
.bio-all {
  padding-top: 77px;
  position: relative;
  padding-bottom: 85px;
}

.bio-all::after {
  content: '';
  /*background-image: url('../assets/images/bg-dots-01.png');*/
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;
  width: 600px;
  height: 350px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
}
.bio-all .img-bio {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
}
.bio-all .img-bio img {
  margin-left: 85px;
}
@media only screen and (max-width: 1024px) {
  .bio-all .img-bio img {
    margin-left: 0;
  }
  .tutorial-section::after {
    width: 250px;
    height: 185px;
  }
  .mobile-app-content .img-app-wrap {
    position: relative;
    width: 100%;
    height: auto;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    margin-bottom: 20px;
  }
}

@media only screen and (max-width: 993px) {
  .card-wrap {
    margin-bottom: 30px;
  }
  .right-manage-img {
    margin: auto;
    text-align: center;
  }
}
@media only screen and (max-width: 767px) {
  .tutorial-section::after {
    width: 150px;
    height: 111px;
  }
}
</style>
