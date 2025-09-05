'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

// Sample photography data - you can replace with your actual photos
const photographyData = [
  {
    id: 1,
    title: "Urban Landscape",
    category: "City",
    imageUrl: "/photos/000011880009.jpg",
    description: "Capturing the essence of city life through architectural photography."
  },
  {
    id: 2,
    title: "Nature's Beauty",
    category: "Nature",
    imageUrl: "/photos/DSC_7516.png",
    description: "Exploring the natural world and its breathtaking landscapes."
  },
  {
    id: 3,
    title: "Portrait Series",
    category: "City",
    imageUrl: "/photos/000020410033.png",
    description: "Intimate portraits that tell stories through expressions."
  },
  {
    id: 4,
    title: "Abstract Forms",
    category: "Abstract",
    imageUrl: "/photos/IMG_3509.png",
    description: "Finding beauty in the abstract and unconventional."
  },
  {
    id: 5,
    title: "Street Photography",
    category: "City",
    imageUrl: "/photos/000032070028.jpg",
    description: "Documenting everyday moments in urban environments."
  },
  {
    id: 6,
    title: "Wildlife",
    category: "Nature",
    imageUrl: "/photos/DSC_8598.jpeg",
    description: "Capturing the raw beauty of wildlife in their natural habitat."
  },
  {
    id: 7,
    title: "City View",
    category: "City",
    imageUrl: "/photos/000032080012.jpg",
    description: "Capturing the raw beauty of wildlife in their natural habitat."
  },
  {
    id: 8,
    title: "Suburban",
    category: "City",
    imageUrl: "/photos/IMG_7825.jpeg",
    description: "."
  },
  {
    id: 9,
    title: "Traffic",
    category: "Abstract",
    imageUrl: "/photos/IMG_1817.jpeg",
    description: "."
  }
];

  const categories = ["All", "Nature", "Abstract", "City"];

export default function PhotographyPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof photographyData[0] | null>(null);

  const filteredPhotos = selectedCategory === "All" 
    ? photographyData 
    : photographyData.filter(photo => photo.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-hover/20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            Photography
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Capturing moments, emotions, and the beauty of the world through my lens
          </p>
        </div>
      </section>

      {/* Back to Home Button */}
      <div className="container mx-auto px-4 py-6">
        <Link 
          href="/" 
          className="inline-flex items-center text-accent hover:text-accent-hover transition-colors mb-8"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-accent text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Photo Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(photo)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                {photo.imageUrl ? (
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const nextSibling = target.nextSibling as HTMLElement;
                      if (nextSibling) {
                        nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                ) : null}
                <div 
                  className={`w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center ${
                    photo.imageUrl ? 'hidden' : 'block'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-gray-400 dark:text-gray-500 mb-2">
                      <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">Photo unavailable</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">{photo.title}</h3>
                  <p className="text-sm opacity-90">{photo.description}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-accent/80 rounded-full text-xs">
                    {photo.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Full Image View */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-2xl font-semibold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-gray-200">{selectedImage.description}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-accent rounded-full text-sm">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 