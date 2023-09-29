// OverlayManager.js
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import ReactPlayer from "react-player";
import Draggable from "react-draggable";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ResizableBox } from "react-resizable";
import axios from "axios";
import "./../../src/App.css";

const OverlayManager = () => {
  const [overlays, setOverlays] = useState([]);
  const [isResizing, setIsResizing] = useState(false);

  const [containerWidth, setContainerWidth] = useState(20);
  const [containerHeight, setContainerHeight] = useState(20);

  useEffect(() => {
    fetchOverlays();
  }, []);

  const fetchOverlays = async () => {
    try {
      const response = await axios.get("http://localhost:8080/list");
      setOverlays(response.data);
    } catch (error) {
      console.error("Error fetching overlays:", error);
    }
  };

  const handleResize = (e, data, overlay) => {
    const newWidth = data;
    const newHeight = data;
    const minWidth = 50;
    const minHeight = 50;

    // Update overlay dimensions
    if (newWidth >= minWidth && newHeight >= minHeight) {
      // Send the updated dimensions to the server
      axios
        .put(`http://localhost:8080/update/${overlay.id}`, {
          positionX: overlay.positionX,
          positionY: overlay.positionY,
          width: newWidth,
          height: newHeight,
        })
        .then(() => {
          // Handle successful update (if needed)
        })
        .catch((error) => {
          console.error("Error updating overlay:", error);
          // Handle errors, e.g., display an error message to the user.
        });
    }
  };

  const handleOverlayClick = (e, data, overlay) => {
    setIsResizing(!isResizing);
    handleResize(e, data, overlay);
  };

  const handleDrag = (e, data, overlay) => {
    axios
      .put(`http://localhost:8080/update/${overlay.id}`, {
        positionX: data.x,
        positionY: data.y,
        width: overlay.width,
        height: overlay.height,
        content: overlay.content,
      })
      .then(fetchOverlays)
      .catch((error) => {
        console.error("Error updating overlay:", error);
        // Handle errors, e.g., display an error message to the user.
      });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <div className="mb-4 d-inline-flex">
            <h1 className="text-center">Welcome to the Livestream App</h1>
            <Link to="/create" className="btn btn-primary float-end mx-2 my-1">
              Add Overlay
            </Link>
            <Link to="/list" className="btn btn-success float-end mx-2 my-1">
              Manage Overlay
            </Link>
          </div>
          <div style={{ position: "relative", resize: "both" }}>
            <div className="container">
              <div className="row">
                <div className="col">
                  {overlays.map((overlay) => (
                    <Draggable
                      position={{ x: overlay.positionX, y: overlay.positionY }}
                      onStart={() => !isResizing}
                      onDrag={(e, data) => {
                        if (isResizing == false) {
                          handleDrag(e, data, overlay);
                        }
                      }}
                    >
                      <ResizableBox
                        onResize={(e, { size }) => {
                          setContainerWidth(size.width);
                          setContainerHeight(size.height);
                        }}
                      >
                        <div
                          className="contain border border-2 border-black"
                          style={{
                            position: "absolute",
                            width: overlay.width,
                            height: overlay.height,
                            cursor: isResizing ? "nwse-resize" : "move",
                          }}
                          onClick={(e, data) =>
                            handleOverlayClick(e, data, overlay)
                          }
                        >
                          {overlay.content}
                        </div>
                      </ResizableBox>
                    </Draggable>
                  ))}
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <ReactPlayer
                    url="http://streams.videolan.org/samples/vp8_webm/big-buck-bunny_trailer.webm"
                    controls={true}
                    width="640"
                    height="360"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayManager;
