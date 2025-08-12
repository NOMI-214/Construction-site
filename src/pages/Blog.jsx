import React from "react";
import { Link } from "react-router-dom";
import "../styles/blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const Blog = () => {
  // Define blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Google inks pact for new 35-storey office",
      category: "Travel, Lifestyle",
      date: "August 8, 2025",
      image: "/images/gallery/project1.png.webp",
      excerpt:
        "Discover the latest innovations in modern construction techniques and sustainable building practices.",
      author: "John Doe",
    },
    {
      id: 2,
      title: "Sustainable Building Materials",
      category: "Materials",
      date: "August 7, 2025",
      image: "/images/gallery/project2.png.webp",
      excerpt:
        "Exploring eco-friendly and sustainable building materials for modern construction projects.",
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "Safety First: Construction Site Practices",
      category: "Safety",
      date: "August 6, 2025",
      image: "/images/gallery/project3.png.webp",
      excerpt:
        "Essential safety practices and protocols for modern construction sites.",
      author: "Mike Johnson",
    },
  ];

  return (
    <div className="blog-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-5 mb-lg-0">
            {blogPosts.map((post) => (
              <div className="single-blog" key={post.id}>
                <div className="blog-img">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-date">
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-author">
                      <FontAwesomeIcon icon={faUser} /> {post.author}
                    </span>
                    <span className="blog-comments">
                      <FontAwesomeIcon icon={faComments} /> 0 Comments
                    </span>
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="read-more-btn">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="blog-sidebar">
              {/* Search Widget */}
              <div className="widget search-widget">
                <div className="search-form">
                  <input type="text" placeholder="Search..." />
                  <button type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </div>

              {/* Categories Widget */}
              <div className="widget categories-widget">
                <h4 className="widget-title">Categories</h4>
                <ul className="categories-list">
                  <li>
                    <Link to="#">Business Analysis</Link>
                  </li>
                  <li>
                    <Link to="#">Construction</Link>
                  </li>
                  <li>
                    <Link to="#">Project Management</Link>
                  </li>
                  <li>
                    <Link to="#">Contracting</Link>
                  </li>
                  <li>
                    <Link to="#">Engineering</Link>
                  </li>
                  <li>
                    <Link to="#">Residential</Link>
                  </li>
                  <li>
                    <Link to="#">Green Building</Link>
                  </li>
                </ul>
              </div>

              {/* Recent Posts Widget */}
              <div className="widget recent-posts-widget">
                <h4 className="widget-title">Recent Posts</h4>
                <div className="recent-posts">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div className="recent-post" key={post.id}>
                      <div className="recent-post-img">
                        <img src={post.image} alt={post.title} />
                      </div>
                      <div className="recent-post-content">
                        <h5>
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h5>
                        <span className="post-date">{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags Widget */}
              <div className="widget tags-widget">
                <h4 className="widget-title">Tags</h4>
                <div className="tag-cloud">
                  <Link to="#" className="tag">
                    Construction
                  </Link>
                  <Link to="#" className="tag">
                    Building
                  </Link>
                  <Link to="#" className="tag">
                    Architecture
                  </Link>
                  <Link to="#" className="tag">
                    Design
                  </Link>
                  <Link to="#" className="tag">
                    Engineering
                  </Link>
                  <Link to="#" className="tag">
                    Safety
                  </Link>
                  <Link to="#" className="tag">
                    Materials
                  </Link>
                  <Link to="#" className="tag">
                    Planning
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
