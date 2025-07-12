# Dayar Architecture - Web Platform

A modern, responsive website for Dayar Architecture, a premium architectural design firm based in Lahore, Pakistan. This platform showcases the firm's expertise in architecture, interior design, landscape design, and 3D visualization services.

## 🌟 Features

- **Modern Design**: Clean, professional interface with elegant animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Engaging user experience with smooth transitions
- **Portfolio Showcase**: Dynamic portfolio section highlighting projects
- **Contact Integration**: Easy-to-use contact form for client inquiries
- **Performance Optimized**: Fast loading times with optimized assets
- **SEO Friendly**: Proper meta tags and structured content

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Development Tools**: ESLint, PostCSS, Autoprefixer

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Dayar-Web.git
   cd Dayar-Web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📁 Project Structure

```
Dayar-Web/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Hero.tsx       # Hero section
│   │   ├── About.tsx      # About section
│   │   ├── Services.tsx   # Services showcase
│   │   ├── Portfolio.tsx  # Portfolio gallery
│   │   ├── WhyChooseUs.tsx # Why choose us section
│   │   ├── Testimonials.tsx # Client testimonials
│   │   ├── Contact.tsx    # Contact form
│   │   └── Footer.tsx     # Footer section
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. You can customize the design by modifying:
- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global styles and custom CSS
- Individual component files for component-specific styles

### Content
Update the content by modifying the respective component files in `src/components/`.

### Images
Replace images in the `public/` directory or update image URLs in the components.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px and above)
- Tablet (768px - 1023px)
- Mobile (below 768px)

## 🔧 Development

### Code Quality
- ESLint is configured for code quality
- TypeScript provides type safety
- Prettier formatting (if configured)

### Performance
- Vite for fast development and optimized builds
- Image optimization
- Lazy loading for better performance

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for deployment
- **Traditional hosting**: Upload the `dist` folder to your web server

## 📄 License

This project is private and proprietary to Dayar Architecture.

## 👥 Contributing

This is a private project for Dayar Architecture. For any issues or suggestions, please contact the development team.

## 📞 Contact

**Dayar Architecture**
- Location: Lahore, Pakistan
- Services: Architecture, Interior Design, Landscape Design, 3D Visualization
- Website: [dayar.com](https://dayar.com)

---

**Built with ❤️ for Dayar Architecture**
