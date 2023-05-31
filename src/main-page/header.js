import logo from"./siteLogo.jpg";


const Header = (props) =>
(
    <header className = "row">
    

            <div className ="col-md-1 mt-4">
                <img src={logo} className = "logo" alt="logo" />
            </div>    
        
             <div className  = "col-md-4 mt-5 subtitle ">
              {props.subtitle}
            </div>
            
                        
    </header>

);
export default Header;
