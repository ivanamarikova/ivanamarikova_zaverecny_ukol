import { LoginPage } from "../../page-objects/pmtool/login_page";
import { NewTaskWindowPage } from "../../page-objects/pmtool/new_task_window_page";
import { ProjectsPage } from "../../page-objects/pmtool/projects_page";
import { ProjectsTasksPage } from "../../page-objects/pmtool/projects_tasks_page";
import { faker } from "@faker-js/faker";

import newProjectTaskDdt from "../../fixtures/new_project_task_ddt.json";
import { MenuSection } from "../../page-objects/pmtool/menu_sections";

describe("Data Driven Tests create project tasks", () => {
    let newTaskWindowPage;

    beforeEach(() => {
        const adminUserName = Cypress.env("adminUserName");
        const adminPassword = Cypress.env("adminPassword");

        new LoginPage()
            .openPmtool()
            .typeAdminUserName(adminUserName)
            .typeAdminPassword(adminPassword)
            .clickLogin();

        new MenuSection().clickProjects();

        new ProjectsPage().openFirstProjectDetail();

        new ProjectsTasksPage().clickAddTask();

        newTaskWindowPage = new NewTaskWindowPage();
    });

    newProjectTaskDdt.forEach((task) => {
        it(`DDT task: ${task.Name_prefix}`, () => {
            const task_name = `${task.Name_prefix}${faker.number.int({
                max: 99999,
            })}`;

            newTaskWindowPage
                .typeTaskName(task_name)
                .selectTaskType(task.Type)
                .selectTaskStatus(task.Status)
                .selectTaskPriority(task.Priority);

            newTaskWindowPage.waitForSaveCompletion();
            new ProjectsTasksPage()
                .clickProjectInfo()
                .descriptionHasText()
                .priorityHaveValue()
                .statusHaveValue();
        });
    });
});

