import { ProjectsTasksPage } from "./projects_tasks_page";

export class NewProjectFormModal {
    constructor() {
        this.projectNameInput = 'div[data-testid="Name"] input';
        this.saveButton = 'button[type="submit"]';
        this.prioritySelect = 'div[data-testid="Priority"] select';
        this.statusSelect = 'div[data-testid="Status"] select';
        this.startDateInput = 'div[data-testid="Start Date"] input';
        this.descriptionIframe = ".cke_wysiwyg_frame";
        this.progressBar = ".progress-bar";
    }

    waitForProgressBarVanish() {
        cy.get(this.progressBar).should("not.exist");
        return this;
    }

    typeProjectName(projectName) {
        cy.get(this.projectNameInput).type(projectName);
        return this;
    }

    selectPriority() {
        cy.get(this.prioritySelect).select("Urgent");
        return this;
    }

    selectStatus() {
        cy.get(this.statusSelect).select("New");
        return this;
    }

    fillStartDate(startDate) {
        cy.get(this.startDateInput).type(startDate);
        return this;
    }

    clickSaveButton() {
        cy.get(this.saveButton).click();
        return new ProjectsTasksPage();
    }

    typeDescription(description) {
        cy.get(this.descriptionIframe).then(($iframe) => {
            const body = $iframe.contents().find("body");
            cy.wrap(body).as("iframe");
        });
        cy.get("@iframe").type(description);
        return this;
    }
}