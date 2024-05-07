describe("Негативное тестирование регистрации", () => {
  it("Тестирование первого этапа регистрации с негативными результатами", () => {
    cy.fixture("Register_test").then((data) => {
      cy.log("Переход на страницу регистрации");
      cy.visit(data.register_url);

      cy.log("Ввод некорректного логина");
      cy.get(
        ":nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text"
      ).type("invalid_login");

      cy.log("Ввод некорректного email");
      cy.get(".form-input--email").type("invalid_email");

      cy.log("Ввод некорректного пароля");
      cy.get(
        ":nth-child(3) > .form-control--medium > .form-input--password"
      ).type("short");

      cy.log("Ввод несовпадающего повторного пароля");
      cy.get(
        ":nth-child(4) > .form-control--medium > .form-input--password"
      ).type("different_password");

    })
  })
})
    