export const systemFontStack =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';

type ContainerProps = {
  width: string;
};

export const container = ({ width }: ContainerProps) => ({
  display: 'grid',
  'grid-template-columns': `minmax(0, ${width})`,
  'justify-content': 'center',
});
