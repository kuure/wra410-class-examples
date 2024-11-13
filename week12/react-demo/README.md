This is a simple web app using React and Vite.

To get it up and running, open the folder in a terminal somehow - opening
the folder in VS Code then opening a new terminal is probably easiest.

From there, type `npm install` to install all of the required modoules
needed for the software to run.

Finally, type `npm run dev` to start a development environment. As you
edit the files, changes should be reloaded automatically when you save
any changes.


The file `index.html` creates an empty `<div>` with an `id` of `root` then
loads `./src/main.jsx` file.

The `main.jsx` file loads the contents of the App.jsx file, and inserts
that as the React root element inside of the empty root `<div>`

`App.jsx` loads two _components_, one named Header and another named Nav;
it also loads the `stylesheet.css` file, then creates an array of objects
named `navLinks`.
