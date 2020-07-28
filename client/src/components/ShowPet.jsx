import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

const ShowPet =props=>{
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log(props._id);
    axios
      .get(`http://localhost:8000/api/petshelter/${props._id}`)
      .then((res) => {
        setName(res.data.name);
        setType(res.data.type);
        setDescription(res.data.description);
        setSkill1(res.data.skill1);
        setSkill2(res.data.skill2);
        setSkill3(res.data.skill3);
        console.log(res.data)
      })
      .catch((errors) => console.log(errors));
  }, [props._id]);

    const remove = (_id) => {
    console.log(_id);
    axios
        .delete(`http://localhost:8000/api/petshelter/${_id}`)
        .then((res) => {
            navigate("/")
        })
        .catch((err) => console.log(err));
    };


    return (
      <div className="container">
        <div className="row">
          <h3>Details about {name}</h3>
        </div>
        <div className="row">
          <p>
            <strong>Type:</strong> {type}
          </p>
        </div>
        <div className="row">
          <p>
            <strong>Description:</strong> {description}
          </p>
        </div>
        <div className="row">
          <strong>Skills:</strong>
        </div>
        <div className="row">{skill1}</div>
        <div className="row">{skill2}</div>
        <div className="row">{skill3}</div>
        <div className="row">
          <button onClick={() => remove(props._id)} className="mt-2 btn btn-danger">
            Adopt {name}
          </button>
        </div>
      </div>
    );
}

export default ShowPet