import React, { Component, createRef, Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function withLogger(WrappedComponent) {
  return function LoggerWrapper(props) {
    console.log("Props for:", WrappedComponent.name, props);
    return <WrappedComponent {...props} />;
  };
}


class ClassBasedPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      error: null,
    };
    this.inputRef = createRef();
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data.slice(0, 5), loading: false });
      })
      .catch(() => {
        this.setState({ error: "Failed to fetch data", loading: false });
      });

    
    this.inputRef.current.focus();
  }

  handleRefresh = () => {
    this.setState({ loading: true });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data.slice(0, 5), loading: false });
      })
      .catch(() => this.setState({ error: "Failed to refresh", loading: false }));
  };

  render() {
    const { posts, loading, error } = this.state;

    return (
      <Fragment>
        <h3>Class Based Component - First 5 Posts</h3>
        <input ref={this.inputRef} placeholder="Focus via ref" />
        <button onClick={this.handleRefresh} style={{ marginLeft: "10px" }}>
          Refresh
        </button>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}


function FunctionBasedPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <Fragment>
      <h3>Function Based Component - Single Post</h3>
      {loading && <p>Loading...</p>}
      {post && (
        <div>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      )}
    </Fragment>
  );
}


function NotFound() {
  return (
    <div>
      <h3 style={{ color: "red" }}>404 - Page Not Found</h3>
    </div>
  );
}


function App() {
  const ClassWithLogger = withLogger(ClassBasedPosts);
  const FunctionWithLogger = withLogger(FunctionBasedPost);

  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h2>React Advanced Demo</h2>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "15px" }}>
            Class Based Posts
          </Link>
          <Link to="/post">Function Based Post</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ClassWithLogger />} />
          <Route path="/post" element={<FunctionWithLogger />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
