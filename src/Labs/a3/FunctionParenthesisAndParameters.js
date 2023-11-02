

const FunctionParenthesisAndParameters = () => {
  const square = a => a * a;
  const plusOne = a => a + 1;
  
  const twoSquared = square(2);
  const threePlusOne = plusOne(3);


  return (
    <div>
      <h3>Function Parenthesis and Parameters</h3>
      twoSquared = {twoSquared}<br />
      square(2) = {twoSquared}<br />
      threePlusOne = {threePlusOne}<br />
      plusOne(3) =  {threePlusOne}<br />
    
    </div>
  );
};

export default FunctionParenthesisAndParameters;
