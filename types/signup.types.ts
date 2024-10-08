type HandleSubmitSignUpFormEvent = React.FormEvent<HTMLFormElement> & {
  target: HTMLFormElement & {
    email: HTMLInputElement;
    password: HTMLInputElement;
  };
};

export default HandleSubmitSignUpFormEvent;
