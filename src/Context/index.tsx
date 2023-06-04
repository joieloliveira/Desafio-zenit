import React, { } from 'react';

import { AuthProvider } from "./AuthContext";
import { HeadeBarProvider } from "./HeadeBarContext";
import { MainBodyContext } from "./MainBodyContext";

function MainProvider({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <HeadeBarProvider>
        <MainBodyContext>
          {children}
        </MainBodyContext>
      </HeadeBarProvider>
    </AuthProvider>
  );
};

export { MainProvider };