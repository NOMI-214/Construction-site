import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/singleblog.css";
import BlogHero from "../components/BlogHero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faComments,
  faSearch,
  faReply,
} from "@fortawesome/free-solid-svg-icons";

const SingleBlog = () => {
  const { id } = useParams();

  // Sample blog data - in a real app, this would come from props or API
  const blogPost = {
    id: id,
    title:
      "Second divided from form fish beast made every of seas all gathered us saying he our",
    category: "Travel, Lifestyle",
    commentsCount: 3,
    image: "/images/gallery/project1.png.webp",
    content: [
      "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower.",
      "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower.",
    ],
    quote:
      "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower.",
    author: {
      name: "Harvard Milan",
      bio: "Second divided from form fish beast made. Every of seas all gathered use saying you're, he our dominion twon Second divided from",
      avatar: "/images/Team/team1.png.webp",
    },
  };

  const comments = [
    {
      id: 1,
      author: "Emily Blake",
      date: "December 4, 2024 at 3:12 pm",
      content:
        "This blog post truly opened my eyes to the vital aspects of urban planning in the construction sector. Would love to read more content like this!",
      avatar: "/images/Team/team1.png.webp",
    },
    {
      id: 2,
      author: "Betty Blue",
      date: "December 4, 2024 at 3:12 pm",
      content:
        "This blog post truly opened my eyes to the vital aspects of urban planning in the construction sector. Would love to read more content like this!",
      avatar: "/images/Team/team2.png.webp",
    },
    {
      id: 3,
      author: "Emily West",
      date: "December 4, 2024 at 3:12 pm",
      content:
        "This blog post truly opened my eyes to the vital aspects of urban planning in the construction sector. Would love to read more content like this!",
      avatar: "/images/Team/team3.png.webp",
    },
  ];

  // Sample recent posts data
  const recentPosts = [
    {
      id: 1,
      title: "From life was you fish...",
      date: "January 12, 2025",
      image: "/images/gallery/project1.png.webp",
    },
    {
      id: 2,
      title: "The amazing construction technology...",
      date: "January 10, 2025",
      image: "/images/gallery/project2.png.webp",
    },
    {
      id: 3,
      title: "Building sustainable futures...",
      date: "January 8, 2025",
      image: "/images/gallery/project3.png.webp",
    },
  ];

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Handle comment submission logic here
    console.log("Comment submitted");
  };

  const handleReply = (commentId) => {
    // Handle reply logic here
    console.log("Reply to comment:", commentId);
  };

  return (
    <>
      <BlogHero />
      <div className="single-blog-area section-padding">
        <div className="container">
          <div className="blog-layout">
            <div className="blog-main">
              <article className="blog-post-details">
                <div className="post-img">
                  <img src={blogPost.image} alt={blogPost.title} />
                </div>
                <div className="post-content">
                  <h1>{blogPost.title}</h1>
                  <div className="post-meta">
                    <Link to="/">
                      <FontAwesomeIcon icon={faUser} /> {blogPost.category}
                    </Link>
                    <Link to="/">
                      <FontAwesomeIcon icon={faComments} />{" "}
                      {blogPost.commentsCount.toString().padStart(2, "0")}{" "}
                      Comments
                    </Link>
                  </div>
                  <div className="post-text">
                    {blogPost.content.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}

                    <blockquote>
                      <p>{blogPost.quote}</p>
                    </blockquote>

                    <p>
                      MCSE boot camps have its supporters and its detractors.
                      Some people do not understand why you should have to spend
                      money on boot camp when you can get the MCSE study
                      materials yourself at a fraction of the camp price.
                      However, who has the willpower.
                    </p>
                  </div>
                </div>

                <div className="post-author">
                  <div className="author-img">
                    <img
                      src={blogPost.author.avatar}
                      alt={blogPost.author.name}
                    />
                  </div>
                  <div className="author-info">
                    <h4>{blogPost.author.name}</h4>
                    <p>{blogPost.author.bio}</p>
                  </div>
                </div>

                <div className="comments-area">
                  <h4>{comments.length} Comments</h4>
                  {comments.map((comment) => (
                    <div className="comment" key={comment.id}>
                      <div className="comment-avatar">
                        <img src={comment.avatar} alt={comment.author} />
                      </div>
                      <div className="comment-content">
                        <h5>{comment.author}</h5>
                        <span>{comment.date}</span>
                        <p>{comment.content}</p>
                        <button
                          className="reply-btn"
                          onClick={() => handleReply(comment.id)}
                        >
                          <FontAwesomeIcon icon={faReply} /> Reply
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="leave-comment">
                  <h4>Leave a Reply</h4>
                  <form className="comment-form" onSubmit={handleCommentSubmit}>
                    <textarea
                      placeholder="Write Comment"
                      required
                      rows="5"
                    ></textarea>
                    <div className="form-inputs">
                      <input type="text" placeholder="Name" required />
                      <input type="email" placeholder="Email" required />
                      <input type="url" placeholder="Website" />
                    </div>
                    <button type="submit" className="submit-btn">
                      <span>SEND MESSAGE</span>
                    </button>
                  </form>
                </div>
              </article>
            </div>

            <div className="blog-sidebar">
              <div className="single-sidebar">
                <form
                  className="search-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input type="text" placeholder="Search Keywords" />
                  <button type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </form>
              </div>

              <div className="single-sidebar">
                <h4 className="widget-title">Category</h4>
                <ul className="cat-list">
                  <li>
                    <Link to="/category/construction">Construction (37)</Link>
                  </li>
                  <li>
                    <Link to="/category/architecture">Architecture (10)</Link>
                  </li>
                  <li>
                    <Link to="/category/technology">
                      Modern technology (03)
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/materials">
                      Building Materials (11)
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/design">Design Inspiration (21)</Link>
                  </li>
                  <li>
                    <Link to="/category/safety">Safety & Health (09)</Link>
                  </li>
                </ul>
              </div>

              <div className="single-sidebar">
                <h4 className="widget-title">Recent Post</h4>
                <div className="recent-posts">
                  {recentPosts.map((post) => (
                    <div className="recent-post-item" key={post.id}>
                      <img src={post.image} alt={post.title} />
                      <div className="recent-post-text">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        <p>{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="single-sidebar">
                <h4 className="widget-title">Tag Clouds</h4>
                <div className="tag-cloud">
                  {[
                    "construction",
                    "architecture",
                    "building",
                    "design",
                    "engineering",
                    "safety",
                    "materials",
                    "planning",
                  ].map((tag) => (
                    <Link to={`/tag/${tag}`} key={tag}>
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="single-sidebar">
                <h4 className="widget-title">Instagram Feeds</h4>
                <div className="instagram-feeds">
                  <div className="instagram-grid">
                    {[1, 2, 3, 4, 5, 6].map((index) => (
                      <Link to="/" key={index}>
                        <img
                          src={`/images/gallery/project${index}.png.webp`}
                          alt={`Instagram post ${index}`}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="single-sidebar">
                <h4 className="widget-title">Newsletter</h4>
                <form
                  className="newsletter-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log("Newsletter subscription submitted");
                  }}
                >
                  <input type="email" placeholder="Enter email" required />
                  <button type="submit" className="btn">
                    SUBSCRIBE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
