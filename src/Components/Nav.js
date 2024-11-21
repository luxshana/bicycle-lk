import { Menu, X } from "lucide-react";
import { useState } from "react";


const Navbar = () => {
  const navItems = [
    { label: "Welcome", href: "/" },
    { label: "About Us", href: "#aboutUs" },
    { label: "Product Showcase", href: "#productShowcase" },
    { label: "Call To Action", href: "#CallToAction" },
    { label: "Contact Us", href: "#contact" },
    { label: "Testimonials", href: "#testimonials" },
   
  ];
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 ">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            
            <span className="text-xl tracking-tight ">Bicycle-LK</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 ">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="">{item.label}</a>
              </li>
            ))}
          </ul>
        
          <div className="lg:hidden md:flex flex-col justify-end ">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-slate-50 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;