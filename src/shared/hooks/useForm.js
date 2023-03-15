import { useState } from "react";

import { validateField } from "../utils/utils";

export default function useForm({ initialState, onSubmit }) {
  const [state, setState] = useState({ ...initialState });
  const [error, setError] = useState();

  const validate = (value, name) => {
    setError(validateField(value, name));
  };

  const handleChangeTextInput = (value, name) => {
    if (name === "height" || name === "weight" || name === "age") {
      if (value.length !== 0 && value.length >= 2) {
        validate(value, name);
      }
      if (Number(value) >= 120 && value == 0) {
        setError(null);
      }
    }
    setState((prevState) => ({
      ...prevState,
      [name]: value.toLowerCase(),
    }));
  };

  const handleRadioInput = ({ name, value }) => {
    setState((prevState) => ({
      ...prevState,
      [name]: String(value).toLowerCase(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };
  const reset = () => {
    setState({
      ...initialState,
    });
  };

  return {
    state,
    error,
    validate,
    handleChangeTextInput,
    handleSubmit,
    handleRadioInput,
  };
}
