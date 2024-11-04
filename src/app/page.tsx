'use client';
import Test from '@/code/features/test';
import DefaultPageWrapper from '@/code/common/layouts/defpagewrapper';
import GameEngine from '@/code/features/gameengine';

function Home() {
  return (
    <DefaultPageWrapper>
      <div>
        <Test />
      </div>
    </DefaultPageWrapper>
  );
}

export default Home;
