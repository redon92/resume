<template>
<!--  <div id="app">-->

    <div class="body">
<!--      <div v-if="!loading">-->
<!--        <p style="white-space:pre" id="loaderTyped">-->

<!--        </p>-->
<!--      </div>-->
      <div>
      <header id="header" class="header-floating-icons" data-plugin-options="{'stickyEnabled': false, 'stickyEnableOnBoxed': false, 'stickyEnableOnMobile': false, 'stickyStartAt': 0, 'stickySetTop': '60px', 'stickyChangeLogo': false}">
        <div class="header-body">
          <div class="header-container container">
            <div class="header-row">
              <div class="header-column">
                <div class="header-row">
                  <div class="header-nav pt-1">
                    <div class="header-nav-main">
                      <nav class="wrapper-spy collapse">
                        <ul class="nav" id="mainNav">
                          <li>
                            <a data-hash href="#about-me" class="nav-link text-color-dark bg-color-primary">
                              <i class="icon-home icons"></i>
                              <span class="custom-tooltip">About Me</span>
                            </a>
                          </li>
                          <li>
                            <a data-hash href="#experience" class="nav-link text-color-dark bg-color-primary">
                              <i class="icon-eye icons"></i>
                              <span class="custom-tooltip">Experience</span>
                            </a>
                          </li>
                          <li>
                            <a data-hash href="#education" class="nav-link text-color-dark bg-color-primary">
                              <i class="icon-briefcase icons"></i>
                              <span class="custom-tooltip">Education</span>
                            </a>
                          </li>
                          <li>
                            <a data-hash href="#skills" class="nav-link text-color-dark bg-color-primary">
                              <i class="icon-graduation icons"></i>
                              <span class="custom-tooltip">Skills</span>
                            </a>
                          </li>
                          <li>
                            <a data-hash href="#portfolio" class="nav-link text-color-dark bg-color-primary">
                              <i class="icon-diamond icons"></i>
                              <span class="custom-tooltip">Portfolio</span>
                            </a>
                          </li>
<!--                          <li>-->
<!--                            <a data-hash href="#recommendations" class="nav-link text-color-dark bg-color-primary">-->
<!--                              <i class="icon-pencil icons"></i>-->
<!--                              <span class="custom-tooltip">Recommendations</span>-->
<!--                            </a>-->
<!--                          </li>-->
<!--                          <li>-->
<!--                            <a data-hash href="#blog" class="nav-link text-color-dark bg-color-primary">-->
<!--                              <i class="icon-bubbles icons"></i>-->
<!--                              <span class="custom-tooltip">Blog</span>-->
<!--                            </a>-->
<!--                          </li>-->
                          <li>
                            <a data-hash href="#say-hello" class="nav-link text-color-dark bg-color-primary">
                              <i class="icon-envelope-open icons"></i>
                              <span class="custom-tooltip">Say Hello</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <button class="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main nav">
                      <i class="icon-menu icons"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div role="main" class="main">

        <section id="about-me" class="section section-no-border section-parallax custom-section-padding-1 custom-position-1 custom-xs-bg-size-cover parallax-no-overflow m-0" data-plugin-parallax data-plugin-options="{'speed': 1.5}" data-image-src="img/demos/resume/about-me/about-me-bg-1.jpg">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 custom-sm-margin-bottom-1">
                <img src="images/redon_medium.jpg" class="img-fluid custom-border custom-image-position-2 custom-box-shadow-4" alt />
              </div>
              <div class="col-lg-7 col-xl-7">
                <h1 class="hi_im" style="font-size: 50px">Hi I'm</h1>
                <h1 class=" custom-font-size-1">{{person.name}}</h1>
                <p style="min-height: 30px;" class="mt-4"> <span class="typedText font-weight-normal text-lg-6 custom-margin-bottom-1 pt-3" id="typed"></span>
                </p>

                <span class="custom-about-me-infos">
								<span class="text-lg-5" style="line-height: 1.7">
                  I have an in-depth knowledge in Laravel, CakePHP, PHP, React Native, Vue.js, MYSQL, HTML5/CSS3.
                  I currently work with Laravel and Vue, depending on the project. </span>
<!--                <span class="">-->
<!--                  <strong class="">Currently working at: </strong>-->
<!--                  {{person.current_job}}-->
<!--                </span>-->
<!--								<span class="custom-text-color-1 text-uppercase mb-3">Information Technology &amp; Services</span>-->
<!--								<span class="custom-text-color-1 text-uppercase">-->
<!--									<strong class="text-color-light">Previous: </strong>-->
<!--									Front-End Developer at Porto-->
<!--									<a data-hash href="#experience" class="btn btn-tertiary text-uppercase custom-btn-style-1 text-1 ml-2">View More</a>-->
<!--								</span>-->
<!--								<span class="custom-text-color-1 text-uppercase">-->
<!--									<strong class="text-color-light">Education: </strong>-->
<!--									Porto School-->
<!--									<a data-hash href="#education" class="btn btn-tertiary text-uppercase custom-btn-style-1 text-1 ml-2">View More</a>-->
<!--								</span>-->
							</span>
              </div>
            </div>
          </div>
        </section>

        <div class="custom-about-me-links bg-color-light">
          <div class="container">
            <div class="row">
              <div class="col-lg-5"></div>
              <div class="col-lg-2 text-center custom-xs-border-bottom p-0">
                <a data-hash href="#say-hello" class="text-decoration-none">
								<span class="custom-nav-button text-color-dark">
									<i class="icon-earphones-alt icons text-color-primary"></i>
									Contact
								</span>
                </a>
              </div>
              <div class="col-lg-2 text-center custom-xs-border-bottom p-0">
                <a data-hash href="#say-hello" class="text-decoration-none">
								<span class="custom-nav-button custom-divisors text-color-dark">
									<i class="icon-envelope-open icons text-color-primary"></i>
									Send Message
								</span>
                </a>
              </div>
              <div class="col-lg-3 text-center p-0">
                <a href="cv/Redon_Lacaj_cv_jan_21.pdf" class="text-decoration-none">
								<span class="custom-nav-button text-color-dark">
									<i class="icon-cloud-download icons text-color-primary"></i>
									Download Resume
								</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <section class="section section-no-border bg-color-light m-0">
          <div class="container">
            <div class="row">
              <div class="col">

                <div class="custom-box-details bg-color-light custom-box-shadow-1 col-lg-6 ml-5 mb-5 mb-lg-4 float-right clearfix">
                  <h4>Personal Details</h4>
                  <div class="row">
                    <div class="col-md-6">
                      <ul class="custom-list-style-1 p-0 mb-0">
                        <li>
                          <span class="text-color-dark">Birthday:</span>
                          <span class="custom-text-color-2">{{ person.birthdate }}</span>
                        </li>
                        <li>
                          <span class="text-color-dark">Marital:</span>
                          <span class="custom-text-color-2">{{person.marital}}</span>
                        </li>
                        <li>
                          <span class="text-color-dark">Nationality:</span>
                          <span class="custom-text-color-2">{{ person.nationality }}</span>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <ul class="custom-list-style-1 p-0 mb-0">
                        <li>
                          <span class="text-color-dark">Skype:</span>
                          <span class="custom-text-color-2"><a class="custom-text-color-2" href="skype:redon.lacaj?chat">redon.lacaj</a></span>
                        </li>
                        <li>
                          <span class="text-color-dark">PHONE:</span>
                          <span class="custom-text-color-2"><a class="custom-text-color-2" href="tel:+355672266112">+355 67 22 66 112</a></span>
                        </li>
                        <li>
                          <span class="text-color-dark">EMAIL:</span>
                          <span class="custom-text-color-2" style="font-size: 11px; text-transform: lowercase"><a class="custom-text-color-2" href="mailto:92redon@gmail.com">92redon@gmail.com</a></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 class="text-color-quaternary font-weight-extra-bold text-uppercase">About Me</h2>

                <p class="custom-text-color-2 about_me">{{ person.about}}</p>

<!--                <div class="about-me-more" id="aboutMeMore">-->
<!--                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nulla tortor, a imperdiet enim tristique nec. Nulla lobortis leo eget metus dapibus sodales. Sed placerat vitae dui vitae vehicula. Quisque in tincidunt ligula, nec dignissim arcu. Praesent aliquam velit vel libero dictum, non sollicitudin lectus mollis. Morbi sollicitudin auctor gravida. Vivamus vitae dui non lorem euismod pretium. Morbi congue sem sed ex iaculis, nec mattis felis pretium. Nullam molestie libero id odio blandit sodales. Suspendisse non mauris et felis molestie placerat aliquet a risus. Aliquam ac leo tempus, hendrerit eros mollis, gravida est.</p>-->

<!--                  <p>Proin euismod ipsum a tellus condimentum dapibus. Integer porttitor felis elit, eget rutrum ligula commodo quis. Praesent ultricies neque eu mi congue blandit. Nulla feugiat feugiat aliquet. Morbi sed mattis erat. Nullam scelerisque molestie eros, id tristique felis iaculis non. Duis pellentesque neque eget iaculis varius. Donec at nisl semper, aliquam est id, tincidunt lacus. Donec at erat purus.</p>-->

<!--                  <p>Morbi tincidunt nunc non diam porta, at fermentum orci bibendum. Donec arcu nisi, ornare nec commodo vitae, sollicitudin sed magna. Cras sit amet justo et nulla pulvinar laoreet. Phasellus scelerisque, metus id posuere vulputate, diam tellus iaculis sapien, eget scelerisque ipsum libero convallis velit. Duis lorem ligula, faucibus quis tellus nec, fringilla ultricies leo. Etiam tempus congue magna. Suspendisse porta dictum tortor, eu volutpat ipsum eleifend nec. Aliquam dapibus lorem luctus, cursus libero imperdiet, mattis nunc. Sed in ipsum diam. Quisque efficitur metus purus, vitae fermentum lacus venenatis id.</p>-->
<!--                </div>-->

<!--                <a id="aboutMeMoreBtn" class="btn btn-tertiary text-uppercase custom-btn-style-1 text-1" href="#">View More</a>-->

              </div>
            </div>
          </div>
        </section>

        <section id="experience" class="section section-secondary section-no-border m-0">
          <div class="container">
            <div class="row">
              <div class="col">
                <h2 class="text-color-quaternary text-uppercase font-weight-extra-bold">Experience</h2>
                <section class="timeline custom-timeline" id="timeline">
                  <div class="timeline-body">
                    <article v-for="exp in person.experiences" class="timeline-box right custom-box-shadow-2">
                      <div class="row">
                        <div class="experience-info col-lg-3 col-sm-5 bg-color-primary">

												<span class="from text-color-dark text-uppercase">
													From
													<span class="font-weight-semibold">{{exp.start}}</span>
												</span>
                          <span class="to text-color-dark text-uppercase mb-4">
													To
													<span class="font-weight-semibold">{{exp.end}}</span>
												</span>
<!--                          <p class="text-color-dark">(3 Years 9 Months)</p>-->
                          <span class="company text-color-dark font-weight-semibold">
													{{exp.company}}
													<span class="company-location text-color-dark font-weight-normal text-uppercase">Tirana, Albania</span>
												</span>
                        </div>
                        <div class="experience-description col-lg-9 col-sm-7 bg-color-light">
                          <h4 class="text-color-dark font-weight-semibold">{{exp.role}}</h4>
                          <p v-for="task in exp.tasks" class="custom-text-color-2 expTasks">{{task}}</p>
                        </div>
                      </div>
                    </article>
                    <div class="timeline-bar" style="top: 142.944px; bottom: 142.944px;"></div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>

        <section id="education" class="section section-no-border custom-bg-color-1 m-0">
          <div class="container">
            <div class="row">
              <div class="col">
                <h2 class="text-color-quaternary text-uppercase font-weight-extra-bold m-0">Education</h2>
                <div class="owl-carousel nav-bottom custom-dots-style-1 mb-0" data-plugin-options="{'items': 1, 'loop': false, 'dots': true, 'nav': false}">
                  <div class="row">
                    <div v-for="educat in person.education" class="col-lg-6 col-sm-6 pb-4">
                      <div class="custom-box-details-2 bg-color-light custom-box-shadow-3">
                        <i class="icon-graduation icons text-color-primary"></i>
                        <h4 class="font-weight-semibold text-color-dark m-0">{{ educat.degree }} in {{educat.area}}</h4>
                        <h5 class="text-lg-4 mb-1 mt-2">{{educat.institution}}</h5>
                        <strong class="text-color-primary">{{ educat.start }}-{{educat.end}}</strong>
                      </div>
                    </div>
<!--                    <div class="col-lg-6 col-sm-6 pb-4">-->
<!--                      <div class="custom-box-details-2 bg-color-light custom-box-shadow-3">-->
<!--                        <i class="icon-graduation icons text-color-primary"></i>-->
<!--                        <h4 class="font-weight-semibold text-color-dark m-0">{{educat.institution}}</h4>-->
<!--                        <p class="custom-text-color-2 mb-1">Master of Information Technology</p>-->
<!--                        <strong class="text-color-primary">2001-2020</strong>-->
<!--                      </div>-->
<!--                    </div>-->
                  </div>
<!--                  <div class="row">-->
<!--                    <div class="col-lg-6 col-sm-6 pb-4">-->
<!--                      <div class="custom-box-details-2 bg-color-light custom-box-shadow-3">-->
<!--                        <i class="icon-graduation icons text-color-primary"></i>-->
<!--                        <h4 class="font-weight-semibold text-color-dark m-0">Porto University</h4>-->
<!--                        <p class="custom-text-color-2 mb-1">Master of Information Technology</p>-->
<!--                        <strong class="text-color-primary">2001-2020</strong>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="col-lg-6 col-sm-6 pb-4">-->
<!--                      <div class="custom-box-details-2 bg-color-light custom-box-shadow-3">-->
<!--                        <i class="icon-graduation icons text-color-primary"></i>-->
<!--                        <h4 class="font-weight-semibold text-color-dark m-0">Porto University</h4>-->
<!--                        <p class="custom-text-color-2 mb-1">Master of Information Technology</p>-->
<!--                        <strong class="text-color-primary">2001-2020</strong>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" class="section section-no-border bg-color-light m-0">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-6 col-lg-8 mb-4 mb-md-0">
                <div class="row">
                  <div class="col-lg-6">
                    <h2 class="text-color-quaternary text-uppercase font-weight-extra-bold">Skills & Language</h2>
                    <div class="progress-bars custom-progress-bars">
                      <div v-for="(skill, index) in person.skills.professional" v-if="index<4">
                        <div class="progress-label text-color-dark font-weight-semibold text-uppercase text-2">
                          <span>{{skill.name}}</span>
                        </div>

                        <div class="progress mb-2">
                          <div class="progress-bar" :data-appear-progress-animation="skill.percentage+'%'"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="progress-bars custom-progress-bars custom-md-margin-top-1">
                      <div v-for="(skill, index) in person.skills.professional" v-if="index>=4">
                        <div class="progress-label text-color-dark font-weight-semibold text-uppercase text-2">
                          <span>{{skill.name}}</span>
                        </div>

                        <div class="progress mb-2">
                          <div class="progress-bar" :data-appear-progress-animation="skill.percentage+'%'"></div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="row">
                  <div class="col">
                    <div class="custom-box-details bg-color-light custom-box-shadow-1">
                      <h4 class="text-color-dark">Languages</h4>
                      <ul class="custom-list-style-1 p-0">
                        <li v-for="language in person.skills.languages">
                          <span class="font-weight-semibold custom-max-width-1 text-color-dark">
                            <img src="img/blank.gif" class="flag flag-us mr-1">
                            {{ language.name }}:</span>
                          <span class="custom-text-color-2">{{language.level}}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" class="section section-no-border bg-color-secondary m-0">
          <div class="container">
            <div class="row">
              <div class="col">
                <h2 class="text-color-quaternary font-weight-extra-bold text-uppercase">Portfolio</h2>
                <ul class="nav nav-pills sort-source custom-nav-sort mb-4" data-sort-id="portfolio" data-option-value=".websites">
                  <li class="nav-item active" data-option-value="*"><a class="nav-link text-dark active" href="#">Show All</a></li>
                  <li class="nav-item" data-option-value=".websites"><a class="nav-link text-dark" href="#">Websites</a></li>
                  <li class="nav-item" data-option-value=".logos"><a class="nav-link text-dark" href="#">Logos</a></li>
                  <li class="nav-item" data-option-value=".brands"><a class="nav-link text-dark" href="#">Brands</a></li>
                </ul>
                <div class="sort-destination-loader sort-destination-loader-showing">
                  <div class="row image-gallery sort-destination lightbox" data-sort-id="portfolio" data-plugin-options="{'delegate': 'a.lightbox-portfolio', 'type': 'image', 'gallery': {'enabled': true}}">
                    <div  v-for="port in person.portfolio" class="col-12 col-sm-6 col-lg-3 isotope-item websites">
                      <div class="image-gallery-item mb-4 pb-3">
                        <a :href="'images/portfolio/'+port.image" class="lightbox-portfolio">
												<span class="thumb-info custom-thumb-info-1">
													<span class="thumb-info-wrapper">
														<span class="thumb-info-plus">
                              <img  :src="'images/portfolio/'+port.logo" class="img-fluid" alt="">
                            </span>
														<img  :src="'images/portfolio/'+port.image" class="img-fluid" alt="">
													</span>
												</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

<!--        <section id="recommendations" class="section section-no-border bg-color-primary m-0">-->
<!--          <div class="container">-->
<!--            <div class="row">-->
<!--              <div class="col">-->
<!--                <h2 class="text-color-quaternary font-weight-extra-bold text-uppercase">Recommendations</h2>-->
<!--              </div>-->
<!--              <div class="col-lg-12 p-0">-->
<!--                <div class="owl-carousel custom-dots-style-1 custom-dots-color-1 custom-dots-position-1 mb-0" data-plugin-options="{'items': 1, 'autoHeight': true, 'loop': false, 'nav': false, 'dots': true}">-->
<!--                  <div>-->
<!--                    <div class="col">-->
<!--                      <div class="testimonial custom-testimonial-style-1 testimonial-with-quotes mb-0">-->
<!--                        <blockquote class="pb-2">-->
<!--                          <p class="custom-text-color-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nulla tortor, a imperdiet enim tristique nec. Nulla lobortis leo eget metus dapibus sodales. Sed placerat vitae dui vitae vehicula. Quisque in tincidunt ligula, nec dignissim arcu. Praesent aliquam velit vel libero dictum, non sollicitudin lectus mollis. Morbi sollicitudin auctor gravida.</p>-->
<!--                        </blockquote>-->
<!--                        <div class="testimonial-author float-left">-->
<!--                          <p><strong class="text-uppercase">Bob Doe</strong><span class="custom-text-color-3">Director of Engineering</span></p>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div>-->
<!--                    <div class="col">-->
<!--                      <div class="testimonial custom-testimonial-style-1 testimonial-with-quotes mb-0">-->
<!--                        <blockquote class="pb-2">-->
<!--                          <p class="custom-text-color-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nulla tortor, a imperdiet enim tristique nec. Nulla lobortis leo eget metus dapibus sodales. Sed placerat vitae dui vitae vehicula. Quisque in tincidunt ligula, nec dignissim arcu. Praesent aliquam velit vel libero dictum, non sollicitudin lectus mollis. Morbi sollicitudin auctor gravida.</p>-->
<!--                        </blockquote>-->
<!--                        <div class="testimonial-author float-left">-->
<!--                          <p><strong class="text-uppercase">Bob Doe</strong><span class="custom-text-color-3">Director of Engineering</span></p>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </section>-->

<!--        <section id="blog" class="section section-no-border bg-color-light m-0">-->
<!--          <div class="container">-->
<!--            <div class="row">-->
<!--              <div class="col">-->
<!--                <h2 class="text-color-quaternary font-weight-extra-bold text-uppercase">My Blog</h2>-->

<!--                <div class="row">-->
<!--                  <div class="col-lg-6 mb-5 mb-lg-0">-->
<!--                    <article class="thumb-info custom-thumb-info-2 custom-box-shadow-1 appear-animation" data-appear-animation="fadeIn" data-appear-animation-delay="0" data-appear-animation-duration="1s">-->
<!--                      <div class="thumb-info-wrapper">-->
<!--                        <a href="#">-->
<!--                          <img src="img/demos/resume/blog/blog-1.jpg" alt class="img-fluid" />-->
<!--                        </a>-->
<!--                      </div>-->
<!--                      <div class="thumb-info-caption">-->
<!--                        <div class="thumb-info-caption-text">-->
<!--                          <h4 class="mb-2">-->
<!--                            <a href="#" class="text-decoration-none text-color-dark font-weight-semibold">-->
<!--                              Design Driven-->
<!--                            </a>-->
<!--                          </h4>-->
<!--                          <p class="custom-text-color-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nulla tortor, a imperdiet enim tristique nec. Nulla lobortis leo eget metus dapib...</p>-->
<!--                        </div>-->
<!--                        <hr class="solid m-0 mt-4 mb-2">-->
<!--                        <div class="row justify-content-between">-->
<!--                          <div class="col-auto custom-blog-post-date text-uppercase font-weight-semibold text-color-dark text-2">-->
<!--                            July 12-2020-->
<!--                          </div>-->
<!--                          <div class="col-auto custom-blog-post-share text-uppercase font-weight-semibold text-color-dark text-2">-->
<!--                            Share:-->
<!--                            <ul class="mb-0">-->
<!--                              <li>-->
<!--                                <a class="item-facebook text-decoration-none text-uppercase" href="#" title="Share on Facebook">Facebook</a>-->
<!--                              </li>-->
<!--                              <li>-->
<!--                                <a class="item-twitter text-decoration-none text-uppercase" href="#" title="Share on Twitter">Twitter</a>-->
<!--                              </li>-->
<!--                              <li>-->
<!--                                <a class="item-google-plus text-decoration-none text-uppercase" href="#" title="Share on Google Plus">Google Plus</a>-->
<!--                              </li>-->
<!--                            </ul>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </article>-->
<!--                  </div>-->
<!--                  <div class="col-lg-6">-->
<!--                    <article class="thumb-info custom-thumb-info-2 custom-box-shadow-1 appear-animation" data-appear-animation="fadeIn" data-appear-animation-delay="0" data-appear-animation-duration="1s">-->
<!--                      <div class="thumb-info-wrapper">-->
<!--                        <a href="#">-->
<!--                          <img src="img/demos/resume/blog/blog-2.jpg" alt class="img-fluid" />-->
<!--                        </a>-->
<!--                      </div>-->
<!--                      <div class="thumb-info-caption">-->
<!--                        <div class="thumb-info-caption-text">-->
<!--                          <h4 class="mb-2">-->
<!--                            <a href="#" class="text-decoration-none text-color-dark font-weight-semibold">-->
<!--                              UI, UX Concepts-->
<!--                            </a>-->
<!--                          </h4>-->
<!--                          <p class="custom-text-color-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nulla tortor, a imperdiet enim tristique...</p>-->
<!--                        </div>-->
<!--                        <hr class="solid m-0 mt-4 mb-2">-->
<!--                        <div class="row justify-content-between">-->
<!--                          <div class="col-auto custom-blog-post-date text-uppercase font-weight-semibold text-color-dark text-2">-->
<!--                            July 12-2020-->
<!--                          </div>-->
<!--                          <div class="col-auto custom-blog-post-share text-uppercase font-weight-semibold text-color-dark text-2">-->
<!--                            Share:-->
<!--                            <ul class="mb-0">-->
<!--                              <li>-->
<!--                                <a class="item-facebook text-decoration-none text-uppercase" href="#" title="Share on Facebook">Facebook</a>-->
<!--                              </li>-->
<!--                              <li>-->
<!--                                <a class="item-twitter text-decoration-none text-uppercase" href="#" title="Share on Twitter">Twitter</a>-->
<!--                              </li>-->
<!--                              <li>-->
<!--                                <a class="item-google-plus text-decoration-none text-uppercase" href="#" title="Share on Google Plus">Google Plus</a>-->
<!--                              </li>-->
<!--                            </ul>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </article>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="col-lg-12 col-sm-12 pt-4 mt-4 text-center">-->
<!--                <a class="btn btn-primary btn-outline text-color-dark custom-btn-style-2 font-weight-bold custom-border-radius-1 text-uppercase">View All</a>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </section>-->

        <div id="say-hello" class="container-fluid">
          <div class="row">
            <div class="col-lg-6 p-0">
              <section class="section section-no-border bg-color-primary h-100 m-0">
                <div class="row justify-content-end m-0">
                  <div class="col-half-section col-half-section-right mr-3">

                    <h2 class="text-color-quaternary text-uppercase font-weight-extra-bold">Say Hello</h2>
                    <form class="contact-form custom-form-style" action="php/contact-form.php" method="post">
                      <div class="contact-form-success alert alert-success d-none mt-4">
                        <strong>Success!</strong> Your message has been sent to us.
                      </div>
                      <div class="contact-form-error alert alert-danger d-none mt-4">
                        <strong>Error!</strong> There was an error sending your message.
                        <span class="mail-error-message text-1 d-block"></span>
                      </div>

                      <div class="form-content">
                        <div class="form-control-custom">
                          <input type="text" class="form-control" name="name" placeholder="Your Name *" data-msg-required="This field is required." id="name" required="" />
                        </div>
                        <div class="form-control-custom">
                          <input type="text" class="form-control" name="subject" placeholder="Subject *" data-msg-required="This field is required." id="subject" required="" />
                        </div>
                        <div class="form-control-custom">
                          <textarea maxlength="5000" data-msg-required="Please enter your message." rows="10" class="form-control" name="message" placeholder="Message*" id="message" required="" aria-required="true"></textarea>
                        </div>
                        <input type="submit" class="btn btn-quaternary text-color-light text-uppercase font-weight-semibold outline-none custom-btn-style-2 custom-border-radius-1" value="Submit" />
                      </div>
                    </form>

                  </div>
                </div>
              </section>
            </div>
            <div class="col-lg-6 p-0">
              <section class="section section-no-border h-100 m-0">
                <div class="row m-0">
                  <div class="col-half-section col-half-section-left ml-3">
                    <a href="mailto:you@domain.com" class="text-decoration-none">
										<span class="feature-box custom-feature-box align-items-center mb-4">
											<span class="custom-feature-box-icon">
												<i class="icon-envelope icons text-color-light"></i>
											</span>
											<span class="feature-box-info">
												<span class="custom-label font-weight-semibold text-uppercase custom-text-color-1">Email</span>
												<strong class="font-weight-light text-color-light custom-opacity-effect-1">92redon@gmail.com</strong>
											</span>
										</span>
                    </a>
                    <a href="tel:+1234657890" class="text-decoration-none">
										<span class="feature-box custom-feature-box align-items-center mb-4">
											<span class="custom-feature-box-icon">
												<i class="icon-phone icons text-color-light"></i>
											</span>
											<span class="feature-box-info">
												<span class="custom-label font-weight-semibold text-uppercase custom-text-color-1">Phone</span>
												<strong class="font-weight-light text-color-light custom-opacity-effect-1">+355 67 22 66 112</strong>
											</span>
										</span>
                    </a>
                    <a href="skype:redon.lacaj?chat" class="text-decoration-none">
										<span class="feature-box custom-feature-box align-items-center mb-4">
											<span class="custom-feature-box-icon">
												<i class="icon-social-skype icons text-color-light"></i>
											</span>
											<span class="feature-box-info">
												<span class="custom-label font-weight-semibold text-uppercase custom-text-color-1">Skype</span>
												<strong class="font-weight-light text-color-light custom-opacity-effect-1">redon.lacaj</strong>
											</span>
										</span>
                    </a>
                    <span class="feature-box custom-feature-box align-items-center">
										<span class="custom-feature-box-icon">
											<i class="icon-share icons text-color-light"></i>
										</span>
										<a href="http://www.facebook.com" class="d-flex text-decoration-none">
											<span class="feature-box-info">
												<span class="custom-label font-weight-semibold text-uppercase custom-text-color-1">Follow me</span>
												<strong class="font-weight-light text-color-light custom-opacity-effect-1">Facebook</strong>
											</span>
										</a>
<!--										<a href="http://www.twitter.com" class="d-flex text-decoration-none">-->
<!--											<span class="feature-box-info custom-both-side-border mt-2">-->
<!--												<strong class="font-weight-light text-color-light custom-opacity-effect-1">Twitter</strong>-->
<!--											</span>-->
<!--										</a>-->
										<a href="http://www.linkedin.com/in/redonl" class="d-flex text-decoration-none">
											<span class="feature-box-info p-0 mt-2">
												<strong class="font-weight-light text-color-light custom-opacity-effect-1">Linkedin</strong>
											</span>
										</a>
									</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <footer id="footer" class="m-0 p-0">
          <div class="footer-copyright bg-color-light m-0">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 m-0">
                  <p class="custom-text-color-2">© Copyright 2020. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      </div>
<!--      <div v-else>-->
<!--      </div>-->
  </div>
<!--  </div>-->
</template>

<script>
  $(function() {
    //circle progress additional skills
    $('.chart').easyPieChart({
      barColor: '#757575',
      trackColor: 'rgba(255,255,255,0)',
      scaleColor: 'rgba(255,255,255,0)',
      lineWidth: '10',
      lineCap: 'square'
    });
  });
  // @ is an alias to /src
  import moment from 'moment';
  import HelloWorld from '@/components/HelloWorld.vue';
  import experiencesAll from '@/components/ExperiencesAll.vue';
  import portfolio from '@/components/Portfolio.vue';
  import expChart from '@/components/ExpChart.vue';
  import Education from '@/components/Education.vue';

  import Typed from 'typed.js';

  export default {
    name: 'home',
    components: {
      experiencesAll,
      portfolio,
      expChart,
      Education,
    },
    data(){
      return{
        loading:true,
        theme:false,
        person:{
          name:'Redon Lacaj',
          profession:'Web Developer',
          current_job:'Rightsearch Gmbh',
          address:'Tirana, Albania',
          email:'92redon@gmail.com',
          phone:'+355 67 22 66 112',
          nationality:'Albanian',
          marital:'Single',
          website:'redon.al',
          websiteUrl:'http://redon.lacaj.al',
          birthdate:'10 September 1992',
          age:moment().diff('1992-09-10', 'years'),
          social:[
            {
              name:'Facebook',
              slug:'facebook',
              url:'https://www.facebook.com/redvenger/'
            },{
              name:'Google Plus',
              slug:'google-plus',
              url:'https://plus.google.com/117470767662553758748'
            },{
              name:'LinkedIn',
              slug:'linkedin',
              url:'https://www.linkedin.com/in/redon-la%C3%A7aj-40188212b/'
            },{
              name:'Instagram',
              slug:'instagram',
              url:'https://www.instagram.com/redonl/'
            },
          ],
          about:'I\'m a Web Developer with over 3 years of experience. ' +
                  'I have an in-depth knowledge in PHP, HTML5, CSS3, JavaScript (Vue.js), MYSQL. ' +
                  'I currently work with Laravel and Wordpress, depending on the project. ' +
                  'I\'m also an electronic circuits designer, Arduino and ESP developer. I\'m a fast learner, ' +
                  'and I\'m always willing to improve .',
          skills:{
            professional:[
              {
                name:'PHP',
                percentage:'75',
              },{
                name:'Laravel',
                percentage:'75',
              },{
                name:'Vue.js',
                percentage:'40',
              },{
                name:'React Native',
                percentage:'40',
              },{
                name:'HTML & CSS',
                percentage:'80',
              },{
                name:'Node.js',
                percentage:'20',
              },{
                name:'Photoshop',
                percentage:'60',
              },
            ],
            additional:[
              'MySQL','RESTfull WS','Bootstrap','Graphical Design','Adobe Illustrator','Circuit Design (PCB)'
            ],
            languages:[
              {
                name: 'Albanian',
                level: 'Native',
                flag:'al'
              },
              {
                name: 'English',
                level: 'C1 (IELTS)',
                flag:'en'
              },
              {
                name: 'Italian',
                level: 'B1',
                flag:'it'
              },
              {
                name: 'Spanish',
                level: 'B1',
                flag:'es'
              },
              {
                name: 'German',
                level: 'A2',
                flag:'de'
              },
              {
                name: 'Turkish',
                level: 'A2',
                flag:'tr'
              },
            ]
          },
          education:[
            {
              start:'2014',
              end:'2017',
              institution:'Epoka University',
              area:'Computer Science',
              degree:'MSc',
              courses:[
                'Artificial Intelligence,' +
                'Distributed Programming, ' +
                'Advanced Database Management Systems, ' +
                'Advanced Network Management, ' +
                'Microprocessors programming, ' +
                'Machine Learning',
              ],

            },{
              start:'2011',
              end:'2014',
              institution:'Epoka University',
              area:'Computer Engineering',
              degree:'Bachelor',
              courses:[
                'Main courses: Programming languages: C, C++, Java, HTML-CSS, JS, PHP, Python, Linux.<br>' +
                'Other courses: Database Management Systems, Networks Management, Digital Design, Computer Architecture.'
              ],

            },
            // {
            //   start:'2007',
            //   end:'2011',
            //   institution:'Kolegji turk HRP',
            //   area:'Gymnasium',
            //   degree:'',
            //   courses:[
            //     'General gymnasium courses, including advanced english classes, turkish and german classes. ' +
            //     '<br>All lessons were conducted in english language.'
            //   ],
            //
            // },
          ],
          experiences:[
            {
              start:'May 2020',
              end:'Current',
              role:'Full-Stack Web Developer',
              company:'Bei Rightsearch',
              tasks:[
                '- Web development with CakePHP v3.8 and v4',
                '- Laravel web development, Vue.js',
                '- CakePHP Plugins creation'
              ]
            },
            {
              start:'Jan 2020',
              end:'May 2020',
              role:'Full-Stack Web Developer',
              company:'Arkevo Design',
              tasks:[
                '- Trading website for clients with multiple permissions, integrated with metatrader 4 api through restful api, in-site VoIP calls with sipML5, online payments. Using: Laravel v.6.18.3, PHP v.7.3.2, Vue.js v.~2.6',
                '- Leads CRM, with VoIP calls using simML5, using PHP.'
              ]
            },
            {
              start:'Feb 2019',
              end:'Jan 2020',
              role:'Full-Stack Web Developer',
              company:'Angel1',
              tasks:[
                '-Laravel web development',
                '-Vanilla OOP PHP development',
                '-Front-End development with Vue.js',
                '-Multiple projects including Consulting webpage, live gym statistics, challenges, etc.'
              ]
            },
            {
              start:'Mar 2018',
              end:'Sep 2018',
              role:'Full-Stack Web Developer',
              company:'CCL Albania',
              tasks:[
                '-Laravel web development',
                '-Vanilla OOP PHP development',
                '-Front-End development with Vue.js',
                '-Multiple projects including cryptocurrencies, ebooks, leads management system.'
              ]
            },{
              start:'Jul 2017',
              end:'Jan 2018',
              role:'IT Manager',
              company:'Lacaj Sh.P.K',
              tasks:[
                '-Web Development.',
                '-Technical Support.',
                '-Logo and cards design.',
              ]
            },{
              start:'Apr 2017',
              end:'Jul 2017',
              role:'Computer Engineer',
              company:'First Group Albania - TAP Albania',
              tasks:[
                '-Developing the Fuel Management System for TAP Albania.',
                '-Circuits design and development.',
                '-Modifying the supplied android app to adapt with our project.',
                '-Database management.',
                '-Camera security system installation.',
              ]
            },{
              start:'Nov 2016',
              end:'Apr 2017',
              role:'IT Engineer',
              company:'First Group Albania',
              tasks:[
                '-Web development.',
                '-Network management.',
                '-Helpdesk.',
              ]
            },{
              start:'Dec 2015',
              end:'Feb 2016',
              role:'IT (Internship)',
              company:'Epoka University',
              tasks:[
                '-Network management.',
                '-Web development.',
                '-Graphical design for events.',
                '-Technical support',
              ]
            },{
              start:'Nov 2013',
              end:'Feb 2014',
              role:'IT',
              company:'TRONTECH',
              tasks:[
                '-Hardware technician.',
                '-Web Development.',
                '-Database Management.',
              ]
            },{
              start:'Jun 2013',
              end:'July 2013',
              role:'Network Manager (Internship)',
              company:'Albtelekom Sh. A.',
              tasks:[
                '- Network management.',
              ]
            },
          ],
          portfolio:[
            {
              name:'Alpha Construction Team',
              url:'http://alphaconstructionteam.com',
              image:'alpha.jpg',
              logo:'alpha_logo.png',

            },{
              name:'Selca Cem',
              url:'http://selcacem.al',
              image:'selca.jpg',
              logo:'selca_logo.png',

            },{
              name:'ZigZag (Coming soon)',
              url:'http://zigzag.al',
              image:'zigzag.jpg',
              logo:'zigzag_logo.png',

            },{
              name:'2 Vellezerit Hoxha',
              url:'http://2vellezerithoxha.com',
              image:'2vhoxha.jpg',
              logo:'2vhoxha_logo.png',

            },{
              name:'Agrarja Anxhelo',
              url:'http://agrarjaanxheloshpk.al',
              image:'agrarja.jpg',
              logo:'agrarja_logo.jpg',

            },{
              name:'NRD Sh.P.K.',
              url:'http://nrdshpk.al',
              image:'nrd.jpg',
              logo:'nrd_logo.png',

            },{
              name:'Momenti.al',
              url:'http://momenti.al',
              image:'momenti.jpg',
              logo:'momenti_logo.jpg',

            },{
              name:'Uaibo.com',
              url:'http://uaibo.com',
              image:'uaibo.jpg',
              logo:'uaibo_logo.png',

            },
          ],
          interests:[
            {
              name:'Travel',
              logo:'travel_icon.png',
            },{
              name:'Gaming',
              logo:'gaming_icon.png',
            },{
              name:'Music',
              logo:'music_icon.png',
            },{
              name:'Swimming',
              logo:'swiming_icon.png',
            },{
              name:'Movies',
              logo:'movies_icon.png',
            },{
              name:'Bicycling',
              logo:'bicycling_icon.png',
            }
          ]
        },
        typed:'',
      }
    },
    mounted(){

      // if (document.readyState === "complete") {
      this.loading=false;

      //
      // if (this.loading) {
      //   new Typed('#loaderTyped', {
      //     strings: [
      //       'npm install redon_resume^1000\n `installing resume...` ^1000\n `Fetching from experience...`'
      //       // 'FullStack web developer', 'React Native developer', 'Software engineer'
      //     ],
      //     typeSpeed:10,
      //     backSpeed:5,
      //     showCursor:false,
      //     loop:true,
      //     smartBackspace: true, // this is a default
      //     // onComplete: (self) => {this.loading=false},
      //   });
      // }
      // else {
        new Typed('#typed',{
              strings: [
                // 'npm install^1000\n `installing components...` ^1000\n `Fetching from source...`'
                'FullStack web developer', 'React Native developer', 'Software engineer'
              ],
              typeSpeed:20,
              backSpeed:10,
              showCursor:false,
              loop:true,
              smartBackspace: true, // this is a default
              // onComplete: (self) => {this.loading=false},
            }
        );
      // }

      // this.loading=false;
      // }
    },
    methods:{
      changeTheme(val){
        if(val)
          document.body.setAttribute('data-theme', 'dark');
        else {
          document.body.removeAttribute('data-theme');
        }
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
                  :root {
                    --primary-color: #9A97F3;
                    --font-color: #3d4451;
                    --bg-color: #efefef;
                    --more-blog:#ffffff;
                    --border-color: #ffffff;
                    --contact-color:#757575;
                    --leave-comment:#cacaca;
                    --section-experience:#ffffff;
                    --single-blog:#ffffff;
                    --theme-option:#000000;
                    --content-bg:#efefef;
                  }

[data-theme="dark"] {
  --primary-color: #9A97F3;
  --font-color: #e1e1ff;
  --bg-color: #161625;
  --more-blog:#3a3b40;
  --border-color: #eeeeee;
  --contact-color:#aaaaaa;
  --leave-comment:#aaaaaa;
  --section-experience:#3a3b40;
  --single-blog:#aaaaaa;
  --theme-option:#eeeeee;
  --content-bg:#2a2c30;

}

[data-theme="light"] {
  --primary-color: #9A97F3;
  --font-color: #3d4451;
  --bg-color: #efefef;
  --more-blog:#ffffff;
  --border-color: #ffffff;
  --contact-color:#757575;
  --leave-comment:#cacaca;
  --section-experience:#ffffff;
  --single-blog:#ffffff;
  --theme-option:#000000;
  --content-bg:#efefef;

}

body {
  background-color: var(--bg-color);
  color: var(--font-color);
  /*other styles*/
}


/**** LIGHT ****/

.loading-overlay,
.section-about,
.section-skills .professional-skills,
.section-skills .additional-skills,
.section-education .education-content,
.section-experience .icon-experience,
.section-experience .experience-content,
.section-pricing .pricing-content,
.section-testimonials .swiper-slide,
.section-blog .blog-content,
.section-contact-us .form-content,
.section-contact-us .info-content,
.section-portfolio .filter-portfolio li:hover,
.scroll-top,
.theme-option,
.theme-option .open-theme,
.more-blog .pagination-blog a {
  background-color: var(--more-blog);
}

.resumeStyle {
  background-color: var(--content-bg);
  color: var(--theme-option);
}

.section-about .download-resume,
.section-about .text-available,
.section-about h3,
.section-about .title-info,
.section-about .title-links,
.section-about .li-social-links a,
.section-skills,
.section-skills .title-progress span,
.section-education .ul-education,
.section-experience .icon-experience,
.section-experience .company-name,
.section-portfolio .filter-portfolio li,
.section-pricing .pricing-title h3,
.section-pricing .pricing-detail .line-detail,
.section-testimonials .personal-info span,
.section-blog h4,
.scroll-top,
.theme-option .open-theme,
.more-blog .pagination-blog a,
.single-blog blockquote,
.single-blog .archive li {
  color: var(--contact-color);
}

.section-about h2 span,
.theme-option .open-theme:hover {
  color: var(--theme-option);
}

.section-about .li-social-links a:hover,
.section-skills h3,
.section-education h3,
.section-experience .period-experience,
.section-portfolio .filter-portfolio li.active,
.section-portfolio .item-overlay,
.section-pricing .most-populaire span,
.section-pricing .pricing-price,
.section-pricing .line-detail .new,
.section-pricing .pricing-buy h3,
.section-testimonials p,
.section-interests h4,
.section-blog .read-more,
.section-blog .load-more span,
.section-contact-us .info-icon,
.section-contact-us .info-text,
.section-contact-us .social-links li,
.menu,
.section-contact-us input[type="submit"],
.more-blog .pagination-blog a.active,
.more-blog .pagination-blog a:hover,
.single-blog .comments .reply,
.single-blog .leave-comment input[type="submit"],
.single-blog .tags li a {
  color: var(--border-color);
;
}

.section-skills .progress,
.section-pricing div[class^="col-"]:nth-child(1) .pricing-price,
.section-pricing div[class^="col-"]:nth-child(3) .pricing-price,
.section-pricing div[class^="col-"]:nth-child(1) .pricing-buy,
.section-pricing div[class^="col-"]:nth-child(3) .pricing-buy,
.section-blog .read-more:hover,
.section-blog .load-more span,
.section-contact-us input[type="submit"]:hover,
.section-contact-us .info-text,
.single-blog .line,
.single-blog .leave-comment input[type="submit"]:hover,
.single-blog .tags li a:hover {
  background-color: var(--contact-color);
}

.section-about .li-social-links a {
  border: 1px solid var(--contact-color);
}

.section-experience .all-experience {
  border-left: 5px solid var(--section-experience);
}

.section-contact-us input,
.section-contact-us textarea,
.single-blog .leave-comment input,
.single-blog .leave-comment textarea {
  border-bottom: 1px solid var(--leave-comment);
  color: #202020;
}

.section-contact-us .info-text::before {
  border-right-color: var(--contact-color);
}

.menu h2 {
  border: 4px solid var(--border-color);;
}

.menu a.active,
.menu a:hover {
  border-right: 6px solid var(--border-color);
  border-left: 6px solid var(--border-color);
}

.theme-option .light span {
  border: 1px solid #000000;
}

.single-blog blockquote {
  background-color: #ededed;
}

// Variables
$bar-color: #35b2f9;
$ball-color: #35b2f9;
$bg-color: #35b2f9;

.loaderDiv{
  min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
  min-height: 100vh; /* These two lines are counted as one :-)       */

  display: flex;
  align-items: center;
}

.loader {

  position: relative;
  width: 75px;
  height: 100px;
}

.toggleWrapper {

  input {
    position: absolute;
    left: -99em;
  }
}

.toggle {
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 70px;
  height: 40px;
  background-color: #83D8FF;
  border-radius: 90px - 6;
  transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

}

.toggle__handler {
  display: inline-block;
  position: relative;
  z-index: 1;
  top: 3px;
  left: -14px;
  width: 40px - 7;
  height: 40px - 7;
  background-color: #FFCF96;
  border-radius: 50px;
  box-shadow: 0 2px 6px rgba(0,0,0,.3);
  transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform:  rotate(-45deg);

  .crater {
    position: absolute;
    background-color: #E8CDA5;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    border-radius: 100%;
  }

  .crater--1 {
    top: 14px;
    left: 8px;
    width: 3px;
    height: 3px;
  }

  .crater--2 {
    top: 20px;
    left: 17px;
    width: 5px;
    height: 5px;
  }

  .crater--3 {
    top: 8px;
    left: 19px;
    width: 7px;
    height: 7px;
  }
}

.star {
  position: absolute;
  background-color: #ffffff;
  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 50%;
}

.star--1 {
  top: 7px;
  left: 27px;
  z-index: 0;
  width: 30px;
  height: 3px;
}

.star--2 {
  top: 15px;
  left: 22px;
  z-index: 1;
  width: 30px;
  height: 3px;
}

.star--3 {
  top: 24px;
  left: 32px;
  z-index: 0;
  width: 30px;
  height: 3px;
}

.star--4,
.star--5,
.star--6 {
  opacity: 0;
  transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.star--4 {
  top: 13px;
  left: 10px;
  z-index: 0;
  width: 2px;
  height: 2px;
  transform: translate3d(3px,0,0);
}

.star--5 {
  top: 29px;
  left: 13px;
  z-index: 0;
  width: 3px;
  height: 3px;
  transform: translate3d(3px,0,0);
}

.star--6 {
  top: 33px;
  left: 20px;
  z-index: 0;
  width: 2px;
  height: 2px;
  transform: translate3d(3px,0,0);
}

input:checked {
  + .toggle {
    background-color: #749DD6;

    &:before {
      color: #749ED7;
    }

    &:after {
      color: #ffffff;
    }

    .toggle__handler {
      background-color: #FFE5B5;
      transform: translate3d(29px, 0, 0) rotate(0);

      .crater { opacity: 1; }
    }

    .star--1 {
      width: 2px;
      height: 2px;
    }

    .star--2 {
      width: 4px;
      height: 4px;
      transform: translate3d(-5px, 0, 0);
    }

    .star--3 {
      width: 2px;
      height: 2px;
      transform: translate3d(-7px, 0, 0);
    }

    .star--4,
    .star--5,
    .star--6 {
      opacity: 1;
      transform: translate3d(0,0,0);
    }
    .star--4 {
      transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
    .star--5 {
      transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
    .star--6 {
      transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
  }
}

</style>
