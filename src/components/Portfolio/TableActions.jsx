import React from 'react';

const TableActions = ({ selectedCount, onClearSelection }) => {
  return (
    <div className="table-actions">
      <button className="download-btn">Download For Selected Documents</button>
      <button className="email-btn">Send Email</button>
    </div>
  );
};

export default TableActions;