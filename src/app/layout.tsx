"use client"
import { Header } from "@/components/Header/Header";
import "./globals.css";

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({} as { user: string; setUser: (user: any) => void });

export const useGlobalState = () => useContext(GlobalContext);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState({})

  return (
      <html lang="en">
        <body>
          <GlobalContext.Provider value={{user, setUser} as {user: string; setUser: (user: any) => void}}>
            <Header />
            {children}
          </GlobalContext.Provider>
        </body>
      </html>
  );
}
