import React from 'react';
// import { Container, Row, Col, Image } from 'react-bootstrap';

import './App.css';
import Avtar from './images/avtar.JPG';
import Love from './images/love.jpg';

class App extends React.Component {

  state = {
    words: [],

  }

  render() {
    return (
      <div>
        
        <header className="masthead">
          <div className="container d-flex h-100 align-items-center">
            <div className="mx-auto text-center">
              <h1 className="mx-auto my-0 text-uppercase">Hii, there</h1>
              {/* <h2 className="text-white-50 mx-auto mt-3 mb-1">I'm Kaushal Koladiya</h2> */}
            </div>
          </div>
        </header>

        <section id="about" className="about-section text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 class="text-white mb-4">Hii, I'm Kaushal Koladiya</h2>
                <p class="text-white-50">
                  Hello, I'm a student, self-learner, developer and Javascript lover.<br />
                  The JS guy.<br/>
                  Currently exploring a React.js and React Native.
                </p>
                <h5 className="text-white-50 font-weight-bold">Skills</h5>
                <p>
                  <span className="text-white-50">Programming languages</span>
                  <div class="progress my-2"><div class="progress-bar bg-warning progress-bar-striped sm progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>Javascript</div></div>
                  <div class="progress my-2"><div class="progress-bar bg-info progress-bar-striped sm progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>C/C++</div></div>
                  <div class="progress my-2"><div class="progress-bar bg-warning progress-bar-striped sm progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>Python</div></div>
                  <div class="progress my-2"><div class="progress-bar bg-primary progress-bar-striped sm progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "1000%"}}>PHP</div></div>
                  <div class="progress my-2"><div class="progress-bar bg-success progress-bar-striped sm progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "1000%"}}>JAVA</div></div>
                </p>
                <p>
                  <span className="text-white-50">Databases(SQL & NOSQL)</span>
                  <div class="progress my-2"><div class="progress-bar bg-primary progress-bar-striped sm progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>MySQL</div></div>
                  <div class="progress my-2"><div class="progress-bar bg-dark progress-bar-striped sm progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>SQLite</div></div>
                  <div class="progress my-2"><div class="progress-bar bg-success progress-bar-striped sm progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>MongoDB</div></div>
                </p>
                <p>
                  <span className="text-white-50">Framworks & others</span>
                  <div class="progress my-2"><div class="progress-bar bg-primary progress-bar-striped sm progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>React.js</div></div>
                  <div class="progress my-2"><div class="progress-bar bg-warning progress-bar-striped sm progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>Node.js</div></div>
                  <div class="progress my-2"><div class="progress-bar bg-success progress-bar-striped sm progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>Express js</div></div>
                  <div class="progress my-2"><div class="progress-bar bg-danger progress-bar-striped sm progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>Laravel</div></div>
                </p>
              </div>  
            </div>
            <img src={Avtar} class="img-fluid rounded-circle img-thumbnail" alt="avatar" />
          </div>
        </section>

        <section id="projects" className="projects-section bg-light">
          <div className="container">

            <div className="row align-items-center no-gutters mb-4 mb-lg-5">
              <div className="col-xl-8 col-lg-7">
                <img className="img-fluid mb-3 mb-lg-0" src={Love} alt="" />
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="featured-text text-center text-lg-left">
                  <h4>Shoreline</h4>
                  <p className="text-black-50 mb-0">My projects are briskly and scalable.</p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
              <div className="col-lg-6">
                <img className="img-fluid" src="img/demo-image-01.jpg" alt="" />
              </div>
              <div className="col-lg-6">
                <div class="bg-black text-center h-100 project">
                  <div class="d-flex h-100">
                    <div class="project-text w-100 my-auto text-center text-lg-left">
                      <h4 class="text-white">Misty</h4>
                      <p class="mb-0 text-white-50">An example of where you can put an image of a project, or anything else, along with a description.</p>
                      <hr class="d-none d-lg-block mb-0 ml-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row justify-content-center no-gutters">
              <div class="col-lg-6">
                <img class="img-fluid" src="img/demo-image-02.jpg" alt="" />
              </div>
              <div class="col-lg-6 order-lg-first">
                <div class="bg-black text-center h-100 project">
                  <div class="d-flex h-100">
                    <div class="project-text w-100 my-auto text-center text-lg-right">
                      <h4 class="text-white">Mountains</h4>
                      <p class="mb-0 text-white-50">Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
                      <hr class="d-none d-lg-block mb-0 mr-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

       
      </div>
    );
  }
}

export default App;

/**
changeWord = () => {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
  for(var i = 0; i < cw.length; i++) {
    this.animationLetterOut(cw, i);
  }

  for(var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    this.animationLetterIn(nw, i);
  }

  currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord;
}

animationLetterOut = (cw, i) => {
  setTimeout(() => {
    cw[i].className = 'letter out';
  }, i * 80);
}

animationLetterIn = (nw, i) => {
  setTimeout(() => {
    nw[i].className = 'letter in';
  }, 340 + (i * 80));
}

splitLetters = (word) => {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for(var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  wordArray.push(letters);
}

 */

 /**
  <Container>
        <Row className="masthead">
          <Col>
            <h1>
              Hii, there
            </h1>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 6, offset: 3 }} className="justify-content-center flot-right" style={{
              alignItems: 'center'
          }}>
            <center>
              <Image src={Img} fluid roundedCircle thumbnail  style={{
                borderRadius: '50%',
              }} />
            </center>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <div className="text">
              <p>I am&nbsp;</p>
              <span className="word wisteria">student</span>
              <span className="word midnight">self-learner</span>
              <span className="word blize">Web developer</span>
              </div>
              </Col>
            </Row>
    
    
          </Container>
  */