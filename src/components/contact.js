import ChildComp from "./contactsChild";

function Contacts() {
  const myCardsData = [
    { name: "harsh", title: "heloper", message: "harsh card is visible" },
    { name: "harsh", title: "heloper", message: "harsh card is visible" },
    { name: "harsh", title: "heloper", message: "harsh card is visible" }
  ];
  return (
    <>
      {myCardsData.map((oneObj) => {
        return (
          <ChildComp
            name={oneObj.name}
            message={oneObj.message}
            title={oneObj.title}
          />
        );
      })}
    </>
  );
}
export default Contacts;
