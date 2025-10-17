import React from 'react';

export default function Button({ children, onClick, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={"btn " + className}
    >
      {children}
    </button>
  );
}
