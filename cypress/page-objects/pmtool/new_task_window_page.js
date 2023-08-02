export class NewTaskWindowPage {
    constructor() {
        this.modalTitle = ".modal-title";
        this.nameInput = "div[data-testid='Name']>input";
        this.prioritySelect = 'div[data-testid="Priority"] select';
        this.statusSelect = 'div[data-testid="Status"] select';
        this.typeSelect = 'div[data-testid="Type"] select';
        this.saveButton = "button[type='submit']";
        this.progressBar = ".progress-bar";
    }

    waitForProgressBarVanish() {
        cy.get(this.progressBar).should("not.exist");
        return this;
    }

    selectTaskType(Type) {
        cy.get(this.typeSelect).select(Type);
        return this;
    }

    typeTaskName(taskName) {
        cy.get(this.nameInput).type(taskName);
        return this;
    }

    selectTaskStatus(Status) {
        cy.get(this.statusSelect).select(Status);
        return this;
    }

    selectTaskPriority(Priority) {
        cy.get(this.prioritySelect).select(Priority);
        return this;
    }

    titleIsVisible() {
        cy.get(this.modalTitle).should("be.visible");
        return this;
    }

    titleHasText(text) {
        cy.get(this.modalTitle).should("have.text", text);
        return this;
    }

    nameInputIsVisible() {
        cy.get(this.nameInput).should('be.visible');
        return this;
    }

    waitForSaveCompletion() {
        cy.get(this.saveButton).click();
        this.waitForProgressBarVanish(); // Wait for the progress bar to vanish after saving
        return this;
    }
}
