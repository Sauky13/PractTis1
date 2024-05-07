describe("Редактирование организации", () => {
  it("None-existent login test", () => {
    cy.fixture("testerEmployer_test").then((data) => {
      cy.log("Переход на страницу авторизации");
      cy.visit(data.login_url);

      cy.log("Ввод корректного логина");
      cy.get(".form-input--text").type(data.login);

      cy.log("Ввод корректного пароля");
      cy.get(".form-input--password").type(data.password);

      cy.log("Вход по кнопке Войти");
      cy.get(":nth-child(3) > .button").click();

      cy.log("Переход на страницу изменения личных данных");
      cy.get(":nth-child(4) > .menu-item__item-name").click();

      cy.log("Изменение названия");
      cy.get(
        ".about-org > :nth-child(1) > .form-control--max > .form-input--text"
      )
        .clear()
        .type("новая организация");

      cy.log("Изменение описания");
      cy.get(".form-area").clear().type("новое описание");

      cy.log("Изменение наименования");
      cy.get(
        ":nth-child(3) > :nth-child(1) > .form-control--max > .form-input--text"
      )
        .clear()
        .type("Директор Директович Директоров");

      cy.log("Изменение адреса");
      cy.get(
        ":nth-child(3) > :nth-child(2) > .form-control--max > .form-input--text"
      )
        .clear()
        .type("Томск Кирова 25");

      cy.log("Изменение номера телефона");
      cy.get(
        ".contacts__fields > :nth-child(1) > .form-control--max > .form-input--text"
      )
        .clear()
        .type("+");

      cy.log("Изменение почты");
      cy.get(
        ".contacts__fields > :nth-child(2) > .form-control--max > .form-input--text"
      )
        .clear()
        .type("comasdil.com");

      cy.log("Сохранение изменений");
      cy.get(".edit-form__button > .button").click();
    });
  });
});
