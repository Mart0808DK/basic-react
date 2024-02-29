import { BaseProps } from "../types";
import { FormEvent } from "react";
import { User } from "../data/data";


type UserFormProps = BaseProps & {
    onSubmitUser: (user: User) => void;
};


export default function UserForm({ title, onSubmitUser }: UserFormProps) {
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newUser: User = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            isActive: formData.get('isActive') === 'on',
        };
        onSubmitUser(newUser);
    };


    return (
        <>
            <h2>{title}</h2>
            <form onSubmit={onSubmit}>
                First Name: <input name="name" />
                Email: <input name="email" />
                Active: <input type="checkbox" name="isActive" />
                <button type="submit">Add User</button>
            </form>
        </>
    );
}
