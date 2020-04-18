import React from 'react';

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
                <h2 className="text-white mb-4">Hii, I'm Kaushal Koladiya</h2>
                <p className="text-white-50">
                  Hello, I'm a student, self-learner, developer and Javascript lover.<br />
                  The JS guy.<br/>
                  Currently exploring a React.js and React Native.
                </p>
                <h5 className="text-white-50 font-weight-bold">Skills</h5>
                <div className="p">
                  <span className="text-white-50">Programming languages</span>
                  <div className="progress my-2"><div className="progress-bar bg-warning progress-bar-striped sm progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>Javascript</div></div>
                  <div className="progress my-2"><div className="progress-bar bg-info progress-bar-striped sm progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>C/C++</div></div>
                  <div className="progress my-2"><div className="progress-bar bg-warning progress-bar-striped sm progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>Python</div></div>
                  <div className="progress my-2"><div className="progress-bar bg-primary progress-bar-striped sm progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "1000%"}}>PHP</div></div>
                  <div className="progress my-2"><div className="progress-bar bg-success progress-bar-striped sm progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "1000%"}}>JAVA</div></div>
                </div>
                <div className="p">
                  <span className="text-white-50">Databases(SQL & NOSQL)</span>
                  <div className="progress my-2"><div className="progress-bar bg-primary progress-bar-striped sm progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>MySQL</div></div>
                  <div className="progress my-2"><div className="progress-bar bg-dark progress-bar-striped sm progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>SQLite</div></div>
                  <div className="progress my-2"><div className="progress-bar bg-success progress-bar-striped sm progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>MongoDB</div></div>
                </div>
                <div className="p">
                  <span className="text-white-50">Framworks & others</span>
                  <div className="progress my-2"><div className="progress-bar bg-primary progress-bar-striped sm progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>React.js</div></div>
                  <div className="progress my-2"><div className="progress-bar bg-warning progress-bar-striped sm progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>Node.js</div></div>
                  <div className="progress my-2"><div className="progress-bar bg-success progress-bar-striped sm progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>Express js</div></div>
                  <div className="progress my-2"><div className="progress-bar bg-danger progress-bar-striped sm progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>Laravel</div></div>
                </div>
              </div>  
            </div>
            <img src={Avtar} className="img-fluid rounded-circle img-thumbnail" alt="avatar" />
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
                  <h4>Headline</h4>
                  <p className="text-black-50 mb-0">Let's walk through my projects and blogs.</p>
                </div>
              </div>
            </div>
            
            <div className="row m-3"> 
              <div className="col display-4 text-center d-block">
                Projects
              </div>
            </div>

            <div className="row m-2 justify-content-center">
              <div className="card shadow m-2" style={{width: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title">Corona Dashboard</h5>
                  <p className="card-text">A graphical representation of Covid-19 Dashboard.</p>
                  <a href="https://github.com/kausHal789/covid-19" className="card-link">GitHub Link</a>
                  <a href="https://coronadashboard.netlify.com" className="card-link">Go for website</a>
                </div>
              </div>
              <div className="card m-2 shadow" style={{width: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title">News</h5>
                  <p className="card-text">A latest news headlines.</p>
                  <a href="https://github.com/kausHal789/corona-news" className="card-link">GitHub Link</a>
                  <a href="https://headlines.netlify.com" className="card-link">Go for website</a>
                </div>
              </div>
            </div>

            <div className="row m-3"> 
              <div className="col display-4 text-center d-block">
                Blogs
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="card shadow-lg p-2 m-2">
                <div className="card-header border-0 rounded">
                  Javascript Arrow Function
                </div>
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>ES6 comes with a new function syntax which looks very different from others...</p>
                    <footer className="blockquote-footer">Kaushal Koladiya <a href="https://dev.to/kaushal789/javascript-arrow-function-2513" className="btn btn-link text-primary">Read more</a></footer>
                  </blockquote>
                </div>
              </div>
              <div className="card shadow-lg p-2 m-2">
                <div className="card-header border-0 rounded">JavaScript destructuring</div>
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>JavaScript ES6 comes with the destructuring assignments. A name define its use, destructure values from an array and properties from an object..</p>
                    <footer className="blockquote-footer">Kaushal Koladiya <a href="https://dev.to/kaushal789/javascript-destructuring-1b4d" className="btn btn-link text-primary">Read more</a></footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="row">
            <div className="col font-weight-bold small text-black-50 my-1 d-block text-center">
              Catch me on!
            </div>
          </div>
          <div className="container d-flex justify-content-center">
            {/* <a href="https://twitter.com/kaushal__p" className="mx-2">
              <i className="fa fa-lg fa-tag fa-twitter"></i>
            </a> */}
            <a href="https://www.linkedin.com/in/kaushal-koladiya-a65676179" className="mx-2">
              <i className="fa fa-lg fa-tag fa-linkedin"></i>
            </a>
            {/* <a href="https://instagram.com/kaushalkoladiya" className="mx-2">
              <i className="fa fa-lg fa-tag fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/kaushal.koladiya.1" className="mx-2">
              <i className="fa fa-lg fa-facebook"></i>
            </a> */}
            <a href="https://github.com/kausHal789" className="mx-2">
              <i className="fa fa-lg fa-github"></i>
            </a>
          </div>
        </footer>

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