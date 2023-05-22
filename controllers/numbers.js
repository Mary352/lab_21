const fs = require('fs').promises;
const path = require('path');

// let numbersArr = require('../model/numbers.json') || [];
let message = {
   error: ''
}

const saveNumbersArrToFile = async (numbersArrParam) => {
   const dirUpperControllersName = path.dirname(__dirname);
   // console.log(path.dirname(__dirname));
   // console.log(path.join(dirUpperControllersName, 'model', 'numbers.json'));
   const pathToFile = path.join(dirUpperControllersName, 'model', 'numbers.json');
   const json = JSON.stringify(numbersArrParam)
   await fs.writeFile(pathToFile, json, 'utf8', () => { })
}

const getNumbersArrFromFile = async () => {
   const dirUpperControllersName = path.dirname(__dirname);
   const pathToFile = path.join(dirUpperControllersName, 'model', 'numbers.json');
   const numbersArr = await fs.readFile(pathToFile, 'utf8');
   console.log("🚀 ~ file: numbers.js:22 ~ getNumbersArrFromFile ~ numbersArr:", numbersArr)
   // const arr = numbersArr.map(elem => JSON.)
   return JSON.parse(numbersArr)
}

module.exports = {
   getFormGet: async (req, res) => {
      const btnState = {
         enabled: true,
         disabled: false
      }

      // const pathToFile = path.join(dirUpperControllersName, 'model', 'numbers.json');
      const numbersArr = await getNumbersArrFromFile();

      console.log("🚀 ~ file: numbers.js:36 ~ getFormGet: ~ numbersArr:", numbersArr)
      // saveNumbersArrToFile(numbersArr)

      res.render('get.hbs', { numbers: numbersArr, btnState: btnState })
   },

   getFormAdd: async (req, res) => {
      const btnState = {
         enabled: false,
         disabled: true
      }

      const numbersArr = await getNumbersArrFromFile();
      res.render('add.hbs', {
         numbers: numbersArr, btnState: btnState, helpers: {
            refuse: () => "window.location.href = '/'"
         }
      })
   },

   getFormUpdate: async (req, res) => {
      // console.log(req.query.id)
      const numbersArr = await getNumbersArrFromFile();
      const recordForInput = numbersArr.find(number => String(number.id) === req.query.id)
      // console.log(recordForInput);
      const btnState = {
         enabled: false,
         disabled: true
      }

      res.render('update.hbs', {
         numbers: numbersArr, recordForInput: recordForInput, btnState: btnState, helpers: {
            refuse: () => "window.location.href = '/'"
         }
      })
   },

   postRecord: async (req, res) => {
      const numbersArr = await getNumbersArrFromFile();

      if (req.body.name && req.body.number) {


         const arrSortedCopy = [...numbersArr];
         arrSortedCopy.sort((a, b) => a.id > b.id ? -1 : 1);
         const maxId = arrSortedCopy[0].id;

         const newNumber = {
            id: maxId + 1,
            name: req.body.name,
            number: req.body.number
         }
         numbersArr.push(newNumber)
         saveNumbersArrToFile(numbersArr)

         // console.log(arrSortedCopy[0].id);

         // console.log(req.body);

         const btnState = {
            enabled: true,
            disabled: false
         }

         res.render('get.hbs', { numbers: numbersArr, btnState: btnState })
      }
      else {

         const btnState = {
            enabled: false,
            disabled: true
         }

         res.render('add.hbs', {
            numbers: numbersArr, btnState: btnState, helpers: {
               refuse: () => "window.location.href = '/'"
            }
         })
      }


   },

   putRecord: async (req, res) => {
      console.log(req.body);
      const numbersArr = await getNumbersArrFromFile();
      if (req.body.name && req.body.number) {
         const btnState = {
            enabled: true,
            disabled: false
         }

         const recordToUpdate = numbersArr.find(number => String(number.id) === req.body.id);
         // console.log(req.body.name);
         // console.log(req.body.number);
         // console.log(recordToUpdate.name);
         // console.log(recordToUpdate.number);
         recordToUpdate.name = req.body.name;
         recordToUpdate.number = req.body.number;

         saveNumbersArrToFile(numbersArr);

         res.render('get.hbs', { numbers: numbersArr, btnState: btnState })
      }
      else {
         const btnState = {
            enabled: false,
            disabled: true
         }

         res.render('update.hbs', {
            numbers: numbersArr, btnState: btnState, helpers: {
               refuse: () => "window.location.href = '/'"
            }
         })
      }

   },

   deleteRecord: async (req, res) => {
      console.log('req.body', req.body);
      const numbersArr = await getNumbersArrFromFile();

      const numbersArrWithoutDeleted = numbersArr.filter(number => String(number.id) !== req.body.id);

      saveNumbersArrToFile(numbersArrWithoutDeleted);

      const btnState = {
         enabled: true,
         disabled: false
      }

      res.render('get.hbs', { numbers: numbersArrWithoutDeleted, btnState: btnState })

   },
}