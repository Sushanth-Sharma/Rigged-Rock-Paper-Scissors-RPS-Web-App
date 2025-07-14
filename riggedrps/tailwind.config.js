/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* surface-gray */
        input: "var(--color-input)", /* surface-gray */
        ring: "var(--color-ring)", /* accent-orange */
        background: "var(--color-background)", /* deep-charcoal */
        foreground: "var(--color-foreground)", /* white */
        primary: {
          DEFAULT: "var(--color-primary)", /* energetic-orange */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* cool-blue */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* error-red */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* surface-gray */
          foreground: "var(--color-muted-foreground)", /* text-secondary */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* bright-highlight */
          foreground: "var(--color-accent-foreground)", /* deep-charcoal */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* surface-gray */
          foreground: "var(--color-popover-foreground)", /* white */
        },
        card: {
          DEFAULT: "var(--color-card)", /* surface-gray */
          foreground: "var(--color-card-foreground)", /* white */
        },
        success: {
          DEFAULT: "var(--color-success)", /* standard-green */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* amber-warning */
          foreground: "var(--color-warning-foreground)", /* deep-charcoal */
        },
        error: {
          DEFAULT: "var(--color-error)", /* error-red */
          foreground: "var(--color-error-foreground)", /* white */
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neo': '0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)',
        'neo-lg': '0 8px 12px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.1)',
      },
      animation: {
        'scale-in': 'scaleIn 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'scale-out': 'scaleOut 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'fade-in': 'fadeIn 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      keyframes: {
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'neo': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}