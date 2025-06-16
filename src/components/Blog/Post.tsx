"use client";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Post } from "@/interface/Post";
import ArticleCarousel from "./ArticleCarousel";

export type Article = {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
  link: string;
  gradient: string;
  imageUrl?: string;
  imageAlt?: string;
};

function ArticlesSection() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://gateofafrica.com/wp-json/wp/v2/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement des articles :", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Derniers Articles
        </h2>
        <p className="text-black text-lg">
          Découvrez nos analyses et reportages les plus récents
        </p>
      </div>

      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {posts &&
          posts.map((post) => <ArticleCard key={post.id} post={post} />)}
      </div> */}

      <ArticleCarousel posts={posts} loading={loading} />

      <div className="text-center">
        {loading ? (
          <div className="bg-gradient-to-r from-gray-700 to-gray-800 animate-pulse text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center mx-auto w-64 h-12" />
        ) : (
          <a
            href="https://gateofafrica.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-red-700 hover:from-blue-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform  hover:shadow-2xl flex items-center justify-center mx-auto group"
          >
            Voir tous les articles
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        )}
      </div>
    </section>
  );
}

export default ArticlesSection;
