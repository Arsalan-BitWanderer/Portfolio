# Modern Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my expertise in web development, mobile applications, UI/UX design, and AI solutions.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ✨ Smooth animations using Framer Motion
- 🎯 Optimized performance
- 📝 Contact form
- 🔍 SEO friendly
- 🌙 Dark mode support

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- React Router

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/developer-portfolio.git
```

2. Navigate to the project directory:
```bash
cd developer-portfolio
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Start the development server:
```bash
npm start
# or
yarn start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── App.tsx
├── index.tsx
└── index.css
```

## Customization

1. Update personal information in the components
2. Modify the color scheme in `tailwind.config.js`
3. Add your own projects in the Projects component
4. Update social media links in the Contact and Footer components

## Deployment

The site can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

## Contact form configuration

Create a `.env` file in the project root (do not commit it) with:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_CONTACT_TO_EMAIL=mohdarsal232@gmail.com
```

Notes:
- Environment variables must start with `REACT_APP_` to be exposed in Create React App.
- Basic validation, a hidden honeypot field, and a 60-second client-side rate limit are enabled to reduce spam.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 