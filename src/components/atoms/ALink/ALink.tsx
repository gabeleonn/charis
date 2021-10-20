import Link from 'next/link';
import { ALinkProps } from '@/interfaces';

export function ALink({ href, children }: ALinkProps): JSX.Element {
  return (
    <Link href={href} passHref>
      <a target="_blank">{children}</a>
    </Link>
  );
}
