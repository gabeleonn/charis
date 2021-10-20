import { AncientWord } from '@/components/atoms/ancient-word';
import { StrongReference } from '@/components/atoms/strong-reference';
import { Verse } from '@/components/atoms/verse';
import { ALink } from '@/components/atoms/a-link';
import { ChapterHeader } from '@/components/atoms/chapter-header';

const Home = () => (
  <div style={{ padding: '20px' }}>
    <ChapterHeader reference="1 John 1" />
    <Verse number={1}>
      I have some news, Jesus has died so you could live!
    </Verse>
    <StrongReference origin="greek">716</StrongReference>
    <StrongReference origin="hebrew">716</StrongReference>
    <AncientWord origin="hebrew">אָלֶף־בֵּית עִבְרִי‎</AncientWord>
    <AncientWord origin="greek">Ἁρμαγεδών</AncientWord>
    <ALink href="/">Link to the Heaven</ALink>
    <input type="text" placeholder="What God wants from you?" />
    <input type="text" placeholder="What God wants from you?" disabled />
    <textarea name="dsad" id="dasda" rows={10} disabled />
    <button type="button">Save me God!</button>
    <button type="button" disabled>
      Save me God!
    </button>
  </div>
);

export default Home;
