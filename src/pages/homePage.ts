import {Page, Locator, expect} from '@playwright/test';
export class HomePage{
    private readonly page:Page;
    private readonly btn_getStarted:Locator;
    constructor(page:Page)
    {
        this.page=page;
        this.btn_getStarted=this.page.getByText('Get started')
    }

    async gotoHomePage()
    {
        await this.page.goto('https://playwright.dev/');
        await expect(this.page).toHaveTitle(/Playwright/);

    }

    async clickGetStarted(){
        await this.btn_getStarted.click();
        await expect(this.page).toHaveTitle('Installation | Playwright');

    }



}