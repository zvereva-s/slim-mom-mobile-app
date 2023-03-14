import { useState } from "react";

import { validateField } from "../utils/utils";

export default function useForm({ initialState, onSubmit }) {
  const [state, setState] = useState({ ...initialState });
  const [error, setError] = useState({
    message: "",
    type: "",
    name: "",
  });
  const validate = (type, value, name) => {
    setError(validateField(type, value, name));
  };

  const handleChangeTextInput = (value, name) => {
    if (name === "height" || name === "weight" || name === "age") {
      validate("number", value, name);
      if (error?.message) {
        return;
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
