import { useState } from "react";

import useTranslate from "./useTranslate";

export default function useHandleValidateInput({ inputValue }) {
  const { t } = useTranslate();

  const [errValidation, setErrValidation] = useState(null);

  const handleValidateInput = (name) => {
    if (inputValue.length < 1) {
      setErrValidation("Too short...");
    }
    switch (name) {
      case "email":
        if (!inputValue.includes("@")) {
          setErrValidation(t.emailErrorNotIncludeSign);
        } else if (
          !inputValue.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)
        ) {
          setErrValidation(t.emailErrorNotMatch);
        } else {
          setErrValidation(null);
        }
        break;
      case "password": {
        if (inputValue.length < 6) {
          setErrValidation(t.passwordErrorLength);
        } else if (!inputValue.match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
          setErrValidation(t.passwordErrorNotMatch);
        } else {
          setErrValidation(null);
        }
        break;
      }
      case "height": {
        if (inputValue != 0 && inputValue < 120) {
          setErrValidation(t.heightError);
        }
        break;
      }
      case "age": {
        if (inputValue != 0 && inputValue < 18) {
          setErrValidation(t.ageError);
        } else {
          setErrValidation(null);
        }
        break;
      }
      case "weight": {
        if (inputValue != 0 && inputValue < 5) {
          setErrValidation(t.weightError);
        } else {
          setErrValidation(null);
        }
        break;
      }
    }
  };

  return { errValidation, setErrValidation, handleValidateInput };
}
