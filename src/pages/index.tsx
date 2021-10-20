import Head from 'next/head';
import { Scrollbars } from 'react-custom-scrollbars';
import { useState } from 'react';
import { AncientWord } from '@/components/atoms/ancient-word';
import { StrongReference } from '@/components/atoms/strong-reference';
import { Verse } from '@/components/atoms/verse';
import { ALink } from '@/components/atoms/a-link';
import { ChapterHeader } from '@/components/atoms/chapter-header';
import { Button } from '@/components/atoms/button';
import { Input } from '@/components/atoms/input';
import { DefinitionParsing } from '@/components/atoms/definition-parsing';

function Home(): JSX.Element {
  const [text, setText] = useState('');
  const [textarea, setTextarea] = useState('');

  return (
    <>
      <Head>
        <title>Bíblia Interlinear</title>
      </Head>
      <Scrollbars style={{ height: '100vh' }}>
        <div
          style={{
            padding: '200px',
            display: 'flex',
            gap: '30px',
            flexDirection: 'column',
          }}
        >
          <ChapterHeader reference="1 John 1" />
          <div style={{ width: '500px' }}>
            <Scrollbars style={{ height: '100px' }}>
              <Verse number={1}>
                I have some news, Jesus has died so you could live!
              </Verse>
              <Verse number={1}>
                I have some news, Jesus has died so you could live!
              </Verse>
              <Verse number={1}>
                I have some news, Jesus has died so you could live!
              </Verse>
              <Verse number={1}>
                I have some news, Jesus has died so you could live!
              </Verse>
              <Verse number={1}>
                I have some news, Jesus has died so you could live!
              </Verse>
              <Verse number={1}>
                I have some news, Jesus has died so you could live!
              </Verse>
              <Verse number={1}>
                I have some news, Jesus has died so you could live!
              </Verse>
              <Verse number={1}>
                I have some news, Jesus has died so you could live!
              </Verse>
              <Verse number={1}>
                I have some news, Jesus has died so you could live!
              </Verse>
            </Scrollbars>
          </div>
          <DefinitionParsing
            origin="greek"
            parsing="Personal / Relative Pronoun - Nominative Neuter Singular"
            wordAncient="Ὃ"
            wordTranslit="Ho"
          />
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
            type="text"
          />
          <Input
            label="Label"
            name="textarea"
            placeholder="placeholder"
            value={textarea}
            onChange={e => setTextarea(e.target.value)}
            type="textarea"
          />
          {/* select and checkbox and search */}
          <Button id="abutton" ariaLabel="arialabel">
            Save me God!
          </Button>
          <Button id="abutton" ariaLabel="arialabel" disabled>
            Save me God!
          </Button>
        </div>
      </Scrollbars>
    </>
  );
}

export default Home;
