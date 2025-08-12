import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/latestnews.css';
import newsImage1 from '../images/gallery/project1.png.webp';
import newsImage2 from '../images/gallery/project2.png.webp';

const LatestNews = () => {
  const newsItems = [
    {
      id: 1,
      title: "Footprints In Time is perfect House In Kurashiki",
      category: "Project News",
      date: "24 Nov",
      image: newsImage1,
      excerpt: "Discover how our latest residential project showcases innovative design and sustainable construction practices."
    },
    {
      id: 2,
      title: "Modern Architecture and Sustainable Building Solutions",
      category: "Industry News",
      date: "18 Nov",
      image: newsImage2,
      excerpt: "Exploring the latest trends in modern architecture and how we're implementing sustainable building solutions."
    }
  ];

  return (
    <section className="section latest-news-section">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Latest News</p>
          <h2 className="section-title">LATEST NEWS</h2>
        </div>
        
        <div className="news-grid">
          {newsItems.map((news) => (
            <article key={news.id} className="news-card">
              <div className="news-image image-hover">
                <img src={news.image} alt={news.title} />
                <div className="news-date">
                  <span>{news.date}</span>
                </div>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="news-category">{news.category}</span>
                </div>
                <h3 className="news-title">
                  <Link to={`/news/${news.id}`}>{news.title}</Link>
                </h3>
                <p className="news-excerpt">{news.excerpt}</p>
                <Link to={`/news/${news.id}`} className="read-more-link">
                  READ MORE <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews; 