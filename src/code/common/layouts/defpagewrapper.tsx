import { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';

type props = {
  children?:
    | ReactElement[]
    | ReactElement
    | null
    | undefined
    | ReactNode
    | ReactNode[];
  screentype?: 'tab1' | 'tab2' | 'tab3' | 'tab4' | 'tab5';
  className?: string;
};

const screenClassMap = {
  tab1: 'max-w-screen-tab1',
  tab2: 'max-w-screen-tab2',
  tab3: 'max-w-screen-tab3',
  tab4: 'max-w-screen-tab4',
  tab5: 'max-w-screen-tab5',
};

function DefaultPageWrapper({
  children,
  className,
  screentype = 'tab3',
}: props) {
  const screenclass = screenClassMap[screentype];
  const classnames = clsx('pt-20 mx-auto w-full', screenclass, className);
  return (
    <div className="px-2 pb-40">
      <div className={classnames}>{children}</div>
    </div>
  );
}

export default DefaultPageWrapper;
