# ReactSmartInput

React component – an input with dropdown suggestion to build SQL-like queries. Uses PEG.js to parse and get expectations and errors. You can fork and import your own grammar. This is an initial version more flexibility and features are comming.

![](https://d1ro8r1rbfn3jf.cloudfront.net/ms_65202/Iv2nH8Yta1SN64ndIMsVF22lAjzuvx/screencast%2B2017-01-16%2B01-14-18.gif?Expires=1484604960&Signature=oLtYRhnJTgrbYZHn4Sjs24zONTTqiOHHkRic5S8V1nH0PecJD3DL3s8xY6JYOLuiRz1v17QowYqN-mbbdjFFdSK6zYKOvLwGBmMA8C1XH6EkxERUEC5GEtZvQJ5iqDFqrSzEIPstWZTys1kMa74T1VFR~d4MKQIcFz0Rxq4aB8F-jWMzBRsImRSYUzmlf72IpZzr8~E4wTcPskWdjjMjwzJQ8d-S24dp8-iOtjpnuyv8jY23FrfVla8UCxMzHLclJxJZmyN0Z1wT50CblS7fZlp7e1Y5NEHkgjkxhtwF0QX-UjU6noYkgndF5AJp8KAa7MXvinKvnS7JYy1OylEWnA__&Key-Pair-Id=APKAJHEJJBIZWFB73RSA)

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
