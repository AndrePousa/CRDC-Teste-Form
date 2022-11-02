import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { Container, IconInput, InputStyleded } from "./styles";

export default function Input({ name, icon, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);
  return (
    <Container
      onClick={() => {
        inputRef.current?.focus();
      }}
    >
      {icon && <IconInput src={icon} />}
      <InputStyleded
        ref={inputRef}
        defaultValue={defaultValue}
        autoComplete="off"
        autoCorrect="off"
        aria-autocomplete="none"
        inputMode="text"
        {...rest}
      />
    </Container>
  );
}
