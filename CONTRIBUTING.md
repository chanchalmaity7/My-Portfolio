# Contributing to Portfolio

Thank you for your interest in contributing to this portfolio project!

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/my_portfolio.git`
3. Install dependencies: `npm install`
4. Create a new branch: `git checkout -b feature/your-feature-name`
5. Make your changes
6. Test your changes: `npm run dev`
7. Commit your changes: `git commit -m "Add your feature"`
8. Push to your branch: `git push origin feature/your-feature-name`
9. Create a Pull Request

## 📝 Code Style

- Use TypeScript for all new components
- Follow the existing component structure
- Use Tailwind CSS for styling
- Add proper animations with Framer Motion
- Keep components clean and reusable

## 🎨 Design Guidelines

- Maintain the dark theme with purple/pink accents
- Use glassmorphism effects consistently
- Ensure responsive design across all devices
- Add smooth animations for better UX

## 📱 Component Structure

```tsx
'use client';
import { motion } from 'framer-motion';

export default function ComponentName() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 bg-slate-800"
    >
      {/* Component content */}
    </motion.section>
  );
}
```

## 🐛 Bug Reports

When reporting bugs, please include:
- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## 💡 Feature Requests

- Check existing issues first
- Provide clear description
- Explain the use case
- Consider implementation complexity

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.