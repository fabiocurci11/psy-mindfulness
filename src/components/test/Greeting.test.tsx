import { render, screen } from '@testing-library/react';
import { Greeting } from '../Greeting';
import userEvent from '@testing-library/user-event';


describe('Greeting Component', () => {

    test('renderizza il messaggio di default quando non viene passato un nome', () => {
        // 1. Arrange: renderizziamo il componente
        render(<Greeting />);

        // 2. Act: (in questo caso è un componente statico, non servono azioni)

        // 3. Assert: verifichiamo che il testo "ospite" sia presente
        const greetingElement = screen.getByText(/ciao, ospite!/i);
        expect(greetingElement).toBeInTheDocument();
    });

    test('renderizza il nome correttamente quando viene passato come prop', () => {
        // Arrange
        render(<Greeting name="Fabio" />);

        // Assert
        const greetingElement = screen.getByText(/ciao, fabio!/i);
        expect(greetingElement).toBeInTheDocument();
    });

    test('renderizza sempre il paragrafo di benvenuto', () => {
        // Arrange
        render(<Greeting />);

        // Assert
        const welcomeParagraph = screen.getByText(/benvenuto nella nostra applicazione/i);
        expect(welcomeParagraph).toBeInTheDocument();
    });

    test('cambia il nome da Ospite a Fabio quando clicco il bottone', async () => {
        const user = userEvent.setup(); // Prepariamo l'utente "finto"
        render(<Greeting />);

        const button = screen.getByRole('button', { name: /cambia nome/i });

        // Verifichiamo lo stato iniziale
        expect(screen.getByText(/ciao, ospite/i)).toBeInTheDocument();

        // Simuliamo il click
        await user.click(button);

        // Verifichiamo che il testo sia cambiato
        expect(screen.getByText(/ciao, fabio/i)).toBeInTheDocument();
    });

});