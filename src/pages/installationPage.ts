import {Page, Locator, expect} from '@playwright/test';
export class InstallationPage{
    private readonly page:Page;
    constructor(page:Page)
    {
        this.page=page;
    }

    async verifyLinks(){
        await expect(this.page.getByText('How to install Playwright')).toBeVisible();
        await expect(this.page.getByText('How to run the example test')).toBeVisible();
    }
}