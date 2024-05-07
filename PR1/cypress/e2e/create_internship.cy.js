describe("Создание стажировки", () => {
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

      cy.viewport(1440, 950);

      cy.log("Переход на страницу создания стажировки");
      cy.get(":nth-child(8) > .menu-item__item-name").click();

      cy.log("нажатие на кнопку 'Создать стажировку'");
      cy.get(
        '[data-v-e4f6348f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button'
      ).click();

      cy.get(
        ".vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--"
      ).type("Тестовая стажировка");

      cy.get(
        ".vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .form-select > :nth-child(2) > .form-select__selected"
      ).click();

      cy.get(".form-select__items > :nth-child(1)").click();

      cy.get(
        ".vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-select > :nth-child(2) > .form-select__selected"
      ).click;
      cy.get(
        ".vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-select > :nth-child(2) > .form-select__selected"
      ).click;

      cy.get(
        ".vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control--responsive > .form-input--date"
      ).type("2024-05-07");

      cy.get(
        ".vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control--responsive > .form-input--date"
      ).type("2024-05-31");

      cy.get(
        ".vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area"
      ).type("Тестовое описание");
      cy.get(
        ".vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(7) > .form-control > .form-area"
      ).type("Тестовые требования");

      cy.get(".vacancy-add-form-wrapper > .form > .form__buttons > .buttons")
        .wait(3000)
        .click({ force: true });
    });
  });
});
