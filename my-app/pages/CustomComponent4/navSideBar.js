function navigationBar(){
    return <div id="navBar">

        <ul className="navBarUL">
            <h3><span className="navBarTitle">Title</span></h3>
            <li><a href=''>Page1</a></li>
            <li><a href=''>Page2</a></li>
            <li><a href=''>Page3</a></li>
            <li><a href=''>Page4</a></li>
            <li className="navLiButton"><button className="navLiButton2">Exit</button></li>
        </ul>

    </div>
}

export default navigationBar;