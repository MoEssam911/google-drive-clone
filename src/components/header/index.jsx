// import "../../styles/Header.css";

import GDriveLogo from "../../media/google-drive-logo.png";

import SearchIcon from "@material-ui/icons/Search";
import TuneIcon from "@material-ui/icons/Tune"; // import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import OfflinePinOutlinedIcon from "@material-ui/icons/OfflinePinOutlined";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const index = ({ userPhoto }) => {
  return (
    // <div className='header'>
    //     <div className="header__logo">
    //         <img src={GDriveLogo} alt="Google Drive" />
    //         <span>Drive</span>
    //     </div>
    //     <div className="header__searchContainer">
    //         <div className="header__searchBar">
    //             <SearchIcon />
    //             <input type="text" placeholder='Search in Drive' />
    //             <ExpandMoreIcon />
    //         </div>
    //     </div>
    //     <div className="header__icons">
    //         <span>
    //             <HelpOutlineIcon />
    //             <SettingsIcon />
    //         </span>
    //         <AppsIcon />
    //         <img src={userPhoto} alt="User Photo"/>
    //     </div>
    // </div>

    <div className=" w-full fixed top-0 left-0">

    <div className=" flex p-2 px-2">
      {/* logo */}
      <div className="flex items-center min-w-[238px] pl-3 ">
        <img
          width={40}
          height={40}
          className="pr-1 object-contain"
          src={GDriveLogo}
          alt="Google Drive"
        />
        <span className="text-[#444746] font-medium text-2xl">Drive</span>
      </div>

      {/* search input */}
      <div className="flex-1">
        <div className="w-[63%] flex gap-3 items-center rounded-full bg-[#e9eef6] h-[46px] px-3 group focus-within:bg-white focus-within:shadow-md ">
          <div>
            <button className="text-[#5f6368]">
              <SearchIcon />
            </button>
          </div>

          <div className="flex-1">
            <input
              className="h-[46px] w-full focus:outline-none bg-[#e9eef6] group-focus-within:bg-white text-black placeholder:text-[#333]"
              type="text"
              placeholder="Search in Drive"
            />
          </div>

          <div>
            <button className="text-[#5f6368]">
              <TuneIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <Tooltip title="Ready for offline">
          <IconButton>
            <OfflinePinOutlinedIcon className="text-[#444746]"/>
          </IconButton>
        </Tooltip>

        <Tooltip title="Support">
          <IconButton>
            <HelpOutlineIcon className="text-[#444746]"/>
          </IconButton>
        </Tooltip>

        <Tooltip title="Settings">
          <IconButton>
            <SettingsIcon className="text-[#444746]"/>
          </IconButton>
        </Tooltip>

        <Tooltip title="Google Apps">
          <IconButton>
            <AppsIcon className="text-[#444746]"/>
          </IconButton>
        </Tooltip>

        <Tooltip title="Google Account">
          <IconButton className="p-0">
            {/* <img className="rounded-full" width={40} height={40} src={userPhoto} alt="User Photo" /> */}

            <div className="flex justify-center items-center w-9 h-9 bg-[#004d40] rounded-full text-gray-50 font-semibold text-lg">
              <span>M</span>
            </div>
          </IconButton>
        </Tooltip>
      </div>
    </div>
    </div>

  );
};

export default index;
