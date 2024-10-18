// import React from 'react'
// import "./Header.css"
// import NetflixLogo from "../../assets/images/Netflix Logo.png";
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// function Header() {
//   return (
//     <div>
//       <div className="header_outer_container">
//         <div className="header_container">
//           <div className="header_left">
//             <ul>
//               <li>
//                  <img src={NetflixLogo} alt="Netflix Logo" width="100" />
//               </li>
//               <li>Netflix</li>
//               <li>Home</li>
//               <li>TVShows</li>
//               <li>Movies</li>
//               <li>Latest</li>
//               <li>MyList</li>
//               <li>Browse by Languages</li>
//             </ul>
//           </div>
//           <div className="header_right">
//             <ul>
//               <li>
//                 <SearchIcon />
//               </li>
//               <li>
//                 <NotificationsNoneIcon />
//               </li>
//               <li>
//                 <AccountBoxIcon />
//               </li>
//               <li>
//                 <ArrowDropDownIcon />
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header


import React, { useState } from "react";
import "./Header.css";
import NetflixLogo from "../../assets/images/Netflix Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu"; // Import the Menu Icon

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <img src={NetflixLogo} alt="Netflix Logo" width="100" />
          <ul className={`nav_links ${isMobileMenuOpen ? "open" : ""}`}>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>

        {/* Menu Icon for Mobile View */}
        <div className="menu_icon" onClick={toggleMobileMenu}>
          <MenuIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
