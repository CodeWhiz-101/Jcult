'use client';

import { useParams } from 'next/navigation';
import { newsArticles } from '@/data/newsData';
import FadeUp from '@/components/animation/FadeUp';
import ImageReveal from '@/components/animation/ImageReveal';
import Link from 'next/link';
import { useEffect } from 'react';

export default function NewsArticlePage() {
  const params = useParams();
  const article = newsArticles.find(a => a.id === params.id);

  useEffect(() => {
    if (article?.externalLink) {
      window.location.href = article.externalLink;
    }
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-main pt-20">
        <div className="container-responsive py-16">
          <h1 className="text-4xl font-lora  text-primary mb-4">Article Not Found</h1>
          <Link href="/news" className="text-gold hover:underline">
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  if (article.externalLink) {
    return (
      <div className="min-h-screen bg-main pt-20">
        <div className="container-responsive py-16 text-center">
          <h1 className="text-2xl font-lora  text-primary mb-4">Redirecting...</h1>
          <p className="font-raleway text-secondary">If you are not redirected, <a href={article.externalLink} className="text-gold hover:underline">click here</a></p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">
        <FadeUp>
          <section className="py-8 md:py-12 lg:py-16">
            <div className="container-responsive max-w-4xl">
              <Link href="/news" className="text-sm font-raleway text-gold hover:underline mb-6 inline-block">
                ← Back to News
              </Link>
              
              <div className="mb-6">
                <span className="text-xs font-raleway font-semibold tracking-wider uppercase text-gold">
                  {article.category}
                </span>
                {article.source && (
                  <span className="text-xs font-raleway text-secondary ml-4">
                    Source: {article.source}
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-lora  text-green-700 mb-4 leading-tight">
                {article.title}
              </h1>

              <p className="text-sm font-raleway text-secondary mb-8">
                {article.date}
              </p>

              {article.sections?.map((section, index) => (
                <div key={index} className="mb-8">
                  {section.subtitle && (
                    <h2 className="text-2xl md:text-3xl font-lora  text-primary mb-6">
                      {section.subtitle}
                    </h2>
                  )}

                  {section.mediaType === 'youtube' && section.mediaUrl && (
                    <div className="mb-6 flex justify-center">
                      <div className="w-full max-w-3xl aspect-video">
                        <iframe
                          className="w-full h-full"
                          src={section.mediaUrl}
                          title="YouTube video"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  )}

                  {section.mediaType === 'image' && section.mediaUrl && (
                    <div className="mb-6 flex justify-center">
                      <div className="w-full max-w-3xl">
                        <ImageReveal 
                          src={section.mediaUrl}
                          alt={section.subtitle || article.title}
                          className="w-full h-64 md:h-96"
                        />
                      </div>
                    </div>
                  )}

                  {section.mediaType === 'pdf' && section.mediaUrl && (
                    <div className="mb-6 flex justify-center">
                      <a 
                        href={section.mediaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-gold text-charcoal font-raleway font-semibold hover:bg-primary hover:text-white transition-all"
                      >
                        Download PDF
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </a>
                    </div>
                  )}

                  {section.paragraph && (
                    <p className="text-base md:text-lg font-raleway text-main leading-relaxed">
                      {section.paragraph}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </FadeUp>

        <FadeUp delay={100}>
          <section className="py-8 md:py-12 bg-tertiary">
            <div className="container-responsive max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-lora  text-primary mb-6">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {newsArticles
                  .filter(a => a.id !== article.id)
                  .slice(0, 2)
                  .map(relatedArticle => (
                    <Link 
                      key={relatedArticle.id}
                      href={`/news/${relatedArticle.id}`}
                      className="card-hover p-6 bg-main border-l-2 border-gold"
                    >
                      <span className="text-xs font-raleway font-semibold tracking-wider uppercase text-gold mb-2 block">
                        {relatedArticle.category}
                      </span>
                      <h3 className="text-lg font-lora  text-primary mb-2">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-sm font-raleway text-secondary">
                        {relatedArticle.date}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </section>
        </FadeUp>
      </main>
    </div>
  );
}
