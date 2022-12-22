describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/addGym/");
  });

  it("Added a gym", () => {
    cy.login();

    cy.visit("http://localhost:3000/addGym/");

    cy.get(".navbar").invoke("hide");

    cy.get("[data-cy=name_input]").type("TestGym");
    cy.get("[data-cy=email_input").type("Test@gmail.com");
    cy.get("[data-cy=owner_input]").type("TestOwner");
    cy.get("[data-cy=address_input").type("Test address Gent voskenslaan");
    cy.get("[data-cy=description_input]").type("TestOwner");
    cy.get("[data-cy=submit_addgym").click();
  });
});
