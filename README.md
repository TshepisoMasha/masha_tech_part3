# Masha Tech Website — Part 3

## Project overview
This is the Masha Tech website for the community organisation in Ebony Park, Midrand. All files supplied in the original ZIP have been retained.

## Part 3 changes
- Added page-specific SEO titles and meta descriptions to all five HTML pages.
- Added Open Graph metadata and a browser theme colour.
- Added a shared image lightbox to enlarge images.
- Added a second map to the Contact page; both map embeds are responsive and load lazily.
- Added a second customer form on the Contact page and improved the existing Enquiries form.
- Fixed small markup and form-field issues that affected page structure or field values.
- Added `js_assets/site.js` as the only JavaScript file. It handles the lightbox; built-in browser validation checks required form fields.
- Added short comments for the new functionality.

## Main files
- `index.html` — Home page
- `about.html` — About Masha Tech
- `services.html` — Services and operating hours
- `contact.html` — Contact details, two maps and contact form
- `enquires.html` — Enquiry information and enquiry form
- `_images/` — Original image assets (retained)
- `css_assets/` — Original CSS folder (retained)
- `js_assets/site.js` — Lightbox functionality
- `private/` — Original folder (retained)

## Form setup note
Both forms are fillable and use a `mailto:` action to prepare a message in the visitor's configured email application. This depends on the visitor having an email application configured and is not server-side form processing. For reliable delivery and storage, connect both forms to an approved form service or server endpoint before publishing.

## Maps
The Contact page includes a Midrand map and an Ebony Park, Midrand map. Confirm the exact visitor entrance/address before publishing directions.

## Viewing the website
Open `index.html` in a modern browser. Keep the `_images` and `js_assets` folders in their current locations. An internet connection is required for the map embeds.

## Notes
No robots, chatbot, JavaScript framework or unnecessary library has been added. No original files have been removed.
