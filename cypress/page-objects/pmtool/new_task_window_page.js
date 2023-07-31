export class NewTaskWindowPage {
    constructor() {
        this.modalTitle = ".modal-title";
        this.nameInput = "div[data-testid='Name']>input"
    }

    titleIsVisible() {
        cy.get(this.modalTitle).should("be.visible");
        return this;
    }

    titleHasText(text) {
        cy.get(this.modalTitle).should("have.text", text);
        return this;
    }

    nameInputIsVisible() {
        cy.get(this.nameInput).should('be.visible');
        return this;
    }
}