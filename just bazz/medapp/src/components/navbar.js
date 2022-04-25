

const Navbar = () => {
  
   //alert('click here');
    return (
        <div>
            <nav>
                <div>
                    <h1>MedApp</h1>
                    <button onClick={alert}>Click here </button>           
                </div>
                <div>
                    <a href="#">features</a>

                    <a>price</a>
                    <a>home</a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
