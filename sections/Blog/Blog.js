import {PostPreview} from '../../components';

import styles from './Blog.module.scss';

export default function Blog({posts}) {
  return (
    <section className={styles.container}>
      {posts.map(({title, coverImage, date, excerpt, author, slug}) => (
        <div className={styles.container}>
          <PostPreview
            title={title}
            coverImage={coverImage}
            date={date}
            excerpt={excerpt}
            author={author}
            slug={slug}
          />
        </div>
      ))}
      <button>See more</button>
    </section>
  );
}
