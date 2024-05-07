describe("негативное редактирование профиля Employer", () => {
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
        cy.get(':nth-child(2) > .menu-item__item-name').click();

        cy.log("Изменние фамилии");
        cy.get(':nth-child(1) > :nth-child(1) > .form-control--max > .form-input--text').clear().type("Баба321");

        cy.log("Изменние имени");
        cy.get(':nth-child(1) > :nth-child(2) > .form-control--max > .form-input--text').clear().type("2183----");

        cy.log("Изменние отчества");
        cy.get('.form__labels > :nth-child(2) > :nth-child(1) > .form-control--max > .form-input--text').clear().type("2183----");

        cy.log("Изменние email");
        cy.get('.form-input--email').clear().type("iewroi231mail.ru");
        
        cy.get('.profile-forms > .form > .form__buttons > .button').click();
      });
    });
  });