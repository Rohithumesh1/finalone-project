import React from 'react';

const PortfolioTable = ({ data, selectedItems, onSelectItem, onSelectAll }) => {
  // Check if all items are selected
  const allSelected = data.length > 0 && selectedItems.length === data.length;

  // Get table headers from the first data item
  const headers = data.length > 0 ? Object.keys(data[0]).filter(key => key !== 'id') : [];

  return (
    <div className="table-container">
      <table className="portfolio-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={allSelected}
                onChange={onSelectAll}
              />
            </th>
            {headers.map(header => (
              <th key={header}>
                {header.charAt(0).toUpperCase() + header.slice(1).replace(/([A-Z])/g, ' $1')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id} className={selectedItems.includes(item.id) ? 'selected' : ''}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => onSelectItem(item.id)}
                />
              </td>
              {headers.map(header => (
                <td key={`${item.id}-${header}`}>
                  {header === 'loanNo' ? (
                    <a href="#" className="loan-link">{item[header]}</a>
                  ) : (
                    item[header]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioTable;