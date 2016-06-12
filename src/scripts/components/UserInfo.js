import React from 'react';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function UserData(props) {
  return(
    <p onClick={evt => store.emit('CLICK_USER_DATA', evt)}
    data-info={props.data}>
      {capitalize(props.data)}: {store.state.user[props.data]}
    </p>
  );
}

export default function UserInfo(props)  {
  return (
    <div>
      <UserData data="name" />
      <UserData data="age" />
    </div>
  );
}
