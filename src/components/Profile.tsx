interface PersonProps {
    name: string;
    email: string;
    isActive: boolean;
    singleLine?: boolean
}

export default function Profile({name, email, isActive, singleLine}: PersonProps) {
    if (singleLine) return (
        <p>{name}, {email}, {isActive ? "Aktiv" : "Ikke Aktiv"} {singleLine} </p>
    )

    return (
        <>
         <p>{name}</p>
         <p>{email}</p>
         <p>{isActive ? "Aktiv" : "Ikke Aktiv"}</p>
        </>
    )
}