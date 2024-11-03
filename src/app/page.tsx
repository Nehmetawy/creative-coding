'use client';
import Test from '@/code/features/test';
import DefaultPageWrapper from '@/code/common/layouts/defpagewrapper';
import GameEngine from '@/code/features/gameengine';

function Home() {
  return (
    <DefaultPageWrapper>
      <div>
        <GameEngine />
      </div>
    </DefaultPageWrapper>
  );
}

export default Home;
