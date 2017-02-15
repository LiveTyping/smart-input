# ReactSmartInput

React component – an input with dropdown suggestion to build SQL-like queries. Uses PEG.js to parse and get expectations and errors. You can fork and import your own grammar. This is an initial version more flexibility and features are comming.

![](http://git.ltst.su/d.skripkin/smart-input/raw/master/example.gif)

## Installation

You have to download it manually or install from GitHub. NPM release is comming soon.

## Usage

```js
import SmartInput from 'react-smart-input'
```
then
```html
<SmartInput applyKey="Tab" suggestions={{ identifier: ['id', 'name', 'age'] }} placeholder="SQL-like query" errors={true}/>
```
You can see usage example at `/example`.

## Props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>suggestions</td>
          <td>Object</td>
          <td>–</td>
          <td>Object to describe suggestions that are not in PEG. `{ identifier: ['id', 'name', 'age'] }`</td>
        </tr>
        <tr>
          <td>applyKey</td>
          <td>String</td>
          <td>Tab</td>
          <td>Button to apply selected suggestion from dropdown</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>String</td>
          <td></td>
          <td>Placeholder for input</td>
        </tr>
        <tr>
          <td>errors</td>
          <td>Boolen</td>
          <td>false</td>
          <td>Toggles errors block</td>
        </tr>
    </tbody>
</table>

## Development

Install dependencies:

```
$ npm install
```

Run the example app at [http://localhost:8080](http://localhost:8080):

```
$ npm run example
```

No tests yet, but to run tests in Chrome using [karma](https://github.com/karma-runner/karma):

```
$ npm test
```

Run tests and watch for code changes:

```
$ npm test -- --watch
```

Lint `src` and `test` files:

```
$ npm run lint
```

Generate UMD output in the `lib` folder:

```
$ npm run build
```
