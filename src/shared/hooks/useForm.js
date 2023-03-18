import { useState } from "react";

export default function useForm({ initialState, onSubmit }) {
  const [state, setState] = useState({ ...initialState });

  const handleChangeTextInput = (value, name) => {
    setState((prevState) => ({
      ...prevState,
      [name]: String(value).toLowerCase(),
    }));
  };

  const handleSelectInput = (value, name) => {
    setState((prevState) => ({
      ...prevState,
      [name]: String(value).toLowerCase(),
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
    handleChangeTextInput,
    handleSubmit,
    handleRadioInput,
    handleSelectInput,
  };
}
