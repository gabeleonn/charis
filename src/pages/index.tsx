import Head from 'next/head';
import { useState } from 'react';

import { AncientWord } from '@/components/atoms/ancient-word';
import { StrongReference } from '@/components/atoms/strong-reference';
import { Verse } from '@/components/atoms/verse';
import { ALink } from '@/components/atoms/a-link';
import { ChapterHeader } from '@/components/atoms/chapter-header';
import { Button } from '@/components/atoms/button';
import { Input } from '@/components/atoms/input';
import { DefinitionParsing } from '@/components/atoms/definition-parsing';
import { SearchInput } from '@/components/atoms/search-input';
import { Checkbox } from '@/components/atoms/checkbox';
import { Select } from '@/components/atoms/select';
import { Logo } from '@/components/atoms/logo';

function Home(): JSX.Element {
  const [isChecked, setIsChecked] = useState(false);
  const [search, setSearch] = useState('');
  const [text, setText] = useState('');
  const [textarea, setTextarea] = useState('');

  const options = [
    { value: 'test', label: 'test' },
    { value: 'test1', label: 'test1' },
    { value: 'test2', label: 'test2' },
  ];

  return (
    <>
      <Head>
        <title>Bíblia Interlinear</title>
      </Head>

      <div
        style={{
          padding: '200px',
          display: 'flex',
          gap: '30px',
          flexDirection: 'column',
        }}
      >
        <Logo>Charis</Logo>
        <ChapterHeader reference="1 John 1" />
        <div style={{ width: '500px', height: '150px', overflow: 'scroll' }}>
          {Array.from(Array(10).keys()).map(item => (
            <Verse key={item} number={item + 1}>
              I have some news, Jesus has died so you could live!
            </Verse>
          ))}
        </div>

        <SearchInput
          placeholder="search"
          name="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          handleSearch={() => setSearch('')}
        />
        <Checkbox
          name="checkbox"
          label="Label"
          checked={isChecked}
          onChange={val => setIsChecked(val)}
        />
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
        <Select
          name="select"
          onChange={() => null}
          value={options[0]}
          options={options}
          label="Select"
          placeholder="placeholder"
        />
        <Button id="abutton" ariaLabel="arialabel">
          Save me God!
        </Button>
        <Button id="abutton" ariaLabel="arialabel" disabled>
          Save me God!
        </Button>
      </div>
    </>
  );
}

export default Home;
