import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { projects, type Project } from 'data/projects';
import { about } from 'data/about';
import ProjectDetail from 'components/ProjectDetail';

type ProjectPageProps = {
  project: Project;
};

const ProjectPage: NextPage<ProjectPageProps> = ({ project }) => {
  const desc = project.shortDescription || project.description.slice(0, 160);
  const ogImage = project.images?.[0] || '/avatar.jpg';
  const title = `${project.title} – ${about.name}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={ogImage} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareSourceCode',
              name: project.title,
              author: { '@type': 'Person', name: about.name },
              programmingLanguage: project.tech?.join(', '),
              url: project.repoUrl || undefined,
              description: desc,
            }),
          }}
        />
      </Head>
      <ProjectDetail project={project} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ProjectPageProps> = async (context) => {
  const slug = context.params?.slug as string;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
};

export default ProjectPage;