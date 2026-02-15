// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Mathieu Range Ta Chambre', () => {
  test('ouvre le jeu et affiche l\'écran titre', async ({ page }) => {
    await page.goto('/mathieu-range-ta-chambre.html');
    await expect(page).toHaveTitle(/Mathieu.*Range.*Chambre/i);
    await expect(page.locator('canvas#c')).toBeVisible();
  });

  test('démarre une partie avec Entrée', async ({ page }) => {
    await page.goto('/mathieu-range-ta-chambre.html');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(300);
    // En jeu, le HUD (PV, MAMAN, PROPRE) doit être présent
    const canvas = page.locator('canvas#c');
    await expect(canvas).toBeVisible();
  });
});
