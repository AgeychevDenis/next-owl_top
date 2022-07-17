import { Button, Htag, Ptag, Rating, Tag } from "../componetns";

export default function Home(): JSX.Element {
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
      <Rating rating={4}></Rating>
    </>
  )
}
