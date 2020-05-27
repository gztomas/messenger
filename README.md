# Messenger

[![CircleCI](https://circleci.com/gh/gztomas/messenger.svg?style=shield&circle-token=53adf011fb6eaa26ca2182408630f436ccda8715)](https://circleci.com/gh/gztomas/messenger)

This is a POC for simple messenger font-end app.

![Demo Animation](demo.gif)

It uses React, Redux, Next.JS and Ant Design.

## Install

Clone the repo and install the app dependencies with

```sh
git clone git@github.com:gztomas/messenger.git
cd messenger
npm install
```

You can then start the server locally with the following command

```sh
npm run build
npm start
```

Then just open your browser at <http://localhost:3000>
For demo purposes, you will see a split screen app.

## Development

A webpack-based dev environment which supports hot module replacement can be started with

```sh
npm run dev
```

### Tests

Tests are missing for the most cases, but you can check the [contact info component](https://github.com/gztomas/messenger/tree/master/src/components/contact-info) for an example of a tested component.

They are being triggered by the CI build.

For running them locally just do

```sh
npm test
```
