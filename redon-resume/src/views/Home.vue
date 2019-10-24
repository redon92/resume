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
			<div class="darkLight" data-tootik="dark/light">
                <div class="toggleWrapper">
                    <input type="checkbox" v-model="theme" @change="changeTheme(theme)" class="dn" id="dn"/>
                    <label for="dn" class="toggle">
                        <span class="toggle__handler">
                          <span class="crater crater--1"></span>
                          <span class="crater crater--2"></span>
                          <span class="crater crater--3"></span>
                        </span>
                        <span class="star star--1"></span>
                        <span class="star star--2"></span>
                        <span class="star star--3"></span>
                        <span class="star star--4"></span>
                        <span class="star star--5"></span>
                        <span class="star star--6"></span>
                    </label>
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
									<h2><span>HI I'M</span> {{person.name}}</h2>
									<h3>{{person.profession}}</h3>
									<p>{{person.about}}</p>
									<div class="row">
										<div class="col-sm-6">
											<ul class="ul-info">
												<li class="li-info">
													<span class="title-info">Age</span>
													<span class="info">{{person.age}}</span>
												</li>
												<li class="li-info">
													<span class="title-info">Address</span>
													<span class="info">{{person.address}}</span>
												</li>
												<li class="li-info">
													<span class="title-info">Email</span>
													<span class="info">{{person.email}}</span>
												</li>
											</ul>
										</div>
										<div class="col-sm-6">
											<ul class="ul-info">
											  <li class="li-info"> <span class="title-info">Phone</span> <span class="info">{{person.phone}}</span></li>
											  <li class="li-info">
													<span class="title-info">Website</span>
												  <span class="info"><a href="">{{person.website}}</a></span>
												</li>
												<li class="li-info">
													<span class="title-info">Nationality</span>
													<span class="info">{{person.nationality}}</span>
												</li>
											</ul>
										</div>
										<div class="col-sm-12">
											<span class="title-links">Social Links</span>
											<ul class="ul-social-links">
												<li class="li-social-links" v-for="social in person.social">
													<a :href="social.url" :data-tootik="social.name" data-tootik-conf="square"><i :class="'fa fa-'+social.slug" aria-hidden="true"></i></a>
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
								<div class="skill" v-for="skill in person.skills.professional">
									<div class="title-progress">
										<span class="skill-name">{{skill.name}}</span>
										<span class="skill-value">{{skill.percentage}}</span>
									</div>
									<div class="progress">
									 	<div class="progress-bar progress1" role="progressbar" :aria-valuenow="skill.percentage" aria-valuemin="0" aria-valuemax="100" :style="'width: '+skill.percentage+'%;'">
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
										<div v-for="skill in person.skills.additional" class="col-sm-6">
											<div class="other">
												<!-- single other skill -->
												<div  class="skill">
													<i class="fa fa-check-square-o" aria-hidden="true"></i>
													<span>{{skill}}</span>
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
                        <education v-for="education in person.education" :education="education">
                        </education>
						<div class="clearfix"></div>
					</div>
				</section>
				<!-- #EXPERIENCE# -->

                <experiencesAll :resumeExp="{experiences:person.experiences}">

                </experiencesAll>

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
						<portfolio v-for="port in person.portfolio" :resumePort="{port}"/>
						
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
				            <div class="swiper-slide" v-for="interest in person.interests">
				            	<div>
				            		<img :src="'images/interests/'+interest.logo" :alt="interest.name">
				            	</div>
				            	<h4 class="text-capitalize">{{interest.name}}</h4>
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
import moment from 'moment';
import HelloWorld from '@/components/HelloWorld.vue';
import experiencesAll from '@/components/ExperiencesAll.vue';
import portfolio from '@/components/Portfolio.vue';
import expChart from '@/components/ExpChart.vue';
import education from '@/components/Education.vue';

export default {
  name: 'home',
  components: {
      experiencesAll,
      portfolio,
      expChart,
      education,
  },
  data(){
    return{
    	loading:true,
		theme:false,
		person:{
			name:'REDON LAÇAJ',
			profession:'Web Developer',
			address:'Tirana, Albania',
			email:'92redon@gmail.com',
			phone:'+355 67 22 66 112',
			nationality:'Albanian',
			website:'redon.al',
			websiteUrl:'http://redon.lacaj.al',
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
			about:'Hello! I’m Redon Laçaj. I\'m a Web Developer with over 2 years of experience. ' +
					'I have an in-depth knowledge in PHP, HTML5, CSS3, JavaScript (Vue.js), MYSQL. ' +
					'I currently work with Laravel and Wordpress, depending on the project. ' +
					'I\'m also an electronic circuits designer, Arduino and ESP developer. I\'m a fast learner, ' +
					'and I\'m always willing to improve .',
			skills:{
			    professional:[
                    {
                        name:'HTML & CSS',
                        percentage:'80',
                    },{
                        name:'PHP',
                        percentage:'75',
                    },{
                        name:'Laravel',
                        percentage:'60',
                    },{
                        name:'Vue.js',
                        percentage:'40',
                    },{
                        name:'Node.js',
                        percentage:'25',
                    },{
                        name:'Photoshop',
                        percentage:'70',
                    },
                ],
                additional:[
                        'MySQL','RESTfull WS','Bootstrap','Graphical Design','Adobe Illustrator','Circuit Design (PCB)'
                ],
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

				},{
					start:'2007',
					end:'2011',
					institution:'Kolegji turk HRP',
					area:'Gymnasium',
					degree:'',
					courses:[
						'General gymnasium courses, including advanced english classes, turkish and german classes. ' +
						'<br>All lessons were conducted in english language.'
					],

				},
			],
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


    }
  },
	mounted(){
		// if (document.readyState === "complete") {
  			this.loading=false;
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