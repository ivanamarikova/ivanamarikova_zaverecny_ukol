import { UsersPage } from "./users_page";

export class NewUserFormModal {
    constructor() {
        this.addUserButton = "button[test_id='Add User']";
        this.progressBar = ".progress-bar";
        this.userStatusSelect = 'div[data-testid="User Status"] select';
        this.accesGroupSelect = 'div[data-testid="Access Group"] select';
        this.usernameTest = "#fields_12";
        this.usernameRequired = "label[for='fields_12'] span[class='required-label']";
        this.passwordRequired = "label[for='password'] span[class='required-label']";
        this.userPasswordTest = "#password";
        this.firstNameTest = "#fields_7";
        this.firstNameRequired = "label[for='fields_7'] span[class='required-label']";
        this.lastNameTest = "#fields_8";
        this.lastNameRequired = "label[for='fields_8'] span[class='required-label']";
        this.userEmailAdress = "#fields_9";
        this.userEmailRequired = "label[for='fields_9'] span[class='required-label']";
        this.languageSelect = 'div[data-testid="Language"] select';
        this.saveButtonUser = 'button[type="submit"]';
    }

    userNameRequiredIsVisible() {
        cy.get(this.usernameRequired).should('be.visible');
        return this;
    }

    passwordRequiredIsVisible() {
        cy.get(this.passwordRequired).should('be.visible');
        return this;
    }

    firstNameRequiredIsVisible() {
        cy.get(this.firstNameRequired).should('be.visible');
        return this;
    }

    lastNameRequiredIsVisible() {
        cy.get(this.lastNameRequired).should('be.visible');
        return this;
    }

    userEmailRequiredIsVible() {
        cy.get(this.userEmailRequired).should('be.visible');
        return this;
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

    selectAccesGroup(role) {
        cy.get(this.accesGroupSelect).select(role);
        return this;
    }

    AccessGroupHaveText(expectedRole) {
        cy.get(this.accesGroupSelect).should('contain', expectedRole);
        return this;
    }

    typeUsername(username) {
        cy.get(this.usernameTest).type(username);
        return this;
    }

    UsernameIsVisible() {
        cy.get(this.usernameTest).should('be.visible');
        return this;
    }

    typePassword(password) {
        cy.get(this.userPasswordTest).type(password);
        return this;
    }

    passwordTestIsVisible() {
        cy.get(this.userPasswordTest).should('be.visible');
        return this;
    }

    typeFirstName(firstname) {
        cy.get(this.firstNameTest).type("Ivana");
        return this;
    }

    firstNameTestIsVisible() {
        cy.get(this.firstNameTest).should('be.visible');
        return this;
    }

    typeLastName(lastname) {
        cy.get(this.lastNameTest).type("Marikova");
        return this;
    }

    lastNameTestIsVisible() {
        cy.get(this.lastNameTest).should('be.visible');
        return this;
    }

    typeUserEmail(email) {
        cy.get(this.userEmailAdress).type(email);
        return this;
    }

    userEmailIsVisible() {
        cy.get(this.userEmailAdress).should('be.visible');
        return this;
    }

    selectLanguage(language) {
        cy.get(this.languageSelect).select("English");
        return this;
    }

    selectLanguageHasText(expectedLanguage) {
        cy.get(this.languageSelect).should('contain', expectedLanguage);
        return this;
    }

    clickSaveButtonUser() {
        cy.get(this.saveButtonUser).click();
        return new UsersPage();
    }
}

