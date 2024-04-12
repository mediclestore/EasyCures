import React from 'react';
import './Blog.css'; // Assuming your styles are in a file called Blog.css

function BlogPost(props) {
  return (
    <section className="blog-post">
        <h2>{props.title}</h2>
      <p>{props.content}</p>
    </section>
  );
}

function BlogPage() {
  const [posts, setPosts] = React.useState([]); // State to store blog posts

  // Simulate fetching data (replace with your actual data fetching logic)
  React.useEffect(() => {
    const blogData = [
      { title: 'Unveiling the Future: A Review of "The Inevitable" by Kevin Kelly', 
      content: `In Kevin Kelly's thought-provoking book, "The Inevitable," he dives deep into the technological advancements shaping our future. From the rise of artificial intelligence to the potential of bioengineering, Kelly paints a vivid picture of a rapidly evolving world.This book resonated with me because of [mention a specific reason, e.g., my interest in AI or my curiosity about biohacking].Throughout the book, Kelly explores ten inevitable trends that will transform our lives. He discusses how these trends will impact everything from our work and communication to our healthcare and entertainment.One of the most fascinating concepts Kelly explores is the idea of "cognitive surplus." He argues that as technology automates many tasks, humans will have more time and brainpower to dedicate to creative pursuits.While Kelly paints a generally optimistic picture of the future, he also acknowledges the potential challenges that come with technological advancements. He discusses the importance of ethical considerations and responsible development as we navigate this new frontier.Overall, "The Inevitable" is a thought-provoking read that will leave you pondering the future of humanity. It's a must-read for anyone interested in technology and its impact on our world.` },
      { title: 'A Practical Guide to Sustainable Weight Loss', 
      content: `Losing weight can feel like climbing a mountain – challenging, demanding, and sometimes discouraging. But just like with any climb, with the right approach and mindset, you can reach the summit and achieve your weight loss goals. Here, we'll explore some practical strategies that prioritize sustainability and long-term health:
      From "Diet" to "Lifestyle Change": Ditch quick fixes and fad diets. Focus on building healthy habits you can maintain for the long haul. This includes eating nutritious foods you enjoy, incorporating regular physical activity, and getting enough sleep.
      From "Restriction" to "Balance": Deprivation often leads to cravings and rebounds. Aim for balanced meals with a variety of nutrient-rich foods. Allow yourself occasional treats in moderation.
      Building Sustainable Habits:      `},
     
    ];
    setPosts(blogData);
  }, []);

  return (
    <div className="blog-container">
      <header>
        <h1>Health Related Blogs</h1>
      </header>
      <main>
        {posts.map((post) => (
          <BlogPost key={post.title} title={post.title} content={post.content} />
        ))}
      </main>
      <footer>
        <p>&copy; 2024 My Blog</p>
      </footer>
    </div>
  );
}

export default BlogPage;
