
const contentArea = document.getElementById('all-content');
const resumeCreatingContainer = document.getElementById('resume-creating-conatiner');
const htmlDoc = document.getElementById('html');
const navBar = document.getElementById('nav-bar');
let atHomePage;

function NavBar(){
  navBar.innerHTML = `
  <div class="container">
              <a class="navbar-brand" href="#">
                <img src="./assets/images/logo.png" alt="logo" class="logo" width="150px">
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="navbar-link" href="#" onclick="HomePageDesign()">Homepage</a>
                  </li>
                  <li class="nav-item">
                    <a class="navbar-link"  onclick="goToAboutSection()">About Us</a>
                  </li>
                  <li class="nav-item">
                    <a href="./createResumeSection.html"><button class="navbar-link create-btn" >Create Resume</button></a>
                  </li>
                  <li class="nav-item">
                    <a class="navbar-link" href="#contact">Contact</a>
                  </li>
                </ul>
                <span class="nav-btn">
                  <a href="https://www.linkedin.com/in/kamilraza-dev/" target=_blank><button class="btn-main" type="submit">Let's Connect</button></a>
                </span>
              </div>
            </div>`
}

NavBar();

function HomePageDesign() {
    atHomePage = true;
    // resumeCreatingContainer.innerHTML = '';
    contentArea.innerHTML = `
    <section class="top-section">
                <div class="top-section-left">
                  <div class="tag-line">
                    The Best <span class="color-purple">#Free</span> Resume Builder
                  </div>
                  Get a Job-Ready Resume in Minutes for Free!
                </div>
                <div class="top-section-right">
                  Build your resume the easy way – for free! Our builder offers a wide selection of attractive templates to make your resume shine  
                    <button class="btn-build" onclick="createResume()">
                      Build My Resume
                    </button>
                </div>
          </section>
      
          <section class="about-us-section" id="about-section">
              <h2 class="about-heading">
                Mission <span>&</span> Vision
              </h2>
              <div class="underline"></div>
              <br>
              <div class="grey">
                <span class="brand-name-1-small"> Get</span><span class="brand-name-2-small">Resume</span> : <span class="black">Crafting Your Path to Success</span> <br> <br>
                  Welcome to <span class="black">GetResume</span>, where creating professional resumes is effortless. Showcase your skills and accomplishments with confidence in today's competitive job market. <br>
                  
              </div>

              <div class="about-content">
                  <div class="about-text">
                    <br>
                    Discover our user-friendly resume building platform at <span class="black">GetResume</span>. Leverage cutting-edge technology and industry expertise to tailor your standout resume, whether you're a recent graduate, seasoned professional, or career changer.
                  <br><br>
                    At <span class="black">GetResume</span>, we empower individuals on their career journeys. Our free resume builder provides equal opportunities for professional growth. Let us be your partner in crafting a compelling resume that opens doors to exciting opportunities.
                    <h5><b>Key Features:</b></h5>

                  <div>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header">                          
                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <b><i class="fas fa-desktop acc-icon"></i>Easy-to-use Interface</b><i class="fas fa-caret-down"></i>
                          </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body grey">
                            Our intuitive interface allows you to create your resume in a hassle-free manner. No technical expertise required – simply fill in the necessary information, choose from our diverse range of professional templates, and let our platform do the rest.
                          </div>
                      </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <b><i class="fas fa-tools acc-icon "></i>Customization Options</b><i class="fas fa-caret-down"></i>
                          </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body grey">
                            We believe in the power of personalization. With our wide selection of templates, fonts, colors, and layouts, you can customize your resume to reflect your individual style and professional branding. Stand out from the crowd and make a lasting impression.                        
                          </div>
                      </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <b><i class="fas fa-magic acc-icon"></i>Automatic Formatting</b><i class="fas fa-caret-down"></i>
                          </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body grey">
                            Say goodbye to the frustration of manual formatting. Our intelligent platform takes care of the formatting, ensuring that your resume appears polished and professional every time. Focus on the content while we handle the design.                      
                          </div>
                      </div>
                    </div>
                  </div>

                </div>
                
                </div>
                
                <div class="job-card">
                  <img src="./assets/images/job-card.png" alt="Job Card.png" class="job-card-image">
                </div>
              </div>  
          </section>`
}

HomePageDesign();

function goToAboutSection() {
  if(atHomePage){
    const aboutSection = document.getElementById('about-section');
    const offset = aboutSection.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: offset,
      behavior: 'auto'
    });
    htmlDoc.classList.remove('html');
  } else {
    htmlDoc.classList.add('html');
    HomePageDesign();
    goToAboutSection();
  }
} 


function createResume(){
  atHomePage = false;
  // contentArea.innerHTML = '';
  // resumeCreatingContainer.innerHTML = `<div class="create-resume-section" id="create-resume-section">
  //   <div class="category">
  //   <button class="category-btn"><i class="fas fa-user info-icons"></i><span class="category-item">Personal Information</span></button>
  //   <button class="category-btn"><i class="fas fa-book info-icons"></i><span class="category-item">Education</span></button>
  //   <button class="category-btn"><i class="fas fa-tools info-icons"></i><span class="category-item">Skills</span></button>
  //   <button class="category-btn"><i class="fas fa-book info-icons"></i><span class="category-item">Expirence</span></button>
  //   <button class="category-btn"><i class="fas fa-book info-icons"></i><span class="category-item">Languages</span></button>
  //   <button class="category-btn"><i class="fas fa-book info-icons"></i><span class="category-item">Social Accounts</span></button>
  // </div> 
  // ${    personalInfoPanelDesign  }
  //   </div> `
  
  window.location.href = "./createResumeSection.html";
}

personalInfoPanelDesign =  `
  <div></div>
`