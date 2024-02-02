import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../service";
import moment from "moment";
const User = () => {
  const params = useParams();
  const { userId } = params;
  const [isEdit, setIsEdit] = useState(false);
  const [age, setAge] = useState("");
  const [dob, setDob] = useState(new Date());
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    apiService.getUserDetails(userId).then((res) => {
      if (res) {
        setAge(res.data.age);
        setName(res.data.name);
        setContact(res.data.contact);
        setDob(moment(new Date(res.data.dob)).format("YYYY-MM-DD"));
      }
    });
  }, [userId]);
  const onEdit = () => {
    setIsEdit(true);
  };
  const onSave = () => {
    setError("");
    apiService
      .editUserDetails({ userId, age, dob, contact, name })
      .then((res) => {
        if (res) {
          setIsEdit(false);
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };
  const onChange = (e, type) => {
    setError("");
    if (type === "age") {
      setAge(e.target.value);
    }
    if (type === "dob") {
      setDob(e.target.value);
    }
    if (type === "contact") {
      setContact(e.target.value);
    }
    if (type === "name") {
      setName(e.target.value);
    }
  };
  return (
    <div
      style={{
        margin: "40px auto",
        width: "500px",
        alignItems: "start",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {name ? (
        <>
        <h3>Profile Details</h3>
          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            Name:
            {isEdit ? (
              <input
                style={{ width: "150px",outline:"none" }}
                value={name}
                onChange={(e) => onChange(e, "name")}
              />
            ) : (
              <span>{name}</span>
            )}
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            Age:
            {isEdit ? (
              <input
                style={{ width: "150px",outline:"none" }}
                value={age}
                onChange={(e) => onChange(e, "age")}
                type="number"
              />
            ) : (
              <span>{age}</span>
            )}
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            DOB:
            {isEdit ? (
              <input
                style={{ width: "150px",outline:"none" }}
                value={dob}
                type="date"
                onChange={(e) => onChange(e, "dob")}
              />
            ) : (
              <span>{moment(dob).format("DD MMMM, YYYY")}</span>
            )}
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            Contact:
            {isEdit ? (
              <input
                style={{ width: "150px",outline:"none" }}
                value={contact}
                onChange={(e) => onChange(e, "contact")}
                type="number"
              />
            ) : (
              <span>{contact}</span>
            )}
          </p>
          <p>{error}</p>
          {isEdit ? (
            <button onClick={onSave}>Save</button>
          ) : (
            <button onClick={onEdit}>Edit</button>
          )}
        </>
      ) : (
        <p>user data not found</p>
      )}
    </div>
  );
};
export default User;
