React yksikkötestien käyttämien kirjastojen asentaminen:

npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom @babel/preset-env @babel/preset-react

Muista lisätä myös .babelrc tiedosto projektin juurikansioon samalla tavalla ja samalla sisällöllä kuin tässä koodimallissa

Huomio myös Package.json tiedostoon Scripts kohtaan tehdyt määritykset:

"test": "jest",
ja alempana kohta "jest" ja sitä seuraavat määritykset.

Testit ajetaan komennolla: npm test tai npm run test

---------------------------------------------------------------------
----------------------------------------------------------------------

Cypress e2e testikirjaston asennuskomento:
npm install -save-dev cypress
------------------------------------------------------------------
Package.json tiedostoon scripteihin lisätään:
"cypress:open": "cypress open"
-------------------------------------------------------------------
Seuraavaksi testi ajetaan komennolla: npm run cypress:open

Cypressin testiselain avautuu ja muokataan projektin tiedostot cypress kansion alla kuten tässä malliprojektissa ja videoilla esitellyllä tavalla.
