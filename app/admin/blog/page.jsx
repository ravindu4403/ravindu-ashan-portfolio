'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { createSlug, defaultBlogPosts, getStoredBlogPosts, saveStoredBlogPosts } from '../../blog/blogData';

const ADMIN_PASSWORD = 'Ravindu1234#@';

const emptyForm = {
  id: '',
  title: '',
  slug: '',
  category: 'Projects',
  date: new Date().toISOString().slice(0, 10),
  readTime: '4 min read',
  image: '',
  excerpt: '',
  content: '',
  featured: false,
  published: true,
};

export default function BlogAdminPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [message, setMessage] = useState('');

  useEffect(() => setPosts(getStoredBlogPosts()), []);

  const previewPosts = useMemo(() => [...posts, ...defaultBlogPosts], [posts]);

  function updateField(field, value) {
    setForm((current) => {
      const next = { ...current, [field]: value };
      if (field === 'title' && !current.id) next.slug = createSlug(value);
      return next;
    });
  }

  function handleLogin(event) {
    event.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setUnlocked(true);
      setLoginError('');
      return;
    }
    setLoginError('Password එක වැරදියි. ආයේ check කරලා try කරන්න.');
  }

  function savePost(event) {
    event.preventDefault();
    if (!form.title.trim()) {
      setMessage('Please add a blog title.');
      return;
    }

    const finalPost = {
      ...form,
      id: form.id || `post-${Date.now()}`,
      slug: form.slug || createSlug(form.title),
      image: form.image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    };

    const nextPosts = posts.some((post) => post.id === finalPost.id)
      ? posts.map((post) => (post.id === finalPost.id ? finalPost : post))
      : [finalPost, ...posts];

    setPosts(nextPosts);
    saveStoredBlogPosts(nextPosts);
    setForm(emptyForm);
    setMessage('Blog post saved successfully. Open /blog to see the update on this browser.');
  }

  function editPost(post) {
    setForm(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function deletePost(id) {
    const nextPosts = posts.filter((post) => post.id !== id);
    setPosts(nextPosts);
    saveStoredBlogPosts(nextPosts);
    setMessage('Custom blog post deleted.');
  }

  function exportPosts() {
    const blob = new Blob([JSON.stringify(posts, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ravindu-blog-posts.json';
    link.click();
    URL.revokeObjectURL(url);
  }

  function importPosts(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const imported = JSON.parse(reader.result);
        if (!Array.isArray(imported)) throw new Error('Invalid JSON');
        setPosts(imported);
        saveStoredBlogPosts(imported);
        setMessage('Blog JSON imported successfully.');
      } catch (error) {
        setMessage('Import failed. Please select a valid exported blog JSON file.');
      }
    };
    reader.readAsText(file);
  }

  if (!unlocked) {
    return (
      <main>
        <div className="site-bg" />
        <section className="section-shell blog-hero admin-login-card reveal-item is-visible">
          <p className="section-kicker">Private Blog Editor</p>
          <h1>Admin access</h1>
          <p>Blog posts add, edit, publish, and backup කරගන්න private editor එකට login වෙන්න.</p>

          <form onSubmit={handleLogin} className="admin-form compact">
            <div className="password-field-wrap">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter admin password"
                autoComplete="current-password"
              />
              <button type="button" className="password-toggle" onClick={() => setShowPassword((value) => !value)}>
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <button className="btn primary" type="submit">Login</button>
          </form>

          {loginError ? <div className="cms-message error-message">{loginError}</div> : null}
          <Link className="back-link" href="/blog">← Back to Blog</Link>
        </section>
      </main>
    );
  }

  return (
    <main>
      <div className="site-bg" />
      <header className="navbar">
        <Link href="/" className="brand"><span className="brand-mark">RA</span><span>Ravindu</span></Link>
        <nav><Link href="/">Portfolio</Link><Link href="/blog">Blog</Link></nav>
      </header>

      <section className="section-shell admin-cms-layout reveal-item is-visible">
        <div className="admin-cms-heading">
          <p className="section-kicker">Admin Editable Blog</p>
          <h1>Manage project articles.</h1>
          <p>Add project case studies, images, categories, descriptions, full article content, featured posts, and publish status from one clean editor.</p>
          {message ? <div className="cms-message">{message}</div> : null}
        </div>

        <form className="admin-form" onSubmit={savePost}>
          <div className="form-grid-two">
            <label>Title<input value={form.title} onChange={(event) => updateField('title', event.target.value)} placeholder="Blog post title" /></label>
            <label>Slug<input value={form.slug} onChange={(event) => updateField('slug', event.target.value)} placeholder="blog-post-url" /></label>
            <label>Category<input value={form.category} onChange={(event) => updateField('category', event.target.value)} placeholder="Laravel / React / Career" /></label>
            <label>Date<input type="date" value={form.date} onChange={(event) => updateField('date', event.target.value)} /></label>
            <label>Read time<input value={form.readTime} onChange={(event) => updateField('readTime', event.target.value)} placeholder="4 min read" /></label>
            <label>Image URL<input value={form.image} onChange={(event) => updateField('image', event.target.value)} placeholder="https://..." /></label>
          </div>

          <label>Short description<textarea value={form.excerpt} onChange={(event) => updateField('excerpt', event.target.value)} rows="3" placeholder="Short blog card description" /></label>
          <label>Full article<textarea value={form.content} onChange={(event) => updateField('content', event.target.value)} rows="9" placeholder="Write the full blog article here" /></label>

          <div className="checkbox-row">
            <label><input type="checkbox" checked={form.featured} onChange={(event) => updateField('featured', event.target.checked)} /> Featured post</label>
            <label><input type="checkbox" checked={form.published} onChange={(event) => updateField('published', event.target.checked)} /> Published</label>
          </div>

          <div className="admin-actions">
            <button className="btn primary" type="submit">Save Blog Post</button>
            <button className="btn secondary" type="button" onClick={() => setForm(emptyForm)}>Clear Form</button>
            <button className="btn ghost" type="button" onClick={exportPosts}>Export JSON</button>
            <label className="btn ghost import-btn">Import JSON<input type="file" accept="application/json" onChange={importPosts} /></label>
          </div>
        </form>

        <div className="cms-note">
          <strong>Publishing note:</strong> This built-in editor saves custom posts in the current browser and supports JSON backup/import. For a fully cloud-based public CMS where posts update for everyone, connect Sanity or another hosted CMS later.
        </div>

        <div className="admin-post-list">
          <h2>Blog articles</h2>
          {previewPosts.map((post) => (
            <article className="admin-post-card" key={post.id}>
              <div>
                <span>{post.category} • {post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
              {posts.some((item) => item.id === post.id) ? (
                <div className="admin-post-actions">
                  <button type="button" onClick={() => editPost(post)}>Edit</button>
                  <button type="button" onClick={() => deletePost(post.id)}>Delete</button>
                </div>
              ) : <span className="default-post-label">Portfolio article</span>}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
