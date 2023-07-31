import { LoginPage } from "./login_page";
import { MenuSection } from "./menu_sections";

export class HeaderSection extends MenuSection {

    constructor(path) {
        super(path);
        this.profileDropdown = "#user_dropdown";
        this.logoutAnchor = "#logout";
    }

    clickProfile() {
        cy.get(this.profileDropdown).click();
        return this;
    }

    clickLogout() {
        cy.get(this.logoutAnchor).click();
        return new LoginPage();
    }
}
