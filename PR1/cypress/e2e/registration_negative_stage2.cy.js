describe("Негативное тестирование регистрации", () => {
    it("Тестирование первого этапа регистрации с негативными результатами", () => {
      cy.fixture("Register_test").then((data) => {
        cy.log("Переход на страницу регистрации")
        cy.visit(data.register_url)
  
        cy.log("Ввод логина");
        cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type('Ujlop')
  
        cy.log("Ввод  Email");
        cy.get('.form-input--email').type('uijk@mail.ru')
        cy.log("Ввод пароля");
        cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.register_password);
  
        cy.log("Ввод повторного пароля");
        cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.register_password);
  

        cy.log("Переход по кнопке далее")
        cy.get(':nth-child(4) > .button').click()

        cy.log("Ввод Фамилии");
        cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type('ЫОВРПАО3UUIY')

        cy.log("Ввод Имя");
        cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type('Пирожок')

        cy.log("Ввод Отчество");
        cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type('Пельменькович ')

        cy.log("Клик по кнопке 'Создать аккаунт'")
        cy.get('.form__buttons > :nth-child(3)').click()
      })
    })
  })