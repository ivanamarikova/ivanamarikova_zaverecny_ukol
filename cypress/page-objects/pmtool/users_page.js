import { HeaderSection } from "./header_sections";

export class UsersPage extends HeaderSection {
    constructor() {
        super("module=items/items&path=1");
        this.pageTitle = ".page-title";
        this.actionHeader = "th[test_id='Action']"
        cy.get(this.pageTitle).should('contain.text', "Users");
        cy.get(this.actionHeader).should('be.visible');
    }
}