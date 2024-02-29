export default function TableTbody(props: { children: any }) {
  const { children } = props;
  return (
    <tbody>
      <tr className="border-b dark:bg-neutral-700 font-normal">
        {children}
      </tr>
    </tbody>
  );
}
