'use client';

import React, { useState, ChangeEvent } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import axios from 'axios';

// Define the Product type
interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
}

const Searchbar: React.FC = () => {
  const [query, setQuery] = useState<string>(''); // Search box ka text
  const [searchResults, setSearchResults] = useState<Product[]>([]); // To store search results with Product type
  const router = useRouter();

  // Fetch products based on the search query
  const fetchProducts = async (query: string) => {
    try {
      const groqQuery = `*[_type == "product" && title match "${query}*"] | order(_createdAt desc)[0...12] {
        _id,
        title,
        price,
        "imageUrl": productImage.asset->url
      }`;

      const url = `https://o22mqdox.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(groqQuery)}`;
      const response = await axios.get(url);

      // Store the search results in state with proper type
      setSearchResults(response.data.result as Product[]);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Update query and filter suggestions
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value === '') {
      setSearchResults([]); // Clear search results
      return;
    }

    fetchProducts(value); // Fetch products when user types something
  };

  // Handle suggestion click
  const handleSuggestionClick = (product: Product) => {
    setQuery(product.title);
    setSearchResults([]); // Clear search results
    router.push(`/product/${product._id}`); // Redirect to product detail page using product ID
  };

  return (
    <form className="w-full max-w-[400px] mx-auto relative bg-slate-50 pl-3 pr-3">
      <div className="relative">
        <input
          type="search"
          placeholder="Search"
          className="w-full p-2 rounded-md bg-white outline outline-4 outline-blue-500 text-black"
          value={query}
          onChange={(e) => handleSearch(e)} // Fetch products on input change
        />

        {/* Search Icon Button */}
        <button
          type="button"
          className="absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-full"
          onClick={() => {
            if (searchResults.length > 0) {
              // Redirect to the first product's detail page
              router.push(`/product/_id}`);
            }
          }}
        >
          <AiOutlineSearch className=" text-blue-500 text-[20px]" />
        </button>
      </div>

      {/* Show Search Results */}
      {searchResults.length > 0 && (
        <div className="absolute top-20 p-4 bg-black text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
          {searchResults.map((product) => (
            <span
              key={product._id}
              className="cursor-pointer hover:bg-slate-600 p-2"
              onClick={() => handleSuggestionClick(product)} // Go to product detail page on click
            >
              {product.title}
            </span>
          ))}
        </div>
      )}
    </form>
  );
};

export default Searchbar;
