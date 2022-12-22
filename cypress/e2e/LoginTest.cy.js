describe("login", () => {
  beforeEach(() => {
    cy.login();
  });
  it("should successfully log into the app", () => {
    cy.get("[data-cy=OpenMenuButton]").click();
    cy.get("[data-cy=LogOut_Button]").should("exist");
  });

  it("should successfully log out of the app", () => {
    cy.logout();

    cy.visit("http://localhost:3000/addGym");
    cy.get("h1").should("exist").should("contain", "Login required!");
    cy.get("p")
      .should("exist")
      .should(
        "contain",
        "Sorry, you have to be logged in to access this feature!"
      );

    cy.get("[data-cy=Login_Button]")
      .should("exist")
      .should("contain", "Join today");
  });

  it("should successfully open add gym of the app", () => {
    cy.visit("http://localhost:3000/addGym");
    cy.get("[data-cy=AddGym]")
      .should("exist")
      .should("contain", "Add your gym");
  });
});
