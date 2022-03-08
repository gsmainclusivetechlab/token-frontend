<template>
  <div class="home">
    <AppHeader v-bind="props" />

    <section class="bio-all">
      <div class="container">
        <div class="bio-all-contents">
          <div class="row">
            <div class="col-12 col-lg-6">
              <div class="bio-content-wrap">
                <h2>A demonstration of mobile number tokenisation</h2>
                <p>
                  This showcase aims to demonstrate how tokenising customers’ phone numbers 
                  protects their contact details and keeps their identity private. 
                </p>
                <p>
                  A customer can easily request a token, which is issued in real time. To obtain the token the user can use SMS or USSD codes. Once they have the token number, the customer can access a variety of mobile services without having to disclose their mobile phone number - safely and securely. 
                </p>
                <p>
                  Agents, meanwhile, do not need to do anything differently from usual.
                </p>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="img-bio">  
                <!-- ALIGN IN THE MIDDLE -->
                <img src="../assets/images/graphic-04.png" class="img-fluid" alt="usecase-content" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FRAME 03: USE CASES -->
    <section class="two-col-biometric-wrap text-white">
      <b-container>
        <b-row class="justify-content-start align-items-center">
          <div class="col-12 col-lg-5">
              <h2>
                User Scenarios  
              </h2>
              <p> Our solution demonstrates the experience of mobile tokenisation for two users perspectives: customers and service agents or merchants. </p> 
              <p> There are different ways for the user to navigate and test across a variety of scenarios.</p>
              <p> Our scenarios are based on market requests and connect different use cases and technology approaches. We invite you, interested in tokenisation, to bring new ideas of use cases, technologies and token application to be added into our project.</p>
          </div>
          <div class="col-12 col-lg-1"></div>
          <div class="col-12 col-lg-6">
            <div class="managing-box">
              <div class="row">

                <!-- ELEMENT 01 -->
                <div class="col-12 col-md-12">
                  <div class="twoline-managing-frame">
                    <div class="img-manage">
                      <img
                        src="../assets/images/feature-icon-1.png"
                        class="img-fluid"
                        alt="feature-icon-1"
                      />
                    </div>
                    <div class="content-manage-frame">
                      <h5>Merchant Payment</h5>
                      <p>
                        You can simulate a transaction where the customer pays a merchant.
                      </p>
                    </div>
                  </div>
                </div>

                <!-- ELEMENT 02 -->
                <div class="col-12 col-md-12">
                  <div class="twoline-managing-frame">
                    <div class="img-manage">
                      <img
                        src="../assets/images/feature-icon-2.png"
                        class="img-fluid"
                        alt="feature-icon-1"
                      />
                    </div>
                    <div class="content-manage-frame">
                      <h5>Cash-In</h5>
                      <p>
                        Simulate a money withdraw using a cash-in a transaction at an agent location.
                      </p>
                    </div>
                  </div>
                </div>

                <!-- ELEMENT 03 -->
                <div class="col-12 col-md-12">
                  <div class="twoline-managing-frame">
                    <div class="img-manage">
                      <img
                        src="../assets/images/feature-icon-4.png"
                        class="img-fluid"
                        alt="feature-icon-1"
                      />
                    </div>
                    <div class="content-manage-frame">
                      <h5>Cash-Out</h5>
                      <p>
                        Reproduce a money deposit using a cash-in transaction at an agent location.
                      </p>
                    </div>
                  </div>
                </div>

                

              </div>
            </div>
          </div>
        </b-row>
      </b-container>
    </section>

    <section class="bio-all">
      <div class="container">
        <div class="bio-all-contents">
          <div class="row">

            <div class="col-12 col-lg-4">
            <div class="right-manage-img" style="">
              <h2>Value for operators </h2>
              <p>
              </p>
              <h4>How can mobile services be made more secure for users, and especially women?</h4>
            </div>
          </div>
          <div class="col-12 col-lg-1"></div>
          <div class="col-12 col-lg-7">
            <div class="managing-box">
              <div class="row">

                <!-- ELEMENT 01 -->
                <div class="col-12 col-md-12">
                  <div class="twoline-managing-frame">
                    <div class="img-manage">
                      <img
                        src="../assets/images/trusted.png"
                        class="img-fluid"
                        alt="feature-icon-1"
                      />
                    </div>
                    <div class="content-manage-frame">
                      <p>Our solution is designed alongside mobile network operators to attend their business needs.</p>
                      <p>
                      </p>
                    </div>
                  </div>
                </div>

                <!-- ELEMENT 02 -->
                <div class="col-12 col-md-12">
                  <div class="twoline-managing-frame">
                    <div class="img-manage">
                      <img
                        src="../assets/images/development.png"
                        class="img-fluid"
                        alt="feature-icon-1"
                      />
                    </div>
                    <div class="content-manage-frame">
                      <p>Our engine is non-intrusive to your core platforms and can be integrated as modular extension.</p>
                      <p>
                      </p>
                    </div>
                  </div>
                </div>

                <!-- ELEMENT 03 -->
                <div class="col-12 col-md-12">
                  <div class="twoline-managing-frame">
                    <div class="img-manage">
                      <img
                        src="../assets/images/smartphones.png"
                        class="img-fluid"
                        alt="feature-icon-1"
                      />
                    </div>
                    <div class="content-manage-frame">
                      <p>Generated tokens can be designed to have the same format as the phone number sequence in your market if interest. This ensures a seamless replacement of MSISDNs in requests to your platform.</p>
                      <p>
                      </p>
                    </div>
                  </div> 
                </div>

               </div> 
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
      tittle: 'THE VALUE OF MOBILE TOKENISATION',
      content: 'Protect yourself from exposing your phone number using a token solution',
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
