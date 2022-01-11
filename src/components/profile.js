import React, { useState } from "react";
import { useSelector, connect, shallowEqual } from "react-redux";
import { changeName, toggleCheckbox } from "../store/profile/actions";
import { selectName } from "../store/profile/selector";

export const Profile = ({checkboxValue, setName, changeChecked}) => {
  const name = useSelector(selectName, shallowEqual);
  const [value, setValue] = useState(name);

  const handleChangeText = (e) => {
    setValue(e.target.value);
  };

  const handleChange = () => {
    changeChecked();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(value);
  };

  return (
    <>
      <h3>Profile</h3>
      <input type="checkbox" checked={checkboxValue} onChange={handleChange} />
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChangeText} />
        <input type="submit" />
      </form>
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
