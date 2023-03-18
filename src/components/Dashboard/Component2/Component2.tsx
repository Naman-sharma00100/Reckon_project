import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component2.module.css';
import { Ellipse77Icon } from './Ellipse77Icon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 49:237 */
export const Component2: FC<Props> = memo(function Component2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ellipse77}>
        <Ellipse77Icon className={classes.icon} />
      </div>
      <div className={classes.n}>N</div>
    </div>
  );
});
