<template>
  <div class="home">
    <div class="home-header">
      <NavBar />
      <div class="slider-portfolio">
        <b-carousel
          id="carousel-no-animation"
          style="text-shadow: 0px 0px 2px #000"
          no-animation
          indicators
          img-width="1024"
          img-height="400"
        >
          <b-carousel-slide>
            <!-- <b-container> -->
            
            <h1>MOBILE TOKENISATION</h1>
            <h1>FOR DIGITAL SAFETY</h1>
            <div class="biometric-content-carousal">
              <h4>
                Protecting people’s identities in  
                emerging markets (especially women)
              </h4>
              <p></p>
              <p></p>
              
            </div>
            <!-- </b-container> -->
            <template #img>
              <img
                class="img-fluid slider-img"
                width="1024"
                height="400"
                src="../assets/images/graphic-01.3.png"
                alt="image slot"
                style="vertical-align:top float:left"
              />
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>


    <!-- FRAME 01: LEARN MORE -->
    <div class="digital-wrapper mb-3">
      <b-container>
        <b-row>
          
          <b-col cols="12" md="5">
            <div class="digital-frame-left-content">
              <h3>Innovating mobile tokenisation to keep your customers safe</h3>
              <p>
                Mobile tokenisation enables replacing a customer’s mobile phone number with a non-sensitive equivalent (referred to as a token) when they use digital services. The solution is expected to benefit women in particular by providing them with greater privacy and security. 
              </p>
            </div>
          </b-col>

          <b-col cols="12" md="1"> </b-col>

          <b-col cols="12" md="6">
            <div class="content-digital">              
              <div class="twoline-managing-frame">
                    <div class="img-manage">
                      <img
                        src="../assets/images/feature-icon-1.png"
                        class="img-fluid"
                        alt="feature-icon-1"
                      />
                    </div>
                    <div class="content-manage-frame" style="text-align:center">
                      <h3>Are you a mobile operator and do you have concerns about the safety of your customers?</h3>
                      <a href="/howitworks" class="btn btn-lap">Learn More</a>
                    </div>
              </div>
            </div>
          </b-col>

        </b-row>
      </b-container>
    </div>

    <!-- FRAME 02: IMAGE -->
    <section class="bio-all bg-greys" >
      <div class="container">
        <div class="bio-all-contents">
          <div class="row">
            <div class="col-12 col-lg-5">
              <div class="bio-content-wrap">
                <h2>Digital Safety for Inclusion</h2>
                <p>
                  In low- and middle-income countries (LMICs), the wide-ranging benefits of mobile technology are evident in the everyday life of underserved communities. Mobile enables access to voice and communication services, and provides a preferred, and often first, entry to the internet. More so, in many markets, mobile phones enable access to formal financial services like mobile money, which in turn unlocks access to a variety of life-enhancing services and utilities.
                </p>
                <p>
                  However, as mobiles become ubiquitous and functionalities increase in sophistication, not all user groups are afforded the same level of access or can enjoy the benefits of being connected. This is particularly prevalent for women, as a significant gender  <a href="https://www.gsma.com/r/gender-gap/" target="blank">gap in mobile phone ownership and usage</a> in LMICs means women are missing out.
                </p>
              </div>
            </div>
            <div class="col-12 col-lg-7">
              
              <div class="img-bio">    
                  <img
                    class="slider-img"
                    width="1024"
                    height="480"
                    src="../assets/images/graphic-02.png"
                    alt="image slot"
                    style="vertical-align:right"
                  />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- FRAME 03: PROBLEMS -->
    <section class="two-col-biometric-wrap text-white">
      <b-container>
        <b-row class="justify-content-start align-items-center">
          <div class="col-12 col-lg-5">
            <div class="right-manage-img">
              <h2>
                Tokenise phone numbers to keep customers safe 
              </h2>
              <p>
                In emerging markets, customers’ phone numbers are commonly also  their personal 
                account identifiers for digital services. The personal phone number is often 
                disclosed when interacting with service agents, merchants or other people, 
                for instance when they purchase airtime or make financial transactions. 
              </p>
              <h5>What if your customers’ personal phone numbers and contact details could easily be protected? </h5>
            </div>
          </div>
          <div class="col-12 col-lg-1"></div>
          <div class="col-12 col-lg-6">
            <div class="managing-box">
              <div class="row">

                <!-- ELEMENT 01 -->
                <div class="col-12 col-md-12">
                  <div class="twoline-managing-frame">
                    <div class="content-manage-frame">
                      
                      <p></p>
                    </div>
                  </div>
                </div>

                <!-- ELEMENT 02 -->
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
                      <h5>Simple and Useful</h5>
                      <p>
                        Tokenisation is a technology in which a sensitive data element is substituted with a non-sensitive equivalent, or “token”, that has no exploitable meaning or value. 
                      </p>
                    </div>
                  </div>
                </div>

                <!-- ELEMENT 03 -->
                <div class="col-12 col-md-12">
                  <div class="twoline-managing-frame">
                    <div class="img-manage">
                      <img
                        src="../assets/images/fingerprint.png"
                        class="img-fluid"
                        alt="feature-icon-1"
                      />
                    </div>
                    <div class="content-manage-frame">
                      <h5>Improving security</h5>
                      <p>
                        Tokenisation of mobile phone numbers can improve security, not only for women, 
                        but for all customers interested in keeping their number private. It can contribute 
                        to achieving gender equality and empowering all women and girls in line with UN 
                        Sustainable Development Goal 5. 
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


    <!-- FRAME 04: FEATURES -->
    <div class="digital-wrapper feature-wrap bg-greys">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="feature-content text-center">
              <h2>Why choose mobile tokenisation?</h2>
              <h5>Provide your customers with inclusive innovations to enhance their digital safety.</h5>
            </div>
            <div class="three-col-feature-frame">
              <div class="row justify-content-center">
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="card-wrap">
                    <img src="../assets/images/development.png" class="img-fluid" alt="development" />
                    <h5>Safety and Security</h5>
                    <h6>
                      Tokenisation of mobile phone numbers is a simple and innovative way to 
                      improve safety and security for all customers wanting to keep their 
                      phone number private.  
                    </h6>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="card-wrap">
                    <img src="../assets/images/trusted.png" class="img-fluid" alt="trusted" />
                    <h5>Built for the context of low- and middle-income countries </h5>
                    <h6>
                      Our solutions use an intuitive and familiar interaction, accommodating users’ 
                      existing digital skills and behaviours and not requiring changes in the current
                      user or agent interfaces.
                    </h6>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="card-wrap">
                    <img src="../assets/images/smartphones.png" class="img-fluid" alt="smartphones" />
                    <h5>Open-souce code</h5>
                    <h6>
                      Our solutions are built to work on any type of mobile device 
                      (smart phone or feature phone), has the user as the centre of 
                      our development, and our code is publicly available. 
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  
    <Footer />
  </div>
</template>

<script>
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
export default {
  name: 'Home',
  components: { NavBar, Footer },
};
</script>
<style>
.home-header {
  background-image: linear-gradient(180deg, #921D61  0%, #4F5691 100%);
}
.home-header::before {
  content: '';
  background-image: url('../assets/images/bg-home-dots-01.png');
  background-position: bottom;
  position: absolute;
  top: 2px;
  left: 0;
  width: 421px;
  height: 625px;
  background-repeat: no-repeat;
}
.slider-portfolio {
  min-height: 511px;
  position: relative;
}
.slider-portfolio .carousel-item {
  z-index: 9;
}
.slider-portfolio::after {
  content: '';
  /* background-image: url('../assets/images/dots.png'); */
  background-position: top;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 365px;
  height: 270px;

  z-index: 0;
  background-repeat: no-repeat;
}
.slider-portfolio .carousel-item img {
  height: fit-content;
  object-fit: contain;
  object-position: right;
  padding-top: 135px;
  float: right;
  padding-top: 0px;
  padding-right: 14px;
}
.slider-portfolio .carousel-control-next-icon,
.slider-portfolio .carousel-control-prev-icon {
  display: none;
}
.slider-portfolio .carousel-indicators {
  justify-content: flex-start;
  margin-left: 108px;
  bottom: 63px;
}
.slider-portfolio .carousel-indicators li:focus,
.slider-portfolio .carousel-indicators li.active {
  outline: none;
  border: none;
}
.carousel-caption {
  position: absolute;
  right: 0;
  bottom: 80px;
  left: 0;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: left;

  margin-left: 108px;
}
.slider-portfolio .carousel-caption h1,
.slider-portfolio .carousel-caption h4 {
  color: #ffffff;
}
.slider-portfolio .carousel-indicators li {
  background-color: rgba(255, 255, 255, 0.33);
  border-radius: 50%;
  width: 10px;
  height: 10px;
  border-top: none;
  border-bottom: none;
}
.slider-portfolio .carousel-indicators li.active {
  background-color: #ffffff;
  border-radius: 5px;
  width: 28px;
  height: 10px;
}

.slider-portfolio .os-system-wrap ul {
  padding-left: 0;
}
.slider-portfolio .os-system-wrap {
  display: block;
  padding-left: 0;
  margin: auto;
  text-align: left;
  position: relative;
}
/* .slider-portfolio .os-system-wrap .img-soon{
  position: absolute;
      bottom: 9px;
      top: 0;
}
.slider-portfolio .os-system-wrap  span.img-soon img {
    max-width: 90px;
    height: auto;
    margin-top: -16px;
} */

.slider-portfolio .os-system-wrap ul li {
  display: inline-block;
  list-style-type: none;
  padding: 20px 0;
}

.slider-portfolio .os-system-wrap ul li img {
  max-width: 230px;
}
.digital-wrapper {
  padding: 82px 0;
  padding-bottom: 0;
}
.digital-wrapper h4 {
  padding-bottom: 40px;
  margin-bottom: 0;
}
.digital-wrapper .full-width-banner h4 {
  padding-bottom: 30px;
}
.mobile-group-banner {
  background-image: url('../assets/images/group10.png');
  min-height: 621px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: -201px;
  z-index: 0;
}
.digital-wrapper {
  position: relative;
}
.full-width-banner {
  padding-top: 60px;
  padding-bottom: 32px;
}
/* .digital-wrapper::before {
  content: '';
  background-image: url('../assets/images/biometric-bg-icon-2.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  width: 243px;
  height: 232px;
  left: 11px;
  top: 36px;
}
.digital-wrapper::after {
  content: '';
  background-image: url('../assets/images/biometric-bg-icon-1.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 141px;
  height: 135px;
} */

.two-col-biometric-wrap {
  min-height: 556px;
  background-image: url('../assets/images/bg-01.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 1;
  position: relative;
}
.two-col-biometric-wrap .biometric-img-block {
  display: flex;
  justify-content: center;
  align-items: center;
}
.two-col-biometric-wrap .bg-biometric,
.two-col-biometric-wrap .bg-biometric2,
.two-col-biometric-wrap .bg-biometric3 {
  justify-content: center;

  display: flex;

  align-items: center;
  margin: auto;
  border-radius: 10px;
  position: relative;
}
.two-col-biometric-wrap .bg-biometric {
  width: 100%;
  min-width: 188px;
  min-height: 188px;
}
.two-col-biometric-wrap .bg-biometric2,
.two-col-biometric-wrap .bg-biometric3 {
  width: 160px;
  min-width: 160px;
  min-height: 163px;
  /* height: 163px; */
  padding: 10px;
  margin-top: 20px;
  /* margin-right: 20px; */
}
.two-col-biometric-wrap .bg-biometric3.bg-blue {
  margin-left: 20px;
}
.two-col-biometric-wrap .bg-biometric::before {
  content: '';
  background-image: url('../assets/images/biometric-bg-icon-1.png');
  position: absolute;
  background-position: center;
  background-size: contain;
  left: -132px;
  top: -47px;
  background-repeat: no-repeat;
  width: 150px;
  min-height: 150px;
  z-index: -1;
}
.two-col-biometric-wrap .bg-biometric2::before {
  content: '';
  background-image: url('../assets/images/biometric-bg-icon-2.png');
  position: absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  right: 128px;
  top: -54px;
  width: 150px;
  min-height: 150px;
  z-index: -1;
}
.two-col-biometric-wrap .bg-biometric3::before {
  content: '';
  background-image: url('../assets/images/biometric-bg-icon-3.png');
  position: absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  left: 105px;
  bottom: -71px;
  width: 150px;
  min-height: 150px;
  z-index: -1;
}
.mb-20 {
  margin-bottom: 20px !important;
}
.bg-black {
  background: #000000;
}
.bg-white {
  background: #ffff;
}
.bg-blue {
  background: #1f2747;
}
.row.gutter-20 {
  margin-left: -10px;
  margin-right: -10px;
}
.row.gutter-20 [class*='col-'] {
  padding-left: 10px;
  padding-right: 10px;
}
.two-col-biometric-wrap .biometric-right-col {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  height: 100%;
}
.card-header {
  background-color: transparent !important;
}
.card-header p-1 {
  display: block;
  padding: 16px 20px;
  padding-right: 35px;
  font-size: 16px;
  color: #000;
  font-weight: 700;
}
.accordion .card .card-header {
  padding: 0;
  border-bottom: 0;
  background: transparent;
}
.accordion .card {
  border: none;
  border-bottom: 1px solid #cccccc !important;
  padding: 0;
}
.accordion .card .card-body p {
  margin-bottom: 0;
}

.question-bold a {
  font-weight: 700;
  color: #95236c;
  padding-left: 10px;
}
.question-wrapper {
  padding: 40px 0;
}
.question-wrapper .btn-light:hover {
  color: transparent;
  background-color: transparent;
  border-color: transparent;
}
.question-wrapper .btn.focus,
.btn:focus {
  box-shadow: none;
}
.questions-frame {
  padding: 40px 0;
}
.question-wrapper .headline-accordion-wrap {
  padding: 10px 0;
}
.accordion .card .card-header .card-link {
  display: block;
  padding: 16px 20px;
  padding-right: 35px;
  font-size: 16px;
  color: #000;
  font-weight: 700;
  background: transparent;
  border: none;
  text-align: left;
  padding-left: 0;
}
.accordion .card .card-body {
  padding-top: 0;
  padding-left: 0;
}

.accordion .card .card-header .card-link[aria-expanded='true'] {
  color: #95236c;
}
.accordion .card .card-header .card-link .collapsed > .when-opened {
  color: #95236c;
  content: '';
  background-image: url('../assets/images/accordion-arrow-active.svg');
}

.accordion .card .card-header .card-link.collapsed > .when-opened,
:not(.collapsed) > .when-closed::after {
  content: '';
  background-image: url('../assets/images/accordion-arrow-active.svg');
}
.accordion .card .card-header .card-link::after {
  content: '';
  position: absolute;
  background-image: url('../assets/images/accordion-arrow.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 20px;
  height: 20px;
  line-height: 20px;
  right: 15px;
  top: 21px;
  display: block;
  transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
.content-digital p {
  color: #000000;
}
.accordion .btn-light:not(:disabled):not(.disabled).active:focus,
.accordion .btn-light:not(:disabled):not(.disabled):active:focus,
.accordion .show > .btn-light.dropdown-toggle:focus,
.accordion .card .card-header .card-link.active {
  outline: none;
  box-shadow: none;
  border: none;
}
.accordion .card .card-header .card-link[aria-expanded='true']::after {
  content: '';
  background-image: url('../assets/images/accordion-arrow-active.svg');
}
.card-link .btn-light:hover {
  color: #fdfdfe;
  background-color: transparent;
  border-color: transparent;
}
.btn,
.btn:hover {
  background-color: #95236c;
  border-radius: 6px;
  min-width: 155px;
  min-height: 50px;
  color: #fff;
  padding: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}
.digital-wrapper.feature-wrap {
  padding-top: 58px;
}
.digital-wrapper.feature-wrap .feature-content h2 {
  margin-bottom: 0;
  padding-bottom: 16px;
}
.feature-wrap .three-col-feature-frame {
  padding-top: 41px;
  padding-bottom: 97px;
}
@media only screen and (min-width: 1025px) {
  .slider-img {
    width: 650px;
    height: 471px !important;
  }
}
@media only screen and (max-width: 1204px) {
  .two-col-biometric-wrap {
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
@media only screen and (max-width: 1024px) {
  .carousel-caption {
    bottom: 100px;
  }
  .slider-portfolio .carousel-indicators {
    margin-left: 69px;
  }
  .slider-portfolio .carousel-caption {
    margin-left: 69px;
  }
  .home-header::before {
    height: 505px;
  }
  .slider-img {
    width: 400px;
    height: 400px !important;
  }
  .slider-portfolio {
    min-height: 400px;
  }

  .questions-frame {
    padding-bottom: 0;
  }
}
@media only screen and (max-width: 993px) {
  .mobile-group-banner {
    min-height: 450px;
    background-size: contain;
  }

  .slider-portfolio .os-system-wrap ul li {
    padding-bottom: 0;
    padding-top: 15px;
  }
  .biometric-content-carousal {
    display: none;
  }
}
@media only screen and (min-width: 768px) {
  .btn-mob {
    display: none;
  }
}
@media only screen and (max-width: 767px) {
  .two-col-biometric-wrap .biometric-right-col {
    flex-direction: column;
  }
  .two-col-biometric-wrap .bg-biometric3.bg-blue {
    margin-left: 0;
  }
  .two-col-biometric-wrap .bg-biometric2,
  .two-col-biometric-wrap .bg-biometric3 {
    margin-top: 0;
    margin-bottom: 30px;
  }
  .digital-wrapper::before {
    width: 150px;
    height: 200px;
    left: -4px;
    top: -18px;
  }
  .digital-wrapper::after {
    display: none;
  }
  .mobile-group-banner {
    min-height: 220px;
  }
  .mobile-group-banner {
    margin-bottom: -64px;
  }
  .app-downloading-wrapper .downloading-frame ul,
  .os-system-wrap {
    display: inline-flex;
  }
  .app-downloading-wrapper .downloading-frame {
    padding: 30px 0;
    padding-bottom: 150px;
  }

  .two-col-biometric-wrap .bg-biometric,
  .two-col-biometric-wrap .bg-biometric2,
  .two-col-biometric-wrap .bg-biometric3 {
    min-height: 145px;
    margin-bottom: 30px;
    width: 100%;
  }
  .btn-lap {
    display: none;
  }
  .slider-img {
    width: 300px;
    height: 269px !important;
    margin: auto;
    text-align: center;
  }
  .slider-portfolio .carousel-caption {
    right: 0;
    text-align: center;
    left: 0;
    bottom: -69px;
    margin: auto;
  }
  .slider-portfolio .carousel-indicators {
    margin: auto;
    justify-content: center;
    bottom: 43px;
  }
  .slider-portfolio .carousel-item img,
  .slider-portfolio .carousel-item {
    float: none;
    text-align: center;
    margin: auto;
  }
  .slider-portfolio .carousel.pointer-event,
  .slider-portfolio .carousel-inner {
    min-height: 400px;
  }
}
@media only screen and (max-width: 480px) {
  .home-header::before {
    height: 400px;
    width: 100%;
  }
  .slider-portfolio::after {
    width: 100%;
    height: 156px;
  }
}
</style>
