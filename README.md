# Web scrapping using playwright

This script scrapes https://www.turismocity.com.ar/ website for cheap weekend flights to any destination.

### Install dependencies

```
npm install
npm init playwright@latest


```

### Modify index.js constants:
```
const departureCity = 'Buenos Aires';
const departureCityURL_Param = 'from=BUE';
const arraivalCity = 'Miami'
const arraivalCityURL_Param = 'vuelos-baratos-a-MIA-Miami_Intl';
const priceThreshold : number = 200.000

```

### Run the script

```
npm run start
npx playwright test 
```
