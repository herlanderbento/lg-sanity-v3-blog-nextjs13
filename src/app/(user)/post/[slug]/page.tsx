import Image from 'next/image';
import { groq } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import { client } from '../../../../lib/sanity.client';
import urlFor from '../../../../lib/urlFor';
import { RichTextComponents } from '../../../../components/RichTextComponents';

type PostDefaultProps = {
  params: {
    slug: string;
  };
};

export const revalidate = 60 //revalidate this page every 60 seconds

export async function generateStaticParams() {
  const query = groq`
    *[_type=='post']{
      slug
    }
  `;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({ slug }));
}

export default async function Post({ params: { slug } }: PostDefaultProps) {
  const query = groq`
      *[_type=='post' && slug.current == $slug][0]{
        ...,
        author->,
        categories[]->
      }  
    `;

  const post: Post = await client.fetch(query, { slug });

  return (
    <article className='px-10 pb-28'>
      <section className='space-y-2 border border-[#f7ab0a] text-white'>
        <div
          className='relative min-h-56 flex flex-col md:flex-row justify-between
        '>
          <div className='absolute top-0 w-full opacity-10 blur-sm p-10'>
            <Image
              className='object-cover object-center mx-auto'
              src={urlFor(post.mainImage).url()}
              alt='image'
              fill
            />
          </div>

          <section className='p-5 bg-[#f7ab0a] w-full'>
            <div className='flex flex-col items-start md:flex-row justify-between gap-y-5'>
              <div className=''>
                <h1 className='text-4xl font-extrabold'>{post?.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString('en-Us', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>

              <div className='flex items-center space-x-2'>
                <Image
                  className='rounded-full'
                  src={urlFor(post.author?.image).url()}
                  alt={'avatar'}
                  height={40}
                  width={40}
                />

                <div className='w-64'>
                  <h3 className='text-lg font-bold'>{post.author?.name}</h3>
                  <div>{post.author?.bio[0].children[0].text}</div>
                </div>
              </div>
            </div>
            <div className=''>
              <h2 className='italic pt-10'>{post.description}</h2>
              <div className='flex items-center  justify-end mt-auto space-x-2'>
                {post.categories.map((category) => (
                  <div className='bg-gray-800 text-center text-white px-3 py-1 rounded-full text-sm font-semibold mt-4'>
                    <p>{category?.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );
}
