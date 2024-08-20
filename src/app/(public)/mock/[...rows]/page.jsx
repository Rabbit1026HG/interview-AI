import Div from "@/app/ui/Div";
import Spacing from "@/app/ui/Spacing";

export default function page({ params: { rows } }) {
  return (
    <>
      <Div className="container">

      <Spacing lg="145" md="80" />
      <div>{`${rows[1]}--------${rows[0]}`}</div>
      </Div>
    </>
  );
}
