# Ravindu Portfolio Blog + Admin Editor Guide

Included pages:

- `/blog` — public blog list
- `/blog/[slug]` — single article page
- `/admin/blog` — private blog editor page

Admin password:

```txt
Ravindu1234#@
```

Run locally:

```bash
cd C:\Users\ravin\Desktop\JOB\Projects\portfolio
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
http://localhost:3000/blog
http://localhost:3000/admin/blog
```

Build:

```bash
npm run build
```

Deploy:

```bash
git add .
git commit -m "Polish blog section and update admin password"
git push
```

Note: this built-in editor saves custom posts in browser localStorage and supports JSON backup/import. For a fully public cloud CMS where posts update for every visitor, connect Sanity later.
