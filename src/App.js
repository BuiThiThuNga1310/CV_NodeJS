import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div>
      <header>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <img src="cv.png" className="img-responsive img-circle"/>
           
          <h1 className="white">BUI THI THU NGA</h1>
          <h1 className="white">Third-year Student</h1>
        </div>
      </div>
    </div>
  </header>
  


    <div className="row">
      <div className="col-md-6 col-sm-12">
        <div className="about">
          <h2 className="accent">About me</h2>
          
           <p>
              I will have a bachelor degree in information technology and am looking forward to becoming a Front-End Developer.   
           </p>
           <p>Responsible and hardworking, I'm able to handle working under pressure as well as communicate and collaborate seamlessly in a teamwork environment.</p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="skills">
          <h2 className="white">Skills</h2>
          <strong>Java</strong>
        
            <div className="progress">
              <div className="progress-bar progress-bar-primary" role="progressbar" 
                          aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%;"></div>
            </div>
          <strong>C++,C#</strong>
          
            <div className="progress">
              <div className="progress-bar progress-bar-primary" role="progressbar" 
                          aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%;"></div>
            </div>
          <strong>Bootstrap,Js</strong>
          
            <div className="progress">
              <div className="progress-bar progress-bar-primary" role="progressbar" 
                          aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="width: 65%;"></div>
            </div>
        </div>
      </div>
    </div>
  
  
  
    <div className="row">
      <div className="col-md-8">
        <div className="education">
          <h2 className="white">Education</h2>					 
              <h4 className="education-title ">Bachelor of Information Technology</h4>
                <div className="education-school">
                  <h5>The University of Da Nang - University of Science and Education</h5><span></span>
                  <h5>2018 - 2022</h5>
                </div>
                <p className="education-description"> 
                 
                Third-year student in information technology, with basic information technology knowledge, English majoring in information technology.
      
              </p>					 
        </div>
      </div>
      <div classNameName="col-md-4">
        <div classNameName="languages">
          <h2>Languages</h2>
            <ul>
              <li>English</li>
              <li>Japan</li>
              <li>Korea</li>
              <li>China</li>
            </ul>
        </div>
      </div>
    </div>

  


    <div className="row">
      <div className="col-md-4 col-sm-12">
        <div className="contact">
          <h2>Contact</h2>
            <p><i className="fa fa-map-marker"></i>23 Nguyen Luong Bang, DaNang</p>
            <p><i className="fa fa-phone"></i>(+84) 333 606 292</p>
            <p><i className="fa fa-envelope"></i>3120218120@ued.udn.vn</p>
            
        </div>
      </div>
      <div className="col-md-8 col-sm-12">
        <div className="experience">
          <h2 className="white">Experiences</h2>
            <div className="experience-content">
              
              <h5>September 12, 2020</h5>
            <p><className className="education-description"> 
              Responsive Web Design Certification of freeCodeCamp.</className>
            </p>	
                    
              
              <h5>November 16, 2020</h5>
              <p> <className className="education-description"> 
                JavaScript Algorithms and Data Structures Certification of freeCodeCamp.</className>
              </p> 
              </div>
            </div>
      </div>
    </div>

  
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <p>Accounts</p>
          <ul className="social-icons">
            <li><a href="https://www.facebook.com/profile.php?id=100012497807372" className="fa fa-facebook"></a></li>
                      <li><a href="#" className="fa fa-google-plus"></a></li>
            <li><a href="https://twitter.com/Yeinn16" className="fa fa-twitter"></a></li>
            <li><a href="#" className="fa fa-dribbble"></a></li>
            <li><a href="https://github.com/BuiThiThuNga1310" className="fa fa-github"></a></li>
            <li><a href="#" className="fa fa-behance"></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  
   
    </div>
    

  );
}

export default App;
