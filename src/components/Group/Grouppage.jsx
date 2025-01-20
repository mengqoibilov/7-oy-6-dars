import React from "react";
import { useParams } from "react-router-dom";

const GroupPage = () => {
  const { groupName } = useParams();
  return (
    <div>
      <h1>Group: {groupName}</h1>
    </div>
  );
};

export default GroupPage;
