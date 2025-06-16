export function ArticleCardSkeleton() {
  return (
    <article className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden  shadow-xl">
      {/* En-tête */}
      <header className="relative">
        <div className="aspect-video bg-gray-800/30 w-full relative overflow-hidden">
          <div className="absolute bottom-4 left-4 h-6 w-20 bg-gray-700 rounded-full" />
        </div>
      </header>

      {/* Contenu */}
      <div className="p-6">
        {/* Métadonnées */}
        <div className="flex items-center text-sm mb-3 space-x-2">
          <div className="h-4 w-24 bg-gray-700 rounded" />
          <div className="h-1 w-1 bg-gray-500 rounded-full" />
          <div className="h-4 w-12 bg-gray-700 rounded" />
        </div>

        {/* Titre */}
        <div className="h-5 bg-gray-600 rounded mb-3 w-3/4" />

        {/* Extrait */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-700 rounded w-5/6" />
          <div className="h-4 bg-gray-700 rounded w-2/3" />
        </div>

        {/* Lire la suite */}
        <div className="h-4 w-24 bg-gray-500 rounded" />
      </div>
    </article>
  );
}
