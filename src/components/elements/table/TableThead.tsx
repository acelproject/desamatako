export default function TableThead(props: { children: any }) {
  const { children } = props;
  return (
    <thead className="border-b  bg-slate-100 text-slate-600 uppercase dark:border-neutral-500 dark:bg-neutral-600">
      <tr>
        {children}
      </tr>
    </thead>
  );
}
