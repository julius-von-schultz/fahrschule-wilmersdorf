# Installations Guide

## Prerequisites

If you have Node.js not yet installed, please install Node.js first. There an installation guide available here
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

You can check your current node-version using the command:

```bash
node -v
```

You can update your node version using

```bash
nvm use 20.18
```

You will also need a node package manager (npm). Please make sure this is installed as well. For that you can use the command

```bash
npm -v
```

## Recommended Node Version

20.18

## .env setup

In case you do not have a .env file yet, you can duplicate the .env.template file and remove the ending .template

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Manual for Prof. Zhang

Once you start the application, you will be redirected to the start page. In the header, you can select your preferred language.

To explore the portal, you can use the navigation in the header and footer. Some pages already contain content, some do not.
