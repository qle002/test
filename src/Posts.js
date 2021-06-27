import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./fetchData";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {

    const { posts } = this.props;

    return (
      <div>
        <h1>API Posts</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { posts } = state.posts;
  return {
    posts
  };
};

export default connect(
  mapStateToProps,
  {
    fetchPosts,
  }
)(Posts);