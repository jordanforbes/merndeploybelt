import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

const EditPet = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [points, setPoints] = useState(0);
  const [errors, setErrors] = useState({});

  useEffect( ()=> {
      console.log(props._id);
      axios.get(`http://localhost:8000/api/petshelter/${props._id}`)
        .then(res => {
            setName(res.data.name)
            setType(res.data.type);
            setDescription(res.data.description);
            setSkill1(res.data.skill1);
            setSkill2(res.data.skill2);
            setSkill3(res.data.skill3);

        }).catch(errors => console.log(errors));
  }, [props._id])


  const UpdatePet = (e) => {
    e.preventDefault();
    const shelterPet = { name, type, description, skill1, skill2, skill3, points };
    axios
      .put(`http://localhost:8000/api/petshelter/${props._id}`, shelterPet)
      .then((res) => {
        console.log(res);
        res.data.errors ? setErrors(res.data.errors) : navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <form onSubmit={UpdatePet}>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              value={name}
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
              value={type}
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
              value={description}
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
              value={skill1}
            />
            {errors.skill1 ? (
              <p className="text-danger">{errors.skill1.properties.message}</p>
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
              value={skill2}
            />
            {errors.skill2 ? (
              <p className="text-danger">{errors.skill2.properties.message}</p>
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
              value={skill3}
            />
            {errors.skill3 ? (
              <p className="text-danger">{errors.skill3.properties.message}</p>
            ) : (
              ""
            )}
          </div>
        </div>
        <input
          type="submit"
          value="Update Pet Info"
          className="btn btn-primary"
        />
      </form>
    </div>
  );
};

export default EditPet;
