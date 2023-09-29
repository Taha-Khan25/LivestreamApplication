// UpdateOverlay.js
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const UpdateOverlay = () => {
  const { id } = useParams(); // Get the overlay ID from the URL parameter
  const [overlayData, setOverlayData] = useState({
    positionX: "",
    positionY: "",
    width: "",
    height: "",
    content: "",
  });

  useEffect(() => {
    fetchOverlayData(id);
  }, [id]);

  const [alertMessage, setAlertMessage] = useState("");

  const fetchOverlayData = async (overlayId) => {
    await axios
      .get(`http://localhost:8080/list/${overlayId}`)
      .then((response) => setOverlayData(response.data));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOverlayData({ ...overlayData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8080/update/${id}`,
        overlayData
      );
      fetchOverlayData(id);
      setAlertMessage("Overlay Updated successfully!");
      console.log("Overlay created:", response.data);
    } catch (error) {
      console.error("Error creating overlay:", error);
    }
  };

  return (
    <>
      <div className="container mt-4 w-25 h-100 ">
        {alertMessage && (
          <div className="alert alert-success" role="alert">
            {alertMessage}
          </div>
        )}
      </div>

      <div className="container mt-4 w-25 h-100 border border-3 border-primary rounded my-lg-5">
        <h2>Update Overlay</h2>
        <Link to="/" className="float-start m-3">
          <button className="btn btn-primary">Home</button>
        </Link>
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
          <button type="submit" className="btn btn-primary mx-2 my-3 ">
            Update Overlay
          </button>
          <Link to="/list" className="btn btn-secondary ml-2 mx-2 my-3">
            Back to List
          </Link>
        </form>
      </div>
    </>
  );
};

export default UpdateOverlay;
