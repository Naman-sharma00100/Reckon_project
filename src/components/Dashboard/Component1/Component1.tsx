import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component1.module.css';

interface Props {
  className?: string;
  classes?: {
    logo1?: string;
    root?: string;
  };
}
/* @figmaId 49:230 */
export const Component1: FC<Props> = memo(function Component1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.logo1 || ''} ${classes.logo1}`}></div>
      <div className={classes.agro}>Agro</div>
      <div className={classes.vision}>Vision</div>
    </div>
  );
});
