import { render, screen } from "@testing-library/react";
import FollowerList from "../FollowersList";
import { BrowserRouter } from "react-router-dom";

const MockFollowersList = () => {
    return(
        <BrowserRouter>
            <FollowerList />
        </BrowserRouter>
    )
}

describe("FollowersList", () => {
    beforeEach(()=> {
        console.log("RUNNING BY EACH TEST");
    })

  it("should render followers list", async () => {
    render(<MockFollowersList />)
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  
  it("should render multiple followers list", async () => {
    render(<MockFollowersList />)
    const followerDivElement = await screen.findAllByTestId(/follower-item/i);
    expect(followerDivElement).toBe(5);
  });
});
