// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("goToHomePage", () => {
  console.log(Cypress.env("auth_username"));
  cy.visit("http://localhost:3000/");
});

Cypress.Commands.add("login", () => {
  cy.goToHomePage();
  cy.clearLocalStorage();

  Cypress.log({
    displayName: "login",
    message: `Signing in as ${Cypress.env("auth_username")}`,
  });

  const clientId = Cypress.env("auth_client_id");
  const audience = Cypress.env("auth_audience");
  const scope = "openid profile email offline_access";

  console.log(Cypress.env("auth_username"));
  cy.request({
    method: "POST",
    url: Cypress.env("auth_url"),
    body: {
      grant_type: "password",
      username: Cypress.env("auth_username"),
      password: Cypress.env("auth_password"),
      audience,
      scope,
      client_id: clientId,
      client_secret: Cypress.env("auth_client_secret"),
    },
  }).then(
    ({
      body: {
        access_token: accessToken,
        expires_in: expiresIn,
        id_token: idToken,
        token_type: tokenType,
      },
    }) => {
      cy.window().then((win) => {
        win.localStorage.setItem(
          `@@auth0spajs@@::${clientId}::${audience}::${scope}`,
          JSON.stringify({
            body: {
              client_id: clientId,
              access_token: accessToken,
              id_token: idToken,
              scope,
              expires_in: expiresIn,
              token_type: tokenType,
              decodedToken: {
                user: JSON.parse(
                  Buffer.from(idToken.split(".")[1], "base64").toString("ascii")
                ),
              },
              audience,
            },
            expiresAt: Math.floor(Date.now() / 1000) + expiresIn,
          })
        );
        cy.reload();
      });
    }
  );
});

Cypress.Commands.add("logout", () => {
  Cypress.log({
    displayName: "logout",
  });
  cy.goToHomePage();
  cy.get("[data-cy=account_btn]").click();
  cy.get("[data-cy=logout_btn]").click();
});
