# Personal Page - Pixel Style

A pixel-art style personal portfolio website built with React and Next.js, featuring a retro game aesthetic with accessibility-focused design.

## Features

### Design
- **Pixel Art Theme**: Retro game aesthetic with black background and yellow accents
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in and pop-up animations for section windows
- **Pixel Font**: Uses "IBM Plex Mono" font for clean, professional monospace typography

### Sections
1. **Home Page**: Landing page with name, title, and avatar
2. **Skills**: Categorized skills with pixel icons
3. **Projects**: Project showcase with tech stack
4. **About Me**: Personal bio with fun facts
5. **Experience**: Timeline-style work history
6. **Certificates**: Scrollable list of achievements

### Components
- **PixelWindow**: Authentic pixel-art window component with themes
- **PixelPopupWindow**: Popup wrapper using PixelWindow
- **Navigation**: Bottom navigation with pixel buttons
- **Section Components**: Individual content sections

### Accessibility Features
- Keyboard navigation support
- Screen reader friendly
- High contrast design
- Proper ARIA labels
- Focus management

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and pixel theme
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
└── components/
    ├── Home.tsx             # Landing page component
    ├── Navigation.tsx       # Bottom navigation bar
    ├── PixelWindow.tsx      # Authentic pixel window component
    ├── PixelPopupWindow.tsx # Popup wrapper using PixelWindow
    ├── PopupWindow.tsx      # Legacy popup window (backup)
    ├── Skills.tsx           # Skills section
    ├── Projects.tsx         # Projects section
    ├── About.tsx            # About me section
    ├── Experience.tsx       # Experience timeline
    └── Certificate.tsx      # Certificates section
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-page
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personal Information
Update the following files with your information:

1. **Home.tsx**: Change name, title, school, and description
2. **Skills.tsx**: Modify skill categories and items
3. **Projects.tsx**: Add your projects with descriptions and tech stacks
4. **About.tsx**: Update bio and fun facts
5. **Experience.tsx**: Add your work experience
6. **Certificate.tsx**: List your certifications

### Styling
- Colors are defined in `globals.css` using CSS variables
- Main colors: `--pixel-yellow`, `--pixel-light-yellow`, `--pixel-dark-yellow`
- Font: "Press Start 2P" from Google Fonts

### Adding New Sections
1. Create a new component in `src/components/`
2. Add the section to the navigation in `Navigation.tsx`
3. Update the main page logic in `page.tsx`

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **IBM Plex Mono**: Professional monospace font from Google Fonts

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
Build the project:
```bash
npm run build
```

The built files will be in the `.next` directory.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or issues, please open an issue on GitHub or contact the maintainer.
