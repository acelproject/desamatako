type DetailMarketProps = {
  params: { slug: string };
};

export default function DetailMarketPage(props: DetailMarketProps) {
  const { params } = props;
  return (
    <div>
      <h1>Detail Market Place</h1>

      <div>{params.slug[params.slug.length -1]}</div>
    </div>
  );
}
