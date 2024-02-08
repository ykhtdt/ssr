import { Page } from './page.js';

export const generateHTML = (model) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Todo List</title>
    </head>
    <body>
      <div id="root">
        ${Page(model.items)}
      </div>
      <script src="./src/main.js" type="module"></script>
    </body>
  </html>
`