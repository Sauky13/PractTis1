describe("Негативная Авторизация", () => {
    it("None-existent login test", () => {
      cy.fixture("Student_test_login").then((data) => {
        cy.log("Переход на страницу авторизации")
        cy.visit(data.login_url)
  
        cy.log("Ввод не корректного логина");
        cy.get(".form-input--text").type(123123)
  
        cy.log("Ввод не корректного пароля");
        cy.get(".form-input--password").type(1241781);
  
        cy.log("Вход по кнопке Войти")
        cy.get(':nth-child(3) > .button').click()
      })
    })
  })