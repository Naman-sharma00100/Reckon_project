import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component3.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 59:164 */
export const Component3: FC<Props> = memo(function Component3(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle356}></div>
      <div className={classes.userDashboard}>User Dashboard</div>
      <div className={classes.weatherData}>Weather Data</div>
      <div className={classes.feature2}>Feature-2</div>
      <div className={classes.feature3}>Feature-3</div>
      <div className={classes.line2}></div>
      <div className={classes.subscribedToOurWeatherDataAndW}>
        Subscribed to our Weather data and Weather Alert service.
      </div>
      <div className={classes.loremIpsumDolorSitAmetConsecte}>
        <ul className={classes.list}>
          <li>
            <div className={classes.textBlock}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis duis adipiscing sed risus fames. Vel
              ultricies duis leo diam purus tristique lectus auctor duis. Suspendisse commodo lobortis ut sit sed nunc
              id. Quam dolor, eu semper diam, id netus massa nisl nunc.{' '}
            </div>
          </li>
          <li>
            <div className={classes.textBlock2}>
              Metus eget integer aliquam adipiscing tortor enim tortor nunc. Quam pharetra augue tellus pellentesque
              porttitor mattis. Viverra elit non suspendisse lectus facilisi vitae facilisis ultrices.
            </div>
          </li>
          <li>
            <div className={classes.textBlock3}>
              <p></p>
            </div>
          </li>
        </ul>
      </div>
      <div className={classes.rectangle362}></div>
      <div className={classes.rectangle364}></div>
      <div className={classes._12}>
        <div className={classes.textBlock4}>12</div>
        <div className={classes.textBlock5}>
          <p></p>
        </div>
      </div>
      <div className={classes._10}>10</div>
      <div className={classes.requestsRemaining}>Requests Remaining</div>
      <div className={classes.daysRemainingInCurrentSubscrip}>Days Remaining in current subscription Plan</div>
    </div>
  );
});
