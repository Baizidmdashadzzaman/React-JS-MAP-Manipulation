import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
<div>
  {/*/Header*/}
  <header id="site-header" className="fixed-top nav-fixed">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
        <h1><a className="navbar-brand" href="index.html">
            <span className="w3yellow">C<i className="fab fa-asymmetrik" />r </span>Transko
          </a></h1>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon fa icon-expand fa-bars" />
          <span className="navbar-toggler-icon fa icon-close fa-times" />
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav ms-lg-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link scroll" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link scroll" href="#services">Services</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#Pages" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Drop Down <span className="fa fa-angle-down ms-1" />
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item pt-2 scroll" href="#counts">Stats</a></li>
                <li><a className="dropdown-item scroll" href="#team">Team</a></li>
                <li><a className="dropdown-item scroll" href="#portfolio">Gallery</a></li>
                <li><a className="dropdown-item scroll" href="#pricing">Pricing</a></li>
                <li><a className="dropdown-item scroll" href="#blog">Blog Posts</a></li>
                <li><a className="dropdown-item scroll" href="#testimonials">Testimonials</a></li>
              </ul>
            </li>
            <li className="nav-item me-lg-4">
              <a className="nav-link scroll" href="#contact">Contact</a>
            </li>
          </ul>
          {/*/search-right*/}
          <ul className="header-search me-lg-4">
            <div className="search-right">
              <form action="#" method="GET" className="search-box">
                <input type="search" placeholder="Enter Keyword" name="search" required="required" autofocus />
                <button type="submit" className="btn"><span className="fas fa-search" aria-hidden="true" /></button>
              </form>
            </div>
          </ul>
          {/*//search-right*/}
        </div>
        {/* toggle switch for light and dark theme */}
        <div className="mobile-position">
          <nav className="navigation">
            <div className="theme-switch-wrapper">
              <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" />
                <div className="mode-container">
                  <i className="gg-sun" />
                  <i className="gg-moon" />
                </div>
              </label>
            </div>
          </nav>
        </div>
        {/* //toggle switch for light and dark theme */}
      </nav>
    </div>
  </header>
  {/*//Header*/}
  {/*/Banner-Start*/}
  {/*/main-banner*/}
  <div className="w3l-main-slider position-relative" id="home" style={{paddingTop:'60px'}}>
    <div className="w3l-bannerhny-content">
      <div className="container">
        <div className="w3l-bannerhny-info">
          <h3 className="mb-md-5 mb-4">
            Now
            It's
            Easy for you
            Rent a Car</h3>
          <div className="banner-form-w3">
            {/*/Request-a-call-form */}
            <form action method="post">
              <div className="form-style-w3ls">
                <div className="form-gd">
                  <label htmlFor="input_from">Shipping From</label>
                  <input type="text" name="Name" placeholder="Enter city" required="required" />
                </div>
                <div className="form-gd">
                  <label htmlFor="input_from">Shipping to</label>
                  <input type="text" name="Name" placeholder="Enter city" required="required" />
                </div>
                <div className="form-gd">
                  <label htmlFor="input_from">Submit</label>
                  <button className="btn btn-style btn-primary"> Send request</button>
                </div>
              </div>
            </form>
            <div className="form-footer mt-3">
              <span className="info">
                <b>
                  Get your <i>Free quote</i>
                </b>
                by completing our quick form - or -
                <a href="tel:+(21) 255 999 8888">+(21) 255 999 8888</a>
              </span>
            </div>
            {/* //Request-a-call-form */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*//main-banner*/}
  {/*/Client-Section*/}
  <section id="about" className="clients">
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-6 pe-lg-5">
          <div className="title-content text-left">
            <h6 className="title-subw3hny mb-2"><span>About Us</span></h6>
            <h3 className="title-w3l">We take pride in serving our customers safely.</h3>
          </div>
        </div>
        <div className="col-lg-6 mt-lg-0 mt-md-5 mt-4 ps-lg-5 mx-lg-0">
          <p className="pr-lg-5">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
            ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet
            elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet.Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
            ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet
            elit. Non quae, fugiat nihil ad.</p>
        </div>
      </div>
      <div className="car-img mx-0 text-center px-lg-5">
        <img src="assets/images/1.png" alt className="img-fluid" />
      </div>
    </div>
  </section>
  {/*//client-Section*/}
  {/*/About-Section*/}
  <section id="about" className="w3labout section-bg">
    <div className="container">
      <div className="row no-gutters">
        <div className="content col-xl-5 d-flex align-items-stretch">
          <div className="content">
            <h6 className="title-subw3hny two mb-2"><span>Why Us</span></h6>
            <h3 className="title-w3l two">Voluptatem dignissimos provident quasi</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
            </p>
            <a href="about.html" className="btn btn-style btn-primary about-btn mt-3"> Read More</a>
          </div>
        </div>
        <div className="col-xl-7 d-flex align-items-stretch">
          <div className="icon-boxes d-flex flex-column justify-content-center">
            <div className="row">
              <div className="col-md-6 icon-box">
                <i className="fas fa-archway" />
                <h4>
                  Auto
                  Driveaway</h4>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod.</p>
              </div>
              <div className="col-md-6 icon-box">
                <i className="fas fa-taxi" />
                <h4>
                  Student
                  Vehicles</h4>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod.</p>
              </div>
              <div className="col-md-6 icon-box">
                <i className="fas fa-boxes" />
                <h4>
                  Closed Carrier
                  Transport</h4>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod.</p>
              </div>
              <div className="col-md-6 icon-box">
                <i className="fas fa-baby-carriage" />
                <h4>
                  Corporate
                  Relocation</h4>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod.</p>
              </div>
            </div>
          </div>
          {/*//End-content*/}
        </div>
      </div>
    </div>
  </section>
  {/*//About-Section*/}
  {/*/Counts-Section*/}
  <section id="counts" className="w3lcounts">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 w3stats_info counter_grid">
          <div className="count-box">
            <i className="fas fa-users" />
            <p className="counter">960</p>
            <p>Happy Clients</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-md-0 w3stats_info counter_grid">
          <div className="count-box">
            <i className="far fa-images" />
            <p className="counter">1560</p>
            <p>Projects</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 w3stats_info counter_grid">
          <div className="count-box">
            <i className="fas fa-headset" />
            <p className="counter">1660</p>
            <p>Hours Of Support</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 w3stats_info counter_grid">
          <div className="count-box">
            <i className="fas fa-user-tie" />
            <p className="counter">860</p>
            <p>Hard Workers</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*//Counts-Section*/}
  {/*/Tab-section*/}
  <section id="tabs" className="tabs">
    <div className="container">
      <ul className="nav nav-tabs row d-flex">
        <li className="nav-item col-3">
          <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
            <i className="fas fa-shield-alt" />
            <h4 className="d-none d-lg-block">Guaranteed Quality</h4>
          </a>
        </li>
        <li className="nav-item col-3">
          <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
            <i className="fas fa-spinner" />
            <h4 className="d-none d-lg-block">Get There Faster</h4>
          </a>
        </li>
        <li className="nav-item col-3">
          <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
            <i className="fas fa-hand-holding-usd" />
            <h4 className="d-none d-lg-block">Lowest Pricing</h4>
          </a>
        </li>
        <li className="nav-item col-3">
          <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
            <i className="fas fa-dungeon" />
            <h4 className="d-none d-lg-block">Driveaway Specialists</h4>
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane active show" id="tab-1">
          <div className="row mt-5">
            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
              <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
              <p className="fst-italic mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul className="mt-3">
                <li><i className="fas fa-check-double" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className="fas fa-check-double" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i className="fas fa-check-double" /> Ullamco laboris nisi ut aliquip ex ea commodo.</li>
              </ul>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center ps-lg-5">
              <img src="assets/images/g1.jpg" alt className="img-fluid radius-image" />
            </div>
          </div>
        </div>
        <div className="tab-pane" id="tab-2">
          <div className="row mt-5">
            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
              <h3>Neque exercitationem debitis soluta quos debitis quo mollitia officia est</h3>
              <p className="fst-italic mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul className="mt-3">
                <li><i className="fas fa-check-double" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className="fas fa-check-double" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i className="fas fa-check-double" /> Ullamco laboris nisi ut aliquip ex ea commodo.</li>
              </ul>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center ps-lg-5">
              <img src="assets/images/g2.jpg" alt className="img-fluid radius-image" />
            </div>
          </div>
        </div>
        <div className="tab-pane" id="tab-3">
          <div className="row mt-5">
            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
              <h3>Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut assumenda</h3>
              <p className="fst-italic mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul className="mt-3">
                <li><i className="fas fa-check-double" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className="fas fa-check-double" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i className="fas fa-check-double" /> Ullamco laboris nisi ut aliquip ex ea commodo.</li>
              </ul>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center ps-lg-5">
              <img src="assets/images/g3.jpg" alt className="img-fluid radius-image" />
            </div>
          </div>
        </div>
        <div className="tab-pane" id="tab-4">
          <div className="row mt-5">
            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
              <h3>Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum</h3>
              <p className="fst-italic mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul className="mt-3">
                <li><i className="fas fa-check-double" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className="fas fa-check-double" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i className="fas fa-check-double" /> Ullamco laboris nisi ut aliquip ex ea commodo.</li>
              </ul>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center ps-lg-5">
              <img src="assets/images/g5.jpg" alt className="img-fluid radius-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*//abs-Section */}
  {/*/Services-Section */}
  <section id="services" className="services section-bg w3lpricing">
    <div className="container">
      <div className="section-title">
        <h6 className="title-subw3hny two mb-2"><span>What We Offer</span></h6>
        <h3 className="title-w3l two mb-4">High Quality Services</h3>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="box-wrap">
            <div className="box-wrap-grid">
              <div className="icon">
                <span className="fas fa-percent" />
              </div>
              <div className="info">
                <h4><a href="#url">Fixed Rates</a></h4>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur ipsum elit. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-md-0 mt-4">
          <div className="box-wrap">
            <div className="box-wrap-grid">
              <div className="icon">
                <span className="fas fa-exchange-alt" />
              </div>
              <div className="info">
                <h4><a href="#url">
                    Reliable Transfers</a></h4>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur ipsum elit. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-0 mt-4">
          <div className="box-wrap">
            <div className="box-wrap-grid">
              <div className="icon">
                <span className="fas fa-user-friends" />
              </div>
              <div className="info">
                <h4><a href="#url">Free Cancellation</a></h4>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur ipsum elit. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
          <div className="box-wrap">
            <div className="box-wrap-grid">
              <div className="icon">
                <span className="fas fa-car" />
              </div>
              <div className="info">
                <h4><a href="#url">
                    Quality Vehicles</a></h4>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur ipsum elit. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
          <div className="box-wrap">
            <div className="box-wrap-grid">
              <div className="icon">
                <span className="fas fa-trophy" />
              </div>
              <div className="info">
                <h4><a href="#url">
                    Award winning</a></h4>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur ipsum elit. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
          <div className="box-wrap">
            <div className="box-wrap-grid">
              <div className="icon">
                <span className="fas fa-headset" />
              </div>
              <div className="info">
                <h4><a href="#url">
                    Online Support 24/7</a></h4>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur ipsum elit. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*//Services-Section */}
  {/*/*/}
  {/*/Team-Section*/}
  <section id="team" className="w3l-team">
    <div className="container">
      <div className="section-title">
        <h6 className="title-subw3hny mb-2"><span>Talented Team</span></h6>
        <h3 className="title-w3l"> Our Experts</h3>
      </div>
      <div className="row team-row">
        {/*start-team member */}
        <div className="col-lg-4 col-sm-6 team-wrap mt-lg-5 mt-4">
          <div className="team-member last text-center">
            <div className="team-img">
              <img src="assets/images/team1.jpg" alt className="img-fluid radius-image" />
              <div className="overlay">
                <div className="team-details text-center">
                  <p>
                    Our web design team will spend time with our digital marketing team.
                  </p>
                  <div className="socials mt-4">
                    <a href="#url"><i className="fab fa-facebook-f" /></a>
                    <a href="#url"><i className="fab fa-twitter" /></a>
                    <a href="#url"><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
            <a href="#team">
              <h6 className="team-title">Sarah Jhonson</h6>
            </a>
            <p>Founder</p>
          </div>
        </div>
        {/* end team member */}
        <div className="col-lg-4 col-sm-6 team-wrap mt-lg-5 mt-4">
          <div className="team-member last text-center">
            <div className="team-img">
              <img src="assets/images/team2.jpg" alt className="img-fluid radius-image" />
              <div className="overlay">
                <div className="team-details text-center">
                  <p>
                    Our web design team will spend time with our digital marketing team.
                  </p>
                  <div className="socials mt-4">
                    <a href="#url"><i className="fab fa-facebook-f" /></a>
                    <a href="#url"><i className="fab fa-twitter" /></a>
                    <a href="#url"><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
            <a href="#team">
              <h6 className="team-title">Emma Susan</h6>
            </a>
            <p>Manager</p>
          </div>
        </div>
        {/* end team member */}
        <div className="col-lg-4 col-sm-6 team-wrap mt-lg-5 mt-4">
          <div className="team-member last text-center">
            <div className="team-img">
              <img src="assets/images/team4.jpg" alt className="img-fluid radius-image" />
              <div className="overlay">
                <div className="team-details text-center">
                  <p>
                    Our web design team will spend time with our digital marketing team.
                  </p>
                  <div className="socials mt-4">
                    <a href="#url"><i className="fab fa-facebook-f" /></a>
                    <a href="#url"><i className="fab fa-twitter" /></a>
                    <a href="#url"><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
            <a href="#team">
              <h6 className="team-title">William Anderson</h6>
            </a>
            <p>Advisor</p>
          </div>
        </div>
        {/* end team member */}
      </div>
    </div>
  </section>
  {/*//Team-Section*/}
  {/*/blog-Section*/}
  <section id="blog" className="w3l-blog section-bg">
    <div className="container">
      <div className="section-title">
        <h6 className="title-subw3hny two mb-2"><span>Latest News</span></h6>
        <h3 className="title-w3l two">Blog Posts</h3>
      </div>
      <div className="row pb-5 w3l-courses">
        <div className="col-md-12 mx-auto pb-lg-5 pb-3">
          <div className="owl-two owl-carousel owl-theme row">
            <div className="item col-lg-4 col-md-6 mt-lg-5 mt-4">
              <div className="card">
                <div className="card-header p-0 position-relative">
                  <a href="#cardblog" className="zoom d-block">
                    <img className="card-img-bottom d-block" src="assets/images/g1.jpg" alt="Card image cap" />
                  </a>
                </div>
                <div className="card-body course-details">
                  <a href="#cardblog" className="course-desc">Lorem ipsum dolor sit
                  </a>
                  <p className="mt-3">Lorem ipsum dolor sit, amet consectetur elit consectetur . </p>
                  <div className="blog-bottom-info">
                    <div className="course-meta">
                      <div className="meta-item course-lesson">
                        <span className="fas fa-heart" />
                        <span className="meta-value"> 24 </span>
                      </div>
                      <div className="meta-item course-students">
                        <span className="fas fa-eye" />
                        <span className="meta-value"> 125 </span>
                      </div>
                      <div className="meta-item course-students">
                        <span className="fas fa-calendar-week" />
                        <span className="meta-value"> 13.07.2021 </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item col-lg-4 col-md-6 mt-lg-5 mt-4">
              <div className="card">
                <div className="card-header p-0 position-relative">
                  <a href="#cardblog" className="zoom d-block">
                    <img className="card-img-bottom d-block" src="assets/images/g2.jpg" alt="Card image cap" />
                  </a>
                </div>
                <div className="card-body course-details">
                  <a href="#cardblog" className="course-desc">Lorem ipsum dolor sit
                  </a>
                  <p className="mt-3">Lorem ipsum dolor sit, amet consectetur elit consectetur . </p>
                  <div className="blog-bottom-info">
                    <div className="course-meta">
                      <div className="meta-item course-lesson">
                        <span className="fas fa-heart" />
                        <span className="meta-value"> 24 </span>
                      </div>
                      <div className="meta-item course-students">
                        <span className="fas fa-eye" />
                        <span className="meta-value"> 125 </span>
                      </div>
                      <div className="meta-item course-students">
                        <span className="fas fa-calendar-week" />
                        <span className="meta-value"> 23.07.2021 </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item col-lg-4 col-md-6 mt-lg-5 mt-4">
              <div className="card">
                <div className="card-header p-0 position-relative">
                  <a href="#cardblog" className="zoom d-block">
                    <img className="card-img-bottom d-block" src="assets/images/g3.jpg" alt="Card image cap" />
                  </a>
                </div>
                <div className="card-body course-details">
                  <a href="#cardblog" className="course-desc">Lorem ipsum dolor sit
                  </a>
                  <p className="mt-3">Lorem ipsum dolor sit, amet consectetur elit consectetur . </p>
                  <div className="blog-bottom-info">
                    <div className="course-meta">
                      <div className="meta-item course-lesson">
                        <span className="fas fa-heart" />
                        <span className="meta-value"> 24 </span>
                      </div>
                      <div className="meta-item course-students">
                        <span className="fas fa-eye" />
                        <span className="meta-value"> 125 </span>
                      </div>
                      <div className="meta-item course-students">
                        <span className="fas fa-calendar-week" />
                        <span className="meta-value"> 25.07.2021 </span>
                      </div>
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
  {/*//Team-Section*/}
  {/*/Portfolio-Section */}
  <section id="portfolio" className="portfolio w3l-gallery">
    <div className="container">
      <div className="section-title">
        <h6 className="title-subw3hny mb-2"><span>Our Gallery</span></h6>
        <h3 className="title-w3l mb-2"> Recent Deliveries</h3>
      </div>
      {/*/grids-grids*/}
      <ul className="gallery_agile mt-4">
        <li>
          <div className="w3_agile_portfolio_grid">
            <a href="#">
              <img src="assets/images/g1.jpg" alt=" " className="img-fluid radius-image" />
              <div className="w3layouts_news_grid_pos">
                <div className="wthree_text">
                  <h3><i className="fas fa-search" /></h3>
                </div>
              </div>
            </a>
          </div>
          <div className="w3_agile_portfolio_grid mt-4">
            <a href="#">
              <img src="assets/images/g2.jpg" alt=" " className="img-fluid radius-image" />
              <div className="w3layouts_news_grid_pos">
                <div className="wthree_text">
                  <h3><i className="fas fa-search" /></h3>
                </div>
              </div>
            </a>
          </div>
        </li>
        <li>
          <div className="w3_agile_portfolio_grid">
            <a href="#">
              <img src="assets/images/g3.jpg" alt=" " className="img-fluid radius-image" />
              <div className="w3layouts_news_grid_pos">
                <div className="wthree_text">
                  <h3><i className="fas fa-search" /></h3>
                </div>
              </div>
            </a>
          </div>
          <div className="w3_agile_portfolio_grid mt-4">
            <a href="#">
              <img src="assets/images/g4.jpg" alt=" " className="img-fluid radius-image" />
              <div className="w3layouts_news_grid_pos">
                <div className="wthree_text">
                  <h3><i className="fas fa-search" /></h3>
                </div>
              </div>
            </a>
          </div>
        </li>
        <li>
          <div className="w3_agile_portfolio_grid">
            <a href="#">
              <img src="assets/images/g5.jpg" alt=" " className="img-fluid radius-image" />
              <div className="w3layouts_news_grid_pos">
                <div className="wthree_text">
                  <h3><i className="fas fa-search" /></h3>
                </div>
              </div>
            </a>
          </div>
          <div className="w3_agile_portfolio_grid mt-4">
            <a href="#">
              <img src="assets/images/g6.jpg" alt=" " className="img-fluid radius-image" />
              <div className="w3layouts_news_grid_pos">
                <div className="wthree_text">
                  <h3><i className="fas fa-search" /></h3>
                </div>
              </div>
            </a>
          </div>
        </li>
      </ul>
      {/*//rids-grids*/}
    </div>
  </section>
  {/*//Portfolio-Section */}
  {/*/Testimonials/Section*/}
  <section id="testimonials" className="w3l-clients-1 testimonials">
    <div className="container">
      {/*/testimonial-grids*/}
      <div className="testimonial-row">
        <div id="owl-demo1" className="owl-testimonial owl-carousel owl-theme">
          <div className="item">
            <div className="testimonial-content">
              <div className="testimonial">
                <div className="test-img">
                  <img src="assets/images/team1.jpg" className="img-fluid" alt="client-img" />
                </div>
                <div className="testi-des">
                  <i className="fas fa-quote-left" />
                  <div className="peopl align-self">
                    <h3>Dennis wilson</h3>
                  </div>
                </div>
                <blockquote>
                  Lorem ipsum dolor sit amet int consectetur adipisicing elit. Velita beatae
                  laudantium Quas minima sunt natus tempore, maiores aliquid modi felis vitae
                  facere aperiam sequi optio lacinia id ipsum non velit, culpa.
                  voluptate rem ullam dolore nisi est quasi, doloribus tempora.
                </blockquote>
                <ul className="social-media-test m-0 mt-4 p-0">
                  <li><a href="#facebook" className="facebook"><span className="fab fa-facebook-f" /></a></li>
                  <li><a href="#twitter" className="twitter"><span className="fab fa-twitter" /></a>
                  </li>
                  <li><a href="#instagram" className="instagram"><span className="fab fa-instagram" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*//testimonial-grids*/}
    </div>
  </section>
  {/*//Testimonials/Section*/}
  {/*/Pricing-Section*/}
  <section id="pricing" className="w3lpricing section-bg">
    <div className="container">
      <div className="section-title">
        <h6 className="title-subw3hny two mb-2"><span>Our Plans</span></h6>
        <h3 className="title-w3l two mb-2">Pricing Plans</h3>
      </div>
      <div className="row mt-lg-4 mt-2">
        <div className="col-lg-3 col-md-6">
          <div className="box">
            <h3>Free Trail</h3>
            <h4><sup>$</sup>0<span> / Per Day</span></h4>
            <ul>
              <li>
                Air Conditioning</li>
              <li> Audio input</li>
              <li> DVD Video System</li>
              <li>All Wheel drive</li>
              <li className="na">USB input</li>
            </ul>
            <div className="btn-wrap">
              <a href="#" className="btn-buy btn btn-style btn-primary">Buy Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
          <div className="box featured">
            <h3>Business</h3>
            <h4><sup>$</sup>49<span> / Per Day</span></h4>
            <ul>
              <li>
                Air Conditioning</li>
              <li> Audio input</li>
              <li> DVD Video System</li>
              <li>All Wheel drive</li>
              <li className="na">USB input</li>
            </ul>
            <div className="btn-wrap">
              <a href="#" className="btn-buy btn btn-style btn-primary">Buy Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
          <div className="box">
            <h3>Personal</h3>
            <h4><sup>$</sup>69<span> / Per Day</span></h4>
            <ul>
              <li>
                Air Conditioning</li>
              <li> Audio input</li>
              <li> DVD Video System</li>
              <li>All Wheel drive</li>
              <li>USB input</li>
            </ul>
            <div className="btn-wrap">
              <a href="#" className="btn-buy btn btn-style btn-primary">Buy Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
          <div className="box">
            <h3>Travel</h3>
            <h4><sup>$</sup>99<span> / Per Day</span></h4>
            <ul>
              <li>
                Air Conditioning</li>
              <li> Audio input</li>
              <li> DVD Video System</li>
              <li>All Wheel drive</li>
              <li className="na">USB input</li>
            </ul>
            <div className="btn-wrap">
              <a href="#" className="btn-buy btn btn-style btn-primary">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*/Pricing-Section*/}
  {/*/contact*/}
  <section id="contact" className="contact">
    <div className="container">
      <div className="section-title">
        <h6 className="title-subw3hny mb-2"><span>Contact Us</span></h6>
        <h3 className="title-w3l mb-2">Get In Touch With Us</h3>
        <p className="w3conatact-p mb-4">Start working with Us that can provide everything you need to generate awareness, drive traffic, connect.
          We guarantee that you’ll be able to have any issue resolved within 24 hours.</p>
      </div>
      <div className="row">
        <div className="col-lg-5 pe-lg-5">
          <div className="row">
            <div className="cont-details">
              <div className="cont-top" data-aos="fade-up" data-aos-duration={3000}>
                <div className="cont-left text-center">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="cont-right">
                  <h6>Company Address</h6>
                  <p>Car Transko,#2214 cravel street, NY - 34336.</p>
                </div>
              </div>
              <div className="cont-top margin-up" data-aos="fade-up" data-aos-duration={3000}>
                <div className="cont-left text-center">
                  <i className="fas fa-phone-alt" />
                </div>
                <div className="cont-right">
                  <h6>Call Us</h6>
                  <p><a href="tel:+1(21) 343 5677">+1(21) 343 5677</a></p>
                  <p><a href="tel:+1(21) 343 5678">+1(21) 343 5678</a></p>
                </div>
              </div>
              <div className="cont-top margin-up" data-aos="fade-up" data-aos-duration={3000}>
                <div className="cont-left text-center">
                  <i className="far fa-envelope" />
                </div>
                <div className="cont-right">
                  <h6>Email Us</h6>
                  <p><a href="mailto:example@mail.com" className="mail">example@mail.com</a></p>
                  <p><a href="mailto:example@mail2.com" className="mail">example@mail2.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 mt-lg-0 mt-5" data-aos="fade-up" data-aos-duration={3000}>
          <form action="https://sendmail.w3layouts.com/submitForm" method="post" role="form" className="php-email-form">
            <div className="row">
              <div className="col form-group">
                <input type="text" className="form-control" name="w3lName" id="w3lName" placeholder="Name" required />
              </div>
              <div className="col form-group">
                <input type="email" className="form-control" name="w3lSender" id="w3lSender" placeholder="Email" required />
              </div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="w3lSubject" id="w3lSubject" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea name="w3lMessage" className="form-control" id="w3lMessage" placeholder="Message" required defaultValue={""} />
            </div>
            <div className="w3lhny-submit text-right">
              <button type="submit" className="btn btn-primary btn-style ">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <div className="map-iframe mt-5 pt-lg-4">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl" width="100%" height={400} frameBorder={0} style={{border: 0}} allowFullScreen />
      </div>
    </div>
  </section>
  {/*//contact*/}
  {/*/footer*/}
  <footer id="footer" className="wthree-footerhny">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 footer-contact pe-lg-5">
            <div className="footer-logo mb-3">
              <a className="navbar-brand" href="index.html"><span>Car</span> Transko</a>
            </div>
            <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at
              tempufddfel. Lorem ipsum dolor sit amet Semper at elit.</p>
          </div>
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="fas fa-angle-right" /> <a href="#index">Home</a></li>
              <li><i className="fas fa-angle-right" /> <a href="#us">About us</a></li>
              <li><i className="fas fa-angle-right" /> <a href="#serve">Services</a></li>
              <li><i className="fas fa-angle-right" /> <a href="#terms">Terms of service</a></li>
              <li><i className="fas fa-angle-right" /> <a href="#privacy">Privacy policy</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="fas fa-angle-right" /> <a href="#blogs">Blog Posts</a></li>
              <li><i className="fas fa-angle-right" /> <a href="#stats">Stats</a></li>
              <li><i className="fas fa-angle-right" /> <a href="#Plans">Plans</a></li>
              <li><i className="fas fa-angle-right" /> <a href="#Deals">Deals</a></li>
              <li><i className="fas fa-angle-right" /> <a href="#Offers">Offers</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 footer-newsletter ps-lg-4">
            <h4>Join Our Newsletter</h4>
            <p>Get Updates By Subscribe Our Weekly Newsletter</p>
            <form action className="d-flex" method="post">
              <input type="email" name="email" placeholder="Enter Your Email" required />
              <button type="submit" className="btn btn-primary btn-style">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container d-md-flex py-4">
      <div className="me-md-auto text-center text-md-start">
        <div className="copyright">
          <p className="copy-footer-29">© 2021 Car Transko. All rights reserved | Designed by <a href="https://w3layouts.com">W3layouts</a></p>
        </div>
      </div>
      <div className="social-links text-center text-md-end pt-3 pt-md-0">
        <a href="#" className="twitter"><i className="fab fa-twitter" /></a>
        <a href="#" className="facebook"><i className="fab fa-facebook-f" /></a>
        <a href="#" className="instagram"><i className="fab fa-instagram" /></a>
        <a href="#" className="google-plus"><i className="fab fa-google-plus-g" /></a>
        <a href="#" className="linkedin"><i className="fab fa-linkedin-in" /></a>
      </div>
    </div>
    <button onclick="topFunction()" id="movetop" title="Go to top" style={{display: 'block'}}>
      <span className="fa fa-angle-up" />
    </button>
    {/* //move top */}
  </footer>{/* End Footer */}
</div>




  );
}

export default App;
