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

    waitForProgressBarVanish() {
        cy.get(this.progressBar).should("not.exist");
        return this;
    }

    selectUserStatus() {
        cy.get(this.userStatusSelect).select("Active");
        return this;
    }

    selectAccesGroup(role) {
        cy.get(this.accesGroupSelect).select(role);
        return this;
    }

    typeUsername(username) {
        cy.get(this.usernameTest).type(username);
        return this;
    }

    typePassword() {
        cy.get(this.userPasswordTest).type("heslo45");
        return this;
    }

    typeFirstName(firstname) {
        cy.get(this.firstNameTest).type("Ivana");
        return this;
    }

    typeLastName(lastname) {
        cy.get(this.lastNameTest).type("Marikova");
        return this;
    }

    typeUserEmail(email) {
        cy.get(this.userEmailAdress).type(email);
        return this;
    }

    selectLanguage() {
        cy.get(this.languageSelect).select("English");
        return this;
    }

    clickSaveButtonUser() {
        cy.get(this.saveButtonUser).click();
        return new UsersPage();
    }
}



