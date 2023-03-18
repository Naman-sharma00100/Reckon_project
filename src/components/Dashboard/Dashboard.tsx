import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Component1 } from './Component1/Component1';
import { Component2 } from './Component2/Component2';
import { Component3 } from './Component3/Component3';
import classes from './Dashboard.module.css';

interface Props {
  className?: string;
}
/* @figmaId 59:212 */
export const Dashboard: FC<Props> = memo(function Dashboard(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.home}>Home</div>
      <div className={classes.features}>Features</div>
      <div className={classes.pricing}>Pricing</div>
      <div className={classes.aboutUs}>About us</div>
      <Component1 className={classes.component1} classes={{ logo1: classes.logo1 }} />
      <div className={classes.user}>User</div>
      <Component2 className={classes.component2} />
      <Component3 className={classes.component3} />
      <div className={classes.rectangle356}></div>
      <div className={classes.activePlanDetails}>
        <div className={classes.textBlock}>Active Plan Details</div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
      <div className={classes.theFeaturesInYourActivePlanAre}>The features in your active plan are-</div>
      <div className={classes.rectangle362}></div>
      <div className={classes._12}>
        <div className={classes.textBlock3}>12</div>
        <div className={classes.textBlock4}>
          <p></p>
        </div>
      </div>
      <div className={classes.weatherDataInfoSMS}>Weather data info SMS </div>
      <div className={classes.rsPlan}>Rs. Plan</div>
      <div className={classes.rectangle364}></div>
      <div className={classes._19}>19</div>
      <div className={classes.demoData}>
        <div className={classes.textBlock5}>Demo data</div>
        <div className={classes.textBlock6}>
          <p></p>
        </div>
      </div>
      <div className={classes.rectangle363}></div>
      <div className={classes._15}>
        <div className={classes.textBlock7}>15</div>
        <div className={classes.textBlock8}>
          <p></p>
        </div>
      </div>
    </div>
  );
});
