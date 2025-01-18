import React, { useState } from 'react';
import './style.css';

const Sidebar = ({ onGroupClick, onProfileClick }) => {
  const [isGroupsOpen, setIsGroupsOpen] = useState(true);
  const [groups, setGroups] = useState([]);
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupPassword, setNewGroupPassword] = useState('');
  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);

  const handleCreateGroup = () => {
    if (newGroupName && newGroupPassword) {
     
      setGroups([...groups, newGroupName]);
      setNewGroupName('');
      setNewGroupPassword('');
      setShowCreateGroupModal(false); 
    }
  };

  return (
    <div className="sidebar">
      <button className="profile-button" onClick={onProfileClick}>
        Profile
      </button>

    
      <div className="groups-section">
        <button
          className="groups-toggle"
          onClick={() => setIsGroupsOpen(!isGroupsOpen)}
        >
          Groups {isGroupsOpen ? '▼' : '▲'}
        </button>

      
        {isGroupsOpen && (
          <ul className="groups-list">
            {groups.map((group, index) => (
              <li key={index} onClick={() => onGroupClick(group)}>
                {group}
              </li>
            ))}
          </ul>
        )}
      </div>

  
      <button
        className="create-group-button"
        onClick={() => setShowCreateGroupModal(true)}
      >
        + Create Group
      </button>

   
      {showCreateGroupModal && (
        <div className="create-group-modal">
          <div className="modal-content">
            <h3>Create New Group</h3>
            <input
              type="text"
              placeholder="Group Name"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={newGroupPassword}
              onChange={(e) => setNewGroupPassword(e.target.value)}
            />
            <div className="modal-actions">
              <button className="create-button" onClick={handleCreateGroup}>
                Create
              </button>
              <button
                className="cancel-button"
                onClick={() => setShowCreateGroupModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;




