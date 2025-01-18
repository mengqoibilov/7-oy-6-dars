import React, { useState } from "react";
import "./style.css"; 

const Sidebar = () => {
  const [groups, setGroups] = useState(["xondamir's chat", "azizdjan_official", "xondamirxonn", "eeee", "best"]);
  const [showGroups, setShowGroups] = useState(false);
  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");
  const [newGroupPassword, setNewGroupPassword] = useState("");

  const handleProfileClick = () => {
    alert("Profile sahifasiga o'tildi!"); 
  };

  const toggleGroups = () => {
    setShowGroups(!showGroups);
  };

  const handleCreateGroup = () => {
    setShowCreateGroup(true);
  };

  const handleGroupSave = () => {
    if (newGroupName.trim() !== "") {
      setGroups([...groups, newGroupName]);
      setNewGroupName("");
      setNewGroupPassword("");
      setShowCreateGroup(false);
    }
  };

  const handleGroupCancel = () => {
    setNewGroupName("");
    setNewGroupPassword("");
    setShowCreateGroup(false);
  };

  return (
    <div className="sidebar">
      <button onClick={handleProfileClick} className="sidebar-button">
        Profile
      </button>
      <div>
        <button onClick={toggleGroups} className="sidebar-button">
          Groups {showGroups ? "▲" : "▼"}
        </button>
        {showGroups && (
          <div className="groups">
            <button onClick={handleCreateGroup} className="create-group-button">
              + Create Group
            </button>
            <ul>
              {groups.map((group, index) => (
                <li key={index} className="group-item">
                  {group}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {showCreateGroup && (
        <div className="create-group-modal">
          <h3>Group name and password</h3>
          <input
            type="text"
            placeholder="Group name"
            value={newGroupName}
            onChange={(e) => setNewGroupName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={newGroupPassword}
            onChange={(e) => setNewGroupPassword(e.target.value)}
          />
          <div className="modal-buttons">
            <button onClick={handleGroupSave} className="save-button">
              Create
            </button>
            <button onClick={handleGroupCancel} className="cancel-button">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

