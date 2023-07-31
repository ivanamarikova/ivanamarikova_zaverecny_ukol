export class HomePage {
    constructor() {
        this.welcomePageHeader = "#welcome-page-header";
    }

    checkWelcomePageHeader() {
        cy.get(this.welcomePageHeader).should("be.visible");
    }
}

