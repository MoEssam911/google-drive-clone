
import NewFile from "./NewFile";
import SidebarItem from "./SidebarItem";

// import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
// import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
// import StorageIcon from "@material-ui/icons/Storage";

import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import DevicesOutlinedIcon from "@material-ui/icons/DevicesOutlined";
import WbCloudyOutlinedIcon from '@material-ui/icons/WbCloudyOutlined';

const index = () => {
  return (
    <div className="h-screen min-w-[255px]">
      <div className=" h-screen min-w-[255px] fixed top-[68px]">
        <NewFile />

        <div className=" mx-4 text-[#001D35]">
          <SidebarItem
            arrow
            icon={
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="#1f1f1f"
                focusable="false"
              >
                <path d="M9.05 15H15q.275 0 .5-.137.225-.138.35-.363l1.1-1.9q.125-.225.1-.5-.025-.275-.15-.5l-2.95-5.1q-.125-.225-.35-.363Q13.375 6 13.1 6h-2.2q-.275 0-.5.137-.225.138-.35.363L7.1 11.6q-.125.225-.125.5t.125.5l1.05 1.9q.125.25.375.375T9.05 15Zm1.2-3L12 9l1.75 3ZM3 17V4q0-.825.587-1.413Q4.175 2 5 2h14q.825 0 1.413.587Q21 3.175 21 4v13Zm2 5q-.825 0-1.413-.587Q3 20.825 3 20v-1h18v1q0 .825-.587 1.413Q19.825 22 19 22Z"></path>
              </svg>
            }
            label={"My Drive"}
          />
          <SidebarItem
            arrow
            icon={<DevicesOutlinedIcon />}
            label={"Computers"}
          />
          <SidebarItem icon={<PeopleAltIcon />} label={"Shared with me"} />
          <SidebarItem icon={<QueryBuilderIcon />} label={"Recent"} />
          <SidebarItem icon={<StarBorderIcon />} label={"Starred"} />
          <SidebarItem icon={<DeleteOutlineIcon />} label={"Trash"} />


          <SidebarItem icon={<WbCloudyOutlinedIcon />} label={"Storage"} />

          <div>
            
          </div>

          <div className="mx-5 mt-4">


          <hr className="h-1 bg-[#e1e3e1] border-none" />
          <p className="ml-1 text-sm text-[#444746] pt-2">0.1 MB of 50 GB used</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default index;
