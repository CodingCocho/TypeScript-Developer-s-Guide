interface TestProps
{
  test: string
}

const Test = (props: TestProps): JSX.Element =>
{

  const {test} = props;

  return(
    <>
      This is test: {test}
    </>
  )
}

export default Test;