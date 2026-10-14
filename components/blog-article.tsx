import Link from 'next/link'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import { articles, readingTime, type Article } from '@/lib/articles'

export function BlogArticle({ article }: { article: Article }) {
  const related = articles.filter(item => item.slug !== article.slug).slice(0, 3)
  return <>
    <section className="service-intro section-wrap journal-heading"><nav aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/blog">Blog</Link><span>/</span><span>{article.category}</span></nav><p className="eyebrow">{article.category} · {readingTime(article)} MIN READ</p><h1>{article.title}</h1><p className="service-lead">{article.intro}</p><p className="journal-byline">THE HAIR MECHANIX JOURNAL</p></section>
    <div className="section-wrap journal-reading"><article className="journal-prose">{article.image && <figure className="mb-10"><img src={article.image.src} alt={article.image.alt} width={960} height={560} className="h-auto w-full rounded-sm" fetchPriority="high"/><figcaption className="mt-3 text-sm leading-relaxed">{article.image.caption}</figcaption></figure>}{article.sections.map((section, index) => <section id={`section-${index}`} key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}<Link className="text-link" href="/blog"><ArrowLeft size={16}/> BACK TO ALL ARTICLES</Link></article><aside className="journal-aside"><p className="eyebrow">IN THIS ARTICLE</p><nav aria-label="Article sections">{article.sections.map((section,index) => <a href={`#section-${index}`} key={section.title}>{section.title}</a>)}</nav><h2>Bring your ideas.<br/>We&apos;ll bring the expertise.</h2><p>Talk through your next look with a stylist at your local Hair Mechanix.</p><Link className="button button-orange" href="/locations">FIND YOUR SHOP <ArrowUpRight size={18}/></Link></aside></div>
    <section className="section-wrap journal-related"><p className="eyebrow">KEEP THE GOOD HAIR GOING</p><h2>MORE SHOP TALK.</h2><div className="journal-grid">{related.map(item => <article className="journal-card" key={item.slug}><p className="eyebrow">{item.category}</p><h3><Link href={`/blog/${item.slug}`}>{item.title}</Link></h3><Link href={`/blog/${item.slug}`} className="text-link">READ ARTICLE <ArrowUpRight size={16}/></Link></article>)}</div></section>
  </>
}
