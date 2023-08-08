import { HomePage } from "./home_page";

export class LoginPage {
    constructor() {
        this.pmtoolUrl = "http://tredgate.com/pmtool/";
        this.usernameInput = "#username";
        this.passwordInput = "#password";
        this.loginButton = ".btn";
        this.pageHeader = "h3.form-title";
        this.alertDiv = ".alert-danger";
        this.logoImg = "img";
    }

    passwordIsVisible() {
        cy.get(this.passwordInput).should("be.visible");
        return this;
    }

    passwordHasPlaceholder(placeholder) {
        cy.get(this.passwordInput).should("have.attr", "placeholder", placeholder);
        return this;
    }

    logoIsVisible() {
        cy.get(this.logoImg).should('be.visible');
        return this;
    }

    usernameHasPlaceholder(placeholder) {
        cy.get(this.usernameInput).should("have.attr", "placeholder", placeholder);
        return this;
    }

    usernameIsVisible() {
        cy.get(this.usernameInput).should("be.visible");
        return this;
    }

    openPmtool() {
        cy.visit(this.pmtoolUrl);
        return this;
    }

    pageHeaderHasText(headerText) {
        cy.get(this.pageHeader).should("have.text", headerText);
        return this;
    }

    alertNotExist() {
        cy.get(this.alertDiv).should("not.exist");
        return this;
    }

    typeAdminUserName() {
        const adminUserName = Cypress.env("adminUserName");
        cy.get(this.usernameInput).type(adminUserName);
        return this;
    }

    typeAdminPassword() {
        const adminPassword = Cypress.env("adminPassword");
        cy.get(this.passwordInput).type(adminPassword);
        return this;
    }

    clickLogin() {
        cy.get(this.loginButton).click();
        return new HomePage();
    }

    loginWithNewUserCredentials(username, password) {
        cy.get(this.usernameInput).type(username);
        cy.get(this.passwordInput).type(password);
        this.clickLogin();
        return new HomePage();
    }
}
