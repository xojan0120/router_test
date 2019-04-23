import React from 'react';

export default props => {
  console.log(props);
  return (
    <div>
      <div>this is hello</div>
      <div>message is {props.message}</div>
      <div>id is {props.match.params.id}</div>
    </div>
  );
};
