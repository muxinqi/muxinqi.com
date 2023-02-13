import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "iOS Developer",
    Svg: require("@site/static/img/undraw_mobile_development.svg").default,
    description: <>I started mobile development during my internship and still enjoy it now.</>,
  },
  {
    title: "Hope it can be helpful to others",
    Svg: require("@site/static/img/undraw_add_notes.svg").default,
    description: (
      <>
        I'll try to document the ways that have helped me to improve my quality of life, as a memo for myself, or even
        help others.
      </>
    ),
  },
  {
    title: "Being curious about the world",
    Svg: require("@site/static/img/undraw_scooter.svg").default,
    description: <>Trying to get started in Brazilian Jiu-Jitsu, improve foreign language skills, etc.</>,
  },
]

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
