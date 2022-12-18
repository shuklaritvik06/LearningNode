/// <reference types="cypress" />

describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});

describe("My Second Test", () => {
  it("visit", () => {
    cy.visitwebsite("https://example.cypress.io");
  });
});

describe("My Third Test", () => {
  it("click", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
  });
});

describe("My Fourth Test", () => {
  it("type", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
    cy.get(".action-email")
      .type("ritvikshukla@gmail.com")
      .should("have.value", "ritvikshukla@gmail.com");
  });
});

describe("My Fifth Test", () => {
  it("checkbox", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
    cy.get(".action-checkboxes [type='checkbox']").check([
      "checkbox1",
      "checkbox3",
    ]);
  });
});

describe("My Sixth Test", () => {
  it("radio", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
    cy.get(".action-radios [type='radio']").check("radio1");
  });
});

describe("My Seventh Test", () => {
  it("select", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
    cy.get(".action-select").select("apples");
  });
});

describe("My Eighth Test", () => {
  it("select multiple", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
    cy.get(".action-select-multiple").select(["apples", "oranges", "bananas"]);
  });
});

describe("My Ninth Test", () => {
  it("select multiple", () => {
    cy.viewport("iphone-3");
    cy.visit("https://example.cypress.io");
  });
});

describe("My Tenth Test", () => {
  it("Login", () => {
    cy.viewport(1280, 720);
    cy.visit("https://codedamn.com");
    cy.contains("Sign In").click();
  });
});

describe("My Eleventh Test", () => {
  it("Log it", () => {
    cy.viewport(1280, 720);
    cy.visit("https://codedamn.com");
    cy.contains("Sign In").click();
    cy.log("I am on the login page");
    cy.url().should("include", "/login");
    cy.url().then((values) => {
      cy.log(values);
    });
  });
});

describe("My Twelfth Test", () => {
  it("Log it", () => {
    cy.viewport(1280, 720);
    cy.visit("https://codedamn.com");
    cy.contains("Sign In").click();
    cy.log("I am on the login page");
    cy.get("[data-testid='username']").type("iosdev",{force: true});
    cy.get("[data-testid='password']").type("iosdev",{force: true});
    cy.get("[data-testid='login']").click({force: true});
  })
});
