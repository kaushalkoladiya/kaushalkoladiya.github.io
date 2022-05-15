import React from 'react'

const SKILLS = [
  // language
  { title: 'JavaScript', value: 80 },
  { title: 'Python', value: 60 },

  // frontend
  { title: 'React.js', value: 90 },
  { title: 'Redux.js', value: 100 },
  { title: "React Native", value: 55 },
  { title: 'Next.js', value: 85 },
  { title: 'HTML5', value: 90 },
  { title: 'CSS3', value: 90 },

  // backend
  { title: 'Node.js', value: 90 },
  { title: 'Express.js', value: 90 },
  { title: 'Nest.js', value: 80 },
  { title: 'Firebase', value: 80 },
  { title: 'GraphQL', value: 100 },
  { title: 'MongoDB', value: 90 },
  { title: 'MySQL', value: 90 },
];

const Skills = () => {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Skills</h2>
          <p>

          </p>
        </div>

        <div className="row skills-content">

          {SKILLS.map((skill, index) => (
            <div className="col-lg-6" key={index}>
              <div className="progress">
                <span className="skill">{skill.title} <i className="val">{skill.value}%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" style={{ width: `${skill.value}%` }}>
                  </div>
                </div>
              </div>
            </div>
          ))}


        </div>

      </div>
    </section>
  )
}

export default Skills