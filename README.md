1 - npm init -y

2 - Install Rollup and Babel (optional)

npm install --save-dev rollup rollup-plugin-terser

🧪 Optional: Babel Support (if needed)
If you want to support older browsers like IE11 or Safari 10, you can enable Babel.
1. Install Babel + plugin

npm install --save-dev @rollup/plugin-babel @babel/core @babel/preset-env

2. Add .babelrc

{
  "presets": ["@babel/preset-env"]
}

3. Update rollup.config.js

import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/mgs-datatable.min.js',
    format: 'iife',
    name: 'mgsDataTable',
  },
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    terser()
  ]
};


3️⃣ Project Structure

your-project/
├── src/
│   └── index.js       <-- Your mgsDataTable code goes here
├── dist/
│   └── (built files will go here)
├── rollup.config.js
├── package.json
└── README.md

4️⃣ Move Your Code to src/index.js

// src/index.js

function mgsDataTable(config) {
  // your full logic here...
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Export globally for UMD/IIFE
window.mgsDataTable = mgsDataTable;

// If using modules
export { mgsDataTable };


✅ This allows your function to be:

Used as a global function (window.mgsDataTable) for browsers

Exported if someone uses import { mgsDataTable }


5️⃣ Create Rollup Config: rollup.config.js


// rollup.config.js
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js', // entry point
  output: {
    file: 'dist/mgs-datatable.min.js', // output file
    format: 'iife', // or 'umd' if you prefer
    name: 'mgsDataTable', // global variable name
  },
  plugins: [
    terser() // minify
  ]
};


💡 You can change format: 'iife' to 'umd' if you want UMD compatibility (for both browser & Node). IIFE is more browser-focused.


6️⃣ Add Scripts to package.json

{
  "name": "mgstbl",
  "version": "1.0.4",
  "description": "js datatable",
  "main": "dist/mgstbl.min.js",
  "browser": "dist/mgstbl.min.js",
  "type": "module",
  "scripts": {
    "build": "rollup -c"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Mangeshwar10/mgstbl.git"
  },
  "keywords": [
    "mgstbl",
    "datatable",
    "table",
    "javascript",
    "pagination",
    "sorting",
    "browser",
    "UMD"
  ],
  "author": "Mangesh",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/Mangeshwar10/mgstbl/issues"
  },
  "homepage": "https://github.com/Mangeshwar10/mgstbl#readme",
  "devDependencies": {
    "@babel/core": "^7.28.0",
    "@babel/preset-env": "^7.28.0",
    "@rollup/plugin-babel": "^6.0.4",
    "rollup": "^4.46.2",
    "rollup-plugin-terser": "^7.0.2"
  }
}

7️⃣ Build the Project
Run the build command:

npm run build

✅ Output:

You should now have a dist/mgs-datatable.min.js file, which can be used like this:

8️⃣ Use in HTML

<!DOCTYPE html>
<html>
<head>
  <title>mgsDataTable Test</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <script src="https://cdn.jsdelivr.net/npm/mgstbl@1.0.4/dist/mgstbl.min.js"></script>
</head>
<body>
  <table id="myTable"></table>

  <script>
    mgsDataTable({
      target: '#myTable',
      url: '/api/data',
      methodType: 'post',
      data: { token: 'your-token' },
      page: 1,
      limit: 10
    });
  </script>
</body>
</html>


✅ Summary

Step	Action
1	Write your code in src/index.js
2	Expose your function to window
3	Use Rollup to build an IIFE/UMD version
4	Run npm run build
5	Use it via <script src="..."> in any HTML page

