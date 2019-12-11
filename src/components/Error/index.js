import React from 'react';

// Error functional component
export const Error = (props) => (
   
   props.message && <div className="error">{props.message}</div>
);