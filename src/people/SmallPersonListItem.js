export const SmallPersonListItem = ({ person }) => {
  console.log(person);
  const { name, age } = person;

  return (
    <p>
      Name: {name}, Age: {age} years
    </p>
  );
};
