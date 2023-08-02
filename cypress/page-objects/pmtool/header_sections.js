import { LoginPage } from "./login_page";
import { MenuSection } from "./menu_sections";

export class HeaderSection extends MenuSection {

    constructor(path) {
        super(path);
        this.profileDropdown = "#user_dropdown";
        this.logoutAnchor = "#logout";
        this.photoHeader = ".user-photo-header";
        this.userNameText = ".username";
        this.notification = "#user_notifications_report";
    }

    clickProfile() {
        cy.get(this.profileDropdown).click();
        return this;
    }

    profileDropdownIsVisible() {
        cy.get(this.profileDropdown).should('be.visible');
        return this;
    }

    photoHeaderIsVisible() {
        cy.get(this.photoHeader).should('be.visible');
        return this;
    }

    userNameHasText() {
        cy.get(this.userNameText).should('contain.text', "Petr Fifka");
        return this;
    }

    notificationIsVisible() {
        cy.get(this.notification).should('be.visible');
        return this;
    }

    clickLogout() {
        cy.get(this.logoutAnchor).click();
        return new LoginPage();
    }
}
