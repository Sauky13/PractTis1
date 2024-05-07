describe("изменение личных данных", () => {
    it("None-existent login test", () => {
        cy.fixture("testerInstitution_test").then((data) => {
            cy.log("Переход на страницу авторизации");
            cy.visit(data.login_url);

            cy.log("Ввод корректного логина");
            cy.get(".form-input--text").type(data.login);

            cy.log("Ввод корректного пароля");
            cy.get(".form-input--password").type(data.password);

            cy.log("Вход по кнопке Войти");
            cy.get(":nth-child(3) > .button").click();

            cy.log("переход на вкладку с информацией");
            cy.get(':nth-child(4) > .menu-item__item-name').click();

            cy.log("изменение названия");
            cy.get('.about-org > :nth-child(1) > .form-control--max > .form-input--text').clear().type("ТГПУ");

            cy.log("Изменение описания");
            cy.get('.form-area').clear().type("hfghfgh");

            cy.log("изменение контактного лица");
            cy.get(':nth-child(3) > :nth-child(1) > .form-control--max > .form-input--text').clear().type("0");

            cy.log("изменение номера телефона");
            cy.get('.contacts__fields > :nth-child(1) > .form-control--max > .form-input--text').clear().type("1239102");

            cy.log("Изменение почты");
            cy.get('.contacts__fields > :nth-child(2) > .form-control--max > .form-input--text').clear().type("oiwemail.ru");

            cy.log("Изменение сайта");
            cy.get(':nth-child(3) > .form-control--max > .form-input--text').clear().type("uiero.wpo");

            cy.get(':nth-child(3) > .form-control--max > .form-input--text').wait(3000)
                .click({ force: true });
        });
    });
});
