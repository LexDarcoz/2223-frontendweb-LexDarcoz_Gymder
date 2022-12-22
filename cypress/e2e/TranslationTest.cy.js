describe("TranslateTest", () => {
  it("passes", () => {
    cy.login();
    cy.visit("http://localhost:3000/addGym/");
  });

  it("Should translate into Dutch", () => {
    cy.get("[data-cy=AddGym]")
      .should("exist")
      .should("contain", "Add your gym");
    cy.get("[data-cy=LanguageButton]").click();
    cy.get("[data-cy=DutchSelection]").click();
    cy.get("[data-cy=AddGym]")
      .should("exist")
      .should("contain", "Voeg je gym toe");
  });
});
