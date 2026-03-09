/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // Utilizziamo ts-jest come preset per gestire TypeScript
  preset: 'ts-jest',

  // Specifichiamo l'ambiente browser per React
  testEnvironment: 'jest-environment-jsdom',

  // File di setup per caricare i matcher di Testing Library
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  // Mappatura per gestire file statici e CSS (che Jest non sa leggere)
  moduleNameMapper: {
    // Gestisce gli import dei CSS/SCSS
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Gestisce le immagini e altri file statici
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.ts',
    // Se usi gli alias (es: @/components) scommenta la riga sotto:
    // '^@/(.*)$': '<rootDir>/src/$1',
  },

  transform: {
    // Trasforma i file .ts e .tsx usando ts-jest con supporto per i moduli ESM
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        useESM: true,
        // Puntiamo al file tsconfig corretto (di solito tsconfig.app.json in Vite)
        tsconfig: 'tsconfig.app.json',
      },
    ],
  },

  // Indichiamo a Jest quali file trattare come moduli ESM
  extensionsToTreatAsEsm: ['.ts', '.tsx'],

  // Opzionale: aggiunge informazioni extra durante l'esecuzione
  verbose: true,
};