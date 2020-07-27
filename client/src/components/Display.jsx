import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import moment from "moment";

const Display =props=>{
    const [all, setAll] = useState([]);
    const [pets, setPets] = useState([]);

    const fetchPets =()=>{
        axios
            .get("http://localhost:8000/api/petshelter")
            .then(res => {
                console.log(res);
                // setAll(res.data);
                // setPets(res.data.filter(a => new Date(a.start)))
                setPets(res.data);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchPets()
    }, []);


    return (
        
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet, i) => (
            <tr>
              <td>{pet.name}</td>
              <td>{pet.type}</td>
              <td>
                <Link
                  className="btn btn-outline-primary"
                  to={`/edit/${pet._id}`}
                >
                  Edit
                </Link>
                <Link 
                    className="btn btn-outline-success ml-2"
                    to={`/show/${pet._id}`}
                >
                    Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}

export default Display;