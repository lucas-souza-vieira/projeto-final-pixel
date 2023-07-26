import P from 'prop-types';


export default function Index( {name} ) {
  return (
    <>
    <h1>{name}</h1>
    </>
    )
}

export const getStaticProps = async () => {
  return {
    props: {
      name: "Lucas",
    },
  };
};

Index.prototypes = {
  name: P.string,
};