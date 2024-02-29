import { BaseProps } from "../types";
import Profile from "../components/Profile.tsx"
import { useState } from "react";


export default function PropsDemo({ title }: BaseProps) {
    const [showHorizontal, setShowHorizontal] = useState(false);
    return (
        <>
            <h2>{title}</h2>
            Direction: <input type="checkbox" checked={showHorizontal} onChange={()=>setShowHorizontal(!showHorizontal)}/>
            <Profile name="Max Power" email="mp@email.com" isActive={true} singleLine={showHorizontal} />
            <Profile name="Kurt Power" email="kurt@email.com" isActive={false} singleLine={showHorizontal} />
            <Profile name="Kurt Vestergård" email="kurtV@email.com" isActive={true} singleLine={showHorizontal} />
            {/** Add two or more Profiles, but not until you actually have implemented <Profile />   */}
        </>
    );
}
