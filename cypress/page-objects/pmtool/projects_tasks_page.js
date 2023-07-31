import { HeaderSection } from "./header_sections";
import { NewTaskWindowPage } from "./new_task_window_page";

export class ProjectsTasksPage extends HeaderSection {
    constructor(projectId = "") {
        super(`module=items/items&path=21-${projectId}/22`);
        this.addNewTaskButton = "button[test_id='Add Task']";
        this.projectInfoAnchor = "a[class='navbar-brand ']";
        this.descriptionForm = ".content_box_content.fieldtype_textarea_wysiwyg";
        this.priority = ".form-group.form-group-156";
        this.status = ".form-group.form-group-157";
    }

    clickAddTask() {
        cy.get(this.addNewTaskButton).click();
        return new NewTaskWindowPage();
    }

    clickProjectInfo() {
        cy.get(this.projectInfoAnchor, { timeout: 10000 }).should('be.visible').click();
        return new ProjectsTasksPage();
    }


    descriptionHasText(text234) {
        cy.get(this.descriptionForm).should("contain.text", "text 234");
        return this;
    }

    priorityHaveValue(Urgent) {
        cy.get(this.priority).should("contain.text", "Urgent");
        return this;
    }

    statusHaveValue(New) {
        cy.get(this.status).should("contain.text", "New");
        return this;
    }
}