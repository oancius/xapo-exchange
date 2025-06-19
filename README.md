#  Xapo Exchange App

---

##  Tech Stack

-  React 18 + TypeScript
-  Vite (blazing-fast bundler)
-  Formik (form state & validation)
-  Yup (validation schema)
-  Styled-components
-  GitHub Pages for deployment

---

##  Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/oancius/xapo-exchange.git
cd xapo-exchange
```

### 2. Install dependencies

```bash
yarn
```

### 3. Run the app in dev mode

```bash
yarn dev
```

The app will be available at `http://localhost:5173`.

##  Environment Variables

Create a `.env` file in the root of the project. You can use `.env.example` to see what env vars are needed

### Example:

```env
VITE_API_URL="https://api.coingecko.com/api/v3/"
VITE_API_KEY="YOUR_API_KEY"
VITE_POLLING_INTERVAL=10000
```

| Variable                | Description                       |
|-------------------------|-----------------------------------|
| `VITE_API_URL`          | API base URL for price polling    |
| `VITE_API_KEY`          | API KEY for the price api         |


>  All environment variables must be prefixed with `VITE_` to be exposed in the browser.

##  Build for Production

```bash
yarn build
```

The build output will be placed in the `dist/` folder.

##  Deploy to GitHub Pages

1. Run:

```bash
yarn build
yarn deploy
```
