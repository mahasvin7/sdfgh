/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // SOUL Radiology Official Design Tokens from Brand & UI Kit v1.0
        brand: {
          navy: '#17365D',      // Primary navigation, headings, key actions
          teal: '#13836B',      // Secondary actions, selected states, calm positive accents
          saffron: '#F3A536',   // Focus highlights, small accent badges
        },
        surface: {
          page: '#F5F7FA',      // App background
          card: '#FFFFFF',      // Cards & panels
          'teal-soft': '#E8F5F1', // Calm informational / positive panels
          'blue-soft': '#EAF0F8', // Neutral informational panels
          'amber-soft': '#FFF5E3',// Caution / clinician-review needed panels
        },
        border: {
          default: '#D9E1EA',   // Dividers, card outlines, input borders
        },
        text: {
          primary: '#1F2937',   // Main body text
          muted: '#5B6573',     // Supporting metadata & subtext
        },
        status: {
          error: '#B42318',     // Actual error states only
          success: '#16794B',   // Confirmed actions only
        },
        // Indian Government Portal subtle thematic accents
        tiranga: {
          saffron: '#FF9933',
          white: '#FFFFFF',
          green: '#138808',
          ashoka: '#000080',
        }
      },
      borderRadius: {
        // Humanized, decent button and card radius (not overly rounded or pill-shaped)
        'control': '8px',
        'card': '12px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      maxWidth: {
        'brand': '1200px',
      }
    },
  },
  plugins: [],
}
