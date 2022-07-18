import { useState } from "react";
import { Button, Htag, Ptag, Rating, Tag } from "../componetns";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
  const [state, setState] = useState<number>(4)

  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance="primary" arrow="right">Кнопка</Button>
      <Button appearance="ghost" arrow="down">Кнопка</Button>
      <Ptag size="sizeL">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptate inventore minima totam eum eius vitae! Quae suscipit laboriosam alias quaerat libero dolorum, nulla recusandae ea quo ipsum itaque possimus?</Ptag>
      <Tag size="sizeS">Маленький</Tag>
      <Tag size="sizeM" color="ghost">ghost</Tag>
      <Tag size="sizeM" color="red">red</Tag>
      <Tag size="sizeM" color="grey">grey</Tag>
      <Tag size="sizeM" color="green">green</Tag>
      <Tag size="sizeM" color="primary">primary</Tag>
      <Rating rating={state} isEditable setRating={setState}></Rating>
    </>
  )
}

export default withLayout(Home);
