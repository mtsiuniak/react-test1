import UserCard from "../components/UserCard";

export default function UserList({ users }) {
  return (
      users.map((unit) => <li key={unit.id}>
        <UserCard user={unit} />
      </li>)
  )
}