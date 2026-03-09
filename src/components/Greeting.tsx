import { useState } from "react";

interface GreetingProps {
    name?: string;
}

export const Greeting = ({ name }: GreetingProps) => {
    
    const [user, setUser] = useState('Usser');

    return (
        <div>
            {name ? (
                <h1>Ciao, {name}!</h1>
            ) : (
                <h1>Ciao, ospite!</h1>
            )}
            <p>Benvenuto nella nostra applicazione React.</p>


            <h1>Ciao, {user}!</h1>
            <button onClick={() => setUser('Fabio')}>Cambia Nome</button>
        </div>
    );
};