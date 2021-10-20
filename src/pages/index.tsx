import { useState } from 'react';
import { AncientWord } from '@/components/atoms/ancient-word';
import { StrongReference } from '@/components/atoms/strong-reference';
import { Verse } from '@/components/atoms/verse';
import { ALink } from '@/components/atoms/a-link';
import { ChapterHeader } from '@/components/atoms/chapter-header';
import { Button } from '@/components/atoms/button';
import { Input } from '@/components/atoms/input';
import { InputTypes } from '@/interfaces';

function Home(): JSX.Element {
  const [text, setText] = useState('');
  const [textarea, setTextarea] = useState('');

  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        gap: '30px',
        flexDirection: 'column',
      }}
    >
      <ChapterHeader reference="1 John 1" />
      <Verse number={1}>
        I have some news, Jesus has died so you could live!
      </Verse>
      <StrongReference origin="greek">716</StrongReference>
      <StrongReference origin="hebrew">716</StrongReference>
      <AncientWord origin="hebrew">אָלֶף־בֵּית עִבְרִי‎</AncientWord>
      <AncientWord origin="greek">Ἁρμαγεδών</AncientWord>
      <ALink href="/">Link to the Heaven</ALink>
      <Input
        label="Label"
        name="text"
        placeholder="placeholder"
        value={text}
        onChange={e => setText(e.target.value)}
        helperText="Helper text"
        disabled
        type={InputTypes.TEXT}
      />
      <Input
        label="Label"
        name="textarea"
        placeholder="placeholder"
        value={textarea}
        onChange={e => setTextarea(e.target.value)}
        type={InputTypes.TEXTAREA}
      />
      {/* select and checkbox */}
      <Button id="abutton" ariaLabel="arialabel">
        Save me God!
      </Button>
      <Button id="abutton" ariaLabel="arialabel" disabled>
        Save me God!
      </Button>
    </div>
  );
}

export default Home;
