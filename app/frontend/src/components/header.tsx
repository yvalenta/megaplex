import React from "react";

export const Header = ({name: string}) => {
  return (
    <header>
      <h1 className="text-3xl font-bold underline">Holaxxxx {string}</h1>
    </header>
  )
}
