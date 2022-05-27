import React from "react";
import { JournalEntry } from "./JournalEntry";

export const JournalEntries = () => {
  const entreis = [1, 2, 4, 5];
  return (
    <div className="journal__entries">
      {entreis.map((value) => (
        <JournalEntry key={value} />
      ))}
    </div>
  );
};
