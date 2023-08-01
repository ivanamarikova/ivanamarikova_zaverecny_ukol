import { UsersPage } from "./users_page";

export class NewUserFormModal {
    constructor() {
        this.addUserButton = "button[test_id='Add User']";
        this.progressBar = ".progress-bar";
        this.userStatusSelect = 'div[data-testid="User Status"] select';
        this.accesGroupSelect = 'div[data-testid="Access Group"] select';
        this.usernameTest = "#fields_12";
        this.userPasswordTest = "#password";
        this.firstNameTest = "#fields_7";
        this.lastNameTest = "#fields_8";
        this.userEmailAdress = "#fields_9";
        this.languageSelect = 'div[data-testid="Language"] select';
        this.saveButtonUser = 'button[type="submit"]';
    }

    clickAddUserButton() {
        cy.get(this.addUserButton).click();
        return this;
    }

    addUserButtonIsVisible() {
        cy.get(this.addUserButton).should('be.visible');
        return this;
    }

    waitForProgressBarVanish() {
        cy.get(this.progressBar).should("not.exist");
        return this;
    }

    selectUserStatus() {
        cy.get(this.userStatusSelect).select("Active");
        return this;
    }

    UserStatusHaveText(expectedStatus) {
        cy.get(this.userStatusSelect).should('contain', expectedStatus);
        return this;
    }

    selectAccesGroup() {
        cy.get(this.accesGroupSelect).select("Manager");
        return this;
    }

    AccessGroupHaveText(expectedStatus) {
        cy.get(this.accesGroupSelect).should('contain', expectedStatus);
        return this;
    }

    typeUsername() {
        cy.get(this.usernameTest).type("Jana1");
        return this;
    }

    UsernameIsVisible() {
        cy.get(this.usernameTest).should('be.visible');
        return this;
    }

    typePassword() {
        cy.get(this.userPasswordTest).type("heslotest");
        return this;
    }

    passwordTestIsVisible() {
        cy.get(this.userPasswordTest).should('be.visible');
        return this;
    }

    typeFirstName(firstname) {
        cy.get(this.firstNameTest).type("Jana");
        return this;
    }

    firstNameTestIsVisible() {
        cy.get(this.firstNameTest).should('be.visible');
        return this;
    }

    typeLastName() {
        cy.get(this.lastNameTest).type("Nova");
        return this;
    }

    lastNameTestIsVisible() {
        cy.get(this.lastNameTest).should('be.visible');
        return this;
    }

    typeUserEmail() {
        cy.get(this.userEmailAdress).type("jana.nova@example.org");
        return this;
    }

    userEmailIsVisible() {
        cy.get(this.userEmailAdress).should('be.visible');
        return this;
    }

    selectLanguage() {
        cy.get(this.languageSelect).select("English");
        return this;
    }

    selectLanguageHaveText(expectedStatus) {
        cy.get(this.languageSelect).should('contain', expectedStatus);
        return this;
    }

    clickSaveButtonUser() {
        cy.get(this.saveButtonUser).click();
        return new UsersPage();
    }
    verifyFormValidity() {
        cy.get(this.usernameTest).should('have.value', '').should('not.be.empty');
        cy.get(this.userPasswordTest).should('have.value', '').should('not.be.empty');
        cy.get(this.firstNameTest).should('have.value', '').should('not.be.empty');
        cy.get(this.lastNameTest).should('have.value', '').should('not.be.empty');
        cy.get(this.userEmailAdress).should('have.value', '').should('not.be.empty');
    }
}
