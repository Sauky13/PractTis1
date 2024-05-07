describe("Тест просмотр ууведомлений", () => {
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


        cy.log("Переход по вкладке Уведомления");
        cy.get('[href="/notification"] > .header__label').click();

        cy.log("Нажатие на кнопку 'Просмотреть'");
        cy.get(':nth-child(1) > .notification-list-item > .button').click();

      });
    });
  });