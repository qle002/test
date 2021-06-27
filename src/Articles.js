import React, { Component } from "react";
import ArticleItems from './ArticleItems'; 

class Articles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: []
          };

        this.addArticle = this.addArticle.bind(this);
    }

    addArticle (e) {
        if (this._inputElement.value !== "") {
            var newArticle = {
                text: this._inputElement.value,
                key: Date.now()
            };
         
            this.setState((prevState) => {
              return { 
                articles: prevState.articles.concat(newArticle) 
              };
            });
           
            this._inputElement.value = "";
        }
           
        console.log(this.state.items);
             
        e.preventDefault();
    }

    render() {
        return (
            <div className="articlesMain">
                <div>
                    <h1>Articles</h1>
                    <ArticleItems entries={this.state.articles} />
                </div>

                <div>
                    <h1>Add a new article</h1>
                    <form onSubmit={this.addArticle}>
                        <label>Title</label>
                        <input ref={(a) => this._inputElement = a}>
                        </input> <br/>
                        <button type="submit" style={{height: '30px', width : '60px'}}>SAVE</button>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Articles;