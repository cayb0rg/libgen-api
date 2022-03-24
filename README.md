# Library Genesis API

A basic API endpoint for Library Genesis.

# Installation

```
git clone git@github.com:cayb0rg/libgen-api.git
cd libgen-api
npm install
```

# Getting Started

```
cd libgen-api
npm start
```

# HTTP Requests

GET http://localhost:8080/api/

# Query Parameters

| Parameter  | Description | Options | Required | Default |
| ---------- | ----------- | ------- | -------- | ------- |
| req  | The query string  | Anything | true | None |
| fields  | The field to search in  | title<br/>author<br/>series<br/>periodical<br/>publisher<br/>year<br/>identifier<br/>md5<br/>extension<br/>def | false | title, author, md5 |
| lg_topic | The genre to search in | fiction<br/>nonfiction | false | None |
| sort | The field to sort by | See fields. | false | None |
| sortmode | Sort results ascending or descending | ASC<br/>DESC | false | DESC |

# Example
http://localhost:8080/api/?req=universe&fields=Title,Author&sort=author&sortmode=DESC

![Screen Shot 2022-03-24 at 1 15 47 PM](https://user-images.githubusercontent.com/46247315/159973149-9745e477-9925-456c-9124-f8d00151934c.png)

