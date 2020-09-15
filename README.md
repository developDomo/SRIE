# SRIE

## Technology Stack

- Node.js
- Next.js
- PostgreSQL

## Prerequisites

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Git Flow](https://github.com/nvie/gitflow/wiki/Installation)
- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Project Structure

```
srie/
├── components/
│   ├── layout
│   |   ├── LayoutCompoment1.js
|   |   └── LayoutCompoment2.js
│   ├── page
│   |   ├── PageCompoment1.js
|   |   └── PageCompoment2.js
├── pages/
│   ├── api
│   |   ├── api1.js
|   |   └── api2.js
│   ├── route
│   |   ├── route1.js
|   |   └── route2.js
│   ├── ...
│   └── page.js
├── public/
│   ├── favicon.ico
│   └── ...
└── styles/
    ├── global.js
    └── theme.js
```

- **components**: components should be located here, grouped by page.
- **pages**: each page should be placed in here, and each is mapped to a correspondig route. For instance `/pages/users/index.js` is mapped to `/users`.
  - **api**: supporting api calls shoud be located here.
- **public**: folder for public resources.
- **styles**: folder for global styles. Component styles should be created in the component itself.

## Getting Started

First, clone this repository:

```bash
git clone git@github.com:developDomo/SRIE.git && cd SRIE
```

Second, initialize git flow, use all the default values:

```bash
git flow init
```

Third, download dependencies

```bash
npm install
# or
yarn install
```

Fourth, update the environment variables using your .env file, it should like this:

```bash
DB_DRIVER=pg
DB_HOST=<host>
DB_NAME=<db_name>
DB_USER=<db_user>
DB_PASS=<db_pass>
DB_PORT=<db_port>

API_URL=http://localhost:3000
```

Fifth, get the database environment up, by running the following command

```bash
docker-compose up
```

Alternatively, if you're not that cool, just add the srie db in your local postgres:

```$bash
sudo -u postgres psql
postgres=# create database srie;
postgres=# create user srie with encrypted password 'srie';
postgres=# grant all privileges on database srie to srie;
```

Sixth, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

## Database migrations

Any change to the database should be made using the `db-migrate` cli. To do it, use the following commands:

- `db-migrate create <name>`: creates a new migration. This will create 3 files, the migration itself, and 2 SQL scripts one for the up command and one for the down command. The migration changes should be placed on the up file, and the rollback commands on the down file. Migrations are located at `db/migrations` and sql scripts at `db/migrations/sqls`
- `db-migrate up`: Run pending migrations. if you specify the count parameter it would run only the specified number of migrations `--count 1`
- `db-migrate down`: Roolback the last migration.

## Translations

In order to support multiple languages on the site, we are using [next-i18next](https://github.com/isaachinman/next-i18next). Translation file are stored in json files under `public/static/locales/[language]`. And they should be stored by modules.

To add translation supprt to a page, import the required components:

```javascript
import { i18n, Link, withTranslation } from "../i18n";
```

As part of the getInitialProps return json include the namespacesRequired property indicating the array of namespaces needed.

```javascript
return {
  namespacesRequired: ["common", "..."],
  ...
};
```

And, set the propTypes for the t function

```javascript
Component.propTypes = {
  t: PropTypes.func.isRequired
};
```

To use a translated string, just use the follwing syntax:

```javascript
{t("key")}
```

And to change the language, you can use:

```javascript
onClick={() => i18n.changeLanguage("en")}
```

## Code Style

Code styling validations are automatically made by eslint before every commit on stashed files. If the issues are fixable by the tool, it will be fixed, re-added to the stashed files and procced with the commit.

If there are issues that require manual editing, the commit will fail until they are corrected.

To maually run the eslint, just run:

```bash
./node_modules/.bin/eslint <filename>
```

Or to run it over all the project:

```bash
./node_modules/.bin/eslint .
```

## Deploy on ZEIT Now

The easiest way to deploy your Next.js app is to use the [ZEIT Now Platform](https://zeit.co/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
