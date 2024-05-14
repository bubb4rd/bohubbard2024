import './Skills.css';
import js from "../assets/js.svg";
import css from "../assets/css.svg";
import java from "../assets/java.svg";
import ps from "../assets/ps.svg";
import react from "../assets/react.svg";
import shopify from "../assets/shopify.svg";
import node from '../assets/nodejs.svg';
export default function Skills() {
    return (
        <div className="skills" id="skills">
            <div className="container skill">
                <div className={"holder-skill"}>
                    <div className="img-skill"><img src={js} alt="javascript"/></div>
                    <div className={"hide"}>JavaScript</div>
                </div>
                <div className={"holder-skill"}>
                <div className="img-skill"><img src={css} alt="CSS"/></div>
                <div className={"hide"}>CSS</div>
                </div>
                <div className={"holder-skill"}>

                <div className="img-skill"><img src={java} alt="Java"/></div>
                <div className={"hide"}>Java</div>
                </div>
                <div className={"holder-skill"}>
                <div className="img-skill"><img src={react} alt="reactJS"/></div>
                <div className={"hide"}>React</div>
                </div>
                <div className={"holder-skill"}>

                <div className="img-skill"><img src={ps} alt="Adobe Photoshop"/></div>
                <div className={"hide"}>Adobe Photoshop</div>
                </div>
                <div className={"holder-skill"}>

                <div className="img-skill"><img src={shopify} alt="Shopify"/></div>
                <div className={"hide"}>Shopify</div>
                </div>
                <div className={"holder-skill"}>
                    <div className={"img-skill"}>
                        <img src={node}/>
                    </div>
                    <div className={"hide"}>nodeJS</div>
                </div>
            </div>
        </div>
    );
}