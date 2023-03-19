import styles from './button.module.scss';

export enum BtnVariant {
  main = 'main',
  text = 'text',
}

interface ButtonProps {
  children: React.ReactNode;
  variant: BtnVariant;
  type?: 'button' | 'link';
  onClick?: () => void;
  href?: string;
  className?: string;
  download?: boolean;
}

export function Button({ children, href = '#', variant, type = 'button', className, onClick, download = false }: ButtonProps) {
  className = `${className} ${styles[variant]}`;

  if (type === 'link') {
    return (
      <a href={href} className={className} download={download}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}
