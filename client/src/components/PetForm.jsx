import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const PetForm = props => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("none");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState({});
    const [points, setPoints] = useState(0);

    

    const CreatePet =e=> {
        e.preventDefault();
        const shelterPet = {name, type, description, skill1, skill2, skill3, points};
        axios.post("http://localhost:8000/api/petshelter", shelterPet)
            .then(res => {
                console.log(res)
                res.data.errors ? setErrors(res.data.errors) : navigate("/");
            }).catch(err => console.log(err));
    }

    return (
      <div className="container">
        <form onSubmit={CreatePet}>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name ? (
                <p className="text-danger">{errors.name.properties.message}</p>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label>Type</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setType(e.target.value)}
              />
              {errors.type ? (
                <p className="text-danger">{errors.type.properties.message}</p>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                type="text"
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
              />
              {errors.description ? (
                <p className="text-danger">
                  {errors.description.properties.message}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="col-sm-6">
            Skills (optional)
            <div className="form-group">
              <label>Skill 1</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setSkill1(e.target.value)}
              />
              {errors.skill1 ? (
                <p className="text-danger">
                  {errors.skill1.properties.message}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label>Skill 2</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setSkill2(e.target.value)}
              />
              {errors.skill2 ? (
                <p className="text-danger">
                  {errors.skill2.properties.message}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label>Skill 3</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setSkill3(e.target.value)}
              />
              {errors.skill3 ? (
                <p className="text-danger">
                  {errors.skill3.properties.message}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <input onClick={()=> setPoints(0)} type="submit" value="Add Pet to Shelter" className="btn btn-success"/>
        </form>
      </div>
    );


}

export default PetForm