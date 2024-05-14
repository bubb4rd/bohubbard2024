import './Home.css';
import React, { useState, useEffect} from 'react';
import me from '../assets/me.jpeg';
export default function Navbar() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [
        "Graphic Designer",
        "Full Stack Developer",
        "Software Developer",
        "Student",
    ];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(100 - Math.random() * 50);
    const period = 2000;
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(75);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100);
        }
    };
    return (
      <section className={"home"} id={"home"}>
          <div className={"container"}>
              <div className={"col left"}>
                  <h2>Hi,</h2>
                  <h1>I'm Bo</h1>
                  <h3 className={"typed"}>a <span>{text}</span></h3>
                  <div className={"socials"}>
                      <div className={"social"}>
                          <a href={"https://github.com/bubb4rd"}><i className='bx bxl-github'></i></a>
                      </div>
                      <div className={"social"}>
                          <a href={"https://www.linkedin.com/in/bo-hubbard-4988b2246/"}><i className='bx bxl-linkedin'></i></a>

                  </div>
                      <div className={"social"}>
                          <a href={"https://be.net/bubbard"}><i
                              className='bx bxl-behance'></i></a>

                      </div>
                  </div>
              </div>
              <div className={"col right"}>
                <div className={"holder-home"}>
                    <img src={me}/>
                </div>
              </div>
          </div>
      </section>
    );
}