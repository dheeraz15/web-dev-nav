# My NavBar Project

Hi! This is a simple responsive navigation bar I built. I tried to make it look like the King's College website. Here is how I did it:

## HTML
I used standard tags like `<nav>` for the main container and `<ul>` (unordered list) for the menu links. Using `<a>` tags for the links inside `<li>` makes sense because they go to other pages.

## CSS (The styling part)
I used **Flexbox**
- `display: flex` helps put the logo, links, and button in a straight line.
- `justify-content: space-between` pushes them apart nicely so the logo is on the left and button is on the right.

## How I made it Responsive (Mobile View)
This was the cool part. I used **Media Queries** (`@media`).
- Basically, I told the code: "If the screen is smaller than 992px, change the layout."
- **The Menu**: On mobile, I changed the `nav-menu` to `position: fixed` so it acts like a drawer that slides in from the side.
- **Lines under links**: I added `border-bottom` to the links in the mobile view so they have that line under them.
- **Icons**: I put a small down-arrow icon in the HTML but hid it on desktop with `display: none`. In the media query, I turned it back on with `display: block`.

## JavaScript
I kept it super simple. I just have a function that listens for a click on the hamburger icon. When clicked, it adds an `.active` class to the menu. The CSS handles the animation!
