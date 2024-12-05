React yksikkötestien käyttämien kirjastojen asentaminen:

npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom @babel/preset-env @babel/preset-react


Muista lisätä myös .babelrc tiedosto projektin juurikansioon samalla tavalla ja samalla sisällöllä kuin tässä koodimallissa

Huomio myös Package.json tiedostoon Scripts kohtaan tehdyt määritykset:

    "test": "jest",

  ja alempana kohta "jest" ja sitä seuraavat määritykset.

  Testit ajetaan komennolla: npm test tai npm run test

  UUSI 2024:
  
  npm install jest-environment-jsdom --save-dev (ehkä tarvitaan)
  
  npm install jest@latest jest-environment-jsdom@latest --save-dev

---------------------------------------------------------------------

