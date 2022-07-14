import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <div>
        <span onClick={() => setExpand(!expand)}>{explorer.name}</span>
        <div style={{ padding: "10px" }}>
          {expand &&
            explorer.items.map((exp) => {
              return <Folder explorer={exp} />;
            })}
        </div>
      </div>
    );
  } else {
    return <li>{explorer.name}</li>;
  }
};

export default Folder;
