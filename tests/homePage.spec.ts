import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';

test('Clica na bloclink ', async ({ page }) => {
    const homePage = new HomePage(page);

    await page.goto('https://demos.bellatrix.solutions/');

    // Clicar na bloglink Bellatrix
    await homePage.blogLink.dblclick();

    await expect(homePage.blogLink).toBeVisible();

    //Volta para a home page
    await homePage.homeLink.click();

    //Verifica se a home page foi carregada.
    await expect(homePage.homeLink).toBeVisible();
    
});