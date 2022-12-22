describe("login", () => {
  beforeEach(() => {
    cy.login();
  });

  it("should successfully log into the app", () => {
    cy.get(<Navbar />).should("exist");
  });

  it("should successfully log out of the app", () => {
    cy.logout();

    cy.get("h1").should("exist").should("contain", "Login required!");
    cy.get("p")
      .should("exist")
      .should(
        "contain",
        "Sorry, you have to be logged in to access this feature!"
      );
    cy.get("button").should("exist").should("contain", "Log In");
  });
});
