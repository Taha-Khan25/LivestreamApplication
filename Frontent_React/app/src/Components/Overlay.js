// Overlay.js
import React, { useState } from 'react';
import Draggable from 'react-draggable';

import axios from 'axios';

const Overlay = ({ id, x, y, width, height, text }) => {
  const [isResizing, setIsResizing] = useState(false);

  const handleResize = (e, data) => {
    // Calculate new width and height based on drag delta
    const newWidth = width + data.deltaX;
    const newHeight = height + data.deltaY;

    // Minimum width and height to prevent collapsing the overlay
    const minWidth = 50;
    const minHeight = 50;

    // Update overlay dimensions
    if (newWidth >= minWidth && newHeight >= minHeight) {
      // Send the updated dimensions to the server
      axios
        .put(`/api/overlays/${id}`, {
          width: newWidth,
          height: newHeight,
        })
        .then(() => {
          // Handle successful update (if needed)
        })
        .catch((error) => {
          console.error('Error updating overlay:', error);
          // Handle errors, e.g., display an error message to the user.
        });
    }
  };

  const handleDrag = (e, data) => {
    // Send the updated position to the server
    axios
      .put(`/api/overlays/${id}`, {
        positionX: data.x,
        positionY: data.y,
      })
      .then(() => {
        // Handle successful update (if needed)
      })
      .catch((error) => {
        console.error('Error updating overlay:', error);
        // Handle errors, e.g., display an error message to the user.
      });
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/overlays/${id}`);
      // Optionally, you can remove the overlay from the UI immediately.
    } catch (error) {
      console.error('Error deleting overlay:', error);
      // Handle errors, e.g., display an error message to the user.
    }
  };

  return (
    <Draggable
      position={{ x, y }}
      onDrag={handleDrag}
    >
      <div
        style={{
          position: 'absolute',
          width: width,
          height: height,
          border: '2px solid #000',
          cursor: 'move',
        }}
      >
        {text}
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            bottom: 0,
            right: 0,
            cursor: 'se-resize',
          }}
          onMouseDown={() => setIsResizing(true)}
        />
        <button onClick={handleDelete}>Delete</button>
      </div>
    </Draggable>
  );
};

export default Overlay;
