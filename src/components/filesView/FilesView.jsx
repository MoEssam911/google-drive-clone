import { useState, useEffect } from "react";
import "../../styles/FilesView.css";

import FileItem from "./FileItem";
import FileCard from "./FileCard";

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
    <div className="w-full bg-white mt-[68px] rounded-2xl p-5">
      <div className="h-64 flex items-center">
        {files.slice(0, 5).map(({ id, item }) => (
          <FileCard name={item.caption} key={id} />
        ))}
      </div>

      <div className="flex justify-between mb-2 text-[#1f1f1f]">
        <p>Name</p>

        <p>Owner</p>


        <p>Last modified</p>

        <p>File size</p>
      </div>

      {files.map(({ id, item }) => (
        <FileItem
          key={id}
          id={id}
          caption={item.caption}
          timestamp={item.timestamp}
          fileUrl={item.fileUrl}
          size={item.size}
        />
      ))}
    </div>
  );
};

export default FilesView;
