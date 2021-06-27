import React, { Component } from "react";
 
class ArticleItems extends Component {
  createArticles(article) {
    return <li key={article.key}>{article.text}</li>
  }
 
  render() {
    var articleEntries = this.props.entries;
    var listArticles = articleEntries.map(this.createArticles);
 
    return (
        <ul className="theList">
            {listArticles}
        </ul>
    );
  }
};
 
export default ArticleItems;