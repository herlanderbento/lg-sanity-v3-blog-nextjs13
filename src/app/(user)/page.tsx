import { groq } from 'next-sanity';
import { previewData } from 'next/headers';
import PreviewSuspense from '../../components/PreviewSuspense';
import PreviewBlogList from '../../components/PreviewBlogList';
import { client } from '../../lib/sanity.client';
import BlogList from '../../components/BlogList';

const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;
export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role='status'>
            <p className='text-center text-lg animate-pulse'>
              Loading Preview Data...
            </p>
          </div>
        }>
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);

  return <BlogList posts={posts} />;
}
