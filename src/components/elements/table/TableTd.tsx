export default function TableTd(props: { children: any }) {
  const { children } = props;
  return (
      <td className="whitespace-nowrap px-6 py-4 ">{children}</td>
  );
}
