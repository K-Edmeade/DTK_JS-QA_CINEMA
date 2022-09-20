import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';
import { useState } from 'react';

function About() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <br/>
      <h1 style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>About Us</h1>
      <div className="aboutContainer">

        <br />
        <div className="aboutDivGroup">
          <div className="aboutDiv">
            <motion.div transition={{ layout: { duration: 0.2, type: "spring" } }} onClick={() => setIsOpen(!isOpen)} className="aboutCard">
              <motion.h2 layout="position">Damian Poclitar🎬</motion.h2>
              {isOpen &&
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
                  <h4>Technical Team Lead/Developer</h4>
                  <p>
                    <a href='/contact' target="_blank" rel="noopener noreferrer"><Button variant="primary">Email</Button></a>
                    <a href='https://www.linkedin.com/in/damianpoclitar/' target="_blank" rel="noopener noreferrer"><Button variant="primary">LinkedIn</Button></a>
                    <a href='https://github.com/damipoc' target="_blank" rel="noopener noreferrer"><Button variant="primary">GitHub</Button></a>
                  </p>
                </motion.div>
              }
            </motion.div>
          </div>

          <div className="aboutDiv">
            <motion.div transition={{ layout: { duration: 0, type: "spring" } }} onClick={() => setIsOpen(!isOpen)} className="aboutCard">
              <motion.h2 layout="position">Jariful Hoque🎬</motion.h2>
              {isOpen &&
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
                  <h4>Dev Ops/Full Stack Developer</h4>
                  <p>
                    <a href='/contact' target="_blank" rel="noopener noreferrer"><Button variant="primary">Email</Button></a>
                    <a href='https://www.linkedin.com/in/jarif-hoque/' target="_blank" rel="noopener noreferrer"><Button variant="primary">LinkedIn</Button></a>
                    <a href='https://github.com/jarifulhoque' target="_blank" rel="noopener noreferrer"><Button variant="primary">GitHub</Button></a>
                  </p>
                </motion.div>
              }
            </motion.div>
          </div>



          <div className="aboutDiv">
            <motion.div transition={{ layout: { duration: 0.2, type: "spring" } }} onClick={() => setIsOpen(!isOpen)} className="aboutCard">
              <motion.h2 layout="position">Kya Edmeade🎬</motion.h2>
              {isOpen &&
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
                  <h4>Scrum Master/Developer</h4>
                  <p>
                    <a href='/contact' target="_blank" rel="noopener noreferrer"><Button variant="primary">Email</Button></a>
                    <a href='https://www.linkedin.com/in/kya-edmeade/' target="_blank" rel="noopener noreferrer"><Button variant="primary">LinkedIn</Button></a>
                    <a href='https://github.com/K-Edmeade' target="_blank" rel="noopener noreferrer"><Button variant="primary">GitHub</Button></a>
                  </p>
                </motion.div>
              }
            </motion.div>
          </div>

          <div className="aboutDiv">
            <motion.div transition={{ layout: { duration: 0, type: "spring" } }} onClick={() => setIsOpen(!isOpen)} className="aboutCard">
              <motion.h2 layout="position">Tashfeen Arshad🎬</motion.h2>
              {isOpen &&
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
                  <h4>Product Owner/Developer</h4>
                  <p>
                    <a href='/contact' target="_blank" rel="noopener noreferrer"><Button variant="primary">Email</Button></a>
                    <a href='https://www.linkedin.com' target="_blank" rel="noopener noreferrer"><Button variant="primary">LinkedIn</Button></a>
                    <a href='https://github.com/tashfeenarshad' target="_blank" rel="noopener noreferrer"><Button variant="primary">GitHub</Button></a>
                  </p>
                </motion.div>
              }
            </motion.div>
          </div>


          <div className="aboutDiv">
            <motion.div transition={{ layout: { duration: 0, type: "spring" } }} onClick={() => setIsOpen(!isOpen)} className="aboutCard">
              <motion.h2 layout="position">Syed Zaidi🎬</motion.h2>
              {isOpen &&
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
                  <h4>Full Stack Developer</h4>
                  <p>
                    <a href='/contact' target="_blank" rel="noopener noreferrer"><Button variant="primary">Email</Button></a>
                    <a href='https://www.linkedin.com/in/syed-namvar-zaidi/' target="_blank" rel="noopener noreferrer"><Button variant="primary">LinkedIn</Button></a>
                    <a href='https://github.com/namvarzaidi' target="_blank" rel="noopener noreferrer"><Button variant="primary">GitHub</Button></a>
                  </p>
                </motion.div>
              }
            </motion.div>
          </div>
        </div>



        <div className="scrumDiv">
          <div className="aboutDiv">
            <motion.div transition={{ layout: { duration: 0.2, type: "spring" } }} onClick={() => setIsOpen(!isOpen)} className="aboutCard">
              <motion.h2 layout="position">Scrum🏉</motion.h2>
              {isOpen &&
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
                  <h4>What is Scrum?</h4>
                  <p>
                    <p>Scrum is a framework for project management that emphasizes teamwork, accountability and iterative progress toward a well-defined goal. The framework begins with a simple premise: Start with what can be seen or known. After that, track the progress and tweak, as necessary.</p>

                    <p>Scrum helps people and teams deliver value incrementally in a collaborative manner. Scrums are broken down into a series of iterations known as sprints.
                      A sprint can last as long as is necessary anywhere between one to four weeks, with each sprint aiming to deliver functioning components of the final product that could be published. </p>

                    <p>Within sprints, user stores are created to track the creation of individual components. User stories are three line stories told from the perspective of the individual which outline the needs. User stories are prioritised so each team member knows where to focus their time.  </p>

                    <p>The team made use of scrum methodology, as well a kanban board to create and track the user stories and tasks required for the building of this site. With each componet broken down into an individual task it helped streamline and focus the process, such that components were built in tandem rather than sequentially.</p>
                    <a href='https://www.scrum.org/' target="_blank" rel="noopener noreferrer"><center><Button variant="primary">Find out more</Button></center></a>
                  </p>

                </motion.div>
              }
            </motion.div>
          </div>
        </div>
      </div>
      <br/>

    </>);
}
export default About;