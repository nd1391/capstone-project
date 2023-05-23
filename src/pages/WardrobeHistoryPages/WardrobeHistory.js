import { checkToken } from "../../utilities/users-service";

export default function WardrobeHistory() {
  const handleCheckToken = async () => {
    const expDate = await checkToken();
    alert(expDate);
  };

  return (
    <div>
      <h1>WardrobeHistory Page</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </div>
  );
}
