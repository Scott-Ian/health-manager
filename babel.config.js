module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      'module:react-native-dotenv'
    ],
  };
};

// module.exports = function(api) {
//   api.cache(true);
//   return {
//     presets: [
//       'babel-preset-expo',
//       'module:metro-react-native-babel-preset',
//       'module:react-native-dotenv'
//     ],
//   };
// };
