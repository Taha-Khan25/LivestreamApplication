// OverlayList.js
import React ,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'bootstrap';

const OverlayList = () => {
    const [overlays, setOverlays] = useState([]);

    useEffect(() => {
        // Fetch overlays from the backend when the component mounts
        fetchOverlays();
      }, []);
    
      const fetchOverlays = async () => {
        try {
          const response = await axios.get("http://localhost:8080/list");
          setOverlays(response.data);
        } catch (error) {
          console.error("Error fetching overlays:", error);
          // Handle errors, e.g., display an error message to the user.
        }
      };


    
      const handleDelete = async (overlay) => {
        try {
          await axios.delete(`http://localhost:8080/delete/${overlay.id}`);
    
          const updatedOverlays = overlays.filter((o) => o.id !== overlay.id);
          setOverlays(updatedOverlays);

        } catch (error) {
          console.error('Error deleting overlay:', error);
        }
      };

  return (
    <div>
      <h2 className="mt-4 mx-3">Overlay List</h2>
      <Link to="/" className="float-start m-3">
            <button className="btn btn-primary">Home</button>
          </Link>
    <button className="btn btn-primary float-start m-3" onClick={fetchOverlays}>Refresh</button>
      <table className="table table-bordered  mt-2 mx-3">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Content</th>
            <th>Position X</th>
            <th>Position Y</th>
            <th>Width</th>
            <th>Height</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {overlays.map((overlay) => (
            <tr key={overlay.id}>
              <td>{overlay.id}</td>
              <td>{overlay.content}</td>
              <td>{overlay.positionX}</td>
              <td>{overlay.positionY}</td>
              <td>{overlay.width}</td>
              <td>{overlay.height}</td>
              <td>
 
                <Link to={`/update/${overlay.id}`} className="btn btn-primary ">Update</Link>
 
                <button
                  className="btn btn-danger  mx-2"
                  onClick={() => handleDelete(overlay)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OverlayList;
