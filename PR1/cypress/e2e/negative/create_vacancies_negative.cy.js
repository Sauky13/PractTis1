describe("Создание вакансий", () => {
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

      cy.log("Переход на страницу вакансий");
      cy.get(":nth-child(7) > .menu-item__item-name").click();

      cy.log("Нажатие на кнопку 'Создать вакансию'");
      cy.get(
        '[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button'
      ).click();

      cy.log("Ввод названия вакансии");
      cy.get(
        ".vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--"
      ).type(" ", { force: true });

      cy.log("выбор зарплаты");
      cy.get(
        ".vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .salary-field > .salary-field__wrapper--bottom > .radio-list > :nth-child(3) > .radio-component__input"
      ).click();

      cy.log("тип занятости");
      cy.get(
        ".vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-select > :nth-child(2) > .form-select__selected"
      ).click();

      cy.log("выбор типа занятости");
      cy.get(".form-select__items > :nth-child(3)").click();

      cy.log("ввод тестового описания");
      cy.get(
        ".vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area"
      ).type(" ", { force: true });

      cy.log("ввод тестовых требований");
      cy.get(
        ".vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area"
      ).type(" ", { force: true });

      cy.log("нажатие на кнопку 'Создать вакансию'");
      cy.get(
        ".vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button"
      )
        .wait(3000)
        .click({ force: true });
    });
  });
});
