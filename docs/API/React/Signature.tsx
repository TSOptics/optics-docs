import React, { FC, ReactNode } from "react";

export const Signature: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <sup>
      <i>{children}</i>
    </sup>
  );
};
