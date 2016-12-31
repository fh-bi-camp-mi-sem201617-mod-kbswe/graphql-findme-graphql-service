# find.me GraphQL Service

This project offers a GraphQL service to communicate with the database backend
of find.me.

To run this service you need a running MongoDB instance.

## Prerequisites

- [nodejs v6.0+](https://nodejs.org)
- [npm v3.0+](https://nodejs.org)

## Available npm scripts

| Script  | Description                                                                                                    |
|:--------|:---------------------------------------------------------------------------------------------------------------|
| `start` | Builds and starts a distribution.                                                                              |
| `build` | Builds a distribution.                                                                                         |
| `serve` | Starts a development variant of the project with file watching and online hot-replacement on HTTP port `8080`. |
| `lint`  | Runs `eslint` and checkes the source code quality.                                                             |
| `clean` | Cleans up the project directory.                                                                               |

## Start project in development mode

Start the development server as follows:

```bash
npm run serve
```

This runs the development server in watch mode with online hot replacing on
HTTP port `8080`.
This way the development server builds and updates the running instance on
each file change automatically,
so there is no need to restart the development server after making some changes.

## Build and run project

To start the project for production run the following command:

```bash
npm start
```

This starts a nodejs instance running an optimized code base
(minimize, uglify, code shrinking, etc.)
on HTTP port `8080`.

## Docker based full application stack

You can run the full application stack
(including database, GraphQL service, web frontend)
by using a prepared environment based on Docker.
This environment builds and runs everything is needed to build and run the whole
project with all dependencies and stuff.
For more information and instructions see the readme file of
[find.me Full Stack](https://github.com/kswe-2016-17/graphql-findme-full-stack)
repository.
