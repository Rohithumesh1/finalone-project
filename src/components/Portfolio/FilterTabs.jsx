import React from 'react';

const FilterTabs = ({ activeTab, setActiveTab, onUploadClick }) => {
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'pre-default', label: 'Pre Default' },
    { id: 'npa', label: 'NPA' },
    { id: 'tslci', label: 'TSLCI Responses' },
    { id: 'symbolic', label: 'Symbolic Possession' },
    { id: 'dm', label: 'DM Order' },
    { id: 'physical', label: 'Physical Possession' },
    { id: 'auction', label: 'Auction' }
  ];

  return (
    <div className="filter-tabs">
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <button className="upload-btn" onClick={onUploadClick}>
        + Upload Document
      </button>
    </div>
  );
};

export default FilterTabs;