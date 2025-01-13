import ThemeColors from '../theme/themeColors';

function generateRandomHexColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
  return randomColor;
}

// Kullanımı
const randomHexColor = generateRandomHexColor();
console.log(randomHexColor); // Örneğin: #1a2b3c

export {generateRandomHexColor};

//!  Rastgele renk üretmek yerine switch case ile renkte yakalayabilirsin
// const getRandomColor = index => {
//   switch (index % 5) {
//     case 0:
//       return ThemeColors.RED;
//     case 1:
//       return ThemeColors.WHITE;
//     case 2:
//       return ThemeColors.WHITE;
//     case 3:
//       return ThemeColors.WHITE;
//     case 4:
//       return ThemeColors.WHITE;
//     default:
//       return ThemeColors.WHITE;
//   }
// };
