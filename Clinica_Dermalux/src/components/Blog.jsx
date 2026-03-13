import React from 'react';

const posts = [
  { 
    title: 'Cuidados com a pele no verão', 
    excerpt: 'Saiba como proteger sua pele durante a estação mais quente do ano.',
    date: '12 Mar 2024'
  },
  { 
    title: 'Tudo sobre acne', 
    excerpt: 'Causas, tratamentos e prevenção da acne em todas as idades.',
    date: '05 Mar 2024'
  },
  { 
    title: 'Rejuvenescimento facial', 
    excerpt: 'Conheça as técnicas mais modernas para rejuvenescer a pele.',
    date: '28 Fev 2024'
  }
];

const Blog = () => {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">CONTEÚDO</span>
          <h2 className="section-title">Blog</h2>
        </div>
        <div className="blog-grid">
          {posts.map((post, index) => (
            <div key={index} className="blog-card">
              <span className="blog-date">{post.date}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href="#blog" className="blog-link">Leia mais →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;