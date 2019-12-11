import React from 'react';

export const Error = (props) => (
   props.message && <div>{props.message}</div>
);