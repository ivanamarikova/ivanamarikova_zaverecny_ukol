import { BasePage } from "./base_page";

export class MenuSection extends BasePage {
    constructor(path) {
        super(path);
        this.dashboardAnchor = "#dashboard>a";
        this.projectsAnchor = "#Projects>a";
        this.usersAnchor = "#Users>a>i.fa-user";
    }

    clickDashboard() {
        const { HomePage } = require("./home_page");
        cy.get(this.dashboardAnchor).click();
        return new HomePage();
    }

    clickProjects() {
        const { ProjectsPage } = require("./projects_page");
        cy.get(this.projectsAnchor).click();
        return new ProjectsPage();
    }

    clickUsers() {
        const { UsersPage } = require("./users_page");
        cy.get(this.usersAnchor).click();
        return new UsersPage();
    }
}