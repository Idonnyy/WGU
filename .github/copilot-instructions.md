# AI Coding Agent Instructions for "Our United States" Project

## Project Overview
A multi-page website showcasing US state information with dynamic content. Currently features Texas and Washington state pages, with placeholder pages for state listings and About Us sections.

## Architecture & Layout Pattern

### CSS Grid System (Critical Pattern)
All pages use **CSS Grid** with consistent template areas. Every page has `#grid_container` with:
```
grid-template-areas:
  "bg header header"
  "bg aside  main"
  "footer footer footer"
```
- `bg`: Full-height background image (left column, typically state flag)
- `header`: Navigation and title (top, spans columns 2-3)
- `aside`: Sidebar for facts/information (right, row 2)
- `main`: Primary content (right, row 2)
- `footer`: Copyright information (spans all columns)

**Important**: Each page may have slightly different grid column ratios. Check individual CSS files (e.g., `states.css` uses `3fr 1fr 5fr` vs `styles.css` uses `3fr 1fr 3fr`).

### File Structure per State Page
Each state follows this template:
- **HTML file** (`texas.html`): Grid container with empty elements (id-based targeting)
  - `background_img` for background
  - `aside ul#funFacts` for facts list
  - `main#mainText` for content
- **CSS file** (`states.css`, `texas.css`): Grid layout + styling
- **JavaScript file** (`texas.js`): Populates content dynamically

**Example**: `texas.js` populates `#funFacts` list and `#mainText` paragraph with state information.

## JavaScript Patterns

### DOM Manipulation Pattern
Use element IDs for direct access:
```javascript
const element = document.getElementById("elementId");
element.textContent = "content";
```

### Content Population Pattern
Store data in arrays, iterate with `forEach()` to create and append DOM elements:
```javascript
const funFacts = ["Fact 1", "Fact 2"];
const list = document.getElementById("funFacts");
funFacts.forEach(fact => {
  const li = document.createElement("li");
  li.textContent = fact;
  list.appendChild(li);
});
```

### Dynamic Background Images
Change background images by setting inline styles:
```javascript
document.getElementById("background_img").style.backgroundImage = "url('/imgFiles/StateName_flag.jpg')";
```

## Key Files & Their Purpose
- **styles.css**: Main shared styles, header navigation styling
- **states.css**: Template for state-specific CSS (override grid values as needed)
- **our_united_states.js**: Central state data (currently initialized with empty arrays: `stateList`, `stateFact`, `stateContent1`, `stateContent2`, `stateFlag`)
- **imgFiles/**: Image directory for backgrounds and state flags
- **stateListFolder/**: Currently empty; intended for state profile data files

## Known Issues & Development Notes
- **Issue**: H1 heading not aligning properly (see `issue.txt`)
  - Header uses `grid-template-rows: auto auto` with `justify-items: end` to align right
  - Navigation positioned with relative positioning (`left: -29px; top: 15px`)
  - Verify grid cell boundaries when modifying
- **Incomplete Pages**: `stateList.html` and `aboutUs.html` are empty placeholders
- **Data Structure**: State data hardcoded in individual JS files; `our_united_states.js` arrays are not yet populated

## Conventions & Best Practices
1. **IDs over classes**: Project uses ID-based element targeting; maintain this pattern
2. **Grid template areas**: Always reference areas by name in CSS rather than row/column numbers
3. **Navigation links**: Use relative paths (`"index.html"`, `"stateList.html"`, `"aboutUs.html"`)
4. **Color scheme**: Dark/gradient backgrounds (#8B0000 dark red, #00008B dark blue gradients)
5. **Fonts**: Franklin Gothic Medium, Arial Narrow, Arial sans-serif (set in `:root`)

## Adding New State Pages
1. Duplicate `texas.html` → `statename.html`, update title and h1
2. Duplicate `states.css` → `statename.css`, adjust grid-template-columns if needed
3. Create `statename.js`: Populate facts, main content, and set background image path
4. Add navigation links in `stateList.html` once complete
5. Image files: Store state flags in `imgFiles/Statename_flag.jpg`

## Important Considerations
- **Viewport/Responsive Design**: Grid uses `height: 100vh` for full viewport height; test on mobile
- **Footer**: Present on all pages, must stay visible with grid layout
- **Navigation State**: Currently all links functional except placeholders (stateList, aboutUs)
