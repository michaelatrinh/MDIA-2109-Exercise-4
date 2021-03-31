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