

function NavBar( {show, toggle}) {

    return(
        <nav >
            <div className="container ">
                <h1>ADD EXEAT</h1>
            </div>
            <button className="bttn" 
             onClick={toggle}>
                { show ? "CLOSE" : "ADD" } 
                </button>
        </nav>
    )
    }
    
    export default NavBar;