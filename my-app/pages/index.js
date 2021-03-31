import textImageBoxStyle from '../styles/textImageBox.module.css'

function TextImageBoxUI(){
    return <div className="main" style={{
        width:300,
        height:400,
    }}>
        <h3 className={textImageBoxStyle.h3}>Default Text</h3>
        <img src="http://placekitten.com/250/150" className={textImageBoxStyle.img}></img>
        
        <p className={textImageBoxStyle.p}><span className={textImageBoxStyle.span}>M</span>inions ipsum jeje tulaliloo baboiii tatata bala tu butt daa bappleees belloo! Jeje ti aamoo! Po kass para tú bee do bee do bee do. Poulet tikka masala tulaliloo para ti bananaaaa daa hana dul sae potatoooo.   </p>

        <button id={textImageBoxStyle.button}>Read More</button>
    </div>
}
    
export default TextImageBoxUI;



import contactPageStyle from '../styles/contactPage.module.css'

function ContactPage(){
    return <div class={contactPageStyle.body}>
        <div class={contactPageStyle.container}>
        <h3 class={contactPageStyle.login}>LOGIN</h3>
        <p>Email</p>
        <input class={contactPageStyle.input_1}></input>
        <p>Password</p>
        <input class={contactPageStyle.input_2}></input>

        <br></br><br></br>

        <button class={contactPageStyle.submit}>LOGIN</button>
        </div>
    </div>
}
  
export default ContactPage; 



import navSideBar from '../styles/navSideBar.module.css'

function navigationBar(){
    return <div className={navSideBar.navBar}>
        <ul className={navSideBar.navBarUL}>
            <h3><span className={navSideBar.navBarTitle}>Title</span></h3>
            <li><a href=''>Page1</a></li>
            <li><a href=''>Page2</a></li>
            <li><a href=''>Page3</a></li>
            <li><a href=''>Page4</a></li>
            <li className={navSideBar.navLiButton}><button className={navSideBar.navLiButton2}>Exit</button></li>
        </ul>
    </div>
}

export default navigationBar;



import warningTabStyle from '../styles/warningTab.module.css'

function WarningTab(){
    return <div class={warningTabStyle.body1}>
        <div class={warningTabStyle.container1}> 
            <h3 class={warningTabStyle.tab}>You Have Completed the Form</h3> 
            <p class={warningTabStyle.line1}>Thank You For Your Participation!</p>
            <p class={warningTabStyle.line2}>Return To <span class={warningTabStyle.homepage}>Home Page</span></p>
            <button class={warningTabStyle.okay_button}>Okay</button>
        </div>
    </div> 
  }

export default WarningTab;