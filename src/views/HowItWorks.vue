<template>
  <div class="home">
    <AppHeader v-bind="props" />

    <section class="bio-all">
      <div class="container">
        <div class="bio-all-contents">
          <div class="row">
            <div class="col-12 col-lg-6">
              <div class="bio-content-wrap">
                <!-- <h2>IVR Call Centre</h2> -->
                <h2>Token Solution</h2>
                <!-- <p>
                  One of the targets of the B4LL project is to demonstrate the advantages of using voice and speech recognition for identification and authentication of users to access digital services.
                </p> -->
                <p>
                  One of the targets of the Token project is to demonstrate the advantages of using a token that will replace the user's phone
                  number to make mobile money transactions with the goal of improving the security of the users.
                </p>
                <!-- <p>
                  This showcase consists of an IVR call centre that allows the user to navigate through a menu of different possibilities, using voice bots which can be an alternative to requiring someone to present physical ID.
                </p> -->
                <p>
                  This showcase consists of a system that allows the user to generate a token based on their phone number to execute
                  transactions preventing their phone number from being exposed.
                </p>
                <!-- <p>
                  The use cases available are a simulation of real services and
                  aim to demonstrate the use of voice registration and
                  authentication.
                </p> -->
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
              <h2 class="mb-0">Use Cases</h2>
              <p>
                Our showcase have a Agent/Merchant simulation and two possibilities to simulate the Customer, Mock and Live.
              </p>
              <p>
                The number of use cases are always growing, and we invite those interested to bring new ideas for us to
                implement.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="managing-box">
              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="twoline-managing-frame">
                    <!-- <div class="img-manage">
                      <img src="../assets/images/biometrics-types.png" class="img-fluid" alt="biometrics-types" />
                    </div> -->
                    <div class="content-manage-frame">
                      <h5>Get Token</h5>
                      <p>Generate a token based on user's phone number.</p>
                      <p>
                        <u><b>Using SMS plus Mock Mode</b></u> - Write 'GET_TOKEN' on input field.
                      </p>
                      <p>
                        <u><b>Using SMS plus Live Mode</b></u> - Send the following message - 'GET_TOKEN' to +447401232937.
                      </p>
                      <p>
                        <u><b>Using USSD plus Mock Mode</b></u> - Write short code '*165#' -> 1.
                      </p>
                      <p>
                        <u><b>Using USSD plus Live Mode</b></u> - Send the following message - '*165#*1' to +447401232937.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="twoline-managing-frame">
                    <!-- <div class="img-manage">
                      <img src="../assets/images/Alerts.png" class="img-fluid" alt="feature-icon-2" />
                    </div> -->
                    <div class="content-manage-frame">
                      <h5>Delete Token</h5>
                      <p>Delete the generated token.</p>
                      <p>
                        <u><b>Using SMS plus Mock Mode</b></u> - Write 'DELETE_TOKEN' on input field.
                      </p>
                      <p>
                        <u><b>Using SMS plus Live Mode</b></u> - Send the following message - 'DELETE_TOKEN' to +447401232937.
                      </p>
                      <p>
                        <u><b>Using USSD plus Mock Mode</b></u> - Write short code '*165#' -> 2.
                      </p>
                      <p>
                        <u><b>Using USSD plus Live Mode</b></u> - Send the following message - '*165#*2' to +447401232937.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="twoline-managing-frame">
                    <!-- <div class="img-manage">
                      <img src="../assets/images/fingerprint.png" class="img-fluid" alt="feature-icon-6" />
                    </div> -->
                    <div class="content-manage-frame">
                      <h5>Agent Initiated Cash-in / Cash-out</h5>
                      <p>Choose the Operation Cash-In or Cash-Out on frame Agent Operation Seetings</p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="twoline-managing-frame">
                    <!-- <div class="img-manage">
                      <img src="../assets/images/feature-icon-7.png" class="img-fluid" alt="Alerts" />
                    </div> -->
                    <div class="content-manage-frame">
                      <h5>Merchant Initiated Merchant Payment</h5>
                      <p>Choose the Operation Merchant-Payment on frame Agent Operation Seetings</p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="twoline-managing-frame">
                    <!-- <div class="img-manage">
                      <img src="../assets/images/passphrases.png" class="img-fluid" alt="passphrases" />
                    </div> -->
                    <div class="content-manage-frame">
                      <h5>Customer Initiated Cash-in / Cash-out</h5>
                      <p>
                        <u><b>Using SMS plus Mock Mode</b></u> - Write 'CASH_IN -space- {AMOUNT}' or 'CASH_OUT -space- {AMOUNT}' on input field.
                      </p>
                      <p>
                        <u><b>Using SMS plus Live Mode</b></u> - Send the following message - 'CASH_IN -space- {AMOUNT}' or 'CASH_OUT -space- {AMOUNT}' to +447401232937.
                      </p>
                      <p>
                        <u><b>Using USSD plus Mock Mode</b></u> - Write short code '*165#' -> 3 -> Insert Amount.
                      </p>
                      <p>
                        <u><b>Using USSD plus Live Mode</b></u> - Send the following message - '*165#*3*{AMOUNT}' to +447401232937.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div class="col-12 col-md-6">
                  <div class="twoline-managing-frame">
                    <!-- <div class="img-manage">
                      <img src="../assets/images/feature-icon-1.png" class="img-fluid" alt="feature-icon-1" />
                    </div> -->
                    <div class="content-manage-frame">
                      <h5>Customer Initiated Merchant Payment</h5>
                      <p>
                        <u><b>Using SMS plus Mock Mode</b></u> - Write 'PAYMENT -space- {MERCHANT_CODE} -space- {AMOUNT}' on input field.
                      </p>
                      <p>
                        <u><b>Using SMS plus Live Mode</b></u> - Send the following message - 'PAYMENT -space- {MERCHANT_CODE} -space- {AMOUNT}' to +447401232937.
                      </p>
                      <p>
                        <u><b>Using USSD plus Mock Mode</b></u> - Write short code '*165#' -> 5 -> Insert Merchant Code -> Insert Amount.
                      </p>
                      <p>
                        <u><b>Using USSD plus Live Mode</b></u> - Send the following message - '*165#*5*{MERCHANT_CODE}*{AMOUNT}' to +447401232937.
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
    <!-- <div class="mobile-app-content grey-bg">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="img-app-wrap">
              <img src="../assets/images/mobile-app.png" class="img-fluid" alt="mobile-app" />
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="app-content-wrap">
              <h2>Mobile App</h2>
              <h6>
                The mobile application demonstrates the potential of biometrics in emerging markets as a flexible, open-source and adaptable
                way to attend the needs of mobile operators. When necessary, the app allows the connection with different biometrics
                suppliers that do not require biometric sensors more than a microphone and a camera.
              </h6>
              <h6>
                Users can use the different types of biometrics, perform the enrolment process and navigate through the different use cases
                to experience how the use of biometrics helps to increase security when accessing and using services.
              </h6>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="img-app-wrap">
              <img src="../assets/images/mobile-app.png" class="img-fluid" alt="mobile-app" />
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <section class="tutorial-section text-center">
      <div class="container">
        <div class="row">
          <div class="col-12">
          <h2>Test our call centre now!</h2>
            <p>
              Access our documentation and get the most out your experience, <br/>
              If you cannot find the use cases you need, please contact us  <br/>
              Let's  
            </p>
            <img src="../assets/images/Call.png" class="img-fluid" alt="Call" />
          </div>
        </div>
      </div>
    </section> -->
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
  background-image: url('../assets/images/bg-3.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 400px;
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
