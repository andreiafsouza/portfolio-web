import React from 'react';

export function DeutschFlag({ size, color }) {
  return (
    <svg width={size ?? 64} height={size ?? 64} fill="none" viewBox="0 0 64 64">
      <path
        fill="#000"
        d="M60.998 51.999h-58A.997.997 0 012 51V13C2 12.446 2.448 12 3 12h57.999c.554 0 .998.448.998.999v38a.995.995 0 01-.998.999z"
      ></path>
      <path
        fill="#000"
        d="M2 13v12.333h60V13A.997.997 0 0061 12H3A.997.997 0 002 13z"
      ></path>
      <path fill="#D00" d="M62 25.333H2v13.334h60V25.333z"></path>
      <path
        fill="#FC0"
        d="M62 51V38.667H2V51c0 .554.448.999.999.999h57.999A1 1 0 0062 51z"
      ></path>
    </svg>
  );
}
