export default function Sidebar() {
  return (
    <div className="w-1/5 border-r p-2">
      <h1 className="text-3xl font-bold mb-2">React Router</h1>
      <ul className="cursor-pointer">
        <li className="p-2 border rounded-md mb-2">Home</li>
        <li className="p-2 border rounded-md mb-2">Profile</li>
        <li className="p-2 border rounded-md mb-2">Settings</li>
        <li className="p-2 border rounded-md mb-2">Logout</li>
      </ul>
    </div>
  );
}
