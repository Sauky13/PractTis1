describe("изменение личных данных", () => {
  it("None-existent login test", () => {
    cy.fixture("Student_test_login").then((data) => {
      cy.log("Переход на страницу авторизации");
      cy.visit(data.login_url);

      cy.log("Ввод корректного логина");
      cy.get(".form-input--text").type(data.login);

      cy.log("Ввод корректного пароля");
      cy.get(".form-input--password").type(data.password);

      cy.log("Вход по кнопке Войти");
      cy.get(":nth-child(3) > .button").click();

      cy.log("Переход на страницу изменения личных данных");
      cy.get(":nth-child(2) > .menu-item__item-name").click();

      cy.log("Ввод нового Фамилии");
      cy.get(
        ":nth-child(1) > :nth-child(1) > .form-control--max > .form-input--text"
      )
        .clear()
        .type("сид67оров");

      cy.log("Ввод нового имени");
      cy.get(":nth-child(2) > .form-control--max > .form-input--text")
        .clear()
        .type("Ан76тон");

      cy.log("Ввод нового отчества");
      cy.get(
        ":nth-child(2) > :nth-child(1) > .form-control--max > .form-input--text"
      )
        .clear()
        .type("Анто76ович");

      cy.log("Ввод нового Email");
      cy.get(".form-input--email").clear().type("krгщmai@mail.ru");

      cy.log("Нажатие на кнопку Сохранить");
      cy.get(
        ".profile-forms > .form.edit-form > .form__buttons > .button"
      ).click();
    });
  });
});
