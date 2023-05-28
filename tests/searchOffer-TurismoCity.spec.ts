import { test } from '@playwright/test';

const departureCity = 'Buenos Aires';
const departureCityURL_Param = 'from=BUE';
const arraivalCity = 'Miami'
const arraivalCityURL_Param = 'vuelos-baratos-a-MIA-Miami_Intl';
const priceThreshold : number = 200.000
const convertPrice = priceThreshold.toFixed(3);
const CURRENCY_SYMBOL = '$';


test('test', async ({ page }) => {
  await page.goto(`https://www.turismocity.com.ar/${arraivalCityURL_Param}?${departureCityURL_Param}`);

 const months = page.locator('//*[@id="priceBarChart"]/ul[2]').locator('li');
 const monthsCount = await months.count();

 for(let i=0; i < monthsCount; i++){
    const currentCityMonthLocator = months.nth(i);
    const textContent = await currentCityMonthLocator.textContent();
    const price = Number(textContent.substring(textContent.indexOf(CURRENCY_SYMBOL) + 1));
    
    if (price < priceThreshold){
        console.log(`Se encontraron vuelos saliendo desde ${departureCity} con destino hacia ${arraivalCity} con un precio menor a ${convertPrice} en ${textContent}`)
    }
 }
});