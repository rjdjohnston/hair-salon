import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServiceShell } from '@/components/service-pages'
import { BlogArticle } from '@/components/blog-article'
import { articles, getArticle } from '@/lib/articles'
export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  return { title: article ? `${article.title} | Hair Mechanix` : 'Article not found', description: article?.intro }
}
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()
  return <ServiceShell><BlogArticle article={article}/></ServiceShell>
}
