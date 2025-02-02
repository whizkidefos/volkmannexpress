# Volkmann Express - Professional Technology Solutions

A modern, responsive website for Volkmann Express, showcasing enterprise technology solutions including AI/ML, cloud services, cybersecurity, and digital transformation.

## Features

- 🎨 Modern, responsive design with beautiful animations
- 🌙 Dark/Light mode support
- ⚡ Built with Next.js 14 for optimal performance
- 🎭 Framer Motion animations
- 🎨 Tailwind CSS for styling
- 🧩 shadcn/ui components
- 💬 OpenAI-powered chat support
- 📧 Contact form with email integration
- 📊 Interactive analytics dashboard
- 🎨 Three.js powered background animations

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **3D Graphics:** Three.js
- **Icons:** Lucide React
- **Email:** Resend
- **AI Integration:** OpenAI
- **Charts:** Recharts
- **Type Safety:** TypeScript

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/whizkidefos/volkmann-express.git
cd volkmann-express
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=contact@volkmannexpress.com
OPENAI_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── industries/      # Industries page
│   ├── solutions/       # Solutions pages
│   └── layout.tsx       # Root layout
├── components/          # React components
│   ├── ui/             # UI components
│   └── ...             # Other components
├── lib/                 # Utility functions
├── public/             # Static assets
└── styles/             # Global styles
```

## Key Features

- **Dynamic Solutions Pages:** Detailed pages for each service offering
- **Interactive UI:** Smooth animations and transitions
- **Responsive Design:** Mobile-first approach
- **Dark Mode:** System-based and manual theme switching
- **Contact Form:** Email integration with Resend
- **AI Chat:** OpenAI-powered customer support
- **Analytics Dashboard:** Interactive charts and data visualization
- **Performance Optimized:** Static site generation and image optimization

## Deployment

The site is configured for deployment on Netlify. The build command is:

```bash
npm run build
```

## Environment Variables

Required environment variables:

- `RESEND_API_KEY`: API key for email service
- `CONTACT_EMAIL`: Contact form destination email
- `OPENAI_API_KEY`: OpenAI API key for chat functionality

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries, please reach out to contact@volkmannexpress.com