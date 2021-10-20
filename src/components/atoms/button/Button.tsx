import { useRouter } from 'next/dist/client/router';
import { ButtonProps } from '@/interfaces';

export function Button({
  ariaLabel,
  id,
  onClick,
  to,
  children,
}: ButtonProps): JSX.Element {
  const { push } = useRouter();

  function handleOnClick() {
    if (to) {
      push(to);
    } else if (onClick) {
      onClick();
    }
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      id={id}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
}
