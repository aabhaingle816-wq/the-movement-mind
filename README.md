# The Movement Mind — Website Guide

A complete, free, static website (HTML + CSS + JavaScript). No frameworks, no installation, no paid services.

**Contents**
1. What's in the folder
2. See the site on your laptop
3. Before you publish: 4 things to edit
4. Publish free on GitHub Pages
5. Update the About page and site name
6. Add a new article
7. Publish a draft article properly
8. Pre-launch test checklist
9. SEO: what's done and what to expect
10. Limitations to know
11. Adding a newsletter later (free)

---

## 1. What's in the folder

```
the-movement-mind/
├── index.html            Homepage
├── articles.html         Archive with search and topic filters
├── about.html            About the publication and founder
├── standards.html        Editorial standards and full health disclaimer
├── 404.html              "Page not found" page
├── articles/             One HTML file per article (6 drafts)
├── topics/               Topic overview and six topic pages
├── templates/
│   └── article-template.html   Copy this to write a new article
├── assets/
│   ├── css/style.css     All design: colours, fonts, spacing, layout
│   ├── js/articles.js    THE ARTICLE LIST, which you edit when adding articles
│   ├── js/main.js        Menu, search, filters, table of contents (no need to edit)
│   └── img/              Artwork, favicon, social-sharing image
├── robots.txt            Tells search engines they may crawl the site
├── sitemap.xml           List of pages for search engines
├── .nojekyll             Tells GitHub Pages to serve files as they are
└── README.md             This guide
```

How it fits together: the homepage, archive, topic pages and "Keep reading" sections all build their article lists from **one file**, `assets/js/articles.js`. Add an article there and it appears everywhere automatically.

**Tip:** Install the free editor **Visual Studio Code** (code.visualstudio.com). It makes editing and find-and-replace much easier than Notepad or TextEdit.

---

## 2. See the site on your laptop

**Quickest way**
1. Unzip `the-movement-mind.zip`. Right-click it and choose **Extract All** on Windows, or double-click it on Mac.
2. Open the folder and double-click `index.html`. It opens in your browser.

Almost everything works this way. For a result exactly like the live site, use one of these two options:

**Option A: VS Code (easiest)**
1. In VS Code, go to **File → Open Folder** and pick `the-movement-mind`.
2. Click **Extensions** in the left sidebar. Search for **Live Server** (by Ritwick Dey) and install it.
3. Right-click `index.html` and choose **Open with Live Server**.

**Option B: Python (if installed)**
1. Open a Terminal (Mac) or Command Prompt (Windows) in the folder.
2. Type `python -m http.server 8000` and press Enter. On Mac you may need `python3` instead.
3. Visit `http://localhost:8000` in your browser.

---

## 3. Before you publish: 4 things to edit

1. **Your web address.** Every page contains the placeholder `https://aabhaingle816-wq.github.io/the-movement-mind`.
   - In VS Code, press **Ctrl+Shift+H** (Mac: **Cmd+Shift+H**).
   - Search for `aabhaingle816-wq` and replace it with your GitHub username in lowercase.
   - Click **Replace All**.
2. **Your name.** Search for `[Your Name]` and replace every result.
3. **Other placeholders.** Search for `class="placeholder"`. Each result is yellow-highlighted text, such as a contact email or registration line. Edit it or delete the sentence.
4. **Your photo (optional).** Save a photo as `assets/img/founder.jpg`.
   - In `index.html` and `about.html`, change `founder-placeholder.svg` to `founder.jpg`.
   - Update the `alt="..."` text, for example `alt="Portrait of [Your Name]"`.

---

## 4. Publish free on GitHub Pages

This uses only the GitHub website. No command line is needed.

1. Create a free account at **github.com**. Your username becomes part of your web address.
2. Click the **+** (top right) and choose **New repository**.
   - **Repository name:** `the-movement-mind`
   - **Visibility:** **Public** (required for free GitHub Pages)
   - Leave the other boxes unticked, then click **Create repository**.
3. On the next screen, click **uploading an existing file**.
4. Open your `the-movement-mind` folder on your laptop and select **everything inside it**: the files *and* the folders `articles`, `assets`, `topics` and `templates`.
   - Drag them into the browser window. Upload the folder's **contents**, not the folder itself, so `index.html` sits at the top level of the repository.
   - The file `.nojekyll` may be hidden on your computer.
     - Mac: press **Cmd+Shift+.** to show hidden files.
     - Windows: in File Explorer, open **View** and tick **Hidden items**.
     - If it still doesn't upload, it's not essential.
5. Scroll down and click **Commit changes**. Wait for the upload to finish.
6. Go to **Settings** (tab at the top of the repository), then **Pages** (left sidebar).
7. Under **Build and deployment**, choose these settings:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main`, folder `/ (root)`, then click **Save**
8. Wait 1–5 minutes and refresh the page. A box appears saying *"Your site is live at https://your-username.github.io/the-movement-mind/"*.
9. Open that link and check the site. **The site is only live once you see this message and the link works.**

**To update the site later**
1. Open the repository and click **Add file → Upload files**.
2. Drag in the changed files, keeping them in the same folders. To update an article, go into the `articles` folder in GitHub first, then upload.
3. Click **Commit changes**. The live site updates within a few minutes.

**Optional: a shorter address.** Name the repository `your-username.github.io` instead. The site then lives at `https://your-username.github.io/`. In Step 3, find-and-replace `https://aabhaingle816-wq.github.io/the-movement-mind` with `https://your-username.github.io`.

**Another free option: Cloudflare Pages or Netlify.** Both have free plans where you can drag and drop the folder.

---

## 5. Update the About page and site name

- **About text:** open `about.html` and edit the text between the tags. For example, change only the words inside `<p>…</p>`. Don't delete the `<` `>` parts.
- **Founder intro on the homepage:** in `index.html`, find the section that starts `From the founder`.
- **Site name:** use find-and-replace (Ctrl/Cmd+Shift+H) across all files.
  - Replace `The Movement Mind` with your new name.
  - Also search for `The Movement <em>Mind</em>`, which is the logo with *Mind* in italics.
  - Replace `og-image.png` in `assets/img` with a new 1200 × 630 image. Canva's free plan works well.
- **Colours and fonts:** at the top of `assets/css/style.css` is a list called **Design tokens**. Change a colour value there, such as `--olive: #556040;`, and it updates across the whole site.

---

## 6. Add a new article

Example: an article called "Sleep and Memory".

1. **Create the page.**
   - Copy `templates/article-template.html` into the `articles` folder.
   - Rename the copy `sleep-and-memory.html`. Use lowercase words joined by hyphens; this becomes the web address.
2. **Fill in the page.** Open the new file and replace:
   - `Your Article Title` (it appears in several places: the title tag, the heading, the social tags and the structured data block near the top)
   - `A one-sentence subtitle…`
   - `A short one- or two-sentence summary…` (also the Google description)
   - `your-article-slug` with `sleep-and-memory`
   - The date `2026-10-15` with your publication date (format: year-month-day)
   - The category. The template uses Physiotherapy & Movement; change the topic name and the `topics/....html` links if you need a different one.
   - The body text between the `WRITE YOUR ARTICLE BELOW` comment and the references.
     - Use `<h2>` for section headings; they appear in the table of contents automatically.
     - Use `<p>` for paragraphs.
   - The references list
3. **List the article.** Open `assets/js/articles.js`. Copy one complete block, from `{` to `},`. Paste it at the top of the `TMM_ARTICLES` list and edit it:
   ```js
   {
     slug: "sleep-and-memory",
     title: "Sleep and Memory",
     subtitle: "…",
     excerpt: "…",
     category: "neuro",      // movement, neuro, nutrition, women, longevity or science
     date: "2026-11-02",
     readingTime: 6,         // number of words ÷ 220
     featured: false,        // set true to feature it (and set the old one to false)
     draft: false,
     tags: ["sleep", "memory", "learning"],
     related: ["chronic-stress-brain-and-body"]
   },
   ```
   Keep the quotation marks and commas exactly as in the other entries; a missing comma stops the lists from showing.
4. **Add it to `sitemap.xml`.** Copy one `<url>…</url>` line, change the address and date, and make sure it isn't inside `<!-- -->`.
5. **Preview locally (Part 2), then upload** the new article file, `articles.js` and `sitemap.xml` (Part 4).

**Images:** to give an article its own image, put it in `assets/img/` (ideally a JPG under 300 KB). Then:
- Add `image: "my-photo.jpg",` to its entry in `articles.js`.
- Change the `<img src=...>` in the article file.

Free, properly licensed photos: **Unsplash** and **Pexels**. Download the image rather than linking to it, so your site doesn't depend on someone else's server.

---

## 7. Publish a draft article properly

The six starter articles are **demonstration drafts**. Their references are placeholders, and they are deliberately hidden from Google. Before making one public:

1. **Review it.** Fact-check the content and rewrite it in your own voice.
2. **Replace every reference placeholder** with a source you have checked yourself.
3. **Delete the draft notice.** In the article file, remove the `<aside class="draft-notice">…</aside>` block and the small `<span class="draft-pill">Draft</span>`.
4. **Allow Google to index it.** Delete the line `<meta name="robots" content="noindex, follow">` near the top of the file.
5. **Remove the Draft label from cards.** In `articles.js`, set `draft: false` for that article.
6. **Add it to the sitemap.** In `sitemap.xml`, remove the `<!--` and `-->` around that article's line.

---

## 8. Pre-launch test checklist

- [ ] `aabhaingle816-wq`, `[Your Name]` and the other yellow placeholders are replaced
- [ ] Every top menu link opens the right page
- [ ] On a phone-width window, the **Menu** button opens and closes the menu, and the Esc key closes it
- [ ] Articles page: search for "sleep" and get results; each topic filter button works
- [ ] Each topic page shows its articles (Women's Health shows a friendly "no articles yet" message)
- [ ] Each article shows its table of contents, references, author box, disclaimer and "Keep reading"
- [ ] Press **Tab** repeatedly: a visible outline moves through the links and buttons
- [ ] The newsletter box is clearly marked as a placeholder
- [ ] Only reviewed articles have the `noindex` line removed
- [ ] After publishing: open the live link on your phone and on a laptop
- [ ] Optional: run **PageSpeed Insights** (pagespeed.web.dev) on your live address for a free speed and accessibility check

---

## 9. SEO: what's done and what to expect

**Already built in**
- A unique title and description on each page
- Clean headings and descriptive web addresses
- Canonical links
- Open Graph tags for nice link previews
- Article structured data (no fake ratings or reviews)
- `sitemap.xml` and `robots.txt`
- Descriptive alt text
- Fast-loading pages with no heavy frameworks

**After launch**, add the site to **Google Search Console** (free):
1. Go to search.google.com/search-console and choose **Add property**.
2. Choose **URL prefix** and enter your live address.
3. Verify ownership with the **HTML tag** method: paste the line Google gives you into the `<head>` of `index.html`, upload it, then click **Verify**.
4. Under **Sitemaps**, submit `sitemap.xml`.

**Honest expectations:** SEO does **not** guarantee indexing, rankings or traffic. New sites often take weeks to months to appear in search results. Consistently publishing useful, original, well-referenced articles matters far more than technical settings.

---

## 10. Limitations to know

- **Lists need JavaScript.** Article lists, search and filters are built in the browser with JavaScript. Google can read JavaScript pages, and every page also has a basic fallback link. Article pages themselves are plain HTML.
- **Search only covers summaries.** It searches titles, subtitles, summaries, topics and tags, not the full article text.
- **Fonts load from Google Fonts** (free). If they're blocked, similar built-in fonts are used automatically.
- **The artwork is original abstract line art.** Add real photography over time if you want a warmer, more human feel.
- **The newsletter is a placeholder**; it collects nothing (see Part 11).
- **There are no comments, contact form or analytics yet.** Each can be added later with free tools.
- **Public repository.** Free GitHub Pages requires one, so anyone can see your site files. Never put passwords or private information in them.
- **A web address with your own name** (e.g. `themovementmind.com`) costs money. GitHub Pages supports adding one later without rebuilding the site.
- **Article content is draft-quality.** It was written for demonstration and is not reviewed health advice.

---

## 11. Adding a newsletter later (free)

Services such as **Buttondown**, **MailerLite** and **Substack** offer free plans; check their current limits before choosing. Each gives you an embed form or a sign-up link. When you have one:

1. In `index.html`, find the `Newsletter` section.
2. Replace the `<form …>…</form>` block with the code or link your provider gives you.
3. Delete the "Placeholder only" note.
4. Add a short privacy note explaining how email addresses are used.
