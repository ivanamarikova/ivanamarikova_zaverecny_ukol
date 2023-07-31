import { HomePage } from "./home_page";

export class LoginPage {
    constructor() {
        this.pmtoolUrl = "http://tredgate.com/pmtool/";
        this.usernameInput = "#username";
        this.passwordInput = "#password";
        this.typeNewUsername = "#username";
        this.typeNewPassword = "#password";
        this.loginButton = ".btn";
        this.pageHeader = "h3.form-title";
        this.alertDiv = ".alert-danger";
        this.logoImg = "img";

    }

    passwordIsVisible() {
        cy.get(this.passwordInput).should("be.visible");
        return this;
    };

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


    usernameHasValue(username) {
        cy.get(this.usernameInput).type(username).should("have.value", username);
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
        cy.get(this.usernameInput).type("fifka_petr");
        return this;
    }

    typeAdminPassword() {
        cy.get(this.passwordInput).type("Tredgate2023");
        return this;
    }

    clickLogin() {
        cy.get(this.loginButton).click();
        return new HomePage();
    }
    loginWithNewUserCredentials(username, password) {
        cy.get(this.typeNewUsername).type(username);
        cy.get(this.typeNewPassword).type(password);
        this.clickLogin();
        return new HomePage();
    }
}