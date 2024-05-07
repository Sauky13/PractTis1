describe("Чат в рабочем пространстве", () => {
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

        cy.get(':nth-child(5) > .menu-item__item-name').click();
        cy.get('.infinite-loader > :nth-child(1) > .button').click();

        cy.get('.form-area').type("Тестовое сообщение");

        cy.get('.comment-textarea__buttons > :nth-child(2) > .base-icon').click();

      });
    });
  });
  