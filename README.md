# tmdip.co.uk

![Website online status](https://img.shields.io/website?down_color=red&down_message=Offline&up_color=green&up_message=Online&url=https%3A%2F%2Fwww.tmdip.co.uk)

## Development

### Setup

- `git clone https://github.com/jackdomleo7/tmdip.co.uk`
- `cd tmdip.co.uk`
- `npm i`
- Create a `.env` file in the root with the following variables (these are not committed to git):
  - `PRISMIC_ENDPOINT`
  - `PRISMIC_ACCESS_TOKEN`

### Scripts

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
