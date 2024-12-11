import React from "react";

interface ProfileProps {
    name: string;
    age?: number;
    isOnline: boolean; 
}

export const ProfileCard: React.FC<ProfileProps>=({name, age, isOnline}) => {
    return (
        <div>
            <p>name: {name}</p>
            <p>age: {age}</p>
            <p>status: {isOnline ? "Online" : "Offline"}</p>
        </div>   
    );
}
