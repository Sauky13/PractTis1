describe("Создание потребности", () => {
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

      cy.log("Переход на страницу создания потребности");
      cy.get(":nth-child(6) > .menu-item__item-name").click();

      cy.log("нажатие на кнопку 'Создать потребность'");
      cy.get(".needs-block__filters-wrapper > .button").click();

      cy.log("Оставляем поля пустыми");
      cy.get(
        ".desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--text"
      ).clear();

      cy.get(
        ".desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-control > .form-area"
      ).clear();

      cy.get(
        ".desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control > .form-area"
      ).clear();

      cy.log("Клик по кнопке 'Создать потребность'");
      cy.get(
        ".desktop-modal__content > .vacancy-need-wrapper > .form > .form__buttons",
      ).wait(3000)
      .click({ force: true });
    });
  });
});
