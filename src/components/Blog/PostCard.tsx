import { ArrowRight } from "lucide-react";

import Image from "next/image";
import { Post } from "@/interface/Post";
/* eslint-disable */
export function ArticleCard({ post }: { post: Post }) {
  const formatDate = (dateString: string): string => {
    try {
      return new Date(dateString).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    } catch (error) {
      console.warn("Format de date invalide:", dateString);
      return dateString;
    }
  };

  return (
    <article
      className=" backdrop-blur-lg rounded-2xl border border-blue-300/20 overflow-hidden hover:scale-105 transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-blue-500/20"
      role="article"
      aria-labelledby={`article-title-${post?.title?.rendered
        .replace(/\s+/g, "-")
        .toLowerCase()}`}
    >
      {/* En-tête avec image ou gradient */}
      <header className="relative">
        <div
          className={`aspect-video relative overflow-hidden ${
            !post.blog_post_layout_featured_media_urls.full
              ? `bg-gradient-to-br from-blue-600 to-orange-500`
              : ""
          }`}
        >
          {post.blog_post_layout_featured_media_urls.full ? (
            <>
              <Image
                src={post.blog_post_layout_featured_media_urls.full[0]}
                alt={post.blog_post_layout_featured_media_urls.full[0]}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                width={500}
                height={500}
                onError={(e) => {
                  // Fallback vers le gradient si l'image ne charge pas
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.classList.add(
                      `bg-gradient-to-br`,
                      "from-blue-600",
                      "to-orange-500"
                    );
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 bg-blue-900/30" />
          )}

          {/* Badge catégorie */}
          <div className="absolute bottom-4 left-4 z-10">
            <span
              className={`bg-orange-500 text-white px-3 py-1 rounded-full text-xs capitalize font-medium shadow-lg backdrop-blur-sm hover:bg-orange-600 transition-colors duration-200`}
              role="badge"
            >
              {Object.values(post.categories_names).map((cat, index) => (
                <span key={index}>{cat.name}</span>
              ))}
            </span>
          </div>
        </div>
      </header>

      {/* Contenu de l'article */}
      <div className="p-6">
        {/* Métadonnées */}
        <div
          className="flex items-center text-blue-500 text-sm mb-3"
          role="group"
          aria-label="Métadonnées de l'article"
        >
          <time dateTime={post.date} className="flex items-center">
            {formatDate(post.date)}
          </time>
        </div>

        {/* Titre */}
        <h3
          id={`article-title-${post?.title?.rendered
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
          className="text-lg font-bold text-orange-500 mb-3  transition-colors duration-200 leading-tight"
        >
          {post.title.rendered}
        </h3>

        {/* Extrait */}

        <div
          className="text-black text-sm leading-relaxed mb-4 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        {/* Lien de lecture */}
        <a
          href={post.link}
          target="_blanck"
          className="inline-flex items-center text-orange-500 text-sm font-medium transition-colors duration-200 group/link"
          aria-label={`Lire l'article complet: ${post.title.rendered}`}
        >
          <span>Lire la suite</span>
          <ArrowRight
            className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200"
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
}
