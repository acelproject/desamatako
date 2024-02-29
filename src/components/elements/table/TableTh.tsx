export default function TableTh(props: { children: any }) {
    const {children}=props
  return (
    <th scope="col" className="px-6 py-4 font-semibold ">
      {children}
    </th>
  );
}
