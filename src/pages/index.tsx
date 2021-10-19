import type { NextPage } from 'next';
import Link from 'next/link';
import { AncientWord } from '@/components/atoms/ancient-word';

const Home: NextPage = () => (
  <div style={{ padding: '20px' }}>
    I have some news, Jesus has died so you could live!
    <p>
      <sup>1</sup>This is a verse
    </p>
    <AncientWord origin="hebrew">אָלֶף־בֵּית עִבְרִי‎</AncientWord>
    <AncientWord origin="greek">Ἁρμαγεδών</AncientWord>
    <Link href="/" passHref>
      <a>Link to the Heaven</a>
    </Link>
    <br />
    <input type="text" placeholder="What God wants from you?" />
    <br />
    <input type="text" placeholder="What God wants from you?" disabled />
    <br />
    <button type="button">Save me God!</button>
    <br />
    <button type="button" disabled>
      Save me God!
    </button>
  </div>
);

export default Home;
