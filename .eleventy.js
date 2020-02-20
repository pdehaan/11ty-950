module.exports = function(eleventyConfig) {
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true
  });
};

// module.exports = {
//   dir: {
//     input: "."
//   }
// };
