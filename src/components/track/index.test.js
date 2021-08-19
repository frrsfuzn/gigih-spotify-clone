/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Track from "./index";
import data from "./dummyTrack";

test("Render track component with dummy data and props isSelected false", () => {
  render(
    <Track
      track={data}
      isSelected={false}
      deleteTrack={() => {}}
      addTrack={() => {}}
      startPreview={() => {}}
			stopPreview={()=>{}}
    />
  );
  const songTitle = screen.getByText("Bohemian Rhapsody");
  const songArtist = screen.getByText("Queen");

  expect(songTitle).toBeInTheDocument();
  expect(songArtist).toBeInTheDocument();
});
