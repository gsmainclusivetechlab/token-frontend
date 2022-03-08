<template>
  <div class="home">
    <AppHeader v-bind="props" />
    
    <div class="about-content-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <h2>Inclusive Tech Lab</h2>
            <h6>
              The
              <a
                href="https://www.gsma.com/mobilefordevelopment/mobile-money/gsma-inclusive-tech-lab/"
                target="_blank"
              >
                GSMA Inclusive Tech Lab</a
              >
              supports the mobile money industry to develop the mobile financial
              ecosystem, to enable a broad range of digital transactions and
              make mobile wallets central to the lives of the financially
              excluded and underserved, providing them with better solutions to
              manage their financial resources and face economic shocks. Mobile
              money has evolved to a platform of more than 1 billion accounts
              reaching emerging market consumers and bringing financial access
              to the previously underserved and excluded. The Inclusive Tech Lab
              has published a set of harmonised Mobile Money Application
              Programming Interfaces (APIs) and is now looking at expanding the
              potential of mobile money through the use of biometrics for
              financial transactions.
            </h6>
          </div>
          <div class="col-12 col-md-6">
            <div class="img-about-content">
              <img
                src="../assets/images/Tech-lab.png"
                class="img-fluid"
                alt="Tech-lab"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="two-col-biometric-wrap text-white bio-all-content">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="bio-all-content-wrap">
              <h2>Tpkenisation for Digital Safety</h2>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="bio-all-content-wrap">
              <h6>
                Access to mobile phones and services can have a positive impact on women’s lives, 
                contributing to the UN Sustainable Development Goal 5 
                focusing on gender equality and women’s empowerment, and can also provide economic benefits 
                to the mobile industry and the wider economy. However, women are being left behind as various 
                barriers as well as social norms keep them from accessing and using mobile technology at the 
                same rate as men. Research has consistently shown that 
                safety and security concerns related to mobile are a key barrier, and one which women tend to 
                experience more acutely than men.
              </h6>
              <h6>
                Issues are wide ranging and include mobile-related harassment, theft, fraud and security, 
                which inhibit women from benefitting from or even wanting to use a mobile. A key concern is 
                unsolicited phone calls and text messages, which some women receive as a result of their 
                mobile numbers being misused by agents or at points of sale.
              </h6>
            </div>
          </div>
          <div class="col-12 col-lg-6">
              <h6>
                 In low- and middle-income countries (LMICs), customers’ phone numbers are commonly shared with the 
                 agent or merchant when they purchase airtime or use mobile money, as their mobile phone number is 
                 typically also their mobile money account number.
              </h6>
              <h6>
                Mobile-related security issues can be improved through tokenisation, a process of replacing 
                sensitive data with a unique string of numbers, which has been successfully implemented in 
                other industries. The Lab will design a system that will use an algorithm to generate tokens t
                hat will replace the user’s phone numbers. This system will be designed alongside an operator as 
                the generated tokens will be linked to the user’s phone number. The user will request a token via 
                USSD menu, SMS, or phone call to the operator. The token can be accessed via a USSD menu or if SMS 
                or phone call used, then the operator will return a unique number to the user which is associated with 
                their account. This token will be used to pay for services such as topping up or merchant services.
              </h6>
          </div>
        </div>
      </div>
    </section>
    <div class="contact-us-wrap">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>
              Contact us to support you to pilot a <br />
              project in your market
            </h2>
            <a
              href="mailto:inclusivetechlab@gsma.com?subject=I’m interested in Biometrics For All"
              target="_blank"
              class="btn"
              >Contact</a
            >
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import AppHeader from "../components/AppHeader";
import Footer from "../components/layout/Footer";
export default {
  name: "About",
  components: { AppHeader, Footer },
  data: () => ({
    props: {
      tittle: "ABOUT",
      breadCrumb: {
        tittle: "About",
        link: "about",
      },
    },
  }),
};
</script>
<style>
.about-content-wrapper {
  padding-top: 63px;
  padding-bottom: 68px;
}
.about-content-wrapper .img-about-content {
  margin: auto;
  text-align: center;
  margin-top: -45px;
}
.contact-us-wrap {
  padding-top: 62px;
  padding-bottom: 71px;
  margin: auto;
  text-align: center;
  position: relative;
}
.contact-us-wrap::after {
  content: "";
  background-image: url("../assets/images/dotr.png");
  background-position: center;
  background-size: contain;
  position: absolute;
  right: 0;
  top: 0;
  height: 300px;
  width: 367px;
  background-repeat: no-repeat;
}
.bio-all-content h6 {
  color: #fff;
}
.bio-all-content {
  position: relative;
  padding-bottom: 122px;
  padding-top: 78px;
}
.bio-all-content .img-bottom {
  position: absolute;
  width: 417px;
  bottom: -122px;
  right: 0;
}
.contact-us-wrap::before {
  content: "";
  background-image: url("../assets/images/Rocket.png");
  background-position: center;
  background-size: contain;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 295px;
  width: 250px;
  background-repeat: no-repeat;
}
.bio-all-content {
  position: relative;
}
.bio-all-content::before {
  content: "";
  position: absolute;
  left: 0;
  top: 134px;
  display: block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 210px;
  height: 364px;
}
.bio-all-content .img-bio-content {
  padding-bottom: 121px;
}
.two-col-biometric-wrap .bio-all-content p a {
  color: #ae52c4;
}
@media only screen and (max-width: 1024px) {
  .two-col-biometric-wrap.bio-all-content {
    padding-top: 40px;
    padding-bottom: 9px;
  }
  .bio-all-content .img-bio-content {
    padding-bottom: 20px;
  }

  .bio-all-content .img-bottom {
    position: relative;
    width: 100%;
    bottom: -9px;
    right: 0;
    left: 0;
    text-align: center;
    margin: auto;
  }
}
@media only screen and (max-width: 993px) {
  .about-content-wrapper .img-about-content {
    margin-top: 0;
  }
}

</style>
