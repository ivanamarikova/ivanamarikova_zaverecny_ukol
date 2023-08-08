import { HeaderSection } from "./header_sections";

export class UsersPage extends HeaderSection {
    constructor() {
        super("module=items/items&path=1");
        this.firstRow = "tr.listing-table-tr[test-id$='project_id_1']";
        this.fieldTypeActionButtons = "td.fieldtype_action.field-1-td.nowrap";
        this.searchButton = "button[test_id='search_button']";
        this.footerInner = ".footer-inner"
        this.pageTitle = ".page-title";
        this.actionHeader = "th[test_id='Action']";
        this.id = "th[test_id='ID']";
        this.accessgroup = "th[test_id='Access Group']";
        this.appliedFilters = ".portlet-title";
        this.appliedFiltersBody = ".portlet-body";
        this.withSelectedDropdown = "button[test_id='with_selected_dropdown']";
        this.importButton = "a[title='Import']";
        this.searchBar = ".input-group.input-medium";
        this.username = "th[test_id='Username']";
        this.FirstName = "th[test_id='First Name']";
        this.LastName = "th[test_id='Last Name']";
        this.userEmail = "th[test_id='User Email']";
        this.UserStatus = "th[test_id='User Status']";
        this.copyrigth = ".footer-inner";
        this.saveButtonUser = 'button[type="submit"]';
    }

    fieldTypeActionButtonsIsVisible() {
        cy.get(this.fieldTypeActionButtons).should('be.visible');
        return this;
    }

    FirstRowIsVisible() {
        cy.get(this.firstRow).should('be.visible');
        return this;
    }

    footerInnerIsVisible() {
        cy.get(this.footerInner).should('be.visible');
        return this;
    }

    PageTitleHasText() {
        cy.get(this.pageTitle).should('contain.text', "Users");
        return this;
    }

    ActionHeaderIsVisible() {
        cy.get(this.actionHeader).should('be.visible');
        return this;
    }

    idIsVisible() {
        cy.get(this.id).should('be.visible');
        return this;
    }

    accessGroupIsVisible() {
        cy.get(this.accessgroup).should('be.visible');
        return this;
    }

    usernameIsVisible() {
        cy.get(this.username).should('be.visible');
        return this;
    }

    FirstNameIsVisible() {
        cy.get(this.FirstName).should('be.visible');
        return this;
    }

    LastNameIsVisible() {
        cy.get(this.LastName).should('be.visible');
        return this;
    }

    UserEmailIsVisible() {
        cy.get(this.userEmail).should('be.visible');
        return this;
    }

    UserStatusIsVisible() {
        cy.get(this.UserStatus).should('be.visible');
        return this;
    }

    BrandIsVisible() {
        cy.get(this.brand).should('be.visible');
        return this;
    }

    BrandHasText() {
        cy.get(this.brand).should('contain.text', "TEG Project Management");
        return this;
    }

    LogoIsVisible() {
        cy.get(this.logo).should('be.visible');
        return this;
    }

    SideBarIsVisible() {
        cy.get(this.sidebar).should('be.visible');
        return this;
    }

    appliedFiltersIsVisible() {
        cy.get(this.appliedFilters).should('be.visible');
        return this;
    }

    appliedFiltersBodyIsVisible() {
        cy.get(this.appliedFiltersBody).should('be.visible');
        return this;
    }

    withSelectedDropdownIsVisible() {
        cy.get(this.withSelectedDropdown).should('be.visible');
        return this;
    }

    importButtonIsVisible() {
        cy.get(this.importButton).should('be.visible');
        return this;
    }

    searchBarIsVisible() {
        cy.get(this.searchBar).should('be.visible');
        return this;
    }

    searchButtonIsVisible() {
        cy.get(this.searchButton).should('be.visible');
        return this;
    }

    copyrightIsVisible() {
        cy.get(this.copyrigth).should('be.visible');
    }

    SaveButtonIsVisible() {
        cy.get(this.saveButtonUser).scrollIntoView().should('be.visible');
        return this;
    }
}
