# PicLoad

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Pages](#pages)
- [Components](#components)
- [Animations](#animations)
- [Theme Toggle](#theme-toggle)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Styling](#styling)
- [Credits](#credits)
- [License](#license)

## Introduction
PicLoad is a React-based website that showcases beautiful photographs by Naval Rathore. The site features impressive animations such as rotate on click, page load delays, and slide-in fade-in list animations. The website includes three main pages: Home, Gallery, and Contact Me. It also features three key components: Header, Footer, and a Theme Toggle button for switching between dark and light themes. The site uses React Icons and the Google Font 'Syne', with CSS color variables for consistent theming.

## Features
- Rotate animation on click
- Page load delay animation
- Slide-in fade-in list animations
- Dark and light theme toggle
- Responsive design
- Uses React Icons library
- Uses Google Font 'Syne'
- Consistent styling with CSS color variables

## Pages
### Home
The main landing page that introduces visitors to the site and showcases some featured photographs.

### Gallery
A page displaying a collection of photographs by Naval Rathore, with engaging animations.

### Contact Me
A page with a contact form allowing visitors to get in touch with Naval Rathore. The form includes fields for name, email, message, and a submission button.

## Components
### Header
The header component includes navigation links to the Home, Gallery, and Contact Me pages, as well as the theme toggle button.

### Footer
The footer component contains site information and additional links or credits.

### Toggle Button
A button used to switch between dark and light themes. This visually impressive button enhances the user experience by changing the theme across various elements of the website.

## Animations
### Rotate on Click
Elements that rotate when clicked, adding an interactive experience for users.

### Load Page with Delay
A smooth page load animation that introduces a slight delay, enhancing the visual appeal.

### Slide-In Fade-In List Animation
List items that slide in and fade in when they appear, creating a dynamic and engaging visual effect.

## Theme Toggle
The theme toggle feature allows users to switch between dark and light themes. The themes are applied to multiple elements across the website to ensure a cohesive look and feel. The toggle button is prominently placed in the header for easy access.

### Implementation
- Theme states managed in a React component.
- CSS color variables defined for both themes.
- Theme change triggers re-render with new colors applied.

## Dependencies
- React
- React Icons
- Google Fonts
- CSS

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/navalrathore10/Picload-Naval-Rathore.git
    cd Picload-Naval-Rathore
    ```
2. Install dependencies:
    ```sh
    npm install
    ```

## Usage
1. Start the development server:
    ```sh
    npm start
    ```
2. Open your browser and visit `http://localhost:3000` to see the website in action.

## Styling
### Google Font
The website uses the 'Syne' font from Google Fonts. Ensure it is included in your `index.html` or imported in your CSS:
```css
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600&display=swap');
```

### CSS Color Variables
Color variables are defined in the CSS for consistent theming:
```css
:root {
    --color-bg-light: #ffffff;
    --color-bg-dark: #333333;
    --color-text-light: #000000;
    --color-text-dark: #ffffff;
    /* Add more color variables as needed */
}
```
These variables are used throughout the CSS to apply different themes.

### Example CSS Usage
```css
body {
    background-color: var(--color-bg-light);
    color: var(--color-text-light);
}

body.dark {
    background-color: var(--color-bg-dark);
    color: var(--color-text-dark);
}
```

## Credits
- [React](https://reactjs.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Google Fonts - Syne](https://fonts.google.com/specimen/Syne)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to update this README with additional details specific to your project as needed.
