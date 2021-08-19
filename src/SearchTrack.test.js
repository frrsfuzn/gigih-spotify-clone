/* eslint-disable no-undef */
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchTrack from "./components/searchTrack";
import SearchResult from "./components/searchResult";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { setupServer } from "msw/node";
import { rest } from "msw";
import data from "./all-sample";
import userEvent from "@testing-library/user-event";

const server = setupServer(
  rest.get("https://api.spotify.com/v1/search", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ tracks: { items: data } }));
  })
);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("Search Track Mocking Server", async () => {
  render(
    <Provider store={store}>
      <SearchTrack />
			<SearchResult/>
    </Provider>
  );
	// get element with test id "inputSearchTrack"
	const inputSearchTrack = screen.getByTestId("inputSearchTrack")
	// get button element with value "Search"
	const buttonSearchTrack = screen.getByText("Search")
	// user type in input field
	userEvent.type(inputSearchTrack, "Bohemian Rhapsody")
	// user click button Search
	userEvent.click(buttonSearchTrack)
	// wait until last track show up
	await screen.findByText("I Want To Break Free")
	// get the first track result
	const firstTrackResult = screen.getByText("Bohemian Rhapsody - Remastered 2011")
	// get the last track result
	const lastTrackResult = screen.getByText("I Want To Break Free")
	// make sure the first track result to be in document
	expect(firstTrackResult).toBeInTheDocument()
	// make user the last track result to be in document
	expect(lastTrackResult).toBeInTheDocument()
});
