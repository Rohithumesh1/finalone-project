import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const UploadModal = ({ onClose }) => {
  const [documentName, setDocumentName] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [documentRemarks, setDocumentRemarks] = useState('');
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data
    console.log({ documentName, documentType, documentRemarks, fileName });
    // Close the modal
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="upload-modal">
        <div className="modal-header">
          <h3>Upload Document</h3>
          <button className="close-btn" onClick={onClose}>
            <FiX />
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Document Name</label>
            <select
              value={documentName}
              onChange={(e) => setDocumentName(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="loan-agreement">Loan Agreement</option>
              <option value="property-deed">Property Deed</option>
              <option value="identity-proof">Identity Proof</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Document Type</label>
            <select
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="pdf">PDF</option>
              <option value="image">Image</option>
              <option value="document">Document</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Document Remarks</label>
            <input
              type="text"
              placeholder="Type"
              value={documentRemarks}
              onChange={(e) => setDocumentRemarks(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label>Select File</label>
            <div className="file-input-container">
              <input
                type="file"
                id="file-upload"
                onChange={handleFileChange}
                className="file-input"
              />
              <div className="file-input-display">
                <span>{fileName || 'Choose file'}</span>
                <label htmlFor="file-upload" className="browse-btn">
                  Browse
                </label>
              </div>
            </div>
            {!fileName && <small>No file chosen</small>}
          </div>
          
          <div className="modal-actions">
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadModal;