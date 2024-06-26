describe("Поиск вакансий", () => {
  it("None-existent login test", () => {
    cy.fixture("main_test").then((data) => {
      cy.log("Переход на главную страницы");
      cy.visit(data.main_url);

      cy.log("ввод в поле поиска");
      cy.get(".form-input--text").type("qqqqqqqqqqqqqqqq", { force: true });

      cy.get(":nth-child(1) > .radio-component__label").click();

      cy.get(":nth-child(3) > :nth-child(2) > .form-select__selected").click();

      cy.wait(4000);

      cy.get(".form-select__items > :nth-child(2)").click();
    });
  });
});
