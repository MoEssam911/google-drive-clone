import { useState, useEffect } from "react";
import "../../styles/FilesView.css";

import NewFileItem from "./NewFileItem";
import FileCard from "./FileCard";

// material ui
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { db } from "../../firebase";
import { collection, query, onSnapshot } from "firebase/firestore";

const FilesView = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "myFiles"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setFiles(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });

    return () => unsubscribe();
  }, []);

  console.log("files", files);

  return (
    <div className="w-full bg-white mt-[68px] rounded-2xl p-5 h-[calc(100vh-80px)] overflow-auto mr-3">
      {/* <div className="h-64 flex items-center">
        {files.slice(0, 5).map(({ id, item }) => (
          <FileCard name={item.caption} key={id} />
          ))}
          </div> */}

      {/* table */}

      <h1 className="text-2xl text-[#1f1f1f]">My Drive</h1>

      <div className="flex gap-3 mt-5">
        <button
          type="button"
          className="text-[#444746] border border-[#444746] hover:bg-[#e9eef6]  font-medium rounded-lg text-sm px-3 py-1 text-center gap-3 flex justify-between items-center"
        >
          Type
          <ArrowDropDownIcon className="text-lg" />
        </button>
        <button
          type="button"
          className="text-[#444746] border border-[#444746] hover:bg-[#e9eef6]  font-medium rounded-lg text-sm px-3 py-1 text-center gap-3 flex justify-between items-center"
        >
          People
          <ArrowDropDownIcon className="text-lg" />
        </button>
        <button
          type="button"
          className="text-[#444746] border border-[#444746] hover:bg-[#e9eef6]  font-medium rounded-lg text-sm px-3 py-1 text-center gap-3 flex justify-between items-center"
        >
          Modified
          <ArrowDropDownIcon className="text-lg" />
        </button>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-[#1f1f1f] uppercase border-b border-[#a3a3a3] ">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium" colSpan={3}>
                Name
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Owner
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Last Modified
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                File Size
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-medium flex justify-end"
              >
                <Tooltip title="More Sorting Options">
                  <IconButton>
                    <MoreVertIcon className="text-[#1f1f1f]" />
                  </IconButton>
                </Tooltip>
              </th>
            </tr>
          </thead>

          <tbody>
            {files.map(({ id, item }) => (
              <NewFileItem
                key={id}
                id={id}
                caption={item.caption}
                timestamp={item.timestamp}
                fileUrl={item.fileUrl}
                size={item.size}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FilesView;
