// CategoryTag.js
import React from 'react';

const Filter = ({ categories, tags, onFilter }) => {
  return (
    <div>
      <h3>Categories</h3>
      <ul>
        {categories.map(category => (
          <li key={category} onClick={() => onFilter('category', category)}>
            {category}
          </li>
        ))}
      </ul>
      <h3>Tags</h3>
      <ul>
        {tags.map(tag => (
          <li key={tag} onClick={() => onFilter('tag', tag)}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
