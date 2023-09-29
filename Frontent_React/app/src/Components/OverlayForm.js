// OverlayForm.js
import React, { useState } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const OverlayForm = () => {
  const [overlayData, setOverlayData] = useState({
    positionX: '',
    positionY: '',
    width: '',
    height: '',
    content: '',
  });

  const [alertMessage, setAlertMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOverlayData({
      ...overlayData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/create', overlayData);
      setAlertMessage('Overlay created successfully!');
      console.log('Overlay created:', response.data);
    } catch (error) {
      console.error('Error creating overlay:', error);
    }
  };

  return (
    <div className="container mt-4 w-25 border border-3 border-primary rounded">
    <h2>Create Overlay</h2>
    {alertMessage && (
      <div className="alert alert-success" role="alert">
        {alertMessage}
      </div>
    )}
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Position X:</label>
        <input
          type="number"
          className="form-control"
          name="positionX"
          value={overlayData.positionX}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Position Y:</label>
        <input
          type="number"
          className="form-control"
          name="positionY"
          value={overlayData.positionY}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Width:</label>
        <input
          type="number"
          className="form-control"
          name="width"
          value={overlayData.width}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Height:</label>
        <input
          type="number"
          className="form-control"
          name="height"
          value={overlayData.height}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Content:</label>
        <input
          type="text"
          className="form-control"
          name="content"
          value={overlayData.content}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary px-3 m-3">
        Create Overlay
      </button>
      <Link to="/" className="btn btn-success ml-2 px-3">
        Home
      </Link>
    </form>
  </div>
  );
};

export default OverlayForm;
