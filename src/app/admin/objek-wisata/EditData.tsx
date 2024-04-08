import Form from "./@modal/(.)detail/[id]/Form";

type AddDataProps = {
  showEditData: any;
  setShowEditData: any;
  id: string;
};

export default function EditDataObjek({
  showEditData,
  setShowEditData,
  id,
}: AddDataProps) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/objek-wisata/${id}`;
  return (
    <>
      <Form
        // showEditData={showEditData}
        // setShowEditData={setShowEditData}
        id={id}
        urll={url}
      />
    </>
  );
}
