## Resume Builder

Generates a nice-looking resume.

Reads from a JSON file and runs it through a [pug](https://pugjs.org/api/getting-started.html) template to generate an html resume.

---
To run app:
1. run `npm install` then `npm start`
1. visit `http://localhost:3000/`
1. create a new file `data.json` and populate it with real data in the same format as `data.sample.json`
1. in `index.js`, update the `data.sample.json` reference to point to the new file


---
Integrated pug into webpack with the help of [this](https://itnext.io/webpack-4-write-pug-templates-c24e5ea07317) tutorial.