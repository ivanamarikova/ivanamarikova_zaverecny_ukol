import { HeaderSection } from "./header_sections";
import { NewProjectFormModal } from "./new_project_form_modal";
import { ProjectsTasksPage } from "./projects_tasks_page";

export class ProjectsPage extends HeaderSection {
    constructor() {
        super("module=items/items&path=21");
        this.pageTitle = ".page-title";
        this.firstProjectNameAnchorXpath = "//tr[contains(@test-id, 'project_id')][1]//td[@test_id='Name']//a";
        this.addNewProjectButton = "button[test_id='Add Project']";
    }

    openFirstProjectDetail() {
        cy.xpath(this.firstProjectNameAnchorXpath).click();
        return new ProjectsTasksPage();
    }

    clickAddNewProject() {
        cy.get(this.addNewProjectButton).click();
        return new NewProjectFormModal();
    }
}