import Logo from '../../img/Logo';
import Search from './Search';
 const Header = () => {
  return (
    <header className="    md:mb-12">
      <div className="container mx-auto   md:px-0">
        <div className="flex h-20 items-center justify-between">
      
       
         <Logo /> 
         <h1>Home</h1>
         <Search/>
    </div>
    </div>
    </header>

    
  );
};

export default Header;
