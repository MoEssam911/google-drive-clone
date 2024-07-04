import "../../styles/FileItem.css";

import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

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
    <div className=" h-14 border-b border-t w-full">
      <a
        className="h-full  text-[#554e4e] hover:bg-[#e9eef6] "
        href={fileUrl}
        target="_blank"
        download
      >
        <div className="h-full  flex items-center gap-64 px-4 hover:bg-[#e9eef6]">
          <div className="flex items-center">
            <InsertDriveFileIcon />
            <p>{caption}</p>
          </div>

          <p>{fileDate}</p>
          <p>{fileDate}</p>
          <p>{getReadableFileSizeString(size)}</p>
        </div>
      </a>
    </div>
  );
};

export default FileItem;
