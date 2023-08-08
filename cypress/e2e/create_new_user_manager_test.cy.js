import { HeaderSection } from "../page-objects/pmtool/header_sections";
import { LoginPage } from "../page-objects/pmtool/login_page";
import { MenuSection } from "../page-objects/pmtool/menu_sections";
import { NewProjectFormModal } from "../page-objects/pmtool/new_project_form_modal";
import { NewUserFormModal } from "../page-objects/pmtool/new_user_form_modal";
import { ProjectsTasksPage } from "../page-objects/pmtool/projects_tasks_page";
import { faker } from "@faker-js/faker";
import moment from "moment";
import newUserDDT from "../fixtures/new_user_ddt.json";
import { ProjectsPage } from "../page-objects/pmtool/projects_page";

describe("Create new user tests - role manager", () => {
    beforeEach(() => {
        const adminUserName = Cypress.env("adminUserName");
        const adminPassword = Cypress.env("adminPassword");

        new LoginPage()
            .openPmtool()
            .typeAdminUserName(adminUserName)
            .typeAdminPassword(adminPassword)
            .clickLogin();

        new MenuSection().clickUsers();
    });

    let newUserCredentials;

    newUserDDT.forEach((user) => {
        it(`creates a new user with role "${user.role}" and logs in`, () => {
            const username = `${user.name_prefix}${faker.datatype.number({ max: 99999 })}`;
            const exampleEmail = faker.internet.exampleEmail();
            new NewUserFormModal()
                .clickAddUserButton()
                .waitForProgressBarVanish()
                .selectUserStatus()
                .selectAccesGroup(user.role)
                .typeUsername(username)
                .typePassword(user.password)
                .typeFirstName()
                .typeLastName()
                .typeUserEmail(exampleEmail)
                .selectLanguage("English")
                .clickSaveButtonUser();

            newUserCredentials = { username, password: user.password };

            new HeaderSection().clickProfile().clickLogout();

            new LoginPage().loginWithNewUserCredentials(newUserCredentials.username, newUserCredentials.password);

            new ProjectsPage().clickProjects();

            new ProjectsPage().clickAddNewProject();

            const start_date = getStartDate(user.start_date);

            new NewProjectFormModal()
                .waitForProgressBarVanish()
                .selectPriority()
                .selectStatus()
                .typeProjectName()
                .fillStartDate(start_date)
                .typeDescription()
                .clickSaveButton();

            new ProjectsTasksPage()
                .clickProjectInfo()
                .descriptionHasText()
                .priorityHaveValue()
                .statusHaveValue();
        });

        function getStartDate(start_date) {
            switch (start_date) {
                case "today":
                    return moment().format("YYYY-MM-DD");
                default:
                    throw new Error("Invalid start date: " + start_date);
            }
        }
    });
});
