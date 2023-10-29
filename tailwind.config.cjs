/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  	typography: {
				DEFAULT: {
					css: {
						maxWidth: '960px',
			  		},
				},
			},
			colors: {
			  cyan: {
				100: '#EDFCFC',
				200: '#C5F6F7',
				300: '#98F0F0',
				400: '#6CE9EA',
				500: '#40E3E4',
				600: '#26C9CA',
				700: '#21B0B1',
				800: '#219999',
				900: '#0B898A'
			  }
			}
		},
        container: {
            screens: {
                'sm': '100%',
                'md': '100%',
                'lg': '640px',
                'xl': '768px',
                '2xl': '960px',
            }
        }
    },
	plugins: [
		require('@tailwindcss/typography'),
	],
}
