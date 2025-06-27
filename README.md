# Fly and Room

This project uses Vite and React to build a small demo site. A contact form is
included which relies on [EmailJS](https://www.emailjs.com/) to send messages.

### Getting started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

### EmailJS configuration

The contact form expects EmailJS keys to be present in a `.env` file. Copy
`.env.example` to `.env` and fill in your own `VITE_EMAILJS_SERVICE_ID`,
`VITE_EMAILJS_TEMPLATE_ID` and `VITE_EMAILJS_PUBLIC_KEY` values obtained from the
EmailJS dashboard.

Without these values the form will show a configuration error after submission.
