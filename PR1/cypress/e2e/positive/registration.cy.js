describe("Регистрация", () => {
    it("None-existent login test", () => {
      cy.fixture("Register_test").then((data) => {
        cy.log("Переход на страницу регистрации")
        cy.visit(data.register_url)
  
        cy.log("Ввод логина");
        cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.register_login)
  
        cy.log("Ввод  Email");
        cy.get('.form-input--email').type(data.register_email)

        cy.log("Ввод пароля");
        cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.register_password);
  
        cy.log("Ввод повторного пароля");
        cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.register_password);
  

        cy.log("Переход по кнопке далее")
        cy.get(':nth-child(4) > .button').click()

        cy.log("Ввод Фамилии");
        cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.register_surname)

        cy.log("Ввод Имя");
        cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.register_name)

        cy.log("Ввод Отчество");
        cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type(data.register_patronymic)

        cy.log("Клик по кнопке 'Создать аккаунт'")
        cy.get('.form__buttons > :nth-child(3)').click()
      })
    })
  })
  