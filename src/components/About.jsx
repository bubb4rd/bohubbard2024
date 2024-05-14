import './About.css'
import asugrad from '../assets/asugrad.jpeg';
export default function About() {
    return (
        <section className={"about"} id={"about"}>
            <h1>ABOUT ME</h1>
            <div className={"container"}>
                <div className={"col left"}>
                    <div className={"container"}>
                        <p>I am a creative developer from the Chicagoland area in Illinois. My main passion is software
                            development but I have interests in a lot of different areas including: graphic design, web
                            &
                            fullstack development, and cybersecurity. I began my journey of development from one of my
                            favorite
                            hobbies: video games.</p>
                    </div>
                    <h2>Video Games: My start</h2>
                    <p>I started writing code and developing games through ROBLOX and their editors, which spurred my
                        fascination with programming and design. I took what I learned from ROBLOX and began learning
                        other
                        programming languages, such as <span>C++, Java</span>, and <span>HTML/CSS</span>. With this
                        knowledge in hand, I was able to create my own projects and ideas. From then on my interest in
                        coding only continued to grow as a fun hobby, which eventually led me into seeking roles in the
                        tech
                        industry.</p>
                    <h2>Where I'm at</h2>
                    <p>I am currently attending <span className={"asu"}>Arizona State University</span> studying my
                        Bachelor's degree for <span>Computer Science</span>. I enjoy developing solutions that make a
                        difference and have impact.</p>
                </div>
                <div className={"col squeeze right"}>
                    <img src={asugrad}/>
                </div>
            </div>
        </section>
    );
}