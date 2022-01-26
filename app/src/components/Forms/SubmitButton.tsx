import React from 'react';

const SubmitButton = (props: { title: string }): JSX.Element => {
  const { title } = props;

  return (
    <button
      type="submit"
      className="aside__button btn-large waves-effect waves-light orange darken-2"
    >
      {title}
    </button>
  );
};

export default SubmitButton;