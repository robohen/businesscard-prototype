import React from "react";
import emailicon from "C:\Users\chick\Downloads\emailicon.png";
import Twiticon from "C:\Users\chick\Downloads\twiticon.png";
import fb_icon from "C:\Users\chick\Downloads\fb icon.png";
import insta_icon from "C:\Users\chick\Downloads\ig icon.png";
import Linkedin_Icon from "C:\Users\chick\Downloads\Linkedin Icon.png";
import github_icon from "C:\Users\chick\Downloads\github icon.png";
import JOJIPIC from "C:\Users\chick\Downloads\JOJIPIC.jpg";



export default function BsCard(){
    return(
        <div>
            <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <img src ={JOJIPIC} className="pictureOfSelf"/>
        <h1 className="ownName">Henry Gutierrez</h1>
        <h2 className= "description">Frontend Developer</h2>
        <h3 className= "website">websitename.website</h3>
            <h4 className ="AboutTitle">About</h4>
            <p1 className ="About">I am a front end developer with an interest in making things simpler and automating for daily tasks. Currently I have learned Javascript and am learning reactJS, with mongo db and express to be on my list of languages to learn.</p1>
            <h5 className ="InterestsTitle">Interests</h5>
            <p2 className = "Interests">Coffee drinker. Dog lover. Movie enjoyer. Weight lifting enthusiast. </p2>
        <footer><img className="Emailimg" src={emailicon} alt= "emailicon" href=""/>
            <img className="Twiticon" src={Twiticon} alt= "emailicon" href="https://www.twitter.com/chickenboyhenry"/>
            <img className="FBicon" src={fb_icon} alt= "facebook_icon" href="https://www.facebook.com/chickenboyhenry"/>
            <img className="Instaicon" src={insta_icon} alt= "instagram_icon" href="https://www.instagram.com/chickenboyhenry"/> 
            <img className="Linkdicon" src={Linkedin_Icon} alt= "linkd_in_icon" href="https://www.Linkedin.com/"/>
            <img className="Giticon" src={github_icon} alt= "github_icon" href="https://www.github.com/robohen"/></footer>
        </div>
    )
}

export default function Buttons() {
    return(
        <div>
            <button type="button" className="emailButton">Email</button>
            
        </div>
    )
}
ReactDOM.render(<BsCard/>,<Buttons/>,document.getElementById("root"))
