import {test as base} from '@playwright/test';
import * as Pages from '../pages/pages';

type MyFixtures={
    homePage:Pages.HomePage;
    installationPage:Pages.InstallationPage;
}

const createTestFunction=(PageClass)=>async({page},use)=>{
    await use(new PageClass(page));
}

export const test=base.extend<MyFixtures>({
    homePage:createTestFunction(Pages.HomePage),
    installationPage:createTestFunction(Pages.InstallationPage)
})





