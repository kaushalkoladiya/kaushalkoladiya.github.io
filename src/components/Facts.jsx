import { EmojiSmile, JournalRichtext, Headset } from "react-bootstrap-icons"
import CountUp from 'react-countup';

const Facts = () => {
  return (
    <section id="facts" className="facts">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Facts</h2>
          <p>Build a large-scale application with React.js and Node.js; be ready to build a beautiful frontend with various UI frameworks, including custom CSS; and be qualified to build a solid backend with Node.js and GraphQL technology.</p>
        </div>

        <div className="row">

          <div className="col-lg-4">
            <div className="count-box">
              <EmojiSmile />
              <CountUp
                end={10}
                suffix="+"
                className="purecounter"
              />
              <p>Happy Clients</p>
            </div>
          </div>

          <div className="col-lg-4 mt-5 mt-md-0">
            <div className="count-box">
              <JournalRichtext />
              <CountUp
                end={20}
                className="purecounter"
                suffix="+"
              />
              <p>Projects</p>
            </div>
          </div>

          <div className="col-lg-4 mt-5 mt-lg-0">
            <div className="count-box">
              <Headset />
              <CountUp
                end={3100}
                suffix="+"
                className="purecounter"
              />
              <p>Hours Of Support</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Facts