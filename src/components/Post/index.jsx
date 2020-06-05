import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment';
import './style.scss';

class Post extends React.Component {
  render() {
    const {
      title,
      date,
      category,
      description,
      tags,
    } = this.props.data.node.frontmatter;
    const { slug, categorySlug, tagSlugs } = this.props.data.node.fields;

    return (
      <div className="post">
        <div className="post__meta">
          <time
            className="post__meta-time"
            dateTime={moment(date).format('MMMM D, YYYY')}
          >
            {moment(date).format('MMMM D, YYYY')}
          </time>
          <span className="post__meta-divider" />
          <span className="post__meta-category" key={categorySlug}>
            <Link to={categorySlug} className="post__meta-category-link">
              {category}
            </Link>
          </span>
        </div>
        <h2 className="post__title">
          <Link className="post__title-link" to={slug}>
            {title}
          </Link>
        </h2>
        <p className="post__description">{description}</p>
        <div className="post-single__tags">
          <ul className="post-single__tags-list">
            {tags &&
              tags.map((tag, i) => (
                <li className="post-single__tags-list-item" key={tag}>
                  <Link
                    to={tagSlugs[i]}
                    className="post-single__tags-list-item-link"
                  >
                    {tags[i]}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <Link className="post__readmore" to={slug}>
          Read
        </Link>
      </div>
    );
  }
}

export default Post;
