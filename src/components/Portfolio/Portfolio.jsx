import React, { useState } from 'react';
import './Portfolio.css';
import FilterTabs from './FilterTabs';
import SearchBar from './SearchBar';
import TableActions from './TableActions';
import PortfolioTable from './PortfolioTable';
import UploadModal from './UploadModal';
import { portfolioData } from '../../data/mockData';

const Portfolio = () => {
  const [data, setData] = useState(portfolioData);
  const [selectedItems, setSelectedItems] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Filter data based on active tab and search term
  const filteredData = data.filter(item => {
    const matchesTab = activeTab === 'all' || item.type === activeTab;
    const matchesSearch = searchTerm === '' || 
      Object.values(item).some(value => 
        value && typeof value === 'string' && 
        value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesTab && matchesSearch;
  });

  // Handle selection of items
  const handleSelectItem = (id) => {
    setSelectedItems(prevSelected => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter(itemId => itemId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  // Handle selection of all items
  const handleSelectAll = () => {
    if (selectedItems.length === filteredData.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredData.map(item => item.id));
    }
  };

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1>Portfolio</h1>
        <div className="user-info">
          <div className="user-avatar">
            <span>T</span>
          </div>
          <div className="user-details">
            <p className="user-name">Trustee</p>
            <p className="user-email">trustee@resollect.com</p>
          </div>
        </div>
      </div>

      <FilterTabs 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onUploadClick={() => setShowUploadModal(true)}
      />
      
      <div className="portfolio-actions">
        <SearchBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />
        <div className="right-actions">
          <button className="select-columns-btn">
            Select Columns <span className="arrow-down">▼</span>
          </button>
          <button className="more-filters-btn">
            More Filters
          </button>
        </div>
      </div>
      
      <div className="selected-count">
        {selectedItems.length} items selected
      </div>
      
      {selectedItems.length > 0 && (
        <TableActions 
          selectedCount={selectedItems.length} 
          onClearSelection={() => setSelectedItems([])}
        />
      )}
      
      <PortfolioTable 
        data={filteredData}
        selectedItems={selectedItems}
        onSelectItem={handleSelectItem}
        onSelectAll={handleSelectAll}
      />
      
      {showUploadModal && (
        <UploadModal onClose={() => setShowUploadModal(false)} />
      )}
    </div>
  );
};

export default Portfolio;