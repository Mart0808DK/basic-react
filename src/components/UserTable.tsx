import {type User} from "../data/data.ts";

interface UserTableProps {
    users: User[]
}

export default function UserTable ({users}: UserTableProps) {
    return (
        <table className={"simple-table"}>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Active</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user =>
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.isActive ? "Active" : "InActive"}</td>
                </tr>
            )}
            </tbody>
        </table>
    )
}