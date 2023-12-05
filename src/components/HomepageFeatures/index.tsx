import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Who am I?',
    Svg: require('@site/static/img/undraw_into_the_night.svg').default,
    description: (
      <>
        I'm <strong>Xinqi Mu</strong>, based in Chaoyang, Beijing.
        Currently, I work as an iOS software developer.
      </>
    ),
  },
  {
    title: 'What\'s in here?',
    Svg: require('@site/static/img/undraw_content.svg').default,
    description: (
      <>
        <strong><Link to="/notes/intro">Notes</Link>:</strong> Personal memo, useful & reusable
        <br/>
        <strong><Link to="/blog">Blog</Link>:</strong> Documenting life and interesting
        <div style={{ color: 'gray' }}>To be continued...</div>
      </>
    ),
  },
  {
    title: 'Always exploring!',
    Svg: require('@site/static/img/undraw_explore.svg').default,
    description: (
      <>
        The world is vast, with countless interesting things waiting to be discovered.
        I'm already on the road!
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
