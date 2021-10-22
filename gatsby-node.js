exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;
  const express = require('express')
  exports.onCreateDevServer=({app})=>{
      app.use(express.static('public'))
  }
  if (page.path.match(/sign|reset|coming/)) {
    page.context.layout = "bare";
    createPage(page);
  }
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

