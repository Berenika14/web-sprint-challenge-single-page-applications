// import { text } from "express";

describe("Quotes App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  it("should be ok", () => {
    expect(4).to.equal(4);
  });
  const textInput = () => cy.get("input[name=name]");
  it("can add test to the box", () => {
    textInput().should("exist");
  });
});
