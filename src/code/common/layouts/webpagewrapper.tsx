type props = {
  children?: React.ReactNode;
};
import { ScrollArea } from '@/code/common/components';

function WebPageWrapper({ children }: props) {
  return (
    <div className="grid h-screen grid-cols-1 grid-rows-1 items-stretch justify-stretch bg-pink bg-noise bg-sizeNoise">
      <ScrollArea orientation="vertical">{children}</ScrollArea>
    </div>
  );
}

export default WebPageWrapper;
