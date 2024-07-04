// material ui
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const FileItem = ({ id, caption, timestamp, fileUrl, size }) => {
  const fileDate = `${timestamp?.toDate().getDate()} ${
    monthNames[timestamp?.toDate().getMonth() + 1]
  } ${timestamp?.toDate().getFullYear()}`;

  const getReadableFileSizeString = (fileSizeInBytes) => {
    let i = -1;
    const byteUnits = [" kB", " MB", " GB", " TB", "PB", "EB", "ZB", "YB"];
    do {
      fileSizeInBytes = fileSizeInBytes / 1024;
      i++;
    } while (fileSizeInBytes > 1024);

    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
  };

  return (
    <tr className="bg-white border-b border-[#a3a3a3] hover:bg-[#e9eef6] ">
      <th
        colSpan={3}
        scope="row"
        className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap "
      >
        <div className="flex items-center gap-3 text-[#444746]">
          <InsertDriveFileIcon className="text-[#444746]" />
          <a className="h-full  " href={fileUrl} target="_blank" download>
            <p className="text-[#444746]">{caption}</p>
          </a>
        </div>
      </th>
      <td className="px-6 py-2">
        <div className="flex items-center gap-3 text-[#444746]">
          <svg
            fill="#c7c7c7"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            focusable="false"
          >
            <path d="M12 0.75C5.79 0.75 0.75 5.79 0.75 12C0.75 18.21 5.79 23.25 12 23.25C18.21 23.25 23.25 18.21 23.25 12C23.25 5.79 18.21 0.75 12 0.75ZM12 4.125C13.8675 4.125 15.375 5.6325 15.375 7.5C15.375 9.3675 13.8675 10.875 12 10.875C10.1325 10.875 8.625 9.3675 8.625 7.5C8.625 5.6325 10.1325 4.125 12 4.125ZM12 20.1C9.1875 20.1 6.70125 18.66 5.25 16.4775C5.28375 14.2387 9.75 13.0125 12 13.0125C14.2388 13.0125 18.7163 14.2387 18.75 16.4775C17.2988 18.66 14.8125 20.1 12 20.1Z"></path>
          </svg>

          <p>Me</p>
        </div>
      </td>
      <td className="px-6 py-2 text-[#444746]">{fileDate}</td>
      <td className="px-6 py-2 text-[#444746]">
        {getReadableFileSizeString(size)}
      </td>
      <td className="px-6 py-2 text-[#444746] flex justify-end">
        <Tooltip title="More Options">
          <IconButton>
            <MoreVertIcon className="text-[#444746]" />
          </IconButton>
        </Tooltip>
      </td>
    </tr>
  );
};

export default FileItem;
