'use strict';

// underscore_case
//   first_name
// next_Variable
//    Calculate_AGE
// arrived_flight

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// РЕШЕНИЕ НА КУРСЕ

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const lines = text.split('\n');
  // console.log(lines);
  for (const line of lines) {
    const [firstWord, secondWord] = line.toLowerCase().trim().split('_');
    // console.log(firstWord, secondWord);
    const output = `${firstWord}${secondWord.replace(
      secondWord[0],
      secondWord[0].toLocaleUpperCase()
    )}`;
    console.log(output);
  }
});

// МОЁ РЕШЕНИЕ

// const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//   const enterText = document.querySelector('textarea').value;
//   let textArr = enterText.split('\n');
//   for (const text of textArr) {
//     let camalCase = text.toLowerCase().trim().split('_');
//     console.log(camalCase);
//     if (camalCase.length === 2) {
//       let camalCaseWord = camalCase[1];
//       camalCaseWord = camalCaseWord[0].toUpperCase() + camalCaseWord.slice(1);
//       console.log(String(camalCase[0] + camalCaseWord));
//     } else {
//       console.log('This function only for two-word underscore_case variable');
//     }
//   }
// });
