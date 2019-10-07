<template>
  <div class="content">
			<!-- #LOADER# --> <!-- other loader : http://tobiasahlin.com/spinkit/ -->

	  <div v-if="loading" class="loaderDiv">
		  <div class="loader">
			  <div class="loader__bar"></div>
			  <div class="loader__bar"></div>
			  <div class="loader__bar"></div>
			  <div class="loader__bar"></div>
			  <div class="loader__bar"></div>
			  <div class="loader__ball"></div>
		  </div>
	  </div>
			<!-- #MENU# -->
	  <div class="resumeStyle" v-else>
			<div class="menu">
				<h2 class="logo"><img src="images/favicon.png" style="max-width:100px" alt=""></h2>
				<div class="menu-content">
					<ul>
						<li><a class="active" href="#" data-value="about">ABOUT</a></li>
						<li><a href="#" data-value="skills">SKILLS</a></li>
						<li><a href="#" data-value="education">EDUCATION</a></li>
						<li><a href="#" data-value="experience">EXPERIENCE</a></li>
						<li><a href="#" data-value="portfolio">PORTFOLIO</a></li>
						<li><a href="#" data-value="interests">INTERESTS</a></li>
						<li><a href="#" data-value="contact-us">CONTACT ME</a></li>
					</ul>
				</div>
				<div style="display: flex;">
					<div class="open-menu">
						<i class="fa fa-bars"></i>
					</div>
					<input type="checkbox" v-model="theme" @change="changeTheme(theme)">

				</div>
			</div>
			<!-- #THEME-OPTION# --> <!-- other colors : http://colorhunt.co/ -->
			<!--<div class="theme-option">
				<div class="change-theme">
					<div class="light-dark-theme">
						<ul>
							<li class="light">
								<h4>Light</h4>
								<span data-value="css/colors/light.css"><i class="fa fa-check"></i></span>
							</li>
							<li class="dark">
								<h4>Dark</h4>
								<span data-value="css/colors/dark.css"><i class="fa fa-check"></i></span>
							</li>
						</ul>
					</div>
					<div class="colors-theme">
						<h4>12 awesome colors</h4>
						<ul>
							<li class="color1"><span data-value="css/colors/color1-0487cc.css"><i class="fa fa-check"></i></span></li>
							<li class="color2"><span data-value="css/colors/color2-f23a3a.css"><i class="fa fa-check"></i></span></li>
							<li class="color3"><span data-value="css/colors/color3-2eac6d.css"><i class="fa fa-check"></i></span></li>
							<li class="color4"><span data-value="css/colors/color4-f35b25.css"><i class="fa fa-check"></i></span></li>
						</ul>
						<ul>
							<li class="color5"><span data-value="css/colors/color5-f6416c.css"><i class="fa fa-check"></i></span></li>
							<li class="color6"><span data-value="css/colors/color6-ff9999.css"><i class="fa fa-check"></i></span></li>
							<li class="color7"><span data-value="css/colors/color7-00adb5.css"><i class="fa fa-check"></i></span></li>
							<li class="color8"><span data-value="css/colors/color8-00cf95c.css"><i class="fa fa-check"></i></span></li>
						</ul>
						<ul>
							<li class="color9"><span data-value="css/colors/color9-827055.css"><i class="fa fa-check"></i></span></li>
							<li class="color10"><span data-value="css/colors/color10-8200ff.css"><i class="fa fa-check"></i></span></li>
							<li class="color11"><span data-value="css/colors/color11-e4c144.css"><i class="fa fa-check"></i></span></li>
							<li class="color12"><span data-value="css/colors/color12-5457a6.css"><i class="fa fa-check"></i></span></li>
						</ul>
					</div>
				</div>
				<div class="open-theme">
					<i class="fa fa-cogs"></i>
				</div>
			</div>-->
			<!-- #SCROLL-TOP# -->
			<div class="darkLight" data-tootik="dark/light">
				<div class="toggle toggle--daynight">
					<input type="checkbox"  v-model="theme" @change="changeTheme(theme)" id="toggle--daynight" class="toggle--checkbox">
					<label class="toggle--btn" for="toggle--daynight"><span class="toggle--feature"></span></label>
				</div>
			</div>
		  <div class="scroll-top" data-tootik="TOP" data-tootik-conf="invert no-arrow no-fading">
			  <i class="fa fa-arrow-up"></i>
		  </div>
			<!-- #CONTAINER# -->
			<div class="container">
				<!-- #ABOUT# -->
				<section id="about" class="section section-about wow fadeInUp">
					<div class="profile">
						<div class="row text-left">
							<div class="col-sm-4 ">
								<div class="photo-profile">
									<img src="images/me.jpg" alt="Redon Lacaj">
								</div>
								<a href="cv/CV_Redon_Lacaj_5.pdf" target="cv">
									<div class="download-resume">
										<i class="fa fa-cloud-download" aria-hidden="true"></i>
										<span class="text-download">DOWNLOAD CV</span>
									</div>
								</a>
								
							</div>
							<div class="col-sm-8">
								<div class="info-profile">
									<h2><span>HI I'M</span> REDON LAÇAJ</h2>
									<h3>Web Developer</h3>
									<p>Hello! I’m Redon Laçaj. I'm a Web Developer with over 2 years of experience.
									I have an in-depth knowledge in PHP, HTML5, CSS3, JavaScript (Vue.js), MYSQL. I currently work with Laravel and Wordpress, depending on the project. I'm also an electronic circuits designer, Arduino and ESP developer. I'm a fast learner, and I'm always willing to improve .</p>
									<div class="row">
										<div class="col-sm-6">
											<ul class="ul-info">
												<li class="li-info">
													<span class="title-info">Age</span>
													<span class="info">26</span>
												</li>
												<li class="li-info">
													<span class="title-info">Address</span>
													<span class="info">Tirana, Albania</span>
												</li>
												<li class="li-info">
													<span class="title-info">Email</span>
													<span class="info">92redon@gmail.com</span>
												</li>
											</ul>
										</div>
										<div class="col-sm-6">
											<ul class="ul-info">
											  <li class="li-info"> <span class="title-info">Phone</span> <span class="info">+355 67 22 66 112</span></li>
											  <li class="li-info">
													<span class="title-info">Website</span>
												  <span class="info"><a href="">redon.al</a></span>
												</li>
												<li class="li-info">
													<span class="title-info">Nationality</span>
													<span class="info">Albanian</span>
												</li>
											</ul>
										</div>
										<div class="col-sm-12">
											<span class="title-links">Social Links</span>
											<ul class="ul-social-links">
												<li class="li-social-links">
													<a href="https://www.facebook.com/redvenger/" data-tootik="Facebook" data-tootik-conf="square"><i class="fa fa-facebook" aria-hidden="true"></i></a>
												</li>
												<li class="li-social-links">
													<a href="https://plus.google.com/117470767662553758748" data-tootik="Google Plus" data-tootik-conf="square"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
												</li>
												<li class="li-social-links">
													<a href="https://www.linkedin.com/in/redon-la%C3%A7aj-40188212b/" data-tootik="Linkedin" data-tootik-conf="square"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
												</li>
												<li class="li-social-links">
													<a href="https://www.instagram.com/redonl/" data-tootik="Instagram" data-tootik-conf="square"><i class="fa fa-instagram" aria-hidden="true"></i></a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<!-- #SKILLS# -->
				<section id="skills" class="section section-skills wow fadeInUp" data-wow-offset="40">
					<div class="header-section">
						<h2 class="h2-section">SKILLS</h2>
					</div>
					<div class="row text-left">
						<div class="col-md-5">
							<div class="professional-skills">
								<div class="title-skills">
									<h3>PROFESSIONAL SKILLS</h3>
								</div>
								<!-- single skill -->
								<div class="skill">
									<div class="title-progress">
										<span class="skill-name">HTML & CSS</span>
										<span class="skill-value">80%</span>
									</div>
									<div class="progress">
									 	<div class="progress-bar progress1" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 90%;">
									    </div>
									</div>
								</div>
								<!-- / single skill -->
								<!-- single skill -->
								<div class="skill">
									<div class="title-progress">
										<span class="skill-name">PHP</span>
										<span class="skill-value">75%</span>
									</div>
									<div class="progress">
									 	<div class="progress-bar progress2" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;">
									    </div>
									</div>
								</div>
								<!-- / single skill -->
								<!-- single skill -->
								<div class="skill">
									<div class="title-progress">
										<span class="skill-name">Laravel</span>
										<span class="skill-value">60%</span>
									</div>
									<div class="progress">
									 	<div class="progress-bar progress3" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
									    </div>
									</div>
								</div>
								<!-- / single skill -->
								<!-- single skill -->
								<div class="skill">
									<div class="title-progress">
										<span class="skill-name">Vue.js</span>
										<span class="skill-value">40%</span>
									</div>
									<div class="progress">
									 	<div class="progress-bar progress4" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 40%;">
									    </div>
									</div>
								</div>
								<!-- / single skill -->
								<!-- single skill -->
								<div class="skill">
									<div class="title-progress">
										<span class="skill-name">Node.js</span>
										<span class="skill-value">25%</span>
									</div>
									<div class="progress">
									 	<div class="progress-bar progress5" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 25%;">
									    </div>
									</div>
								</div>
								<div class="skill">
									<div class="title-progress">
										<span class="skill-name">Photoshop</span>
										<span class="skill-value">80%</span>
									</div>
									<div class="progress">
									 	<div class="progress-bar progress5" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%;">
									    </div>
									</div>
								</div>
								<!-- / single skill -->
							</div>
						</div>
						<div class="col-md-7">
							<div class="additional-skills">
								<div class="title-skills">
									<h3>ADDITIONAL SKILLS</h3>
								</div>
								<div class="circle-progress">
									<div class="row">
										<!-- single circle skill -->
										<div class="col-sm-4">
											<div class="circle">
												<div class="chart-percentage">
													<span>90%</span>
												</div>
												<div class="chart" data-percent="90">
													<!-- canvas -->
												</div>
												<div class="name-circle">
													<span>English</span>
												</div>
											</div>
										</div>
										<!-- / single circle skill -->
										<!-- single circle skill -->
										<div class="col-sm-4">
											<div class="circle">
												<div class="chart-percentage">
													<span>70%</span>
												</div>
												<div class="chart" data-percent="70">
													<!-- canvas -->
												</div>
												<div class="name-circle">
													<span>Italian</span>
												</div>
											</div>
										</div>
										<!-- / single circle skill -->
										<!-- single circle skill -->
										<div class="col-sm-4">
											<div class="circle">
												<div class="chart-percentage">
													<span>70%</span>
												</div>
												<div class="chart" data-percent="70">
													<!-- canvas -->
												</div>
												<div class="name-circle">Spanish<br>
												</div>
											</div>
										</div>
										<!-- / single circle skill -->
									</div>
								</div>
								
								
								
								<div class="other-skills">
									<div class="row">
										<div class="col-sm-6">
											<div class="other">
												<!-- single other skill -->
												<div class="skill">
													<i class="fa fa-check-square-o" aria-hidden="true"></i>
													<span>MySQL</span>
												</div>
												<!-- / single other skill -->
												<!-- single other skill -->
												<div class="skill">
													<i class="fa fa-check-square-o" aria-hidden="true"></i>
													<span>RESTfull WS</span>
												</div>
												<!-- / single other skill -->
												<!-- single other skill -->
												<div class="skill">
													<i class="fa fa-check-square-o" aria-hidden="true"></i>
													<span>Bootstrap</span>
												</div>
												<div class="skill">
													<i class="fa fa-check-square-o" aria-hidden="true"></i>
													<span>Basic Android programming</span>
												</div>
												<!-- / single other skill -->
											</div>
										</div>
										<div class="col-sm-6">
											<div class="other">
												<!-- single other skill -->
												<div class="skill">
													<i class="fa fa-check-square-o" aria-hidden="true"></i>
													<span>Graphical Design</span>
												</div>
												<!-- / single other skill -->
												<!-- single other skill -->
												
												<!-- / single other skill -->
												<!-- single other skill -->
												<div class="skill">
													<i class="fa fa-check-square-o" aria-hidden="true"></i>
													<span>Adobe Illustrator</span>
												</div>
												<div class="skill">
													<i class="fa fa-check-square-o" aria-hidden="true"></i>
													<span>Circuit Design (PCB)</span>
												</div>
												<!-- / single other skill -->
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<!-- #EDUCATION# -->
				<section id="education" class="section section-education wow fadeInUp" data-wow-offset="40">
					<div class="header-section">
						<h2 class="h2-section">EDUCATION</h2>
					</div>
					<div class="row text-left">
						<!-- single education -->
						<div class="col-sm-4">
							<div class="education-content">
				            	<div class="period">
				            		<h3>2014 - 2017</h3>
				            	</div>
				            	<ul class="ul-education">
				            		<li class="li-specialty">
				            			<div class="specialty">
						            		<span class="education-icon"><i class="fa fa-file-text"></i></span>
						            		<span class="specialty-name">Masters in Computer Science</span>
						            	</div>
				            		</li>
				            		<li class="li-university">
				            			<div class="university">
						            		<span class="education-icon"><i class="fa fa-university"></i></span>
						            		<span class="university-name">Epoka University</span>
						            	</div>
				            		</li>
				            	</ul>
				            	<p class="prg-education">Main Courses: Artificial Intelligence, Distributed Programming, Advanced Database Management Systems, Advanced Network Management, Microprocessors programming, Machine Learning
								</p>
				            </div>
						</div>
						<!-- / single education -->
						<!-- single education -->
						<div class="col-sm-4">
							<div class="education-content">
				            	<div class="period">
				            		<h3>2011 - 2014</h3>
				            	</div>
				            	<ul class="ul-education">
				            		<li class="li-specialty">
				            			<div class="specialty">
						            		<span class="education-icon"><i class="fa fa-file-text"></i></span>
						            		<span class="specialty-name">Computer Engineering</span>
						            	</div>
				            		</li>
				            		<li class="li-university">
				            			<div class="university">
						            		<span class="education-icon"><i class="fa fa-university"></i></span>
						            		<span class="university-name">Epoka University</span>
						            	</div>
				            		</li>
				            	</ul>
								<p class="prg-education">Main courses:
				            	Programming languages: C, C++, Java, HTML-CSS, JS, PHP, Python, Linux.
				            	</br>Other courses: Database Management Systems, Networks Management, Digital Design, Computer Architecture.</br>
								</p>
				            </div>
						</div>
						<!-- / single education -->
						<!-- single education -->
						<div class="col-sm-4">
							<div class="education-content">
				            	<div class="period">
				            		<h3>2007 - 2011</h3>
				            	</div>
				            	<ul class="ul-education">
				            		<li class="li-specialty">
				            			<div class="specialty">
						            		<span class="education-icon"><i class="fa fa-file-text"></i></span>
						            		<span class="specialty-name">Gymnasium</span>
						            	</div>
				            		</li>
				            		<li class="li-university">
				            			<div class="university">
						            		<span class="education-icon"><i class="fa fa-university"></i></span>
						            		<span class="university-name">Kolegji turk HRP</span>
						            	</div>
				            		</li>
				            	</ul>
				            	<p class="prg-education">General gymnasium courses, including advanced english classes, turkish and german classes. All lessons were conducted in english language.</p>
				            </div>
						</div>
						<!-- / single education -->
						<div class="clearfix"></div>
						<!-- single education -->
						<div class="col-sm-4"> </div>
						<!-- / single education -->
						<!-- single education -->
					
						<!-- / single education -->
						<!-- single education -->
						
						<!-- / single education -->
						<div class="clearfix"></div>
					</div>
				</section>
				<!-- #EXPERIENCE# -->
				<section id="experience" class="section section-experience wow fadeInUp" data-wow-offset="40">
					<div class="header-section">
						<h2 class="h2-section">EXPERIENCE</h2>
					</div>
					<div class="row">
						<div class="col-md-10 col-md-offset-1">
							<div class="all-experience">
								
								<!-- / single experience -->
								
								<experience v-for="experience in experiences" :resumeExp="{experience}"/>
								<!-- / single experience -->
								
							</div>
						</div>
					</div>
				</section>

				<!-- #PORTFOLIO# -->
				<section id="portfolio" class="section section-portfolio wow fadeInUp" data-wow-offset="40">
					<div class="header-section">
						<h2 class="h2-section">PORTFOLIO</h2>
					</div>
					
					<!--<div class="filter-portfolio">
						<ul>
							<li class="active filter" data-filter="all">All</li>
							<li class="filter" data-filter=".term1">Web Design</li>
							<li class="filter" data-filter=".term2">Photography</li>
							<li class="filter" data-filter=".term3">Development</li>
						</ul>
					</div>-->
					
					<div class="row">
						<!-- single work -->
						<portfolio v-for="port in portfolio" :resumePort="{port}"/>
						
						<div class="clearfix"></div>
					</div>
				</section>
				
	
				<!-- #INTERESTS# -->
				<section id="interests" class="section section-interests wow fadeInUp" data-wow-offset="40">
					<div class="header-section">
						<h2 class="h2-section">INTERESTS</h2>
					</div>
					<div class="text-interests">
						
					</div>
					<!-- more icons for interests : https://www.iconfinder.com/ -->
				    <div class="swiper-container">
				        <div class="swiper-wrapper">
				            <div class="swiper-slide">
				            	<div>
				            		<img src="images/interests/travel_icon.png" alt="Travel">
				            	</div>
				            	<h4>Travel</h4>
				            </div>
				            <div class="swiper-slide">
				            	<div>
				            		<img src="images/interests/music_icon.png" alt="Music">
				            	</div>
				            	<h4>Music</h4>
				            </div>
				            <div class="swiper-slide">
				            	<div>
				            		<img src="images/interests/gaming_icon.png" alt="Gaming">
				            	</div>
				            	<h4>Gaming</h4>
				            </div>
				            <div class="swiper-slide">
				            	<div>
				            		<img src="images/interests/swiming_icon.png" alt="Swiming">
				            	</div>
				            	<h4>Swiming</h4>
				            </div>
				            <div class="swiper-slide">
				            	<div>
				            		<img src="images/interests/movies_icon.png" alt="Movies">
				            	</div>
				            	<h4>Movies</h4>
				            </div>
				            <div class="swiper-slide">
				            	<div>
				            		<img src="images/interests/bicycling_icon.png" alt="Bicycling">
				            	</div>
				            	<h4>Bicycling</h4>
				            </div>
				            
				        </div>
				    </div>
				</section>

<!--				<section class="section section-contact-us wow fadeInUp">-->
<!--					<div class="header-section">-->
<!--						<h2 class="h2-section">GRAPH</h2>-->
<!--					</div>-->
<!--					<div class="row">-->
<!--						<div class="">-->
<!--							<div class="">-->
<!--								<expChart style="height: 500px"/>-->
<!--							</div>-->
<!--						</div>-->
<!--					</div>-->
<!--				</section>-->
				
				<!-- #CONTACT_ME# -->
				<section id="contact-us" class="section section-contact-us wow fadeInUp" data-wow-offset="40">
					<div class="header-section">
						<h2 class="h2-section">CONTACT ME</h2>
					</div>
					<div class="row">
						<div class="col-sm-7">
							<div class="form-content">
								<h3>CONTACT ME</h3>
								<form id='contactForm' data-toggle='validator' method='post'><input type='hidden' name='form-name' value='contactForm' />
									<input type="text" id="name" placeholder="Name" required>
									<input type="email" id="email" placeholder="Email" required>
									<textarea id="message" placeholder="Message" required></textarea>
									<input type="submit" id="form-submit" value="SEND">
									<div id="msgSubmit" class="h3 text-center hidden"></div>
            						<div class="clearfix"></div>
								</form>
							</div>
						</div>
						<div class="col-sm-5">
							<div class="info-content">
								<h3>KEEP IN TOUCH</h3>
								<div class="address">
									<span class="info-icon"><i class="fa fa-map-marker"></i></span>
									<span class="info-text">Tirana, Albania</span>
								</div>
								<div class="email"><span class="info-icon"><em class="fa fa-envelope"></em></span> <span class="info-text">92redon@gmail.com</span></div>
								<div class="telephone">
									<span class="info-icon"><i class="fa fa-phone"></i></span>
									<span class="info-text">+355 67 22 66 112</span>
								</div>
								<div class="website">
									<span class="info-icon"><i class="fa fa-link"></i></span>
									<span class="info-text"><a href="redon.al">redon.al</a></span>
								</div>
							</div>
						</div>
					</div>
					<div class="social-links">
						<ul>
							<li><a href="https://www.facebook.com/redvenger"><i class="fa fa-facebook"></i></a></li>
							<li><a href="https://plus.google.com/117470767662553758748"><i class="fa fa-google-plus"></i></a></li>
							<li><a href="https://www.linkedin.com/in/redon-la%C3%A7aj-40188212b/"><i class="fa fa-linkedin"></i></a></li>
							<li><a href="instagram.com/redonl"><i class="fa fa-instagram"></i></a></li>
					
						</ul>
					</div>
				</section>
			</div>
	  </div>
		</div>
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
import HelloWorld from '@/components/HelloWorld.vue';
import experience from '@/components/Experience.vue';
import portfolio from '@/components/Portfolio.vue';
import expChart from '@/components/ExpChart.vue';



export default {
  name: 'home',
  components: {
    HelloWorld,
    experience,
  	portfolio,
	  expChart
  },
  data(){
    return{
    	loading:true,
		theme:true,
      experiences:[
        {
          start:'Feb 2019',
          end:'Current',
          role:'Web Developer FS',
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
          role:'Web Developer FS',
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
            '-Support.'
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
      ]
    }
  },
	mounted(){
		// if (document.readyState === "complete") {
  			this.loading=false;
		// }
	},
	methods:{
  	changeTheme(val){
		if(!val)
			document.body.setAttribute('data-theme', 'dark');
		else {
			document.body.removeAttribute('data-theme');
		}
	}
	}
}
</script>

<style lang="scss">
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

	body {
		/*height: 100%;*/
		/*display: flex;*/
		/*align-items: center;*/
		/*justify-content: center;*/
	}

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

	&__bar {
		 position: absolute;
		 bottom: 0;
		 width: 10px;
		 height: 50%;
		 background: $bar-color;
		 transform-origin: center bottom;
		 box-shadow: 1px 1px 0 rgba(0,0,0,.2);

	@for $i from 1 through 5 {
	&:nth-child(#{$i}) {
		left: ($i - 1) * 15px;
		transform: scale(1,$i*.2);
		animation: barUp#{$i} 4s infinite;
	}
	}

	}

	&__ball {
		 position: absolute;
		 bottom: 10px;
		 left: 0;
		 width: 10px;
		 height: 10px;
		 background: $ball-color;
		 border-radius: 50%;
		 animation: ball 4s infinite;
	 }
	}

	@keyframes ball {
		0% {
			transform: translate(0, 0);
		}
		5% {
			transform: translate(8px, -14px);
		}
		10% {
			transform: translate(15px, -10px)
		}
		17% {
			transform: translate(23px, -24px)
		}
		20% {
			transform: translate(30px, -20px)
		}
		27% {
			transform: translate(38px, -34px)
		}
		30% {
			transform: translate(45px, -30px)
		}
		37% {
			transform: translate(53px, -44px)
		}
		40% {
			transform: translate(60px, -40px)
		}
		50% {
			transform: translate(60px, 0)
		}
		57% {
			transform: translate(53px, -14px)
		}
		60% {
			transform: translate(45px, -10px)
		}
		67% {
			transform: translate(37px, -24px)
		}
		70% {
			transform: translate(30px, -20px)
		}
		77% {
			transform: translate(22px, -34px)
		}
		80% {
			transform: translate(15px, -30px)
		}
		87% {
			transform: translate(7px, -44px)
		}
		90% {
			transform: translate(0, -40px)
		}
		100% {
			transform: translate(0, 0);
		}
	}

	@keyframes barUp1 {
		0% {
			transform: scale(1, .2);
		}
		40%{
			transform: scale(1, .2);
		}
		50% {
			transform: scale(1, 1);
		}
		90% {
			transform: scale(1,1);
		}
		100% {
			transform: scale(1,.2);
		}
	}
	@keyframes barUp2 {
		0% {
			transform: scale(1, .4);
		}
		40% {
			transform: scale(1, .4);
		}
		50% {
			transform: scale(1, .8);
		}
		90% {
			transform: scale(1, .8);
		}
		100% {
			transform: scale(1, .4);
		}
	}
	@keyframes barUp3 {
		0% {
			transform: scale(1, .6);
		}
		100% {
			transform: scale(1, .6);
		}
	}
	@keyframes barUp4 {
		0% {
			transform: scale(1, .8);
		}
		40% {
			transform: scale(1, .8);
		}
		50% {
			transform: scale(1, .4);
		}
		90% {
			transform: scale(1, .4);
		}
		100% {
			transform: scale(1, .8);
		}
	}
	@keyframes barUp5 {
		0% {
			transform: scale(1, 1);
		}
		40% {
			transform: scale(1, 1);
		}
		50% {
			transform: scale(1, .2);
		}
		90% {
			transform: scale(1, .2);
		}
		100% {
			transform: scale(1, 1);
		}
	}


/*	day-night switch*/


	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	/* =====================================================
       Some defaults across all toggle demos
       ===================================================== */

	.toggle {
		display: block;
		text-align: center;
		margin-top: 40px;
		user-select: none;
	}
	.toggle--checkbox {
		display: none;
	}
	.toggle--btn {
		display: block;
		margin: 0 auto;

		font-size: 1.4em;

		transition: all 350ms ease-in;

		&:hover {
			cursor: pointer;
		}
	}

	.toggle--btn,
	.toggle--checkbox,
	.toggle--feature {
		&,
		&:before,
		&:after {
			transition: all 250ms ease-in;
		}
		&:before,
		&:after {
			content: '';
			display: block;
		}
	}


	/* ===================================================
       Day/Night and Gender toggle buttons
       =================================================== */

	$toggleHeight: 40px;
	$toggleWidth: 70px;
	$borderWidth: 5px;
	$toggleBtnRadius: $toggleHeight - 14px;

	$bgColor--night: #3c4145;
	$borderColor--night: #1c1c1c;
	$toggleBtn-bgColor--night: #fff;
	$toggleBtn-borderColor--night: #e3e3c7;

	$bgColor--day: #9ee3fb;
	$borderColor--day: #86c3d7;
	$toggleBtn-bgColor--day: #ffdf6d;
	$toggleBtn-borderColor--day: #e1c348;

	$cloud-borderColor: #d3d3d3;
	$cloud-bgColor: #fff;

	.toggle--daynight,
	.toggle--like {
		.toggle--btn {
			position: relative;
			height: $toggleHeight;
			width: $toggleWidth;
			border-radius: $toggleHeight;

			//toggle button
			&:before {
				position: absolute;
				top: 2px;
				left: 4px;
				width: $toggleBtnRadius;
				height: $toggleBtnRadius;
				border-radius: 50%;
			}
		}
	}

	.toggle--daynight {
		.toggle--btn {
			border: $borderWidth solid $borderColor--night;
			background-color: $bgColor--night;

			//toggle button
			&:before {
				background-color: $toggleBtn-bgColor--night;
				border: $borderWidth solid $toggleBtn-borderColor--night;
			}
			&:after {
				position: absolute;
				top: 62%;
				left: $toggleWidth - ($toggleBtnRadius) - ($borderWidth * 2) - 20px;
				z-index: 10;
				width: $toggleBtnRadius / 5;
				height: $toggleBtnRadius / 5;
				opacity: 0;
				background-color: $cloud-bgColor;
				border-radius: 50%;

				//crazy ass box-shadow to make the cloud
				box-shadow: $cloud-bgColor 0 0,
				$cloud-bgColor 3px 0,
				$cloud-bgColor 6px 0,
				$cloud-bgColor 9px 0,
				$cloud-bgColor 11px 0,
				$cloud-bgColor 14px 0,
				$cloud-bgColor 16px 0,
				$cloud-bgColor 21px -1px 0 1px,
				$cloud-bgColor 16px -7px 0 -2px,
				$cloud-bgColor 7px -7px 0 1px,

				$cloud-borderColor 0 0 0 4px,
				$cloud-borderColor 6px 0 0 4px,
				$cloud-borderColor 11px 0 0 4px,
				$cloud-borderColor 16px 0 0 4px,
				$cloud-borderColor 21px -1px 0 5px,
				$cloud-borderColor 16px -7px 0 1px,
				$cloud-borderColor 7px -7px 0 5px;

				transition: opacity 100ms ease-in;
			}
		}

		@keyframes starry_star {
			50% {
				background-color: rgba(255,255,255,0.1);
				box-shadow: #fff 30px -3px 0 0,
				#fff 12px 10px 0 -1px,
				rgba(255,255,255,0.1) 38px 18px 0 1px,
				#fff 32px 34px 0 0,
				rgba(255,255,255,0.1) 20px 24px 0 -1.5px,
				#fff 5px 38px 0 1px;
			}
		}
		@keyframes bounceIn {
			0% {
				opacity: 0;
				transform: scale(.3);
			}
			50% {
				opacity: 100;
				transform: scale(1.1);
			}
			55% {
				transform: scale(1.1);
			}
			75% {
				transform: scale(.9);
			}
			100% {
				opacity: 100;
				transform: scale(1);
			}
		}
		//stars
		.toggle--feature {
			display: block;
			position: absolute;
			top: 10px;
			left: 55%;
			z-index: 20;
			width: 1px;
			height: 1px;
			border-radius: 50%;
			background-color: #fff;

			box-shadow: rgba(255,255,255,0.1) 30px -3px 0 0,
			rgba(255,255,255,0.1) 5px 10px 0 -1px,
			#fff 38px 18px 0 1px,
			rgba(255,255,255,0.1) 25px 34px 0 0,
			#fff 20px 24px 0 -1.5px,
			rgba(255,255,255,0.1) 5px 38px 0 1px;

			animation: starry_star 5s ease-in-out infinite;

			&:before {
				position: absolute;
				top: -2px;
				left: -15px;
				width: 2px;
				height: 2px;
				background-color: $toggleBtn-bgColor--night;
				border-radius: 50%;
				border: 5px solid $toggleBtn-borderColor--night;

				box-shadow: $toggleBtn-borderColor--night -13px 0 0 -3px,
				$toggleBtn-borderColor--night -8px 6px 0 -2px;

				transform-origin: -6px 130%;
			}
		}

		//what happens once checkbox is checked
		.toggle--checkbox:checked {
			& + .toggle--btn {
				background-color: $bgColor--day;
				border: $borderWidth solid $borderColor--day;

				&:before {
					left: $toggleWidth - ($toggleBtnRadius) - ($borderWidth * 2) - 4px;
					background-color: $toggleBtn-bgColor--day;
					border: $borderWidth solid $toggleBtn-borderColor--day;
				}
				&:after {
					opacity: 100;
					animation-name: bounceIn;
					animation-duration: 0.60s;
					animation-delay: 0.10s;
					animation-fill-mode: backwards;
					animation-timing-function: ease-in-out;
				}

				> .toggle--feature {
					opacity: 0;
					box-shadow: rgba(255,255,255,0.1) 30px -3px 0 -4px,
					rgba(255,255,255,0.1) 12px 10px 0 -5px,
					#fff 38px 18px 0 -3px,
					rgba(255,255,255,0.1) 32px 34px 0 -4px,
					#fff 20px 24px 0 -5.5px,
					rgba(255,255,255,0.1) 5px 38px 0 -3px;
					animation: none;

					&:before {
						left: 25px;
						transform: rotate(70deg);
					}
				}
			}
		}
	}
</style>