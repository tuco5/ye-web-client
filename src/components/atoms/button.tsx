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
}

export function Button({ children, href = '#', variant, type = 'button', className, onClick }: ButtonProps) {
  className = `${className} ${styles[variant]}`;
  if (type === 'link') {
    return (
      <a href={href} className={className}>
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
