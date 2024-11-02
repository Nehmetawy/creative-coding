import { ReactNode } from 'react';
import { ScrollArea } from '@/code/common/components';
import SideBarMenu from '@/code/blocks/menu';

type props = {
  children?: ReactNode | ReactNode[];
};

function AdminLayoutA({ children }: props) {
  return (
    <div className="bg-noise bg-sizeNoise bg-pink grid h-screen grid-cols-deflayoutopen items-stretch justify-stretch gap-0 tablet:grid-cols-deflayoutclose">
      <ScrollArea orientation="vertical" contClass="pl-2 py-2 text-white">
        <SideBarMenu />
      </ScrollArea>
      <ScrollArea
        orientation="vertical"
        rootClass="border bg-dot-pattern bg-square10 bg-white rounded-md"
        contClass="p-2"
      >
        {children}
      </ScrollArea>
    </div>
  );
}
export default AdminLayoutA;
