import AddIcon from "@material-ui/icons/Add";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const index = () => {
  return (
    <div className="w-14 h-screen ">
      <div className="w-14 flex flex-col items-center  h-screen fixed right-0 top-[68px]">
        <div className="w-full flex flex-col items-center gap-4">
          <Tooltip title="Calendar">
            <IconButton>
              <img
                width={24}
                className="object-contain"
                src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-calendar-512.png"
                alt="Google Calendar"
              />
            </IconButton>
          </Tooltip>

          <Tooltip title="Keep">
            <IconButton>
              <img
                width={24}
                src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png"
                alt="Google Keep"
              />
            </IconButton>
          </Tooltip>

          <Tooltip title="Tasks">
            <IconButton>
              <img
                width={24}
                src="https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png"
                alt="Google Tasks"
              />
            </IconButton>
          </Tooltip>

          <Tooltip title="Conatcts">
            <IconButton>
              <img
                width={24}
                src="https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png"
                alt="Google Conatcts"
              />
            </IconButton>
          </Tooltip>
        </div>

        <hr />

        <div className="flex items-center mt-14">
          <Tooltip title="Get Add-ons">
            <IconButton>
              <AddIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default index;
