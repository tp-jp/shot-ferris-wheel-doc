import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import Translate from "@docusaurus/Translate";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string | ReactNode;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: (
      <Translate
        id="homepage.features.physics.title"
        description="Title for realistic physics feature"
      >
        観覧車ルーレット
      </Translate>
    ),
    Svg: require("@site/static/img/undraw_amusement-park_j8fe.svg").default,
    description: (
      <>
        <Translate
          id="homepage.features.physics.description"
          description="Description for realistic physics feature"
        >
          ルーレットを回し、止まったショットグラスを飲む。
          バーやパーティーワールドに最適なゲームギミック。
        </Translate>
      </>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.easy.title"
        description="Title for easy setup feature"
      >
        かんたん導入
      </Translate>
    ),
    Svg: require("@site/static/img/undraw_exciting-news_96pg.svg").default,
    description: (
      <Translate
        id="homepage.features.easy.description"
        description="Description for easy setup feature"
      >
        UnityパッケージをインポートしてPrefabを配置するだけ。
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.crossplatform.title"
        description="Title for cross-platform feature"
      >
        PC/Quest対応
      </Translate>
    ),
    Svg: require("@site/static/img/undraw_programming_65t2.svg").default,
    description: (
      <>
        <Translate
          id="homepage.features.crossplatform.description"
          description="Description for cross-platform feature"
        >
          VRChatのPC版・Quest版の両方に対応。
          幅広いユーザーがワールドで一緒に楽しめます。
        </Translate>
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
