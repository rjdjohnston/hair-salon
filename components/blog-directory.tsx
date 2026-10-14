'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Search } from 'lucide-react'
import { articles, readingTime } from '@/lib/articles'

export function BlogDirectory() {
  const [category, setCategory] = useState('All articles')
  const [query, setQuery] = useState('')
  const filtered = articles.filter(article => (category === 'All articles' || article.category === category) && `${article.title} ${article.intro}`.toLowerCase().includes(query.toLowerCase().trim()))
  const [page, setPage] = useState(1)
  const pageSize = 3
  const pageCount = Math.ceil(filtered.length / pageSize)
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize)
  function goToPage(next: number) {
    setPage(next)
    document.getElementById('blog-library')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const featured = articles[0]
  return <>
    <section className="service-intro section-wrap"><nav aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Blog</span></nav><p className="eyebrow">THE HAIR MECHANIX JOURNAL</p><h1>GOOD HAIR.<br/><em>GOOD KNOW-HOW.</em></h1><p className="service-lead">Fresh ideas, straightforward advice, and a little shop talk. Your next great look starts here.</p></section>
    <section className="journal-feature section-wrap"><div><p className="eyebrow">IN THE SPOTLIGHT · {featured.category}</p><h2><Link href={`/blog/${featured.slug}`}>{featured.title}</Link></h2><p>{featured.intro}</p><Link className="text-link" href={`/blog/${featured.slug}`}>READ THE GUIDE <ArrowUpRight size={18}/></Link></div><img src="/images/hairmx-home.jpg" alt="Leather lounge seating and automotive decor inside Hair Mechanix" width={900} height={600}/></section>
    <section id="blog-library" className="section-wrap journal-library" aria-label="Browse articles"><div className="journal-controls"><div className="journal-tabs" aria-label="Filter articles">{['All articles', 'Style guides', 'Maintenance', 'In the chair'].map(item => <button key={item} aria-pressed={category === item} onClick={() => { setCategory(item); setPage(1) }}>{item}</button>)}</div><label className="journal-search"><Search size={18}/><span className="sr-only">Search articles</span><input type="search" placeholder="Search articles" value={query} onChange={event => { setQuery(event.target.value); setPage(1) }}/></label></div><p className="journal-count" role="status">{filtered.length} {filtered.length === 1 ? 'article' : 'articles'}</p><div className="journal-grid">{visible.map(article => <article className="journal-card" key={article.slug}><p className="eyebrow">{article.category} · {readingTime(article)} MIN READ</p><h2><Link href={`/blog/${article.slug}`}>{article.title}</Link></h2><p>{article.intro}</p><Link className="text-link" href={`/blog/${article.slug}`} aria-label={`Read ${article.title}`}>READ ARTICLE <ArrowUpRight size={16}/></Link></article>)}</div>{pageCount > 0 && <nav className="journal-pagination" aria-label="Blog pagination"><button disabled={page === 1} onClick={() => goToPage(page - 1)}>Previous</button><div>{Array.from({ length: pageCount }, (_, index) => index + 1).map(number => <button key={number} aria-label={`Page ${number}`} aria-current={number === page ? 'page' : undefined} onClick={() => goToPage(number)}>{number}</button>)}</div><button disabled={page === pageCount} onClick={() => goToPage(page + 1)}>Next</button><p role="status">Page {page} of {pageCount}</p></nav>}{!filtered.length && <div className="journal-empty"><h2>No articles found.</h2><p>Try another topic or clear your filters.</p><button className="button button-dark" onClick={() => { setQuery(''); setCategory('All articles') }}>CLEAR FILTERS</button></div>}</section>
  </>
}
