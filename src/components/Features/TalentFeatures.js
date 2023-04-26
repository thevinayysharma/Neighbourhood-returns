import { Fragment } from "react";
import styles from "./Features.module.css";
import { Talentfeatures } from "../../constants/Talentfeatures";

const TalentFeatures = () => {
  return (
    <div className={`${styles.featuresWrapper} center`}>
        <div className={`${styles.featuresHeading} ${styles.featuresHeadingsec}`}>
        <p>For Talents: Start your Dream Life</p>
      </div>
      <div className={`${styles.featuresListWrapper} center`}>
        <div className={`${styles.featuresList} center`}>
          {Talentfeatures.map(({ feature, description, image }) => {
            return (
              <div className={`${styles.featureDiv} center`}>
                <Fragment>
                  <div className={styles.feature}>
                    <p>{feature}</p>
                  </div>
                  <div className={styles.featureDescription}>
                    <p>{description}</p>
                  </div>
                  <div>
                    <img className={styles.featureImg} src={image} alt="img" />
                  </div>
                </Fragment>
              </div>
            );
          })}
        </div>
      </div>
      <button className={styles.shopBtn}>Get started with Financial Buddy</button>
      <hr className={styles.line} />
    </div>
  );
};

export default TalentFeatures;
