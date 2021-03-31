import navSideBar from '../../styles/navSideBar.module.css'

function NavigationBar(){
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
export default NavigationBar;

export {NavigationBar};