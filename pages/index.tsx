import Head from "next/head";
import homeStyles from "@/styles/Home.module.css";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "@/posts/lib/post";
import Link from "next/link";

const Home = ({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) => {
  return (
    <>
      <Head>
        <title>Yonghee An</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[Yonghee An Introduction]</p>
        <p>[This is a website]</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.headingMd}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          Blog
          {allPostsData.map(({ id, title, date }) => (
            <li className={homeStyles.listitem} key={id}>
              <Link href={"/posts/${id}"}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={homeStyles.lightText}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
