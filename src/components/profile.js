import React, { useState, useEffect } from "react";
import { useSelector, connect, shallowEqual } from "react-redux";
import { changeName, toggleCheckbox } from "../store/profile/actions";
import { selectName } from "../store/profile/selector";
import { logOut, userRef } from "../services/firebase";
import { onValue, set } from "firebase/database";


export const Profile = ({checkboxValue, setName, changeChecked}) => {
  const name = useSelector(selectName, shallowEqual);
  const [value, setValue] = useState(name);

  useEffect(() => {
    const unsubscribe = onValue(userRef, (snapshot) => {
      const userData = snapshot.val();
      setName(userData?.name || "");
    });

    return unsubscribe;
  }, [setName]);

  const handleChangeText = (e) => {
    setValue(e.target.value);
  };

  const handleChange = () => {
    changeChecked();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    set(userRef, {
      name: value,
    });
  };

  const handleLogOutClick = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h3>Profile</h3>
      <input type="checkbox" checked={checkboxValue} onChange={handleChange} />
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChangeText} />
        <input type="submit" />
      </form>
      <button onClick={handleLogOutClick}>SIGN OUT</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  name: state.profile.name,
  checkboxValue: state.profile.checkbox,
});

const mapDispatchToProps = (dispatch) => ({
  changeChecked: () => dispatch(toggleCheckbox),
  setName: (newName) => dispatch(changeName(newName)),
});

export const ConnectedProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

