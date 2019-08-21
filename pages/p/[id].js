import fetch from 'isomorphic-unfetch';

import Layout from '../../components/MyLayout';

const Post = (props) => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<\/?[a-z]+>/g, '')}</p>
    <img src={props.show.image.medium} />
  </Layout>
);

Post.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  /*
  Will be shown on client but not on server

  When we click on a link wrapped with the Next.js <Link> component,
  the page transition takes place in the browser,
  without making a request to the server.
  */
  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
